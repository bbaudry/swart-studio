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
    //pyramide(leftmargin,topmargin,rightmargin,topmargin,rightmargin,bottommargin,leftmargin,bottommargin)
}

function wheel(x,y,diam){
    var res=0.01
    for(var i=res;i<=1;i+=res){
        ellipse(x,y,diam*i,diam*i)
    }
}

function grid(x1,y1,x2,y2,x3,y3,x4,y4,d){
    var proba = 0.42
    quad(x1,y1,x2,y2,x3,y3,x4,y4)
    if(d<2){
        console.log("quad "+d)
        d++
        var dx,dy
        dx=x1+(x2-x1)*random(0.21,0.42)
        dy=y1+(y4-y1)*random(0.21,0.42)
        if(random()<proba){
            grid(x1,y1,dx,y2,dx,dy,x4,dy,d)
        }
        else{
            pyramide(x1,y1,dx,y2,dx,dy,x4,dy)
        }
        if(random()<proba){
            grid(dx,y1,x2,y2,x3,dy,dx,dy,d)
        }
        else{
            pyramide(dx,y1,x2,y2,x3,dy,dx,dy)
        }
        if(random()<proba){
            grid(dx,dy,x2,dy,x3,y3,dx,y4,d)
        }
        else{
            pyramide(dx,dy,x2,dy,x3,y3,dx,y4)
        }
        if(random()<proba){
            grid(x1,dy,dx,dy,dx,y3,x4,y4,d)
        }
        else{
            pyramide(x1,dy,dx,dy,dx,y3,x4,y4)
        }
    }
    else{
        pyramide(x1,y1,x2,y2,x3,y3,x4,y4)
    }
}

function pyramide(x1,y1,x2,y2,x3,y3,x4,y4){
    var cx,cy,ix1,iy1,ix2,iy2,ix3,iy3,ix4,iy4
    cx = x1 + (x2-x1)*random(0.48,0.52)
    cy = y1 + (y4-y1)*random(0.48,0.52)
    for (t = 0; t < 1; t += 0.1) {
        ix1 = (1 - t) * x1 + (t * cx);
        iy1 = (1 - t) * y1 + (t * cy);
        ix2 = (1 - t) * x2 + (t * cx);
        iy2 = (1 - t) * y2 + (t * cy);
        ix3 = (1 - t) * x3 + (t * cx);
        iy3 = (1 - t) * y3 + (t * cy);
        ix4 = (1 - t) * x4 + (t * cx);
        iy4 = (1 - t) * y4 + (t * cy);
        quad(ix1,iy1,ix2,iy2,ix3,iy3,ix4,iy4)
    }

}