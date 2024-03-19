
var w, h
var cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    noLoop()
}

function centerCanvas() {
    var x = (windowWidth - 800) / 2;
    var y = (windowHeight - 800) / 2;
    cnv.position(x, y);
}

function draw() {
    var cx = w * 0.5
    var cy = h * 0.5
    var vera = w * 0.4
    var molnar = 21
    var density = 38
    var color = true
    for (vera = w * 0.5; vera > 0; vera -= density) {
        if (color) { fill(50, 100, 100); color = false }
        else { fill(0, 0, 0,); color = true }
        quad(cx - vera + random(-molnar, molnar), cy - vera + random(-molnar, molnar),
            cx + vera + random(-molnar, molnar), cy - vera + random(-molnar, molnar),
            cx + vera + random(-molnar, molnar), cy + vera + random(-molnar, molnar),
            cx - vera + random(-molnar, molnar), cy + vera + random(-molnar, molnar))
    }
}