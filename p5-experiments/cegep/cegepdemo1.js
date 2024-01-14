
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
    var cx,cy,vera, molnar, density,couleur
    cx=w*0.5
    cy=h*0.5
    vera=w*0.2
    molnar=21
    couleur=true
    density=63
    for(vera=w*0.5;vera>0;vera-=density){
        if(couleur){fill(50,100,100);couleur=false}
    else{fill(0,0,0);couleur=true}
    quad(cx-random(vera-molnar,vera+molnar),cy-random(vera-molnar,vera+molnar),
        cx+random(vera-molnar,vera+molnar),cy-random(vera-molnar,vera+molnar),
        cx+random(vera-molnar,vera+molnar),cy+random(vera-molnar,vera+molnar),
        cx-random(vera-molnar,vera+molnar),cy+random(vera-molnar,vera+molnar))
    }
}