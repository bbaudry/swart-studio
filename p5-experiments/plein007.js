
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var resolution, hu

function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h);
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.75)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(3);
    penwidth = 0.04 * 96 // 0.04 inch is 1 mm, the width of stabilo 68/32
    resolution = Math.floor(random(3,7))
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    stroke(0, 100, 100)
    vasa()
    //save("plein006.png")
    noLoop()
}

function vasa(){
    var step = Math.floor(actualwidth/resolution)
    for(var i=0;i<resolution;i++){
        x=leftmargin+i*step
        for(var j=0;j<resolution;j++){
            y=topmargin+j*step
            tiltquad(x,y,step)
        }
    }
}

function tiltquad(x,y,step){
    var off=1
    var inc=penwidth+off
    var a=random(-3.6,3.6)
    push()
    translate(a,a)
    rotate(radians(a))
    for(var i=0;i<step;i+=inc){
        line(x,y,x+step,y)
        y+=inc
    }
    pop()
}