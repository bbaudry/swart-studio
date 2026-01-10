
var w, h
var cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    noLoop()
}

function centerCanvas() {
    var x = (windowWidth - 800) / 2;
    var y = (windowHeight - 800) / 2;
    cnv.position(x, y);
}

function draw() {
    background(0,0,0)
    stroke(0,0,100)
    noFill()
    rect(0,0,w,h)
    fill(50,100,100)
    noStroke()
    let cx,cy,vera,molnar,jaune,pas
    cx=w*0.5
    cy=0.5*h
    vera=300//random(42,300)
    molnar=17
    jaune=true
    pas=Math.floor(random(27,42))
    for(vera=300;vera>42;vera-=pas){
        jaune?fill(230,100,100):fill(0,0,0)
    quad(cx-vera+random(-molnar,molnar),cy-vera+random(-molnar,molnar),
        cx+vera+random(-molnar,molnar),cy-vera+random(-molnar,molnar),
        cx+vera+random(-molnar,molnar),cy+vera+random(-molnar,molnar),
        cx-vera+random(-molnar,molnar),cy+vera+random(-molnar,molnar))
        jaune=!jaune
}
}