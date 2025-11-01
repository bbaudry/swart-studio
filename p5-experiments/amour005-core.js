function hal() {
    let x1,y1,px1,py1,px2,py2,x2,y2,x,y,t
    let xoff,xinc
    xoff=0.0
    xinc=0.01
    rect(leftmargin,topmargin,actualwidth,actualheight)
    
    x1=leftmargin+actualwidth*0.5;y1=topmargin
    px1=leftmargin;py1=topmargin+actualheight*0.1
    px2=leftmargin+actualwidth*0.4;py2=topmargin+actualheight*0.8
    x2=leftmargin;y2=bottommargin-actualheight*0.1
    bezier(x1,y1,px1,py1,px2,py2,x2,y2)
    // fill(0,100,100);ellipse(x1,y1,17,17);ellipse(px1,py1,17,17)
    // fill(50,100,100);ellipse(x2,y2,17,17);ellipse(px2,py2,17,17)
    // noFill()
    t=1-noise(xoff)*0.5;xoff+=xinc
    x=bezierPoint(x1,px1,px2,x2,t)
    y=bezierPoint(y1,py1,py2,y2,t)
    fill(50,100,100);ellipse(x,y,17,17);noFill()


    x1=rightmargin;y1=topmargin+actualheight*0.1
    px1=x1-actualheight*0.1;py1=topmargin+actualheight*0.1
    px2=leftmargin+actualwidth*0.8;py2=y-actualheight*0.1
    x2=x;y2=y
    bezier(x1,y1,px1,py1,px2,py2,x2,y2)
    t=1-noise(xoff)*0.5;xoff+=xinc
    x=bezierPoint(x1,px1,px2,x2,t)
    y=bezierPoint(y1,py1,py2,y2,t)
    fill(50,100,100);ellipse(x,y,17,17);noFill()


    x1=leftmargin+actualwidth*0.9;y1=topmargin
    px1=x1+actualheight*0.1;py1=y1+actualheight*0.1
    px2=leftmargin+actualwidth*0.8;py2=y-actualheight*0.1
    x2=x;y2=y
    bezier(x1,y1,px1,py1,px2,py2,x2,y2)
}