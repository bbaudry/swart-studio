function savesvg() {
    save("trottoir003.svg");
}

function savepng() {
    save("trottoir003.png");
}

var font
var fSize = 11
var xoff = 0.0
var yoff = 0.0
var xinc = 0.00001
var yinc = 0.00001
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir002.js');
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    rect(0, 0, w, h)
    gridexp()
    //drawsection()
    nucleus()
    textFont(font)
    textSize(fSize)
    showcredits(leftmargin, bottommargin + fSize)
    //noLoop()
}

var grid = []
function gridexp() {
    //translate(leftmargin + actualwidth * 0.5, topmargin + actualheight * 0.5)
    var stepx, stepy, x, y, rayon, expstep, col
    expstep = random(0.1, 0.2)
    rayon =  random(7, 11)
    stepx = 0
    for (x = leftmargin; x < actualwidth; x += Math.exp(stepx)) {
        stepy = 0
        col = []
        for (y = topmargin; y < actualheight; y += Math.exp(stepy)) {
            //random(-Math.exp(stepx)*0.2,Math.exp(stepx)*0.2)
            col.push({ x: x + (noise(xoff) * Math.exp(stepx) - 2 * Math.exp(stepx)), y: y + (noise(yoff) * Math.exp(stepy) - 2 * Math.exp(stepy)) })
            stepy += expstep//+noise(yoff)
            yoff += yinc
            xoff += xinc
        }
        grid.push(col)
        stepx += expstep//+noise(xoff)
        xoff += xinc
    }
}

function drawsection() {
    //translate(leftmargin + actualwidth * 0.5, topmargin + actualheight * 0.5)
    for (var i = 0; i < grid.length - 1; i++) {
        for (var j = 0; j < grid[i].length - 1; j++) {
            var x1, y1, x2, y2, x3, y3, x4, y4
            x1 = grid[i][j].x
            y1 = grid[i][j].y
            x2 = grid[i + 1][j].x
            y2 = grid[i + 1][j].y
            x3 = grid[i + 1][j + 1].x
            y3 = grid[i + 1][j + 1].y
            x4 = grid[i][j + 1].x
            y4 = grid[i][j + 1].y
            quad(x1, y1, x2, y2, x3, y3, x4, y4)
            //ellipse(coord.x,coord.y,3,3)
        }
    }
}


function nucleus() {
    var apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2, x1, y1, x2, y2, x3, y3, x4, y4, amp, xpos1, xpos2, ypos1, ypos2, tours
    amp=3
    xpos1=noise(xoff);xoff+=xinc
    xpos2=noise(xoff);xoff+=xinc
    ypos1=noise(yoff);yoff+=yinc
    ypos2=noise(yoff);yoff+=yinc
    tours=42//Math.floor(random(21,42))
    for (i = 0; i < tours; i++) {
        x1 = leftmargin + actualwidth * xpos1; y1 = bottommargin - i*amp
        x2 = leftmargin + i*amp; y2 = topmargin + actualheight * ypos1
        x3 = leftmargin + actualwidth * xpos2; y3 = topmargin+i*amp;xoff+=xinc
        x4 = rightmargin-i*amp; y4 = topmargin + actualheight * ypos2
        beginShape()
        apx1 = x1
        apy1 = y1
        vertex(apx1, apy1)

        cpx1 = x2
        cpy1 = y1
        cpx2 = cpx1
        cpy2 = y2
        apx2 = cpx1
        apy2 = cpy2
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x2
        cpy1 = y3
        cpx2 = x3
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x4
        cpy1 = y3
        cpx2 = cpx1
        cpy2 = y4
        apx2 = cpx1
        apy2 = cpy2
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x4
        cpy1 = y1
        cpx2 = x1
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        stroke(0, 0, 100);
        endShape()
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 003). June 2024]"
    text(c, posx, posy)
}