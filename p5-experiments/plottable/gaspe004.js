function savesvg() {
    save("gaspe004.svg");
}

function savepng() {
    save("gaspe004.png");
}

var font, posx, posy, knobs = [], grid = []
var fSize = 23
var stepsize = Math.floor(actualwidth * 0.012)
var nbhorizontalsteps = Math.floor(actualwidth / stepsize)
var nbvertcicalsteps = Math.floor(actualheight / stepsize)
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe004.js');

}

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    initgrid()
    textFont(font)
    textSize(fSize)
    drawgrid()
    textSize(fSize)
    showknobs()
    showcode()
    showcredits()
    noLoop()
}

function saveknob(name, value) {
    knobs.push({ name: name, value: value.toFixed(2) })
}

function initgrid() {
    var yoff=0.0
    var xoff
    var inc=0.1
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff+=inc
        xoff=0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            xoff+=inc
            grid.push(noise(xoff,yoff))
        }
    }
}

function drawgrid() {
    for (j = 0; j < nbvertcicalsteps; j++) {
        for (i = 0; i < nbhorizontalsteps; i++) {
            var index=i+j*nbhorizontalsteps
            var v = grid[index]
            var x=leftmargin+i*stepsize
            var y=topmargin+j*stepsize
            rect(x,y,stepsize,stepsize)
            ellipse(x+stepsize*0.5,y+stepsize*0.5,stepsize*v,stepsize*v)
        }
    }
}


function showcredits() {
    var c = "al.my.re :: p5.js :: CamBam Stick [gaspe 003). May 2024]"
    text(c, posx, posy)
}