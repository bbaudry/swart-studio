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
    stroke(0, 0, 0)
    hexas(leftmargin+actualwidth*0.5, topmargin+actualheight*0.5, actualheight, 0)
    noFill()
    textFont(font)
    textSize(fSize)
    showcredits(leftmargin, bottommargin + fSize)
    translate(wcd, hcd * 2 + scd)
    rotate(radians(180))
    showcode(leftmargin, topmargin + 2 * fSize)
    noLoop()
}

//xo1 = (1 - t1) * verax + (t1 * molnarx)
//yo1 = (1 - t1) * veray + (t1 * molnary)
function hexas(x, y, wid, dep) {
    var x1, y1, rad, d
    rad = wid * 0.5
    if(random()>0.9){
    beginShape()
    for (var j = 0; j < 360; j += 60) {
        x1 = x + rad * cos(radians(j))
        y1 = y + rad * sin(radians(j))
        vertex(x1, y1)
    }
    endShape(CLOSE)}
    d = dep + 1
    if (d < 5) {
        for (var j = 0; j < 360; j += 60) {
            x1 = x + (rad * 0.5) * cos(radians(j))
            y1 = y + (rad * 0.5) * sin(radians(j))
            hexas(x1, y1, rad, d)
        }
    }
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick [summer 002). July 2024]"
    text(c, posx, posy)
}