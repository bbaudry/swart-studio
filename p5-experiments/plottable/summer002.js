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
    rect(0, 0, w, h)
    rect(0, 0, wcd, hcd)
    summer()
    textFont(font)
    textSize(fSize)
    showcredits(leftmargin, bottommargin + fSize)
    noLoop()
}

function summer() {
    var cx = leftmargin + actualwidth * 0.5
    var cy = topmargin + actualheight * 0.5
    var rad = actualheight * 0.05
    var x1,x2,x3,x4,y1,y2,y3,y4,x5,x6,x7,x8,y5,y6,y7,y8
    x1=cx-rad;x2=cx+rad;x3=cx+rad;x4=cx-rad;
    y1=cy-rad;y2=cy-rad;y3=cy+rad;y4=cy+rad
    quad(x1,y1,x2,y2,x3,y3,x4,y4)
    rad = actualheight * 0.5
    x5=cx-rad;x6=cx+rad;x7=cx+rad;x8=cx-rad;
    y5=cy-rad;y6=cy-rad;y7=cy+rad;y8=cy+rad
    quad(x5,y5,x6,y6,x7,y7,x8,y8)
    for (t1 = 0; t1 < 1; t1 += 0.1) {
        xi = (1 - t1) * x1 + (t1 * x2)
        yi = y1
        xd = (1 - t1) * x5 + (t1 * x6)
        yd = y5
        line(xi, yi, xd, yd)
    }

}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: vpype [summer 002). July 2024]"
    text(c, posx, posy)
}