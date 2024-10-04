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
}




