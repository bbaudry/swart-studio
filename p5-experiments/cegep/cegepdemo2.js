
var w, h
var cnv
var x, y
var xoff, yoff, xinc
var step, stepx, stepy

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    //centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    noFill();
    background(0, 0, 0)
    xoff=0.0
    xinc=0.0001}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}

function draw() {
    background(0, 0, 0)
    ikeda(0,0,w*0.5,true)
    ikeda(w * 0.5, 0,w*0.5,false)
    //noLoop()
}


function ikeda(cx, cy, ikedaw,left) {
    let y=cy
    let ryoji=h*0.05
    noStroke()
    if(left){
    while(y<h){
        random()<0.1?fill(0,0,100):fill(0,0,0)
        rect(cx,y,ikedaw,ryoji)
        y+=noise(xoff)*(h*0.001);xoff+=xinc
    }}
    else{
    while(y<h){
        random()<0.4?fill(0,0,100):fill(0,0,0)
        rect(cx,y,ikedaw,ryoji)
        y+=noise(xoff)*(h*0.2);xoff+=xinc
    }}
}