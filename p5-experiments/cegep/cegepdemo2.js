
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
    background(0, 0, 0)
    ikeda(w * 0.3, h * 0.5)
    ikeda(w * 0.7, h * 0.5)
    //noLoop()
}

function ikeda(cx, cy) {
    var xoff, yoff, xwid, yhei
    xoff = w * 0.2
    yoff = h * random(0.01, 0.05)
    xwid = 2 * xoff
    yhei = 2 * yoff
    if (random() < 0.9) {
        fill(0, 0, 100)
        rect(cx - xoff, cy - yoff, xwid, yhei)
        fill(0, 0, 0)
        rect(cx - 42, cy - (yoff-5), 84, yhei-10)
            }
    else {
        fill(0, 0, 0)
        rect(cx - xoff, cy - yoff, xwid, yhei)
        fill(0, 0, 100)
        rect(cx - 42, cy - (yoff-5), 84, yhei-10)
    }
}