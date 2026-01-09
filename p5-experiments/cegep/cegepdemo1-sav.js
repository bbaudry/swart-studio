
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
    var cx,cy, pas, vera, molnar, jaune
    noStroke()
    cx=w*0.5
    cy=h*0.5
    fill(50,100,100)
    vera=300//random(42,300)
    molnar=20
    pas=20
    jaune=true
    for(vera=350;vera>pas;vera-=pas){
        jaune?     fill(50,100,100):fill(50,0,0)

        quad(cx-vera+random(-molnar,molnar),cy-vera+random(-molnar,molnar),
        cx+vera+random(-molnar,molnar),cy-vera+random(-molnar,molnar),
        cx+vera+random(-molnar,molnar),cy+vera+random(-molnar,molnar),
        cx-vera+random(-molnar,molnar),cy+vera+random(-molnar,molnar)
    )
    jaune=!jaune}

}