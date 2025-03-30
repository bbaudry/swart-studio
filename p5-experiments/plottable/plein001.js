function savesvg() {
    save("plein001.svg");
}

function savepng() {
    save("plein001.png");
}

var font
var fSize = 13
var grid = []
var resolution = 9

function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('plein001.js');
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    rect(0, 0, w, h)
    //rect(leftmargin, topmargin, actualwidth, actualheight)
    initgrid()
    drawgrid()
    textFont(font)
    textSize(fSize)
    coords = showcode(leftmargin, bottommargin + fSize)
    showcredits(coords[0], coords[1])
    noLoop()
}

function initgrid() {
    var cellwidth = Math.floor(actualwidth / resolution)
    var cellheight = Math.floor(actualheight / resolution)
    var x, y
    var xcoords = []
    var ycoords = []
    var xoffset = cellwidth * 0.42
    var yoffset = cellheight * 0.42
    for (var i = 0; i < resolution + 1; i++) {
        x = leftmargin + i * cellwidth
        if (i > 0 && i < resolution) { x += random(-xoffset, xoffset) }
        xcoords.push(x)
    }
    for (var j = 0; j < resolution + 1; j++) {
        y = topmargin + j * cellheight
        if (j > 0 && j < resolution) { y += random(-yoffset, yoffset) }
        ycoords.push(y)
    }
    for (var i = 0; i < resolution + 1; i++) {
        x = xcoords[i]
        for (var j = 0; j < resolution + 1; j++) {
            y = ycoords[j]
            grid.push({ x: x, y: y })
        }
    }
}

function showgrid() {
    for (var i = 0; i < resolution; i++) {
        for (var j = 0; j < resolution; j++) {
            quad(
                grid[i * (resolution + 1) + j].x, grid[i * (resolution + 1) + j].y,
                grid[(i + 1) * (resolution + 1) + j].x, grid[(i + 1) * (resolution + 1) + j].y,
                grid[(i + 1) * (resolution + 1) + j + 1].x, grid[(i + 1) * (resolution + 1) + j + 1].y,
                grid[i * (resolution + 1) + j + 1].x, grid[i * (resolution + 1) + j + 1].y,
            )
        }
    }
}

function drawgrid() {
    for (var i = 0; i < resolution; i++) {
        for (var j = 0; j < resolution; j++) {
            tile(
                grid[i * (resolution + 1) + j].x, grid[i * (resolution + 1) + j].y,
                grid[(i + 1) * (resolution + 1) + j].x, grid[(i + 1) * (resolution + 1) + j].y,
                grid[(i + 1) * (resolution + 1) + j + 1].x, grid[(i + 1) * (resolution + 1) + j + 1].y,
                grid[i * (resolution + 1) + j + 1].x, grid[i * (resolution + 1) + j + 1].y,
            )
        }
    }
}

function tile(x1, y1, x2, y2, x3, y3, x4, y4) {
    var dice = Math.floor(random(3))
    fill(0,0,100)
    switch (dice) {
        // don't draw the quad
        case 0:
            break;
        // draw complete quad
        case 1: quad(x1, y1, x2, y2, x3, y3, x4, y4)
            break;
        // split the quad
        case 2:
            var ratio = Math.floor(random(2,5))
            var yoff = (y4-y1)/ratio
            for(var i=0;i<ratio;i+=2){
                quad(x1, y1+i*yoff, x2, y2+i*yoff, x3, y2+(i+1)*yoff, x4, y1+(i+1)*yoff)
            }
            break;
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [plein 001). March 2025]"
    text(c, posx, posy)
}