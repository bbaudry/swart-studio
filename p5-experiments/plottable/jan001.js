var w, h, cnv, stepsize, nbhorizontalsteps, nbvertcicalsteps, grid, font

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    stepsize = Math.floor(w * 0.02)
    nbhorizontalsteps = Math.floor(w / stepsize)
    nbvertcicalsteps = Math.floor(h / stepsize)
    // noLoop()
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    oeil(0, 0, w * 0.5, 0, w * 0.5, 0, w * 0.5, h * 0.5)
    oeil(w, 0, w * 0.5, 0, w * 0.5, 0, w * 0.5, h * 0.5)
    oeil(0, h, w * 0.5, h, w * 0.5, h, w * 0.5, h * 0.5)
    oeil(w, h, w * 0.5, h, w * 0.5, h, w * 0.5, h * 0.5)
    noLoop()
}

function oeil(ox1, oy1, dx1, dy1, ox2, oy2, dx2, dy2) {
    var black = true
    noFill()
    strokeWeight(2)
    for (var t = 0; t < 1; t += 0.015) {
        if (black) {
            stroke(30, 100, 100)
            black = false
        }
        else {
            stroke(330, 100, 100)
            black = true
        }
        x1 = (1 - t) * ox1 + (t * dx1);
        y1 = (1 - t) * oy1 + (t * dy1);
        x2 = (1 - t) * ox2 + (t * dx2);
        y2 = (1 - t) * oy2 + (t * dy2);
        line(x1, y1, x2, y2)
    }
    stroke(330, 100, 100)
    var offx = random(0.01,0.04)
    var offy = offx * 0.2
    var max = Math.floor(0.5 / offx)
    var ecartx,ecarty
    if (ox1>dx1){ecartx=w}else{ecartx=-w}
    if (oy2>dy2){ecarty=h}else{ecarty=h}
    for (i = 0; i < max; i++) {
        beginShape();
        vertex(ox1, oy1);
        bezierVertex(dx1 + ecartx * i * offx, dy1, ox2, dx2 * 0.8 + ecarty * i * offy, dx2, dy2);
        endShape();
    }
}
