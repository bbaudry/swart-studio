
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
    translate(w*0.5,h*0.5)
    
    var vera 
    var molnar = 42
    var density =21  
    var color=true 
    for(vera=0.3*w;vera>0.1*w;vera-=density){
    if(color){
        fill(50,100,100)
        color=false
    }
    else{
        fill(0,0,0)
        color=true
    }
        quad(-vera+random(-molnar,molnar),-vera+random(-molnar,molnar),
        vera+random(-molnar,molnar),-vera+random(-molnar,molnar),
        vera+random(-molnar,molnar),vera+random(-molnar,molnar),
        -vera+random(-molnar,molnar),vera+random(-molnar,molnar)
    )
}
 
}