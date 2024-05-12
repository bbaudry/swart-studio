function savesvg() {
    save("gaspe005.svg");
}

function savepng() {
    save("gaspe005.png");
}

var font, posx, posy, knobs = [], grid = []
var fSize = 15
var stepsize = Math.floor(actualwidth * 0.01)
var nbhorizontalsteps = Math.floor(actualwidth / stepsize)
var nbvertcicalsteps = Math.floor(actualheight / stepsize)
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe005.js');

}

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    backgrid()
    stroke(0,0,0)
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

function backgrid() {
    var yoff=0.0
    var xoff
    var inc=0.1
    var v,x,y
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff+=inc
        xoff=0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            x=leftmargin+i*stepsize
            y=topmargin+j*stepsize
            xoff+=inc
            v=noise(xoff,yoff)
            grid.push(v)
            if(v<0.1){arc(x,y,stepsize*2,stepsize*2,0,PI*0.5)}
            if(v>=0.1 &&v<0.2){arc(x+stepsize,y,stepsize*2,stepsize*2,PI*0.5,PI)}
            if(v>=0.2 &&v<0.3){arc(x+stepsize,y+stepsize,stepsize*2,stepsize*2,PI,PI*1.5)}
            if(v>=0.3 &&v<0.4){arc(x,y+stepsize,stepsize*2,stepsize*2,PI*1.5,PI*2)}
            if(v>=0.4 &&v<0.5){arc(x,y+stepsize*0.5,stepsize,stepsize,PI*1.5,PI*2.5)}
            if(v>=0.5 &&v<0.6){arc(x+stepsize,y+stepsize*0.5,stepsize,stepsize,PI*0.5,PI*1.5)}
            if(v>=0.6 &&v<0.7){arc(x+stepsize*0.5,y,stepsize,stepsize,0,PI)}
            if(v>=0.7 &&v<0.8){arc(x+stepsize*0.5,y+stepsize,stepsize,stepsize,PI,PI*2)}
            if(v>=0.8 &&v<0.9){ellipse(x+stepsize*0.5,y+stepsize*0.5,stepsize,stepsize)}
            if(v>=0.9){rect(x,y,stepsize,stepsize,v,v,v,v)}
        }
    }
}

function showcredits() {
    var c = "al.my.re :: p5.js :: CamBam Stick [gaspe 005). May 2024]"
    text(c, posx, posy)
}