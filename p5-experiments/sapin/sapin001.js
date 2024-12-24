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
    if (random()<0.5){
    grid(leftmargin,topmargin,rightmargin,topmargin,rightmargin,bottommargin,leftmargin,bottommargin,sunrise,0)
}
else{
    grid(leftmargin,topmargin,rightmargin,topmargin,rightmargin,bottommargin,leftmargin,bottommargin,pyramide,0)
}
}

function wheel(x1,y1,x2,y2,x3,y3,x4,y4){
    var res=0.1
    var cx1, cy1, cx2, cy2, diam
    cx1 = x1+(x2-x1) * 0.48
    cy1 = y1+(y4-y1) * 0.48
    cx2 = x1+(x2-x1) * 0.52
    cy2 = y1+(y4-y1) * 0.52
    if((y4-y1)>(x2-x1)){
        diam = (x2-x1) * 0.84
    }
    else{
        diam = (y4-y1) * 0.84
    }
    for(var i=res;i<=1;i+=res){
        ellipse(cx1,cy1,diam*i,diam*i)
        ellipse(cx2,cy2,diam*i,diam*i)
    }
//    quad(x1,y1,x2,y2,x3,y3,x4,y4)
}

function grid(x1,y1,x2,y2,x3,y3,x4,y4,dessin,d){
    var proba = 0.52
    if(d<2){
        console.log("quad "+d)
        d++
        var dx,dy
        dx=x1+(x2-x1)*random(0.21,0.42)
        dy=y1+(y4-y1)*random(0.31,0.42)
        if(random()<proba){
            grid(x1,y1,dx,y2,dx,dy,x4,dy,dessin,d)
        }
        else{
            dessin(x1,y1,dx,y2,dx,dy,x4,dy)
        }
        if(random()<proba){
            grid(dx,y1,x2,y2,x3,dy,dx,dy,dessin,d)
        }
        else{
            dessin(dx,y1,x2,y2,x3,dy,dx,dy)
        }
        if(random()<proba){
            grid(dx,dy,x2,dy,x3,y3,dx,y4,dessin,d)
        }
        else{
            dessin(dx,dy,x2,dy,x3,y3,dx,y4)
        }
        if(random()<proba){
            grid(x1,dy,dx,dy,dx,y3,x4,y4,dessin,d)
        }
        else{
            dessin(x1,dy,dx,dy,dx,y3,x4,y4)
        }
    }
    else{
        dessin(x1,y1,x2,y2,x3,y3,x4,y4)
    }
}

function pyramide(x1,y1,x2,y2,x3,y3,x4,y4){
    var cx,cy,ix1,iy1,ix2,iy2,ix3,iy3,ix4,iy4
    cx = x1 + (x2-x1)*random(0.3,0.7)
    cy = y1 + (y4-y1)*random(0.3,0.7)
    var xratio = random(0.05,0.21)
    var yratio = random(0.21,0.42)
    for (t = 0; t < 1; t += 0.1) {
        ix1 = (1 - t) * x1 + (t * cx);
        iy1 = (1 - t) * y1 + (t * cy);
        ix2 = (1 - t) * x2 + (t * cx);
        iy2 = (1 - t) * y2 + (t * cy);
        ix3 = (1 - t) * x3 + (t * cx);
        iy3 = (1 - t) * y3 + (t * cy);
        ix4 = (1 - t) * x4 + (t * cx);
        iy4 = (1 - t) * y4 + (t * cy);
        line(ix1,iy1,ix2,iy2)
        var diffy=iy4-iy1
        var diffx=ix2-ix1
        beginShape()
        vertex(ix1,iy1)
        bezierVertex(ix1+diffx*xratio,iy1+diffy*yratio,ix1-diffx*xratio,iy1+diffy*(1-yratio),ix4,iy4)
        endShape()
        line(ix3,iy3,ix4,iy4)
        beginShape()
        vertex(ix2,iy2)
        bezierVertex(ix2+diffx*xratio,iy2+diffy*yratio,ix2-diffx*xratio,iy2+diffy*(1-yratio),ix2,iy3)
        endShape()
    }
}

function sunset(x1,y1,x2,y2,x3,y3,x4,y4){
    var ox,oy,dx,dy,t,inc
    t=0
    inc=0.01
    while (t < 1) {
        ox = (1 - t) * x1 + (t * x4);
        oy = (1 - t) * y1 + (t * y4);
        dx = (1 - t) * x2 + (t * x3);
        dy = (1 - t) * y2 + (t * y3);
        line(ox,oy,dx,dy)
        t+=inc
        inc+=0.002
    }
}

function sunrise(x1,y1,x2,y2,x3,y3,x4,y4){
    var ox,oy,dx,dy,diffx,diffy,t,inc
    diffx=x2-x1
    diffy=y4-y1
    t=0
    inc=diffy*0.001
    while (t < 1) {
        ox = (1 - t) * x1 + (t * x4);
        oy = (1 - t) * y1 + (t * y4);
        dx = (1 - t) * x2 + (t * x3);
        dy = (1 - t) * y2 + (t * y3);
        beginShape()
        vertex(ox,oy)
        bezierVertex(ox+diffx*0.1*t,oy-diffy*0.2*t,ox+diffx*0.9*t,oy+diffy*0.2*t,dx,dy)
        endShape()
        beginShape()
        vertex(ox,oy)
        bezierVertex(ox+diffx*0.45*t,oy-diffy*0.2*t,ox+diffx*0.45*t,oy+diffy*0.2*t,dx,dy)
        endShape()
        t+=inc
        inc+=0.001
    }

}