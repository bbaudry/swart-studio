function savesvg() {
    save("plein001.svg");
}

function savepng() {
    save("plein001.png");
}

var font
var fSize = 13
var xoff = 0.0
var yoff = 0.0
var xinc = 0.0001
var yinc = 0.0001
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('plein001.js');
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    rect(0, 0, w, h)
    textFont(font)
    textSize(fSize)
    coords=showcode(leftmargin,bottommargin+fSize)
    showcredits(coords[0],coords[1])
    noLoop()
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [plein 001). March 2025]"
    text(c, posx, posy)
}