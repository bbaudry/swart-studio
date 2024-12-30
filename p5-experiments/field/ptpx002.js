function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    fileName = "ptpx002"
    sourcecode = loadStrings(fileName + '.js');
}

function setup() {
    //getsvg()
    getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0, 0, 100)
    noFill()
}

const year = [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1]
const offset = 2

function draw() {
    //    drawframe()
    //    fill(0, 0, 0); stroke(0, 0, 100); strokeWeight(1)
    //    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 006). December 2024]")
    background(0, 0, 100)
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            push()
            translate(wpadding + i * (wpadding + postcardheight), (j + 1) * (hpadding + postcardwidth))
            rotate(radians(270))
            bin2025()
            ikeda()
            pop()
        }
    }
    noLoop()
}

function ikeda() {
    var res = Math.floor(actualwidth / year.length)
    var cx = leftmargin + Math.floor(res * year.length * 0.5)
    var cy = topmargin + Math.floor(actualheight * 0.5)
    var diam = 7 * res
    var rad = diam * 0.5
    noFill(); stroke(230, 100, 100)
    //ellipse(cx, cy, diam, diam)
    //ellipse(cx, cy, 5, 5)
    var blockw = res
    var x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, initx
    initx = cx - rad
    for (var i = 0; i < 20; i++) {
        x1 = initx + blockw * i + offset
        x2 = initx + blockw * (i+1) - offset
        r1 = disttoedge(Math.abs(cx-x1), rad)
        r2 = disttoedge(Math.abs(cx-x2), rad)
        y1 = cy - r1
        y2 = cy - r2
        x3 = initx + blockw * (i+1) - offset
        y3 = cy + r2
        x4 = initx + blockw * i + offset
        y4 = cy + r1
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
    }
}

function disttoedge(x, rad) { //precond: x<=rad
    return Math.sqrt(rad * rad - x * x)
}

function bin2025() {
    var res = Math.floor(actualwidth / year.length)
    var xoff = 0.0
    var xinc = 1
    var v, cellh, cellw, cellx, celly

    stroke(230, 100, 100);
    rect(0, 0, postcardwidth, postcardheight)
    //            rect(leftmargin, topmargin, res * year.length, actualheight)
    for (var k = 0; k < year.length; k++) {
        v = year[k]
        //stroke(0,0,0); noFill();rect(leftmargin+y*res,topmargin,res,actualheight)
        if (v == 1) {
            noStroke(); fill(230, 100, 100)
        }
        else {
            stroke(230, 100, 100); noFill()
        }
        cellh = (actualheight - 2 * offset) * noise(xoff); celly = topmargin + Math.floor((actualheight - cellh) * 0.5) + offset
        cellw = res - 2 * offset; cellx = leftmargin + k * res + offset
        rect(cellx, celly, cellw, cellh)
        xoff += xinc
    }
}