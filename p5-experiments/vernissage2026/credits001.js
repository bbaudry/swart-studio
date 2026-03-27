
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 17
var res=42
var xoff=0.0
var xinc=0.0001

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}
function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h)
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 250);
}


function draw() {
    background(0, 0, 0)
    fill(0,0,100)
    rect(w*0.5-res,h*0.5-res,res*2,res*2)
    if(res<h*0.5){
    res+=noise(xoff)
    xoff+=xinc}
}