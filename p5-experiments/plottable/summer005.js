function savesvg() {
    save("summer005.svg");
}

function savepng() {
    save("summer005.png");
}

var font
var fSize = 13
var xoff = 0
var xinc = 0.1
var alea = []
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer005.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 100, 100)
    noFill()
    textFont(font)
    textSize(fSize)
    stroke(0, 0, 0)
    drawpostcard(globalmargin, globalmargin)
    drawpostcard(globalmargin+wpostcard, globalmargin)
    drawpostcard(globalmargin, globalmargin+hpostcard)
    drawpostcard(globalmargin+wpostcard, globalmargin+hpostcard)
    noLoop()
}

function drawpostcard(x, y) {
    rect(x, y, wpostcard, hpostcard)
    setmargins(x, y)
    onepiece()
    sign()
}
function onepiece(){
    alea = []
    alea.push(random())
}
function sign(){
    var title="[summer005]"
    var credits="al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ gcode ~ juicy ~ " + alea.length + " random numbers)"
    textFont(font)
    textSize(fSize)
    push()
    translate(rightmargin,bottommargin); 
    rotate(radians(270))
    showcredits(0,0, title, credits)
    pop()
}
