function savesvg() {
    save("noline001.svg");
}

function savepng() {
    save("noline001.png");
}

var font, xoff, yoff, inc, shake, h1, h2, h3, stepsize, nbhorizontalsteps, nbvertcicalsteps
var fSize = 14
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('noline001.js');
}

var rayon = Math.floor(actualwidth * 0.1)
function draw() {
    background(0, 0, 100)
    var cx = leftmargin + actualwidth * 0.5
    var cy = topmargin + actualheight * 0.5
    //anniv(cx,cy)
    annivhex()
    noLoop()
}

function annivhex() {
    translate(leftmargin + rayon, topmargin + rayon)
    france()
    push()
    for (var i = 0; i < 4; i++) {
        translate(rayon * 2, 0)
        alice()
    }
    pop()

    translate(rayon, rayon * 2 * sin(radians(60)))
    france()
    push()
    for (var i = 0; i < 3; i++) {
        translate(rayon * 2, 0)
        france()
    }
    pop()

    translate(-rayon, rayon * 2 * sin(radians(60)))
    france()
    push()
    for (var i = 0; i < 4; i++) {
        translate(rayon * 2, 0)
        france()
    }
    pop()

    translate(rayon, rayon * 2 * sin(radians(60)))
    france()
    push()
    for (var i = 0; i < 3; i++) {
        translate(rayon * 2, 0)
        france()
    }
    pop()

    translate(-rayon, rayon * 2 * sin(radians(60)))
    france()
    push()
    for (var i = 0; i < 4; i++) {
        translate(rayon * 2, 0)
        france()
    }
    pop()

    translate(rayon, rayon * 2 * sin(radians(60)))
    france()
    push()
    for (var i = 0; i < 3; i++) {
        translate(rayon * 2, 0)
        france()
    }
    pop()
}

function anniv(cx, cy) {
    for (var i = 0; i < 24; i++) {
        x = cx + 400 * cos(radians(i * 15))
        y = cy + 400 * sin(radians(i * 15))
        line(cx, cy, x, y)
    }
    push()
    translate(cx, cy)
    alice()
    pop()
    for (var i = 0; i < 6; i++) {
        push()
        x = cx + 88 * cos(radians(i * 60 + 30))
        y = cy + 88 * sin(radians(i * 60 + 30))
        translate(x, y)
        alice()
        pop()
    }
    for (var i = 0; i < 6; i++) {
        push()
        x = cx + 152 * cos(radians(i * 60))
        y = cy + 152 * sin(radians(i * 60))
        translate(x, y)
        alice()
        pop()
    }
    for (var i = 0; i < 6; i++) {
        push()
        x = cx + 178 * cos(radians(i * 60 + 30))
        y = cy + 178 * sin(radians(i * 60 + 30))
        translate(x, y)
        alice()
        pop()
    }
    for (var i = 0; i < 6; i++) {
        push()
        x = cx + 250 * cos(radians(i * 60 + 15))
        y = cy + 250 * sin(radians(i * 60 + 15))
        translate(x, y)
        alice()
        pop()
    }
    ellipse(cx, cy, 500, 500)
    ellipse(cx, cy, 570, 570)
    ellipse(cx, cy, 640, 640)
}

function france() {
    var x1, y1
    ellipse(0, 0, rayon * 2, rayon * 2)
    beginShape()
    for (var i = 0; i < 6; i++) {
        x1 = rayon * cos(radians(i * 60))
        y1 = rayon * sin(radians(i * 60))
        vertex(x1, y1)
    }
    endShape(CLOSE)
}

function alice() {
    push()
    var x, y, r1, r2
    r1 = 20
    doublecircle(0, 0, r1, r1)
    r2 = 20
    for (var i = 0; i < 6; i++) {
        x = r2 * cos(radians(i * 60))
        y = r2 * sin(radians(i * 60))
        doublecircle(x, y, r1, r1)
    }
    r2 += 15
    rotate(radians(30))
    for (var i = 0; i < 6; i++) {
        x = r2 * cos(radians(i * 60))
        y = r2 * sin(radians(i * 60))
        doublecircle(x, y, r1, r1)
    }
    r2 += 5
    rotate(radians(30))
    for (var i = 0; i < 6; i++) {
        x = r2 * cos(radians(i * 60))
        y = r2 * sin(radians(i * 60))
        doublecircle(x, y, r1, r1)
    }
    pop()
}

var xoff = 0.0
var xinc = 0.1
function doublecircle(x, y, r1, r1) {
    //    var r=random(r1)
    //    var r=r1
    var r = noise(xoff) * r1; xoff += xinc
    strokeWeight(3)
    stroke(50, 50, 80)
    ellipse(x, y, r, r)
    strokeWeight(0.5)
    stroke(0, 0, 0)
    ellipse(x, y, r, r)
}



function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}