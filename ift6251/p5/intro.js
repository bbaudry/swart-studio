var w, h, cnv, i, font, fSize
function preload() {
    font = loadFont("./FreeMono.otf");
}

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    i = 0
    fSize = 84
    textFont(font)
    textSize(fSize)
}

function draw() {
    background(0, 0, 0)
    withcolors()
}

let xoff=0.0
var filename
function withcolors() {
    translate(w * 0.5, h * 0.5)
    noStroke()
    fill(0, 0,100, 199)
    var cours = "algorithmic art"
    rect(-textWidth(cours)*0.5, -h * noise(xoff)*0.5, textWidth(cours), h * noise(xoff))
    if (i > 30 && i < 330) {
        fill(0, 0,100, 199)
        rect(-w * noise(xoff) * 0.5, -h * 0.05, w * noise(xoff), h * 0.1)
    }
    if (i > 90 && i < 270) {
        fill(0, 0,100, 199)
        rect(-w * noise(xoff) * 0.5, -h * 0.3, w * noise(xoff) , h * 0.6)
    }
    if (i > 150 && i < 210) {
        fill(0, 0,0)
        rect(-w * noise(xoff) * 0.5, -h * noise(xoff) * 0.5, w * noise(xoff) , h * noise(xoff) )
    }
    xoff = map(cos(radians(i)), -1, 1, 0, 4);
    if(i%84<53){
        fill(0,0,100); stroke(0,0,100)
    }
    else{
    if (random()<0.5){fill(0,0,100); stroke(0,0,100)}
    else{fill(0,0,0); stroke(0,0,0)}}
    text(cours, -textWidth(cours)*0.5, fSize*0.25 )
    i += 1
    if (i % 360 == 0) { i = 0;}
}
