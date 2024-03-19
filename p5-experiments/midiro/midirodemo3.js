
//96dpi is for plotting on the UUNA TEK iDraw
//w=96*8.5=816
//h=96*11=1056
var echelle = 1
var w = 816 * echelle
var h = 1056 * echelle
var rightmargin = 0.9 * w
var leftmargin = 0.1 * w
var topmargin = 0.1 * h
var bottommargin = 0.9 * h
var actualwidth = rightmargin - leftmargin
var actualheight = bottommargin - topmargin
var cnv, imgbtn, maxcount, font


function setup() {
    getsvg()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    maxcount = random(39, 45)
}

function getsvg() {
    cnv = createCanvas(w, h, SVG);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}

function savesvg() {
    save("midirodemo3.svg");
}

function preload() {
    font=loadFont("../fonts/1CamBam_Stick_0.ttf");
}


function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    plottable()
    credits()
    noLoop()
}

function plottable() {
    var radius = actualwidth * 0.5
    var steps = 21   
    var cx = w * 0.5 
    var cy = h * 0.5
    for (var vera = 0; vera < steps; vera+=1) {
        ellipse(cx, cy, radius * random(2), radius * random(2))
        radius -= actualwidth * 0.01
    }
}

function credits(){
    textFont(font)
    stroke(0,0,0)
    var fSize = 21
    textSize(fSize)
    var message = "midiro 001"
    var xtxt = leftmargin
    var ytxt = bottommargin
    text(message,xtxt,ytxt)
}