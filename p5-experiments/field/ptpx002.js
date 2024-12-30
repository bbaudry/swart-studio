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
const weight = 3
const offset = weight
const res = Math.floor(actualwidth / year.length)

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
            stroke(230, 100, 100);
            rect(0, 0, postcardwidth, postcardheight)

            bin2025()
//            ikeda()
            pop()
        }
    }
    noLoop()
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
    //ellipse(cx, cy, diam, diam)
    //ellipse(cx, cy, 5, 5)
    var blockw = res
    var x5, y5, x6, y6
        y1 -= offset*2
        y2 -= offset*2
        y3 += offset*2
        y4 += offset*2
        r1 = disttoedge(Math.abs(cx - x1), rad)
        r2 = disttoedge(Math.abs(cx - x2), rad)
        x5 = x1
        y5 = cy - r1 
        x6 = x2
        y6 = cy - r2 
        quadwpoints(x1, y1, x2, y2, x6, y6, x5, y5)
        y5 = cy + r1 
        y6 = cy + r2 
        quad(x4, y4, x3, y3, x6, y6, x5, y5)
}

// pre: x1==x4, x2==x3, x1<x2, y1==y2, y3>y4 or y3<=y4
function quadwpoints(x1, y1, x2, y2, x3, y3, x4, y4){
    //push();stroke(0,100,100);quad(x1, y1, x2, y2, x3, y3, x4, y4);pop()
    var disty,inity
    if (y3>y4) {
        disty=Math.abs(y1-y3)
        if(y1>y3){
            inity=y3
        }
        else{
            inity=y1
        }
    }
    else {
        disty=Math.abs(y1-y4)
        if(y1>y4){
            inity=y4
        }
        else{
            inity=y1
        }
    }
    for(var y=inity;y<inity+disty-weight;y+=weight){
        for(var x=x1;x<x2;x+=weight){
            if (random()<0.4){rect(x,y,weight,weight)}
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
        if (celloutcircle(x1, y1, x2, y2, x3, y3, x4, y4)) {
            if (v == 1) {
                quadwlines(x1, y1, x2, y2, x3, y3, x4, y4)
            }
            else {
                quad(x1, y1, x2, y2, x3, y3, x4, y4)
            }
        }
        if(cellincircle(x1, y1, x2, y2, x3, y3, x4, y4)){
            if (v == 1) {
                quadwlines(x1, y1, x2, y2, x3, y3, x4, y4)
            }
            else {
                quad(x1, y1, x2, y2, x3, y3, x4, y4)
            }
            ikedaslice(x1, y1, x2, y2, x3, y3, x4, y4)
        }
        else{
            push()
            strokeWeight(1)
            stroke(0,0,0)
            noFill()
            quad(x1, y1, x2, y2, x3, y3, x4, y4)
            pop()
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

function quadwlines(x1, y1, x2, y2, x3, y3, x4, y4){
    stroke(230, 100, 100); noFill(); strokeWeight(weight)
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    while(x1<x2-weight){
        x1+=weight; x4+=weight
        line(x1,y1,x4,y4)
    }
}