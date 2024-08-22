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
    a1=random(-off,off);x1=cx+r1*cos(radians(a1));y1=cy+r1*sin(radians(a1));line(cx,cy,x1,y1);ellipse(x1,y1,7,7);
    a2=90+random(-off,off);x2=cx+r1*cos(radians(a2));y2=cy+r1*sin(radians(a2));line(cx,cy,x2,y2);ellipse(x2,y2,7,7)
    a3=180+random(-off,off);x3=cx+r1*cos(radians(a3));y3=cy+r1*sin(radians(a3));line(cx,cy,x3,y3);ellipse(x3,y3,7,7)
    a4=270+random(-off,off);x4=cx+r1*cos(radians(a4));y4=cy+r1*sin(radians(a4));line(cx,cy,x4,y4);ellipse(x4,y4,7,7)
    r2=actualwidth*random(0.81,0.97); arc(cx,cy,r2,r2,radians(a1),radians(a2))
    r2=actualwidth*random(0.81,0.97); arc(cx,cy,r2,r2,radians(a2),radians(a3))
    r2=actualwidth*random(0.81,0.97); arc(cx,cy,r2,r2,radians(a3),radians(a4))
    r2=actualwidth*random(0.81,0.97); arc(cx,cy,r2,r2,radians(a4),radians(a1))
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}