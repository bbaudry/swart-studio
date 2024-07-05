function savesvg() {
    save("summer001.svg");
}

function savepng() {
    save("summer001.png");
}

var font
var fSize = 15
var xoff = 0.0
var yoff = 0.0
var xinc = 0.0001
var yinc = 0.0001
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer001.js');
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    rect(0, 0, w, h)
    waves(topmargin+actualheight*0.2)
    waves(topmargin+actualheight*0.35)
    waves(topmargin+actualheight*0.5)
    textFont(font)
    textSize(fSize*7)
    var c = "gin'to à la plage"
    var tw = textWidth(c)
    var px = leftmargin + (actualwidth-tw) * 0.5
    text(c, px, topmargin+actualheight*0.84)
    textSize(fSize)
    stroke(230,100,100)
    coords=showcode(leftmargin,bottommargin)
    showcredits(coords[0],coords[1])
    noLoop()
}

function waves(y) {
    var apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2, tours, incy, incx, yoff, x1, y1
    tours = 9
    incy = 9
    strokeWeight(4)
    yoff = Math.floor(100,200)
    incx = actualwidth * random(0.2,0.25)
    x1 = leftmargin+(actualwidth-incx*4)*0.5
    y1 = y
    for (i = 0; i < tours; i++) {
        beginShape()
        apx1 = x1
        apy1 = y1
        vertex(apx1, apy1)
        cpx1 = x1 + incx
        cpy1 = y1 - random(yoff,yoff*2)
        cpx2 = x1 + incx
        cpy2 = y1 + yoff
        apx2 = x1 + incx * 2
        apy2 = y1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x1 + incx * 3
        cpy1 = y1 - yoff
        cpx2 = x1 + incx * 3
        cpy2 = y1 + random(yoff,yoff*2)
        apx2 = x1 + incx * 4
        apy2 = y1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)
        endShape()
        y1 += incy
    }
    y1 = y
    for (i = 0; i < tours; i++) {
        beginShape()
        apx1 = x1
        apy1 = y1
        vertex(apx1, apy1)
        cpx1 = x1 + incx
        cpy1 = y1 + yoff
        cpx2 = x1 + incx
        cpy2 = y1 - yoff
        apx2 = x1 + incx * 2
        apy2 = y1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x1 + incx * 3
        cpy1 = y1 + yoff
        cpx2 = x1 + incx * 3
        cpy2 = y1 - yoff
        apx2 = x1 + incx * 4
        apy2 = y1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)
        endShape()
        y1 += incy
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: vpype [summer 001). June 2024]"
    text(c, posx, posy)
}