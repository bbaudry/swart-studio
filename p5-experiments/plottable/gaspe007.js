function savesvg() {
    save("gaspe007.svg");
}

function savepng() {
    save("gaspe007.png");
}

var font, posx, posy, knobs = []
var fSize = 15
var stepsize, nbhorizontalsteps, nbvertcicalsteps, grid
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe007.js');

}

function draw() {
    background(0, 0, 100)
    stepsize = Math.floor(actualwidth * 0.005)
    nbhorizontalsteps = Math.floor(actualwidth / stepsize)
    nbvertcicalsteps = Math.floor(actualheight / stepsize)
    initgrid()
    stroke(300,100,100)
    drawnoisecenter()
    stroke(200,100,100)
    drawrestofnoise()
    stroke(0, 0, 0)
    /*textFont(font)
    textSize(fSize)
    showknobs()
    showcode()
    showcredits()*/
    noLoop()
}

function saveknob(name, value) {
    knobs.push({ name: name, value: value.toFixed(2) })
}

function initgrid() {
    grid = []
    var yoff = 0.0
    var xoff
    var inc = 0.004
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff += inc
        xoff = 0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            xoff += inc
            grid.push(noise(xoff, yoff))
        }
    }
}

function drawnoisecenter() {
    for (j = 0; j < nbvertcicalsteps; j++) {
        for (i = 0; i < nbhorizontalsteps; i++) {
            var index = i + j * nbhorizontalsteps
            var v = grid[index]
            x = leftmargin + i * stepsize
            y = topmargin + j * stepsize
            if (v >= 0.4 && v < 0.44 || v >= 0.5 && v < 0.52) {
                ellipse(x + stepsize * 0.5, y + stepsize * 0.5, stepsize, stepsize)
            }
        }
    }
}

function drawrestofnoise() {
    for (j = 0; j < nbvertcicalsteps; j++) {
        for (i = 0; i < nbhorizontalsteps; i++) {
            var index = i + j * nbhorizontalsteps
            var v = grid[index]
            x = leftmargin + i * stepsize
            y = topmargin + j * stepsize
            if (!(v >= 0.4 && v < 0.44 || v >= 0.5 && v < 0.52)) {
                ellipse(x + stepsize * 0.5, y + stepsize * 0.5, stepsize, stepsize)
            }
        }
    }
}

function showcredits() {
    var c = "al.my.re :: p5.js :: CamBam Stick [gaspe 007). May 2024]"
    text(c, posx, posy)
}