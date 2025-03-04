
var w, h
var cnv
var leftmargin,rightmargin,topmargin,bottommargin,actualheight,actualwidth

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(windowHeight, windowHeight);
    centerCanvas();
    leftmargin=Math.floor(w*0.15)
    rightmargin=Math.floor(w*0.85)
    topmargin=Math.floor(h*0.15)
    bottommargin=Math.floor(h*0.85)
    actualwidth=rightmargin-leftmargin
    actualheight=bottommargin-topmargin
    colorMode(HSB, 360, 100, 100, 250);
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 0)
    fill(0,0,100,30)
    var x2=leftmargin+Math.floor(random(actualwidth))
    nucleus(leftmargin,topmargin,x2,bottommargin,topmargin,bottommargin)
    noLoop()
}

function nucleus(x1,y1,x2,y2,x3,y3) {
    noFill()
    stroke(0,0,100)
    var cx= leftmargin+actualwidth*0.5
    var cy= topmargin+actualheight*0.7
    x1=cx+actualwidth*0.7*cos(radians(230))
    y1=cy+actualwidth*0.7*sin(radians(230))
    x2=cx+actualwidth*0.5*cos(radians(50))
    y2=cy+actualwidth*0.5*sin(radians(50))
    x3=cx+actualwidth*0.5*cos(radians(130))
    y3=cy+actualwidth*0.5*sin(radians(130))
    triangle(x1,y1,x2,y2,x3,y3)

    x1=cx+actualwidth*0.68*cos(radians(228))
    y1=cy+actualwidth*0.68*sin(radians(228))
    x2=cx+actualwidth*0.48*cos(radians(48))
    y2=cy+actualwidth*0.48*sin(radians(48))
    x3=cx+actualwidth*0.48*cos(radians(130))
    y3=cy+actualwidth*0.48*sin(radians(130))
    triangle(x1,y1,x2,y2,x3,y3)
    ellipse(cx,cy,7,7)
}

