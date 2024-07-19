function savesvg() {
    save("summer005.svg");
}

function savepng() {
    save("summer005.png");
}

var font
var fSize = 13
var xoff=0
var xinc=0.1
var alea=[]
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
    rect(0,0,42,84)
    text("42,84",0,42)
    stroke(0, 0, 0)
    drawpostcard(0,0)
    //rect(wpostcard,0,wpostcard,hpostcard)
    drawpostcard(wpostcard,0)
    noLoop()
}

function drawpostcard(x,y){
    setmargins(x,y)
    rect(x,y,wpostcard,hpostcard)
    textFont(font)
    textSize(fSize)
    alea=[]
    alea.push(random())
    push()
    console.log(topmargin+" "+rightmargin)
    gentle(alea).then((h) => {
        translate(0, hpostcard)
        rotate(radians(270))
            showcredits(topmargin, rightmargin-fSize,  "[" + h.toUpperCase() + "]", "al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ gcode ~ juicy ~ "+alea.length+" random numbers)")
            text("postcard",topmargin,rightmargin-fSize)
            ellipse(topmargin,rightmargin,11,11)
            //        showcode(leftmargin, topmargin + 5 * fSize)
    })    
    pop()
}
