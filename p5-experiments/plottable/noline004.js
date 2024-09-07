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
    translate(width * 0.5, height * 0.5)
    rad = actualwidth * 0.5
    anniversaire(42, rad)
    rad = actualwidth * 0.2
    stroke(50, 100, 100); anniversaire(22, rad)
    noLoop()
}

function anniversaire(iter, rad) {
    var x1, y1, x2, y2, x3, y3, x4, y4, step, inita
    step = Math.floor(random(1, 3))
    inita = random(70, 110)
    for (var i = 0; i < iter * step; i += step) {
        var mov = random(-3,3)+i
        x1 = (rad - i) * cos(radians(inita + mov))
        y1 = (rad - i) * sin(radians(inita + mov))
        x2 = (rad - i) * cos(radians(inita + 90 + mov))
        y2 = (rad - i) * sin(radians(inita + 90 + mov))
        x3 = (rad - i) * cos(radians(inita + 180 + mov))
        y3 = (rad - i) * sin(radians(inita + 180 + mov))
        x4 = (rad - i) * cos(radians(inita + 270 + mov))
        y4 = (rad - i) * sin(radians(inita + 270 + mov))
        nucleus(x1, y1, x2, y2, x3, y3, x4, y4)
    }
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

    cpx1 = x4 + random(-8, 8)
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