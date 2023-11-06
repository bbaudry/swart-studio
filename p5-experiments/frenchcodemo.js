
var w, h 
var cnv

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(windowHeight, windowHeight);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}

function draw() {
    background(0, 0, 0)
    noStroke();
    strokeWeight(1)
    fill(0,0,0)
    var cx=w/2
    var cy=h/2
    var r = 20
    var density = 20
    for(let off=200; off>0; off-=density){
        if(off%(density*2)==0){    fill(0,0,0)        }
        else{    fill(50,100,100)        }
        quad(cx-(random(off-r,off+r)),cy-(random(off-r,off+r)),cx+(random(off-r,off+r)),cy-(random(off-r,off+r)),cx+(random(off-r,off+r)),cy+off,cx-(random(off-r,off+r)),cy+(random(off-r,off+r)))
    }

    noLoop()
}