function savesvg() {
    save("noline003.svg");
}

function savepng() {
    save("noline003.png");
}

var fSize = 17
var bowie
function preload() {
    bowie = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('noline004.js');
}

function draw() {
    background(230, 80, 50)
    strokeWeight(2)
    rad = actualwidth * 0.25
    translate(leftmargin+rad, topmargin+rad)
    anniversaire(7, rad)
    translate(rad*2, 0)
    anniversaire(17, rad)
    translate(-rad*2, rad*2)
    anniversaire(42, rad)
    translate(rad*2, 0)
    anniversaire(84, rad)
    showcredits(-rad*3,rad*2)
    noLoop()
}

function anniversaire(iter, rad) {
    var x1, y1, x2, y2, x3, y3, x4, y4, step, inita
    step = Math.floor(random(2, 5))
    inita = random(81, 99)
    for (var i = 0; i < iter * step; i += step) {
        var mov = -11//random(-11,11)
        x1 = (rad -i) * cos(radians(inita + mov))
        y1 = (rad -i) * sin(radians(inita + mov))
        var ro=getrad(rad,i)
        x2 = getrad(rad,i) * cos(radians(inita + 90 + mov))
        y2 = getrad(rad,i) * sin(radians(inita + 90 + mov))
        x3 = (rad - i) * cos(radians(inita + 180 + mov))
        y3 = (rad - i) * sin(radians(inita + 180 + mov))
        x4 = (rad ) * cos(radians(inita + 270 + mov))
        y4 = (rad ) * sin(radians(inita + 270 + mov))
        stroke(50,0,100)
        nucleus(x1, y1, x2, y2, x3, y3, x4, y4)
}
}

function getrad(r,i){
    if (random()<0.5){return r-i}
    else{return r}
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
    textFont(bowie)
    textSize(fSize);
    stroke(0,0,100)
    fill(0,0,100)
    var c = "al.my.re [noline 004). 20 September 2024"
    text(c, posx, posy)
    c = "p5.js :: random() :: juicy-gcode"
    text(c, posx, posy+fSize)
    c = "pour alice"
    text(c, posx, posy+2*fSize)

}