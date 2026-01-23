let xoff, xinc
xoff = 0.0;
xinc = 0.001;

function hal(x,y,drawwidth,drawheight) {
    //rect(x, y, drawwidth, drawheight)
    push()
    translate(x + drawwidth * 0.5, y + drawheight * 0.5)
    victor(drawwidth,drawheight)
    pop()
}

function victor(drawwidth,drawheight){
    let x1,y1,x2,y2,x3,y3,x4,y4,angle,angleinc,angleinit,rayon
    rayon=drawwidth*0.5
    angle=Math.floor(random(1,7))
    angleinit=angle
    angleinc=1
    while(angle<90-angleinit){
        x1=rayon*cos(angle)
        y1=rayon*sin(angle)
        x2=rayon*cos(180-angle)
        y2=rayon*sin(180-angle)
        x3=rayon*cos(180+angle)
        y3=rayon*sin(180+angle)
        x4=rayon*cos(-angle)
        y4=rayon*sin(-angle)
        quad(x1,y1,x2,y2,x3,y3,x4,y4)
        angle+=angleinc
        angleinc+=noise(xoff);xoff+=xinc
    }


}