function savesvg() {
    save("sapin001.svg");
}

function savepng() {
    save("sapin001.png");
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
}

function draw() {
    background(0,0,100)
    stroke(0, 0, 0)
    noFill()
    //drawframe()
    drawart()
    noLoop()
}

function drawart() {
    var cx1, cy1, cx2, cy2, diam
    cx1 = leftmargin + actualwidth * 0.48
    cy1 = topmargin + actualheight * 0.48
    cx2 = leftmargin + actualwidth * 0.52
    cy2 = topmargin + actualheight * 0.52
    diam = actualheight * 0.84
    //wheel(cx1+2, cy1, diam*0.99)
    //wheel(cx2, cy2, diam*1.01)
    grid(leftmargin,topmargin,rightmargin,topmargin,rightmargin,bottommargin,leftmargin,bottommargin,0)
}

function wheel(x,y,diam){
    var res=0.01
    for(var i=res;i<=1;i+=res){
        ellipse(x,y,diam*i,diam*i)
    }
}

function grid(x1,y1,x2,y2,x3,y3,x4,y4,d){
    var proba = 0.92
    quad(x1,y1,x2,y2,x3,y3,x4,y4)
    if(d<2){
        console.log("quad "+d)
        d++
        var dx,dy
        dx=x1+(x2-x1)*0.3
        dy=y1+(y4-y1)*0.3
        if(random()<proba){
            grid(x1,y1,dx,y2,dx,dy,x4,dy,d)
        }
        if(random()<proba){
            grid(dx,y1,x2,y2,x3,dy,dx,dy,d)
        }
        if(random()<proba){
            grid(dx,dy,x2,dy,x3,y3,dx,y4,d)
        }
        if(random()<proba){
            grid(x1,dy,dx,dy,x3,y3,x4,y4,d)
        }
    }
}