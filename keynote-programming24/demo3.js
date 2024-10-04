var w, h
var cnv
var x, y
var xoff, yoff
var step, stepx, stepy

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    //centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    noFill();
    background(0, 0, 0)
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}



function draw() {
    if (frameCount === 1) {
        capturer.start()
    }

    background(0, 0, 0)
    ikeda(w * 0.25, h * 0.5)
    for (y = 0; y < h; y += 0.05 * h) {
        ikeda(w * 0.75, y)
    }

    if (frameCount < 60) {
        capturer.capture(canvas)
    } else if (frameCount === 60) {
        capturer.save()
        capturer.stop()
    }
}



function ikeda(cx, cy) {
    var cx, cy, xoff, yoff, ikedawidth, ikedaheight
    xoff = w * 0.25
    yoff = h *  random(0.001,0.03)
    ikedawidth = 2 * xoff
    ikedaheight = 2 * yoff
    fill(0, 0, 100)
    if (random() < 0.1) { fill(0, 0, 0) }
    rect(cx - xoff, cy - yoff, ikedawidth, ikedaheight)
}

