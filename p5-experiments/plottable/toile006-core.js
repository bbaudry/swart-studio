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
    angle=1//Math.floor(random(3,4))
    angleinit=angle
    angleinc=1
    ellipse(0,0,rayon*2,rayon*2)
    while(angle<90-35){
        x1=rayon*cos(angle)
        y1=rayon*sin(angle)
        x2=rayon*cos(180-angle)
        y2=rayon*sin(180-angle)
        x3=rayon*cos(180+angle)
        y3=rayon*sin(180+angle)
        x4=rayon*cos(-angle)
        y4=rayon*sin(-angle)
        // quad(x1,y1,x2,y2,x3,y3,x4,y4)
        bezier(x1,y1,lerp(x1,x2,0.2),y1+drawheight*0.1,lerp(x1,x2,0.8),y1+drawheight*0.1,x2,y2)
        bezier(x3,y3,lerp(x3,x4,0.2),y3-drawheight*0.1,lerp(x3,x4,0.8),y3-drawheight*0.1,x4,y4)
        x1=rayon*cos(90-angle)
        y1=rayon*sin(90-angle)
        x2=rayon*cos(270+angle)
        y2=rayon*sin(270+angle)
        x3=rayon*cos(270-angle)
        y3=rayon*sin(270-angle)
        x4=rayon*cos(90+angle)
        y4=rayon*sin(90+angle)
        // quad(x1,y1,x2,y2,x3,y3,x4,y4)
        bezier(x1,y1,x1+drawwidth*0.1,lerp(y1,y2,0.2),x1+drawwidth*0.1,lerp(y1,y2,0.8),x2,y2)
        bezier(x3,y3,x3-drawwidth*0.1,lerp(y3,y4,0.2),x3-drawwidth*0.1,lerp(y3,y4,0.8),x4,y4)
        angle+=5//angleinc
        angleinc+=1//noise(xoff);xoff+=xinc
    }


}