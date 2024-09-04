function savesvg() {
    save("noline003.svg");
}

function savepng() {
    save("noline003.png");
}

var fSize = 14
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('noline001.js');
}

function draw() {
    background(0, 0, 100)
    anniversaire()
    noLoop()
}

function anniversaire(){
    var x1, y1, x2, y2, x3, y3, x4, y4, rad
    translate(width*0.5,height*0.5)
    rad = actualwidth*0.5
    x1 = rad*cos(radians(90))
    y1 = rad*sin(radians(90))
    x2 = rad*cos(radians(180))
    y2 = rad*sin(radians(180))
    x3 = rad*cos(radians(270))
    y3 = rad*sin(radians(270))
    x4 = rad*cos(radians(0))
    y4 = rad*sin(radians(0))
    nucleus(x1, y1, x2, y2, x3, y3, x4, y4)
}

function nucleus(x1, y1, x2, y2, x3, y3, x4, y4) {
    var apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2
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

        cpx1 = x4+random(-8,8)
        cpy1 = y1
        cpx2 = x1
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        endShape()
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}