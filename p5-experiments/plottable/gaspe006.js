function savesvg() {
    save("gaspe006.svg");
}

function savepng() {
    save("gaspe006.png");
}

var font, posx, posy, knobs = [], grid = []
var fSize = 12
var stepsize = Math.floor(actualwidth * 0.01)
var nbhorizontalsteps = Math.floor(actualwidth / stepsize)
var nbvertcicalsteps = Math.floor(actualheight / stepsize)
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe006.js');

}

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    section()
    stripes()
    stroke(0,100,100);backgrid()
    stroke(0,0,0)
    textFont(font)
    textSize(fSize)
    showknobs()
    showcode()
    showcredits()
    noLoop()
}

function saveknob(name, value) {
    knobs.push({ name: name, value: value.toFixed(2) })
}

function backgrid() {
    var yoff=0.0
    var xoff
    var inc=0.1
    var v,x,y
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff+=inc
        xoff=0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            x=leftmargin+i*stepsize
            y=topmargin+j*stepsize
            xoff+=inc
            v=noise(xoff,yoff)
            grid.push(v)
            if((v>0.11 && v<0.32) || (v>0.52 && v<0.73)){
                ellipse(x+stepsize*0.5,y+stepsize*0.5,stepsize*v,stepsize*v)}
        }
    }
}

function section(){
    var x1,y1,x2,y2,x3,y3,xi,yi,xd,yd,stepsize
    x1=leftmargin
    y1=topmargin
    x2=leftmargin
    y2=topmargin+random(0.5,0.9)*actualheight
    x3=leftmargin+random(0.4,0.7)*actualwidth
    y3=topmargin
    stepsize=random(0.003,0.007)
    for(t1=0;t1<1;t1+=stepsize){
        xi=(1 - t1) * x1 + (t1 * x3)
        yi=y3
        xd=x2
        yd=(1 - t1) * y1 + (t1 * y2)
        line(xi,yi,xd,yd)
    }
}

function stripes(){
    var x1,y1,x2,y2,x3,y3,x4,y4,xi,yi,xd,yd
    var xratio=random(0.1,0.42)
    x1=leftmargin+xratio*actualwidth
    y1=topmargin+random(0.4,0.9)*actualheight
    x2=leftmargin
    y2=bottommargin
    x3=rightmargin-xratio*actualwidth
    y3=bottommargin
    x4=rightmargin
    y4=topmargin+random(0.4,0.5)*actualheight
    bottompart(x1,y1,x2,y2,x3,y3,x4,y4)
    y1-=0.03*actualheight
    x2=leftmargin+random(0.7,0.8)*actualwidth
    y2=topmargin
    x3=rightmargin
    y3=topmargin
    y4-=0.03*actualheight
    toppart(x1,y1,x3,y3,x2,y2,x4,y4)
}

function toppart(x1,y1,x3,y3,x2,y2,x4,y4){
    var t1=0
    var xo,yo,xd,yd
    while(t1<1){
        xd=(1 - t1) * x1 + (t1 * x2)
        yd=(1 - t1) * y1 + (t1 * y2)
        xo=(1 - t1) * x4 + (t1 * x3)
        yo=(1 - t1) * y4 + (t1 * y3)
        line(xd,yd,xo,yo)
        t1+=random(0.001,0.015)
    }
}

function bottompart(x1,y1,x2,y2,x3,y3,x4,y4){
    let off=3
    for(i=0;i<47;i++){
        line(x1+(i*off),y1+(i*off),x2+(i*1.5*off),y2-(i*off))
        line(x2+(i*1.5*off),y2-(i*off),x3-(i*off),y3-(i*off))
        line(x3-(i*off),y3-(i*off),x4-(i*off),y4+((i+1)*off))
        line(x4-(i*off),y4+((i+1)*off),x1+((i+1)*off),y1+((i+1)*off))  
    }

}

function showcredits() {
    var c = "al.my.re :: p5.js :: CamBam Stick [gaspe 004). May 2024]"
    text(c, posx, posy)
}