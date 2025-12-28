let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.001; yinc = 0.1

function hal() {
    rect(leftmargin, topmargin, actualwidth, actualheight)
    push()
    translate(leftmargin + actualwidth * 0.5, topmargin + actualheight * 0.5)
    //ellipse(0,0,42,42)
    multihelice()
    pop()
}

function multihelice(){
    let cx,cy,x,y,inrad,inangle,inangleinc,inradinc,outrad,outangle,outangleinc,outradinc,diam
    inangle=0
    inrad=42
    inangleinc=random(1,3)
    inradinc=0.1
    outangle=0
    outrad=actualwidth*0.1
    outangleinc=0.6
    outradinc=0.1
    diam=142*noise(xoff);xoff+=xinc
    for(let i=0;i<2.5*360;i++){
        cx=inrad*cos(inangle)
        cy=inrad*sin(inangle)
        x=cx+outrad*cos(outangle)
        y=cy+outrad*sin(outangle)
    //if(x-leftmargin<diam*0.5 || rightmargin-x<diam*0.5){text("x: "+x+"; l: "+leftmargin+"; r: "+rightmargin,0,actualheight*0.55);break;}
        ellipse(x,y,diam,diam)
        inangle+=inangleinc;
        inrad+=inradinc
        outangle+=outangleinc
        outrad+=0.3*noise(xoff);xoff+=xinc
    diam=142*noise(xoff);xoff+=xinc
    }
}

function helice() {
    let angle, diameter, cx, cy, rayon
    rayon = 0.5 * actualwidth * (1 - 2 * noise(xoff)); xoff += xinc
    diameter = actualwidth * 0.3 * noise(xoff); xoff += xinc
    angle = 360 * (1 - 2 * noise(yoff)); yoff += yinc
    for (let i = 0; i < 365; i++) {
        console.log(angle+" "+rayon)
        cx = rayon * cos(angle)
        cy = rayon * sin(angle)
        ellipse(cx, cy, diameter, diameter)
        //ellipse(cx,cy,3,3)
        rayon =0.5 * actualwidth * (1 - 2 * noise(xoff)); xoff += xinc
        diameter =Math.abs(0.2*actualwidth) * noise(xoff); xoff += xinc
        angle = 720* (1 - 2 * noise(yoff)); yoff += yinc
    }
    noLoop()
}


