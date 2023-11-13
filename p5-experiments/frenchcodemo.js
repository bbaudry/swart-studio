
var w, h
var cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
    noLoop()
}
 
function centerCanvas() {
    var x = (windowWidth - 800) / 2;
    var y = (windowHeight - 800) / 2;
    cnv.position(x, y);
}

function draw() {
    var cx=w/2
    var cy=h/2
    fill(50,100,100)
    var vera
    var molnar = 25
    var density =40
    
    for(vera=w/2;vera>0;vera-=density){
        if(vera%(density*2)==0){fill(50,100,100)}
        else{fill(0,0,0)}
    quad(cx-random(vera-molnar,vera+molnar),cy-random(vera-molnar,vera+molnar),
        cx+random(vera-molnar,vera+molnar),cy-random(vera-molnar,vera+molnar),
        cx+random(vera-molnar,vera+molnar),cy+random(vera-molnar,vera+molnar),
        cx-random(vera-molnar,vera+molnar),cy+random(vera-molnar,vera+molnar))
}}