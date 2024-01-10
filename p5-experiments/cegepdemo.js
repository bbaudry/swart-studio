
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
    ikeda()
}

var cy = 0

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

}
