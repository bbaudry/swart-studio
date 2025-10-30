var xoff, yoff, noiseres, resolutiony, resolutionx
function hal() {
    let cx,cy,d,a1,a2,a3,a4,a5,a6,x1,y1,x2,y2,x3,y3,x4,y4
    angleMode(DEGREES) 
    cx=leftmargin+actualwidth*0.5
    cy=topmargin+actualheight*0.5
    d=actualwidth
    ellipse(cx,cy,d,d)
    a1=1; a2=98; a3=99; a4=233; a5=234; a6=360
    x1=cx+d*0.5*0.1*cos(a1)
    y1=cy+d*0.5*0.1*sin(a1)
    x2=cx+d*0.5*0.1*cos(a2)
    y2=cy+d*0.5*0.1*sin(a2)
    x3=cx+d*0.5*cos(a2)
    y3=cy+d*0.5*sin(a2)
    x4=cx+d*0.5*cos(a1)
    y4=cy+d*0.5*sin(a1)
    quad(x1,y1,x2,y2,x3,y3,x4,y4)

    x1=cx+d*0.5*0.1*cos(a3)
    y1=cy+d*0.5*0.1*sin(a3)
    x2=cx+d*0.5*0.1*cos(a4)
    y2=cy+d*0.5*0.1*sin(a4)
    x3=cx+d*0.5*cos(a4)
    y3=cy+d*0.5*sin(a4)
    x4=cx+d*0.5*cos(a3)
    y4=cy+d*0.5*sin(a3)
    quad(x1,y1,x2,y2,x3,y3,x4,y4)

    x1=cx+d*0.5*0.1*cos(a5)
    y1=cy+d*0.5*0.1*sin(a5)
    x2=cx+d*0.5*0.1*cos(a6)
    y2=cy+d*0.5*0.1*sin(a6)
    x3=cx+d*0.5*cos(a6)
    y3=cy+d*0.5*sin(a6)
    x4=cx+d*0.5*cos(a5)
    y4=cy+d*0.5*sin(a5)
    quad(x1,y1,x2,y2,x3,y3,x4,y4)

}