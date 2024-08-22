function savesvg() {
    save("noline001.svg");
}

function savepng() {
    save("noline001.png");
}

var font, xoff,yoff,inc,shake, h1,h2,h3,stepsize, nbhorizontalsteps, nbvertcicalsteps
var fSize = 14
var palette = [{ h1: 280, h2: 300, h3: 330 }, { h1: 180, h2: 30, h3: 200 }, { h1: 280, h2: 30, h3: 250 }, { h1: 270, h2: 0, h3: 90 }]
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('noline001.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    alice()
    noLoop()
}

function alice(){
    var cx=leftmargin + actualwidth*0.5
    var cy=topmargin + actualheight*0.5
    ellipse(cx,cy,72,72)
    //ellipse(cx,cy,actualwidth,actualwidth)
    var a1, x1, y1, a2, x2, y2, a3, x3, y3, a4, x4, y4, off, r1, r2
    r1=actualwidth*0.5
    off=17
    a1=random(-off,off)
    a2=90+random(-off,off)
    a3=180+random(-off,off)
    a4=270+random(-off,off)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a1,a2,72,r2)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a2,a3,72,r2)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a3,a4,72,r2)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a4,a1,72,r2)
}

function section(cx,cy,a1,a2,r1,r2){
    arc(cx,cy,r2,r2,radians(a1),radians(a2))
    arc(cx,cy,r2-42,r2,radians(a1),radians(a2))
    arc(cx,cy,r2-99,r2,radians(a1),radians(a2))
    arc(cx,cy,r1,r1,radians(a1),radians(a2))
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}