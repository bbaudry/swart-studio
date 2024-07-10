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
    noFill()
    textFont(font)
    textSize(fSize)
    showcredits(leftmargin, bottommargin + fSize)
    translate(wcd,hcd*2+scd)
    rotate(radians(180))
    showcode(leftmargin, topmargin+2*fSize)
    noLoop()
}

//xo1 = (1 - t1) * verax + (t1 * molnarx)
//yo1 = (1 - t1) * veray + (t1 * molnary)
function hex(){
    var cx = leftmargin+actualwidth*0.5
    var cy = topmargin+actualheight*0.5
    
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick [summer 002). July 2024]"
    text(c, posx, posy)
}