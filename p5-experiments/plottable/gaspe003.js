function savesvg() {
    save("gaspe003.svg");
}

function savepng() {
    save("gaspe003.png");
}

var font, posx, posy, knobs = [], grid = []
var fSize = 23
var stepsize = Math.floor(actualwidth * 0.012)
var nbhorizontalsteps = Math.floor(actualwidth / stepsize)
var nbvertcicalsteps = Math.floor(actualheight / stepsize)
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe003.js');

}

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    backgrid()
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

function backgrid() {
    var yoff=0.0
    var xoff
    var inc=0.1
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff+=inc
        xoff=0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            xoff+=inc
            backgrid.push(noise(xoff,yoff))
        }
    }
}

function drawgrid() {
    for (j = 0; j < nbvertcicalsteps; j++) {
        for (i = 0; i < nbhorizontalsteps; i++) {
            var index=i+j*nbhorizontalsteps
            var v = backgrid[index]
            var x=leftmargin+i*stepsize+stepsize*0.5
            var y=topmargin+j*stepsize+stepsize*0.5
            var c
            if(v<0.1){c='.'}
            if(v>=0.1&&v<0.2){c=':'}
            if(v>=0.2&&v<0.3){c=';'}
            if(v>=0.3&&v<0.4){c='d'}
            if(v>=0.4&&v<0.5){c='i'}
            if(v>=0.5&&v<0.6){c='r'}
            if(v>=0.6&&v<0.7){c='o'}
            if(v>=0.7&&v<0.8){c='*'}
            if(v>=0.8&&v<0.9){c='&'}
            if(v>=0.9){c='-'}
            textSize(fSize*v)
            text(c,x,y)
        }
    }
}

function showcredits() {
    var c = "al.my.re :: p5.js :: CamBam Stick [gaspe 003). May 2024]"
    text(c, posx, posy)
}