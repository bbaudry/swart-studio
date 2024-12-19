var w, h, rightmargin, leftmargin, topmargin, bottommargin, actualwidth, actualheight
var cnv, pos, speed
var cols, rows
var density = 42;
var grid = [];
var stack = [];
var current;



function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    w = windowWidth
    h = windowHeight
    rightmargin = 0.95 * w
    leftmargin = 0.05 * w
    topmargin = 0.05 * h
    bottommargin = 0.9 * h
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin

    colorMode(HSB, 360, 100, 100, 250);
    pos = { x: leftmargin+ density * 0.5, y: topmargin + density * 0.5 }
    speed = density
    cols = Math.floor(actualwidth / density);
    rows = Math.floor(actualheight / density);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    current = grid[0];

}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0,0,0);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    current.visited = true;
    current.highlight();
    // STEP 1
    var next = current.checkNeighbors();
    if (next) {
        next.visited = true;

        // STEP 2
        stack.push(current);

        // STEP 3
        removeWalls(current, next);

        // STEP 4
        current = next;
    }
    else {
        if (stack.length > 0) {
            current = stack.pop();
        }
        else {
            fill(50,100,100)
            current.jeton()
//            ellipse(pos.x,pos.y,density-4,density-4)
        }
    }
}

function keyPressed() {
    if(keyCode === RIGHT_ARROW ){pos.x+=speed}
    if(keyCode === LEFT_ARROW ){pos.x-=speed}
    if(keyCode === DOWN_ARROW ){pos.y+=speed}
    if(keyCode === UP_ARROW){pos.y-=speed}
    
  }



function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}


function removeWalls(a, b) {
    var x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}