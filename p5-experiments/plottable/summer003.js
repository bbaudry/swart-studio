function savesvg() {
    save("summer003.svg");
}

function savepng() {
    save("summer003.png");
}

var font
var fSize = 13
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer003.js');
}

function draw() {
    background(0, 0, 100)
    hexas(leftmargin+actualwidth*0.5, topmargin+actualheight*0.5, actualheight, 0)
    stroke(0, 0, 0)
    noFill()
    textFont(font)
    textSize(fSize)
    showcredits(leftmargin, bottommargin + fSize)
    translate(wcd, hcd * 2 + scd)
    rotate(radians(180))
    showcode(leftmargin, topmargin + 2 * fSize)
    noLoop()
}

var xoff=0.0
var xinc=0.001
var aoff=0.0
var ainc=0.0001
function hexas(x, y, wid, dep) {
    var x1, y1, rad, d, a
    a = 5-Math.floor(noise(aoff)*10);aoff+=ainc//Math.floor(random(360));//
    rad = wid * 0.5
    stroke(220+10*dep,100,100)
    xoff+=xinc
    if(noise(xoff)<2/(dep*1.1)){
    beginShape()
    for (var j = a; j < a+360; j += 72) {
        x1 = x + rad * cos(radians(j))
        y1 = y + rad * sin(radians(j))
        vertex(x1, y1)
    }
    endShape(CLOSE)}
    d = dep + 1
    if (d < 7) {
        for (var j = a; j < a+360; j += 60) {
            x1 = x + (rad * 0.5) * cos(radians(j))
            y1 = y + (rad * 0.5) * sin(radians(j))
            hexas(x1, y1, rad, d)
        }
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick [summer 004). July 2024]"
    text(c, posx, posy)
}