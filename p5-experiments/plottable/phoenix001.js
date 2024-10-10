function savesvg() {
    save("phoenix001.svg");
}

function savepng() {
    save("phoenix001.png");
}

var fSize = 17
var bowie
var xoff, xinc
var steps = 10
var xstep = actualwidth / steps
var ystep = actualheight / steps

function preload() {
    bowie = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('phoenix001.js');
}

function draw() {
    background(0, 0, 0)
    noFill()
    xoff = 0.0
    xinc = 0.005
    stroke(0, 0, 100)
    rect(leftmargin, topmargin, actualwidth, actualheight)
    initgrid()
    //showgrid()
    onesection(2)
    onesection(0)
    onesection(1)
    onesection(5)
    onesection(0)
    onesection(3)
    onesection(6)
    onesection(3)
    onesection(7)
    noLoop()
}

var grille = []
function initgrid() {
    var x, y
    for (i = 0; i < steps; i++) {
        x = leftmargin + i * xstep + noise(xoff) * xstep; xoff += xinc
        for (j = 0; j < steps; j++) {
            y = topmargin + j * ystep + random(xoff) * ystep; xoff += xinc
            grille.push({ x: x, y: y })
        }
    }
}

function showgrid() {
    for (var i = 0; i < grille.length; i++) {
        ellipse(grille[i].x, grille[i].y, 5, 5)
    }
}

function onesection(off) {
    var x1, y1, x2, y2, x3, y3, x4, y4
    var i1, i2, i3, i4, j1, j2, j3, j4
    var rad = 17
    j1 = Math.floor(random(steps - 2))
    i1 = off
    x1 = grille[i1 + j1 * steps].x
    y1 = grille[i1 + j1 * steps].y
    //fill(0,100,100);ellipse(x1,y1,rad,rad)
    j2 = Math.floor(random(j1 + 1, steps))
    i2 = off
    x2 = grille[i2 + j2 * steps].x
    y2 = grille[i2 + j2 * steps].y
    //fill(50,100,100);ellipse(x2,y2,rad,rad)
    j3 = j2//Math.floor(random(j1 + 1, steps - 1))
    i3 = Math.floor(random(i1 + 1, steps - 1))
    x3 = grille[i3 + j3 * steps].x
    y3 = grille[i3 + j3 * steps].y
    //fill(180,100,100);ellipse(x3,y3,rad,rad)
    j4 = j1
    i4 = i3//Math.floor(random(i2 + 1, steps - 1))
    x4 = grille[i4 + j4 * steps].x
    y4 = grille[i4 + j4 * steps].y
    //fill(210,100,100);ellipse(x4,y4,rad,rad)
    innerquad(x1, y1, x2, y2, x3, y3, x4, y4)
}

function innerquad(x1, y1, x2, y2, x3, y3, x4, y4) {
    var h = random([0,90,180,230])
    stroke(h, 100, 100)
    var ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4
    var tstep=random(0.008,0.02)
    var maxt=random(0.21,0.42)
    var t = 0
    while (t < maxt) {
        ix1 = (1 - t) * x1 + (t * x2)
        iy1 = (1 - t) * y1 + (t * y4)
        ix2 = (1 - (1 - t)) * x1 + ((1 - t) * x2)
        iy2 = (1 - t) * y2 + (t * y3)
        ix3 = (1 - (1 - t)) * x4 + ((1 - t) * x3)
        iy3 = (1 - (1 - t)) * y2 + ((1 - t) * y3)
        ix4 = (1 - t) * x4 + (t * x3)
        iy4 = (1 - (1 - t)) * y1 + ((1 - t) * y4)
        quad(ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4)
        t+=tstep
    }

}

function showcredits(posx, posy) {
    textFont(bowie)
    textSize(fSize);
    stroke(0, 0, 100)
    fill(0, 0, 100)
    var c = "al.my.re [noline 004). 20 September 2024"
    text(c, posx, posy)
    c = "p5.js :: random() :: juicy-gcode"
    text(c, posx, posy + fSize)
    c = "pour alice"
    text(c, posx, posy + 2 * fSize)

}