
var w, h
var cnv
var x, y
var xoff, yoff
var step, stepx, stepy

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(w, h);
    centerCanvas();
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
    onecolumn()
}

var cy = 0
var column = []
function onecolumn() {
    noStroke()
    column.push({ x1: 0.4 * w, x2: 0.6 * w, hblock: random(0.01) * h })
    var y = 0
    for (var i = 0; i < column.length; i++) {
        var b = column[i]
        if (random() < 0.5) { fill(0, 0, 100) }
        else { fill(0, 0, 0) }
        quad(b.x1, y, b.x2, y, b.x2, y + b.hblock, b.x1, y + b.hblock)
        if (y < h) { y += b.hblock }
        else { break; }
    }
}

function ikeda() {
    fill(0, 0, 100)
    var cx = w / 2
    var freq = 0.5
    var speed = 2
    console.log("rect" + cy)
    if (cy < h) {
        if (random() < freq) {

            rect(cx - (100 + frameCount * speed), cy - 50, 200 + 2 * frameCount * speed, 100)
        }
        cy += random(speed)
    }
    else{
        cy=0
    }

}
