function savesvg() {
    save("noline001.svg");
}

function savepng() {
    save("noline001.png");
}

var font, xoff,yoff,inc,shake, h1,h2,h3,stepsize, nbhorizontalsteps, nbvertcicalsteps
var fSize = 14
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('noline001.js');
}

function draw() {
    background(0, 0, 100)
    alice()
    noLoop()
}

function alice(){
    translate(leftmargin+actualwidth*0.5,topmargin+actualheight*0.5)
    var x,y,r1,r2
    r1=20
    doublecircle(0,0,r1,r1)
    r2=20
    for(var i=0;i<6;i++){
        x=r2*cos(radians(i*60))
        y=r2*sin(radians(i*60))
        doublecircle(x,y,r1,r1)
    }
    r2+=15
    rotate(radians(30))
    for(var i=0;i<6;i++){
        x=r2*cos(radians(i*60))
        y=r2*sin(radians(i*60))
        doublecircle(x,y,r1,r1)
    }
    r2+=5
    rotate(radians(30))
    for(var i=0;i<6;i++){
        x=r2*cos(radians(i*60))
        y=r2*sin(radians(i*60))
        doublecircle(x,y,r1,r1)
    }
    r2+=15
    rotate(radians(15))
    for(var i=0;i<12;i++){
        stroke(i*20,100,100)
        x=r2*cos(radians(i*30))
        y=r2*sin(radians(i*30))
//        ellipse(x,y,r1,r1)
    }
    r2+=1
    rotate(radians(15))
    for(var i=0;i<12;i++){
        stroke(i*20,100,100)
        x=r2*cos(radians(i*30))
        y=r2*sin(radians(i*30))
//        ellipse(x,y,r1,r1)
    }

}

function doublecircle(x,y,r,r){
    strokeWeight(3)
    stroke(0,50,80)
    ellipse(x,y,r,r)
    strokeWeight(0.5)
    stroke(0,0,0)
    ellipse(x,y,r,r)
}



function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}