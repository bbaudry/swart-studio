function savesvg() {
    save("sapin002.svg");
}

function savepng() {
    save("sapin002.png");
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    initgrid()
}

var grid, res, nbcols, nbrows

function initgrid() {
    grid = []
    res=80
    nbcols = Math.floor(actualwidth / res)
    nbrows = Math.floor(actualheight / res)
    for (var i = 0; i < nbcols; i++) {
        for (var j = 0; j < nbrows; j++) {
            grid.push({ x: i * res, y: j * res })
            console.log("add one")
        }
    }
}


function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    noFill()
    //drawframe()
    drawart()
    noLoop()
}

function drawgrid() {
    translate(leftmargin,topmargin)
    for (var i = 0; i < nbcols; i++) {
        for (var j = 0; j < nbrows; j++) {
            rect(grid[i*nbrows+j].x, grid[i*nbrows+j].y, res, res)
        }
    }
}


function drawart() {
    translate(leftmargin,topmargin)
    var x,y,cx,cy,initangle,diamy
    for (var i = 0; i < nbcols; i++) {
        for (var j = 0; j < nbrows; j++) {
            x=grid[i*nbrows+j].x
            y=grid[i*nbrows+j].y
            cx=x+res/2
            cy=y+res/2
            initangle=Math.floor(random(180))
            diamy=res*random(0.5,0.8)
            for(var a=initangle;a<initangle+180;a+=45){
                console.log(a-initangle+"th ellipse at x: "+cx+", y: "+cy)
                push()
                translate(cx,cy)
                rotate(radians(a))
                ellipse(0,0,res,diamy)
                pop()
            }
        }
    }
}