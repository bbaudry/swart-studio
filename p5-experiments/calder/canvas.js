
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font, seeds
var fSize = 11
var x,y,xoff,yoff,xinc,yinc

function preload() {
    font = loadFont("./FreeMono.otf");
}
function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h)
    leftmargin = Math.floor(w * 0.03)
    rightmargin = Math.floor(w * 0.97)
    topmargin = Math.floor(h * 0.03)
    bottommargin = Math.floor(h * 0.96)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    x=w*0.5
    y=h*0.5
    xoff=0
    yoff=0
    xinc=0.001
    yinc=0.001
}


function draw() {
    background(0, 0, 0)
    hal()
    noFill()
    stroke(0,0,100)
    textFont(font)
    textSize(fSize)
    text(w*0.5,leftmargin,topmargin)
    text(x,leftmargin,topmargin+fSize)
}
