
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 151
var res = 42
var xoff = 0.0
var xinc = 0.0001
var textx, textspeed, texty, begin, end, nbindex

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}
function setup() {
    getsvg()
    centerCanvas();
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 250);
}

function getsvg() {
    //letter paper
    w = Math.floor(96 * 8.5)
    h = Math.floor(96 * 11)
    console.log("w: " + w + "; h: " + h + "; window: " + windowWidth)

    cnv = createCanvas(w, h, SVG)//.mousePressed(savesvg);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
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
    save("clean.svg");
}


function draw() {
    background(0, 0, 100)
    console.log("w: " + w + "; h: " + h)
    noFill()
    stroke(0, 100, 100)
    strokeWeight(11)
    writecode()
    noLoop()
}


function writecode() {
    var x, y, t, stepy, postertext
    textSize(fSize)
    textFont(font)
    stepy = fSize * 1.2
    y = 0
    postertext = ["ART", "ALGO", "RITH", "MI", "QUE"]
    for (i in postertext) {
        t = postertext[i]
        x = w * 0.5 - textWidth(t) * 0.5
        y += stepy
        text(t, x, y)
    }
}