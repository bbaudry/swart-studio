function savesvg() {
    save("trottoir005.svg");
}

function savepng() {
    save("trottoir005.png");
}

var font
var fSize = 13
var xoff = 0.0
var yoff = 0.0
var xinc = 0.1
var yinc = 0.01
var stepsize = Math.floor(actualwidth * 0.05)
var nbHSteps = Math.floor(actualwidth / stepsize)
var nbVSteps = Math.floor(actualheight / stepsize)
var grid = []
var palette = [180,330]
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir005.js');
}

function draw() {
    background(0, 0, 0)
    noFill()
    rect(0, 0, w, h)
    initgrid()
    textFont(font)
    textSize(fSize)
    stroke(0, 0, 100)
    coords = showcode(leftmargin, bottommargin + fSize)
    showcredits(coords[0], coords[1])
    noLoop()
}

function initgrid() {
    for (var i = 0; i < nbHSteps; i++) {
        for (var j = 0; j < nbVSteps; j++) {
            nucleus(leftmargin + i * stepsize, topmargin + j * stepsize, leftmargin + (i + 1) * stepsize, topmargin + j * stepsize, leftmargin + (i + 1) * stepsize, topmargin + (j + 1) * stepsize, leftmargin + i * stepsize, topmargin + (j + 1) * stepsize)
        }
    }
}

function nucleus(x1, y1, x2, y2, x3, y3, x4, y4) {
    var hu, apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2, ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4, xpos1, xpos2, ypos1, ypos2, xpos3, ypos3, xpos4, ypos4, tinc
    hu = palette[Math.floor(random(palette.length))]
    xpos1 = x1 + (x2 - x1) * noise(xoff); ypos1 = y3; xoff += xinc
    xpos2 = x1; ypos2 = y2 + (y3 - y2) * noise(yoff); yoff+=yinc
    xpos3 = x1 + (x2 - x1) * noise(xoff); ypos3 = y2; xoff += xinc
    xpos4 = x2; ypos4 = y2 + (y3 - y2) * noise(yoff); yoff+=yinc
    tinc = random(0.01,0.042)
    for (var t = 1; t > 0.63; t -= tinc) {
        ix1 = (1 - t) * xpos1 + (t * xpos3); iy1 = (1 - t) * ypos1 + (t * ypos3)
        ix2 = (1 - t) * xpos2 + (t * xpos4); iy2 = (1 - t) * ypos2 + (t * ypos4)
        ix3 = (1 - t) * xpos3 + (t * xpos1); iy3 = (1 - t) * ypos3 + (t * ypos1)
        ix4 = (1 - t) * xpos4 + (t * xpos2); iy4 = (1 - t) * ypos4 + (t * ypos2)
        beginShape()
        apx1 = ix1
        apy1 = iy1
        vertex(apx1, apy1)

        cpx1 = ix2
        cpy1 = iy1
        cpx2 = cpx1
        cpy2 = iy2
        apx2 = cpx1
        apy2 = cpy2
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = ix2
        cpy1 = iy3
        cpx2 = ix3
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = ix4
        cpy1 = iy3
        cpx2 = cpx1
        cpy2 = iy4
        apx2 = cpx1
        apy2 = cpy2
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = ix4
        cpy1 = iy1
        cpx2 = ix1
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        stroke(hu,100,100)
        endShape()
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 005). June 2024]"
    text(c, posx, posy)
}