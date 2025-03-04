
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
    triangle(x1,y1,x2,y2,x3,y3)
    var t = 0.1
    x1++//= (1 - t) * x1 + (t * x3 );
    y1 = (1 - t) * y1 + (t * y3);
    x2 = (1 - t) * x2 + (t * x3);
    y3 = (1 - t) * y3 + (t * y1);
    y2 = y3
    triangle(x1,y1,x2,y2,x3,y3)
    x1++//= (1 - t) * x1 + (t * x3 );
    y1 = (1 - t) * y1 + (t * y3);
    x2 = (1 - t) * x2 + (t * x3);
    y3 = (1 - t) * y3 + (t * y1);
    y2 = y3
    triangle(x1,y1,x2,y2,x3,y3)
}

