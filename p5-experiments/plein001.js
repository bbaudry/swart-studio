
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
    stroke(0,100,100)
    noFill()
    rect(0,0,w,h)
    translate(w*0.5,h*0.5)
    fill(0,100,100)
    spirale()
}

function spirale(){
    var x,y,taille
    taille=3
    var angle=0
    for(var r=10;r<w*0.5;r+=0.05){
        x=r*cos(radians(angle))
        y=r*sin(radians(angle))
        ellipse(x,y,taille,taille)
        angle++
    }
}
