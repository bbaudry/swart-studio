
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
    var cx, cy, vera, molnar, density, color
    cx = 0.5 * w
    cy = 0.5 * h
    vera = 0.5 * w
    molnar = 11
    density = 37
    color = true
    for (vera = 0.5 * w; vera > 0; vera -= density) {
        if (color) { fill(50, 100, 100); color = false }
        else { fill(0, 0, 0); color = true }

        quad(cx - random(vera - molnar, vera + molnar), cy - random(vera - molnar, vera + molnar),
            cx + random(vera - molnar, vera + molnar), cy - random(vera - molnar, vera + molnar),
            cx + random(vera - molnar, vera + molnar), cy + random(vera - molnar, vera + molnar),
            cx - random(vera - molnar, vera + molnar), cy + random(vera - molnar, vera + molnar))
    }
}