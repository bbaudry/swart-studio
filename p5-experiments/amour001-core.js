var xoff = 0.0
var xinc = 0.01

function hal() {
    let x1,y1,x2,y2,x3,y3,x4,y4
    let cx=leftmargin+actualwidth*random(0.4,0.6)
    let cy=topmargin+actualheight*random(0.4,0.6)
    let midxleft=cx-leftmargin
    let midxright=rightmargin-cx
    let midytop=cy-topmargin
    let midybottom=bottommargin-cy
    let angle=5
    let angleoffset=2;
    while(angle<85){
        angle+=random(-angleoffset,angleoffset)
        x1=cx+midxright*sin(radians(angle))
        y1=cy+midybottom*sin(radians(angle))
        angle+=random(-angleoffset,angleoffset)
        x2=cx-midxleft*sin(radians(angle))
        y2=cy-midytop*sin(radians(angle))

        angle+=noise(xoff)*42;xoff+=xinc

        angle+=random(-angleoffset,angleoffset)
        x3=cx+midxright*sin(radians(angle))
        y3=cy+midybottom*sin(radians(angle))
        angle+=random(-angleoffset,angleoffset)
        x4=cx-midxleft*sin(radians(angle))
        y4=cy-midytop*sin(radians(angle))
        section(x1,y2,x3,y4,x3,y3,x1,y1)
        section(x1,y1,x3,y3,x4,y3,x2,y1)
        section(x2,y1,x4,y3,x4,y4,x2,y2)
        section(x2,y2,x4,y4,x3,y4,x1,y2)
    }
}

function section(x1,y1,x2,y2,x3,y3,x4,y4){
    let ox,oy,dx,dy,t
    t=0
    while(t<=1){
        ox=lerp(x1,x2,t)
        oy=lerp(y1,y2,t)
        dx=lerp(x4,x3,t)
        dy=lerp(y4,y3,t)
        line(ox,oy,dx,dy)
        t+=0.2
    }
    t=0
    while(t<=1){
        ox=lerp(x2,x3,t)
        oy=lerp(y2,y3,t)
        dx=lerp(x1,x4,t)
        dy=lerp(y1,y4,t)
        line(ox,oy,dx,dy)
        t+=0.01
    }
}