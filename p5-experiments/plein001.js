
var w, h, inc
var cnv

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(windowHeight, windowHeight);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    inc=0
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 0)
noStroke()
    noFill()
    rect(0,0,w,h)
    translate(w*0.5,h*0.5)
    fill(300,100,100,150)
    spirale(inc)
    inc+=0.01
//    noLoop()
}

function spirale(inc){
    var x,y,taille
    taille=w*0.2
    var angle=0

    for(var r=10;r<w*0.5;r+=5){
        x=r*cos(radians(angle))
        y=r*sin(radians(angle))
        ellipse(x,y,taille,taille)
        angle+=inc
    }
}
