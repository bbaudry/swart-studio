
var w, h
var cnv
var leftmargin,rightmargin,topmargin,bottommargin,actualheight,actualwidth

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(windowHeight, windowHeight).mousePressed(savepng);;
    centerCanvas();
    leftmargin=Math.floor(w*0.15)
    rightmargin=Math.floor(w*0.85)
    topmargin=Math.floor(h*0.15)
    bottommargin=Math.floor(h*0.85)
    actualwidth=rightmargin-leftmargin
    actualheight=bottommargin-topmargin
    colorMode(HSB, 360, 100, 100, 250);
}


function savepng(){
    save("mtlmood"+millis()+".png")
}



function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 0)
    vera()
    noLoop()
}

function vera(){
    var x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6
    x1=leftmargin+84
    y1=bottommargin-30
    x2=leftmargin+10
    y2=bottommargin-10
    x3=leftmargin+42
    y3=topmargin+84
    x4=leftmargin+111
    y4=topmargin+444
    fill(50,100,100)
    quad(x1,y1,x2,y2,x3,y3,x4,y4)
}