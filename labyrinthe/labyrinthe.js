var w, h, rightmargin, leftmargin, topmargin, bottommargin, actualwidth, actualheight, cnv
var cols, rows, font
var density = 42;
var grid = [];
var stack = [];
var current;

function preload() {
    font = loadFont("../p5-experiments/fonts/FreeMono.otf");
}


function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    w = windowWidth
    h = windowHeight
    rightmargin = 0.65 * w
    leftmargin = 0.45 * w
    topmargin = 0.35 * h
    bottommargin = 0.7 * h
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin

    colorMode(HSB, 360, 100, 100, 250);
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
            grid[grid.length-1].highlight()
            current.jeton()
            if(index(current.i,current.j)==grid.length-1){
                background(330,100,100);
                bravo()
                noLoop();
            }
        }
    }
}

function keyPressed() {
    if(keyCode === UP_ARROW && !current.walls[0]){
        current=grid[index(current.i, current.j-1)]
    }
    if(keyCode === RIGHT_ARROW && !current.walls[1]){
        current=grid[index(current.i+1, current.j)]
    }
    if(keyCode === DOWN_ARROW && !current.walls[2]){
        current=grid[index(current.i, current.j+1)]
    }
    if(keyCode === LEFT_ARROW && !current.walls[3]){
        current=grid[index(current.i-1, current.j)]
    }
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

function bravo(){
    stroke(0,0,100)
    fill(0,0,100)
    var b="#bra[vo]"
    var fSize = 192
    textSize(fSize)
    textFont(font)
    var posx = (w-textWidth(b))*0.5
    var posy = (h+fSize*0.7)*0.5
    text(b,posx,posy)
}