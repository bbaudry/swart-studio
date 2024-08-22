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
    var a1, a2, init, a4, off, r2, n, step
    n=random([2,3,5])
    off=17
    step=360/n
    init=random(-off,off)
    a1=init
    for(var i = 1;i<n;i++){
//        stroke(i*step,100,100)
        a2=i*step+random(-off,off)
        stroke(160,100,100);r2=actualwidth*random(0.81,0.97); section(cx,cy,a1,a2,r2)
        stroke(340,100,100);r2=actualwidth*random(0.81,0.97); section(cx,cy,a1,a2,r2)
        a1=a2
    }
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a1,init,r2)

    /*     a1=random(-off,off)
    a2=90+random(-off,off)
    a3=180+random(-off,off)
    a4=270+random(-off,off)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a1,a2,r2)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a2,a3,r2)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a3,a4,r2)
    r2=actualwidth*random(0.81,0.97); section(cx,cy,a4,a1,r2)
 */}

function section(cx,cy,a1,a2,r){
    var off = floor(random(7,13))
    var r1,r2
    r1=r
    for(var i=0;i<33;i++){
        r1-=off+random(i)
        arc(cx,cy,r1,r-(i*off),radians(a1),radians(a2))
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}