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
    testrand()
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

function hexas(x, y, wid, dep) {
    var x1, y1, rad, d, a
    a = 0//Math.floor(random(360));
    rad = wid * 0.5
    stroke(180+20*dep,100,100)
    if(random()<1/(dep*10)){
    beginShape()
    for (var j = a; j < a+360; j += 60) {
        x1 = x + rad * cos(radians(j))
        y1 = y + rad * sin(radians(j))
        vertex(x1, y1)
    }
    endShape(CLOSE)}
    d = dep + 1
    if (d < 8) {
        for (var j = a; j < a+360; j += 60) {
            x1 = x + (rad * 0.5) * cos(radians(j))
            y1 = y + (rad * 0.5) * sin(radians(j))
            hexas(x1, y1, rad, d)
        }
    }
}

var randomnumbers = []
function randstore(min,max){
    var r = random(min,max);
    randomnumbers.push(r)
    return r
}

function testrand(){
    var r
    r = randstore()
    console.log("with no arg "+r)
    r = randstore(0.5)
    console.log("with one arg "+r)
    r = randstore(2,5)
    console.log("with two args "+r)
    for(i=0;i<randomnumbers.length;i++){
        console.log(randomnumbers[i])
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick [summer 002). July 2024]"
    text(c, posx, posy)
}