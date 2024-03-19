
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
    noLoop()
}

function ikeda(cx, cy) {
    var xoff, yoff, xwid, yhei
    
}