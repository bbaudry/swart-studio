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
    frameRate(1)
}

const year = [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1]
const weight = 3
const offset = weight + 1
const res = Math.floor(actualwidth / year.length)

function draw() {
    //    drawframe()
    //    fill(0, 0, 0); stroke(0, 0, 100); strokeWeight(1)
    //    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 006). December 2024]")
    background(0, 0, 100)
    if (frameCount == 1) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                push()
                translate(wpadding + i * (wpadding + postcardheight), (j + 1) * (hpadding + postcardwidth))
                rotate(radians(270))
                stroke(0, 0, 0)
                rect(0, 0, postcardwidth, postcardheight)
                pop()
            }
        }
        if (gensvg) { save("ptpx002-frame.svg") }
    }
    if (frameCount == 2) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                push()
                translate(wpadding + i * (wpadding + postcardheight), (j + 1) * (hpadding + postcardwidth))
                rotate(radians(270))
                stroke(230, 100, 100);
                bin2025()
                pop()
            }
        }
        if (gensvg) { save("ptpx002-main.svg") }
        noLoop()
    }
    if (frameCount == 3) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                push()
                translate(wpadding + i * (wpadding + postcardheight), (j + 1) * (hpadding + postcardwidth))
                rotate(radians(270))
                stroke(0, 0, 0)
                fill(0, 0, 0)
                textFont(font)
                textSize(fSize)
                text("[b11111101001]", leftmargin, bottommargin + fSize)
                var signature = "al.my.re, december 2024"
                text(signature, rightmargin - textWidth(signature), bottommargin + fSize)
                pop()
            }
        }
        if (gensvg) { save("ptpx002-credit.svg") }
        noLoop()
    }
}

const circ = {
    cx: leftmargin + Math.floor(res * year.length * 0.5),
    cy: topmargin + actualheight * 0.5,
    rad: 7 * res * 0.5
}

function ikeda() {
    var cx = circ.cx
    var cy = circ.cy
    var rad = circ.rad
    noFill(); stroke(230, 100, 100); strokeWeight(weight)
    //ellipse(cx, cy, diam, diam)
    //ellipse(cx, cy, 5, 5)
    var blockw = res
    var x1, y1, x2, y2, x3, y3, x4, y4, initx
    initx = cx - rad
    for (var i = 0; i < 20; i++) {
        x1 = initx + blockw * i + offset
        x2 = initx + blockw * (i + 1) - offset
        r1 = disttoedge(Math.abs(cx - x1), rad)
        r2 = disttoedge(Math.abs(cx - x2), rad)
        y1 = cy - r1
        y2 = cy - r2
        x3 = initx + blockw * (i + 1) - offset
        y3 = cy + r2
        x4 = initx + blockw * i + offset
        y4 = cy + r1
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
    }
}

function ikedaslice(x1, y1, x2, y2, x3, y3, x4, y4) {
    var cx = circ.cx
    var cy = circ.cy
    var rad = circ.rad
    noFill(); stroke(230, 100, 100); strokeWeight(weight)
    var x5, y5, x6, y6
    y1 -= offset * 2
    y2 -= offset * 2
    y3 += offset * 2
    y4 += offset * 2
    r1 = disttoedge(Math.abs(cx - x1), rad)
    r2 = disttoedge(Math.abs(cx - x2), rad)
    x5 = x1
    y5 = cy - r1
    x6 = x2
    y6 = cy - r2
    quadwpoints(x1, y1, x2, y2, x6, y6, x5, y5)
    y5 = cy + r1
    y6 = cy + r2
    quadwpoints(x4, y4, x3, y3, x6, y6, x5, y5)
}

// pre: x1==x4, x2==x3, x1<x2, y1==y2, y3>y4 or y3<=y4
function quadwpoints(x1, y1, x2, y2, x3, y3, x4, y4) {
    //the four lines below will draw the proper arcs because x1<x2
    a1 = acos((x2 - circ.cx) / circ.rad)
    a2 = acos((x1 - circ.cx) / circ.rad)
    arc(circ.cx, circ.cy, circ.rad * 2, circ.rad * 2, a1, a2)
    arc(circ.cx, circ.cy, circ.rad * 2, circ.rad * 2, -a2, -a1)
    var disty, inity
    if (y3 > y4 && y1 > y4) {
        disty = Math.abs(y1 - y4); inity = y4
    }
    if (y3 > y4 && y1 < y4) {
        disty = Math.abs(y1 - y3); inity = y1
    }
    if (y4 >= y3 && y1 > y3) {
        disty = Math.abs(y1 - y3); inity = y3
    }
    if (y4 >= y3 && y1 < y3) {
        disty = Math.abs(y1 - y4); inity = y1
    }
    var amp = 3
    for (var y = inity; y < inity + disty - weight * amp; y += weight * amp) {
        for (var x = x1; x < x2; x += weight * amp) {
            if (random() < 0.21 && cellincircle(x, y, x + weight * amp, y, x + weight * amp, y + weight * amp, x, y + weight * amp)) {
                rect(x, y, weight * amp, weight * amp)
            }
        }
    }
}

function disttoedge(x, rad) { //precond: x<=rad
    return Math.sqrt(rad * rad - x * x)
}

var xoff = 0.0
function bin2025() {
    var xinc = 1
    var v, cellh, cellw, cellx, celly, x1, y1, x2, y2, x3, y3, x4, y4
    stroke(230, 100, 100); noFill(); strokeWeight(weight)

    for (var k = 0; k < year.length; k++) {
        v = year[k]
        cellh = (actualheight - 2 * offset) * noise(xoff);
        cellw = res - 2 * offset;
        x1 = leftmargin + k * res + offset
        y1 = topmargin + (actualheight - cellh) * 0.5 + offset
        x2 = x1 + cellw
        y2 = y1
        x3 = x1 + cellw
        y3 = y1 + cellh
        x4 = x1
        y4 = y1 + cellh
        if (v == 1) {
            quadwlines(x1, y1, x2, y2, x3, y3, x4, y4)
        }
        else {
            quad(x1, y1, x2, y2, x3, y3, x4, y4)
        }
        if (cellincircle(x1, y1, x2, y2, x3, y3, x4, y4)) {
            ikedaslice(x1, y1, x2, y2, x3, y3, x4, y4)
        }
        //        rect(cellx, celly, cellw, cellh)
        xoff += xinc
    }
}

function cellincircle(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (dist(circ.cx, circ.cy, x1, y1) <= circ.rad &&
        dist(circ.cx, circ.cy, x2, y2) <= circ.rad &&
        dist(circ.cx, circ.cy, x3, y3) <= circ.rad &&
        dist(circ.cx, circ.cy, x4, y4) <= circ.rad) {
        return true
    }
    else {
        return false
    }
}

function celloutcircle(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (dist(circ.cx, circ.cy, x1, y1) > circ.rad &&
        dist(circ.cx, circ.cy, x2, y2) > circ.rad &&
        dist(circ.cx, circ.cy, x3, y3) > circ.rad &&
        dist(circ.cx, circ.cy, x4, y4) > circ.rad &&
        Math.abs(circ.cx - x1) > circ.rad) {
        return true
    }
    else {
        return false
    }
}

function quadwlines(x1, y1, x2, y2, x3, y3, x4, y4) {
    stroke(230, 100, 100); noFill(); strokeWeight(weight)
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    while (x1 < x2 - weight) {
        x1 += weight; x4 += weight
        line(x1, y1, x4, y4)
    }
}