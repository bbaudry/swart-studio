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
    var x1, x2, x3, x4, y1, y2, y3, y4, x5, x6, x7, x8, y5, y6, y7, y8
    x1 = cx - rad; x2 = cx + rad; x3 = cx + rad; x4 = cx - rad;
    y1 = cy - rad; y2 = cy - rad; y3 = cy + rad; y4 = cy + rad
    rad = actualheight * 0.5
    x5 = cx - rad; x6 = cx + rad; x7 = cx + rad; x8 = cx - rad;
    y5 = cy - rad; y6 = cy - rad; y7 = cy + rad; y8 = cy + rad
    oiseaux(x1, y1, x2, y2, x5, y5, x6, y6, 1)
    oiseaux(x2, y2, x3, y3, x6, y6, x7, y7, 1)
    oiseaux(x3, y3, x4, y4, x7, y7, x8, y8, 1)
    oiseaux(x4, y4, x1, y1, x8, y8, x5, y5, 1)
}

function oiseaux(verax, veray, molnarx, molnary, milesx, milesy, davisx, davisy, depth) {
    var t1, xo1, yo1, xd1, yd1, xo2, yo2, xd2, yd2
    t1 = 0
    xo1 = (1 - t1) * verax + (t1 * molnarx)
    yo1 = (1 - t1) * veray + (t1 * molnary)
    xd1 = (1 - t1) * milesx + (t1 * davisx)
    yd1 = (1 - t1) * milesy + (t1 * davisy)
    while (t1 < 1) {
        t1 += 0.25
        xo2 = (1 - t1) * verax + (t1 * molnarx)
        yo2 = (1 - t1) * veray + (t1 * molnary)
        xd2 = (1 - t1) * milesx + (t1 * davisx)
        yd2 = (1 - t1) * milesy + (t1 * davisy)
        if(depth<2 && random()<0.5){
            d=depth+1;
            oiseaux(xo1, yo1, xd1, yd1, xd2, yd2, xo2, yo2,d)
        }
        else{
            if(random()<0.5){
                quad(xo1, yo1, xd1, yd1, xd2, yd2, xo2, yo2)
            }
            else{
                lichtenstein(xo1, yo1, xd1, yd1, xd2, yd2, xo2, yo2)
            }
        }
        xo1 = xo2
        yo1 = yo2
        xd1 = xd2
        yd1 = yd2
    }
}

function lichtenstein(x1, y1, x2, y2, x3, y3, x4, y4) {
    var t1, t2, ox, oy, dx, dy, cx, cy, rad
    if(random()<0.5){
        //quad(x1, y1, x2, y2, x3, y3, x4, y4)
        for (t1 = 0; t1 < 1; t1 += 0.04) {
        ox = (1 - t1) * x1 + (t1 * x2)
        oy = (1 - t1) * y1 + (t1 * y2)
        dx = (1 - t1) * x4 + (t1 * x3)
        dy = (1 - t1) * y4 + (t1 * y3)
        if (Math.abs((dy - oy)) > 0) {
            rad = Math.abs((dy - oy) * 0.05)
        }
        else { 
            rad = Math.abs((dx - ox) * 0.05) 
        }
        for (t2 = 0; t2 < 1; t2 += 0.1) {
            cx = (1 - t2) * ox + (t2 * dx)
            cy = (1 - t2) * oy + (t2 * dy)
            ellipse(cx, cy, rad, rad)
        }
    }}
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: vpype [summer 002). July 2024]"
    text(c, posx, posy)
}