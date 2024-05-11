function savesvg() {
    save("gaspe004.svg");
}

function savepng() {
    save("gaspe004.png");
}

var font, posx, posy, knobs = [], grid = []
var fSize = 23
var stepsize = Math.floor(actualwidth * 0.01)
var nbhorizontalsteps = Math.floor(actualwidth / stepsize)
var nbvertcicalsteps = Math.floor(actualheight / stepsize)
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe004.js');

}

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    stroke(180,100,100);section()
    stroke(180,100,100);stripes()
    stroke(30,100,100);backgrid()
    //testspiral()
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
                //rect(x,y,stepsize,stepsize)
                ellipse(x+stepsize*0.5,y+stepsize*0.5,stepsize*v,stepsize*v)}
        }
    }
}

function section(){
    var x1,y1,x2,y2,x3,y3,xi,yi,xd,yd
    x1=leftmargin
    y1=topmargin
    x2=leftmargin
    y2=topmargin+random(0.7,0.8)*actualheight
    x3=leftmargin+random(0.6,0.7)*actualwidth
    y3=topmargin
    for(t1=0;t1<1;t1+=0.01){
        xi=(1 - t1) * x1 + (t1 * x3)
        yi=topmargin
        xd=leftmargin
        yd=(1 - t1) * y1 + (t1 * y2)
        line(xi,yi,xd,yd)
    }
}

function stripes(){
    var x1,y1,x2,y2,x3,y3,x4,y4,xi,yi,xd,yd
    var xratio=random(0.21,0.42)
    x1=leftmargin+xratio*actualwidth
    y1=topmargin+random(0.7,0.8)*actualheight
    x2=leftmargin
    y2=bottommargin
    x3=rightmargin-xratio*actualwidth
    y3=bottommargin
    x4=rightmargin
    y4=topmargin+random(0.4,0.5)*actualheight
    bottom(x1,y1,x2,y2,x3,y3,x4,y4)
    y1-=0.03*actualheight
    x2=leftmargin+random(0.7,0.8)*actualwidth
    y2=topmargin
    x3=rightmargin
    y3=topmargin
    y4-=0.03*actualheight
    quad(x1,y1,x2,y2,x3,y3,x4,y4)
}

function bottom(x1,y1,x2,y2,x3,y3,x4,y4){
    //quad(x1,y1,x2,y2,x3,y3,x4,y4)
    let off=3
    for(i=0;i<47;i++){
        line(x1+(i*off),y1+(i*off),x2+(i*1.5*off),y2-(i*off))
        line(x2+(i*1.5*off),y2-(i*off),x3-(i*off),y3-(i*off))
        line(x3-(i*off),y3-(i*off),x4-(i*off),y4+((i+1)*off))
        line(x4-(i*off),y4+((i+1)*off),x1+((i+1)*off),y1+((i+1)*off))  
    }

}

function testspiral(){
    let off=5
    var x1,y1,x2,y2,x3,y3,x4,y4
    x1=200;y1=200
    x2=100;y2=400
    x3=400;y3=400
    x4=400;y4=200
    for(i=0;i<7;i++){
        line(x1+(i*off),y1+(i*off),x2+(i*1.5*off),y2-(i*off))
        line(x2+(i*1.5*off),y2-(i*off),x3-(i*off),y3-(i*off))
        line(x3-(i*off),y3-(i*off),x4-(i*off),y4+((i+1)*off))
        line(x4-(i*off),y4+((i+1)*off),x1+((i+1)*off),y1+((i+1)*off))  
    }

}

function showcredits() {
    var c = "al.my.re :: p5.js :: CamBam Stick [gaspe 003). May 2024]"
    text(c, posx, posy)
}