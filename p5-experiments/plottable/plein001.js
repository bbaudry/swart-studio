var grid = [];
var gridresolution = 8;
var penwidth = 1.5;
var penresolution = 96*penwidth/25.4;

function draw() {
    background(0, 0, 100)
    stroke(300, 100, 100)
    noFill()
    strokeWeight(penresolution)
    initgrid()
    drawgrid()
    strokeWeight(1)
    stroke(0,0,0)
    textFont(font)
    textSize(fSize)
    coords = showcode(leftmargin, bottommargin + fSize)
    showcredits(coords[0], coords[1])
    noLoop()
}

function initgrid() {
    var cellwidth = Math.floor(actualwidth / gridresolution)
    var cellheight = Math.floor(actualheight / gridresolution)
    var x, y
    var xcoords = []
    var ycoords = []
    var xoffset = cellwidth * 0.42
    var yoffset = cellheight * 0.42
    for (var i = 0; i < gridresolution + 1; i++) {
        x = leftmargin + i * cellwidth
        if (i > 0 && i < gridresolution) { x += random(-xoffset, xoffset) }
        xcoords.push(x)
    }
    for (var j = 0; j < gridresolution + 1; j++) {
        y = topmargin + j * cellheight
        if (j > 0 && j < gridresolution) { y += random(-yoffset, yoffset) }
        ycoords.push(y)
    }
    for (var i = 0; i < gridresolution + 1; i++) {
        x = xcoords[i]
        for (var j = 0; j < gridresolution + 1; j++) {
            y = ycoords[j]
            grid.push({ x: x, y: y })
        }
    }
}

function drawgrid() {
    for (var i = 0; i < gridresolution; i++) {
        for (var j = 0; j < gridresolution; j++) {
            tile(
                grid[i * (gridresolution + 1) + j].x, grid[i * (gridresolution + 1) + j].y,
                grid[(i + 1) * (gridresolution + 1) + j].x, grid[(i + 1) * (gridresolution + 1) + j].y,
                grid[(i + 1) * (gridresolution + 1) + j + 1].x, grid[(i + 1) * (gridresolution + 1) + j + 1].y,
                grid[i * (gridresolution + 1) + j + 1].x, grid[i * (gridresolution + 1) + j + 1].y,
            )
        }
    }
}

function tile(x1, y1, x2, y2, x3, y3, x4, y4) {
    var dice = Math.floor(random(4))
    switch (dice) {
        // don't draw the quad
        case 0:
            break;
        // draw complete quad
        case 1:
            interieur(x1, y1, x2, y2, x3, y3, x4, y4)
            break;
        // split the quad horizontal
        case 2:
            var ratio = Math.floor(random(2,5))
            var yoff = (y4-y1)/ratio
            for(var i=0;i<ratio;i+=2){
                interieur(x1, y1+i*yoff, x2, y2+i*yoff, x3, y2+(i+1)*yoff, x4, y1+(i+1)*yoff)
            }
            break;
        // split the quad horizontal
        case 3:
            var ratio = Math.floor(random(2,4))
            var xoff = (x2-x1)/ratio
            for(var i=0;i<ratio;i+=2){
                interieur(x1+i*xoff, y1, x1+(i+1)*xoff, y2, x4+(i+1)*xoff, y3, x4+i*xoff, y4)
            }
            break;
    }
}

function interieur(x1, y1, x2, y2, x3, y3, x4, y4){
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    while(x2-x1>0 && y4-y1>0){
        x1+=penresolution;y1+=penresolution;
        x2-=penresolution;y2+=penresolution;
        x3-=penresolution;y3-=penresolution;
        x4+=penresolution;y4-=penresolution;
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
    }
}