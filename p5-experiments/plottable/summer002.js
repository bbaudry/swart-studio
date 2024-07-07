function savesvg() {
    save("summer002.svg");
}

function savepng() {
    save("summer002.png");
}

var font
var fSize = 17
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer002.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    noFill()
    rect(0,0,w,h)
    rect(0,0,wcd,hcd)
    rect(leftmargin,topmargin,actualwidth,actualheight)
    noLoop()
}

/*
    rect(0, 0, w, h)
    rect(0, 0, wcd, hcd)
    rect(leftmargin,topmargin,actualwidth,actualheight)
    textFont(font)
    textSize(fSize)
    coords=showcode(leftmargin,topmargin)
    showcredits(coords[0],coords[1])
*/

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: vpype [summer 002). July 2024]"
    text(c, posx, posy)
}