
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 64
var res = 42
var xoff = 0.0
var xinc = 0.0001
var textx, textspeed, texty, begin, end, nbindex

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}
function setup() {
    getsvg()
    centerCanvas();
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 250);
}

function getsvg() {
    //letter paper
    w = Math.floor(96 * 8.5)
    h = Math.floor(96 * 11)
    console.log("w: " + w + "; h: " + h + "; window: " + windowWidth)

    cnv = createCanvas(w, h, SVG)//.mousePressed(savesvg);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0//(windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}


function savesvg() {
    save("clean.svg");
}


function draw() {
    background(0, 0, 100)
    console.log("w: " + w + "; h: " + h)
    noFill()
    stroke(0, 100, 100)
    strokeWeight(11)
    negativearrow()  
    strokeWeight(1)
    art()
}

function art(){
        push()
    translate(w*0.5,h*0.5)
    textFont(font)
    textSize(fSize)
    t="art algorithmique"
    rotate(270)
    text(t,-textWidth(t)*0.5,fSize*0.5)
    pop()
    noLoop()

}

function arrow() {
    let x1,y1,x2,y2,x3,y3,x4,y4
    // arrow head (x1,y1)=(x3,y3) to have a triangle
    x1=w*0.5;y1=42
    x2=w*0.1;y2=h*0.4
    x3=w*0.5;y3=42
    x4=w*0.9;y4=h*0.4
    hatchquad(x1,y1,x2,y2,x3,y3,x4,y4)

    // arrow tail
    x1=w*0.32;y1=h*0.4
    x2=w*0.37;y2=h*0.9
    x3=w*0.68;y3=h*0.4
    x4=w*0.63;y4=h*0.9
    hatchquad(x1,y1,x2,y2,x3,y3,x4,y4)
}

// draws 'around' the shape of an arrow
// the arrow appears in the absence of lines
function negativearrow() {
    let x1,y1,x2,y2,x3,y3,x4,y4
    // left of arrow head
    x1=w*0.05;y1=42
    x2=w*0.5;y2=42
    x3=w*0.05;y3=h*0.4
    x4=w*0.5;y4=42
    hatchquad(x1,y1,x2,y2,x3,y3,x4,y4)

    // right of arrow head
    x1=w*0.95;y1=42
    x2=w*0.5;y2=42
    x3=w*0.95;y3=h*0.4
    x4=w*0.5;y4=42
    hatchquad(x1,y1,x2,y2,x3,y3,x4,y4)

    //left of arrow tail
    x1=w*0.05;y1=h*0.4
    x2=w*0.32;y2=h*0.4
    x3=w*0.05;y3=h*0.95
    x4=w*0.37;y4=h*0.95
    hatchquad(x1,y1,x2,y2,x3,y3,x4,y4)

    //right of arrow tail
    x1=w*0.95;y1=h*0.4
    x2=w*0.68;y2=h*0.4
    x3=w*0.95;y3=h*0.95
    x4=w*0.63;y4=h*0.95
    hatchquad(x1,y1,x2,y2,x3,y3,x4,y4)
}

function hatchquad(x1,y1,x2,y2,x3,y3,x4,y4){
    let ox,oy,dx,dy
    for(let t=0;t<1;t+=0.01){
        ox=lerp(x1,x2,t)
        oy=lerp(y1,y2,t)
        dx=lerp(x3,x4,t)
        dy=lerp(y3,y4,t)
        if(random()<0.21){
            line(ox,oy,dx,dy)
        }
    }
}