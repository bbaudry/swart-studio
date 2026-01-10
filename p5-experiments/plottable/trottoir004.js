//pixel = dpi * mm / 25.4 mm
//A3: 297mm × 420mm
//96dpi is for plotting on the UUNA TEK iDraw
//A3
//w=96*297/25.4=1122.5
//h=96*420/25.4=1587.4
//letter
//w=96*8.5=816
//h=96*11=1056

var echelle = 1
var w = 96*160/25.4//816 * echelle
var h = 96*210/25.4//1056 * echelle
var win = 96*120/25.4
var hin = 96*170/25.4
var rightmargin = w-96*23/25.4
var leftmargin = 96*23/25.4
var topmargin = 96*23/25.4
var bottommargin = h-96*23/25.4
var actualwidth = rightmargin - leftmargin
var actualheight = bottommargin - topmargin
var cnv, imgbtn

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    maxcount = random(39, 45)
    strokeWeight(96*0.1/25.4)
}

function getsvg() {
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
}
function getpng() {
    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    placebtn();
    imgbtn.mouseClicked(savepng);
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0//(windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}



function savesvg() {
    save("trottoir004.svg");
}

function savepng() {
    save("trottoir004.png");
}

var font
var fSize = 13
var xoff = 0.0
var yoff = 0.0
var xinc = 0.0001
var yinc = 0.0001
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir004.js');
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    // rect(0, 0, w, h)
    // stroke(0, 100, 100);rect((w-win)*0.5,(h-hin)*0.5,win,hin)
    // stroke(50, 100, 100);rect(leftmargin,topmargin,actualwidth,actualheight)
    // stroke(0, 0, 100)
    nucleus()
    textFont(font)
    textSize(fSize);
    var c = "al.my.re :: 2026]"
    text(c, rightmargin-textWidth(c), bottommargin-fSize)

    // coords=showcode(leftmargin,bottommargin+fSize)
    // showcredits(coords[0],coords[1])
    noLoop()
}

function nucleus() {
    var apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2, x1, y1, x2, y2, x3, y3, x4, y4, amp, xpos1, xpos2, ypos1, ypos2, xpos3, ypos3, xpos4, ypos4
    amp=3
    tours=Math.floor(random(21,42))
    xpos1 = leftmargin + actualwidth * random(); ypos1 = bottommargin
    xpos2 = leftmargin ; ypos2 = topmargin + actualheight * random()
    xpos3 = leftmargin + actualwidth * random(); ypos3 = topmargin
    xpos4 = rightmargin; ypos4 = topmargin + actualheight * random()

    for (var t = 1; t > 0.65; t-=0.003) {
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

        cpx1 = x4+random(84)
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
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 004). June 2024]"
    text(c, posx, posy)
}