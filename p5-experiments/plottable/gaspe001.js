function savesvg() {
    save("gaspe001.svg");
}

function savepng() {
    save("gaspe001.png");
}

var font, posx, posy, knobs = [], grid = []
var fSize = 9
var stepsize = Math.floor(actualwidth * 0.02)
var nbhorizontalsteps = Math.floor(actualwidth / stepsize)
var nbvertcicalsteps = Math.floor(actualheight / stepsize)
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe001.js');

}

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    initgrid()
    drawgrid()
    textFont(font)
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
    var inc=0.2
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff+=inc
        xoff=0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            xoff+=inc
            grid.push(noise(xoff,yoff))
        }
    }
/*    inc=0.1
    for (j = nbvertcicalsteps*0.5; j < nbvertcicalsteps; j++) {
        yoff+=inc
        xoff=0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            xoff+=inc
            grid.push(noise(xoff,yoff))
        }
    }*/
}

function drawgrid() {
    for (j = 0; j < nbvertcicalsteps; j++) {
        for (i = 0; i < nbhorizontalsteps; i++) {
            var index=i+j*nbhorizontalsteps
            var v = grid[index]
            var x=leftmargin+i*stepsize
            var y=topmargin+j*stepsize
            var ratio
            if(v<0.1){ratio=0.1}
            if(v>=0.1&&v<0.2){ratio=0.14}
            if(v>=0.2&&v<0.3){ratio=0.17}
            if(v>=0.3&&v<0.4){ratio=0.2}
            if(v>=0.4&&v<0.5){ratio=0.23}
            if(v>=0.5&&v<0.6){ratio=0.26}
            if(v>=0.6&&v<0.7){ratio=0.29}
            if(v>=0.7&&v<0.8){ratio=0.32}
            if(v>=0.8&&v<0.9){ratio=0.35}
            if(v>=0.9){ratio=0.38}
            rect(x+stepsize*ratio,y+stepsize*ratio,stepsize*(1-ratio*2),stepsize*(1-ratio*2))
        }
    }
}

function showcredits() {
    var c = "al.my.re :: p5.js :: CamBam Stick [gaspe 001). April 2024]"
    text(c, posx, posy)
}