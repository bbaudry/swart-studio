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
    let x1,y1,x2,y2,rad1,rad2,angle,angleinc
    rotate(random(45))
    rad1=drawwidth*0.01
    angleinc=2
    for(angle=0;angle<110;angle+=angleinc){
        rad2=drawwidth*0.3+drawwidth*0.5*noise(xoff);xoff+=xinc
        console.log(rad2)
        x1=rad1*cos(angle)
        y1=rad1*sin(angle)
        x2=rad2*cos(angle)
        y2=rad2*sin(angle)
        rotate(angleinc)
        // ellipse(x1,y1,x2,y2)
        quad(x1-x2*0.5,y1-y2*0.5,x1+x2*0.5,y1-y2*0.5,x1+x2*0.5,y1+y2*0.5,x1-x2*0.5,y1+y2*0.5)
    }
}