
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 17
var artname = "logo60"

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}
function setup() {
    w = 800
    h = 800
    // cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    angleMode(DEGREES)
    leftmargin = 20
    rightmargin = w-leftmargin
    topmargin = 20
    bottommargin = h-leftmargin
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
}

function savesvg() {
    save(artname+".svg");
}


function savepng() {
    save(artname+".png");
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    textFont(font)
    textSize(fSize)
    stroke(300,100,100)   
    //rect(Math.floor(96*0.5),Math.floor(96*0.5),visiblew,visibleh)
    hal()
    noLoop()
}