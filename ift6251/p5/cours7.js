function preload() {
    font = loadFont("./FreeMono.otf");
}

var w, h, cnv, stepsize, x, y, p
var dust=[]
var amp=42


function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    x = (windowWidth - w) / 2;
    y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    stepsize = 7
    x=0
    y=random(h)
    for(var i=0;i<amp;i++){
        dust.push(new Particle)
    }
}

function draw() {
    background(0, 0, 0, 10)
    noFill()
    stroke(0,0,100)
    rect(0,0,w,h)
    for(var i=0;i<amp;i++){
        dust[i].update()
        dust[i].display()
    }

}