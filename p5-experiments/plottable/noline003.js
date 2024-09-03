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
    anniversaire()
    noLoop()
}

function anniversaire(){
    var x,y,step
    x=leftmargin
    y=leftmargin
    step=Math.floor(actualwidth*0.2)
    stroke(0, 0, 0);
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            nucleus(x+i*step,y+j*step,step,step)
        }
    }
    stroke(50,100,100)
    nucleus(x,y,actualwidth,actualwidth)

}

function nucleus(x,y,largeur,hauteur) {
    var apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2, x1, y1, x2, y2, x3, y3, x4, y4, amp, xpos1, xpos2, ypos1, ypos2, xpos3, ypos3, xpos4, ypos4
    amp=3
    strokeWeight(3)
    tours=Math.floor(random(21,42))
    xpos1 = x + largeur * random(0.5); ypos1 = y+hauteur
    xpos2 = x ; ypos2 = y + hauteur * random()
    xpos3 = x + largeur * random(); ypos3 = y
    xpos4 = x+largeur; ypos4 = y + hauteur * random()

    for (var t = 1; t > 0.7; t-=0.03) {
        x1 = (1 - t) * xpos1 + (t * xpos3); y1 = (1 - t) * ypos1 + (t * ypos3)
        x2 = (1 - t) * xpos2 + (t * xpos4); y2 = (1 - t) * ypos2 + (t * ypos4)
        x3 = (1 - t) * xpos3 + (t * xpos1); y3 = (1 - t) * ypos3 + (t * ypos1)
        x4 = (1 - t) * xpos4 + (t * xpos2); y4 = (1 - t) * ypos4 + (t * ypos2)
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
    //marqueurs(xpos1,ypos1,xpos2,ypos2,xpos3,ypos3,xpos4,ypos4)

}
function marqueurs(xpos1,ypos1,xpos2,ypos2,xpos3,ypos3,xpos4,ypos4){
    push()
    stroke(0,100,100)
    strokeWeight(3)
    ellipse(xpos1,ypos1,7,7)
    ellipse(xpos2,ypos2,7,7)
    ellipse(xpos3,ypos3,7,7)
    ellipse(xpos4,ypos4,7,7)
    pop()
}
function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}