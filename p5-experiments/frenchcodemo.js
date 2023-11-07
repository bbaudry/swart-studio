
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
    var cx = w/2
    var cy = h/2
    var vera = w/4
    var molnar = 15
    var step = 40
    noStroke()//stroke(0,0,0)
    for(vera=w/2;vera>0;vera-=step){
        if(vera%(step*2)==0){fill(50,100,100)}
        else{fill(0,0,0)}
    quad(cx-random(vera-molnar,vera+molnar),cy-random(vera-molnar,vera+molnar),
        cx+random(vera-molnar,vera+molnar), cy-random(vera-molnar,vera+molnar),
        cx+random(vera-molnar,vera+molnar), cy+random(vera-molnar,vera+molnar),
        cx-random(vera-molnar,vera+molnar), cy+random(vera-molnar,vera+molnar)
    )
}
}