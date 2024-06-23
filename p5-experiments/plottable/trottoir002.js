function savesvg() {
    save("trottoir002.svg");
}

function savepng() {
    save("trottoir002.png");
}

var font
var fSize = 14
var xoff = 0.0
var inc = 0.2
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir002.js');
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    inc = random(0.42, 1.42)
    gridexp()
    //noLoop()
}

var grid = []


function test() {
    var x = w * 0.5
    var i = 0
    var y = topmargin + actualheight * 0.5
    while (x > leftmargin) {
        x -= Math.exp(i)
        line(x, topmargin, x, bottommargin)
        ellipse(x, y, 5, 5)
        i += inc
    }
    x = w * 0.5; i = 0
    while (x < rightmargin) {
        x += Math.exp(i)
        ellipse(x, y, 5, 5)
        line(x, topmargin, x, bottommargin)
        i += inc
    }
    x = w * 0.5; i = 0
    while (y < bottommargin) {
        y += Math.exp(i)
        ellipse(x, y, 5, 5)
        line(leftmargin, y, rightmargin, y)
        i += inc
    }
    y = topmargin + actualheight * 0.5; i = 0
    while (y > topmargin) {
        y -= Math.exp(i)
        ellipse(x, y, 5, 5)
        line(leftmargin, y, rightmargin, y)
        i += inc
    }
}

function gridexp() {
    translate(leftmargin + actualwidth * 0.5, topmargin + actualheight * 0.5)
    var stepx, stepy, x, y, rayon
    rayon = random(7,11)
    stepx = 0
    for (x = 0; x < actualwidth * 0.5; x += Math.exp(stepx)) {
        stepy = 0
        for (y = 0; y < actualheight * 0.5; y += Math.exp(stepy)) {
            ellipse(x, y, rayon, rayon)
            stepy += inc
        }
        stepy = 0
        for (y = 0; y > -actualheight * 0.5; y -= Math.exp(stepy)) {
            ellipse(x, y, rayon, rayon)
            stepy += inc
        }
        stepx += inc
    }
    stepx = 0
    for (x = 0; x > -actualwidth * 0.5; x -= Math.exp(stepx)) {
        stepy = 0
        for (y = 0; y < actualheight * 0.5; y += Math.exp(stepy)) {
            ellipse(x, y, rayon, rayon)
            stepy += inc
        }
        stepy = 0
        for (y = 0; y > -actualheight * 0.5; y -= Math.exp(stepy)) {
            ellipse(x, y, rayon, rayon)
            stepy += inc
        }
        stepx += inc
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 002). June 2024]"
    text(c, posx, posy)
}