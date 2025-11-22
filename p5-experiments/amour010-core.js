let xoff, xinc
xoff = 0.0
xinc = 0.0001

function hal() {
    let cx,cy,x1,y1,x2,y2,r, r1, r2, a, a1, a2
    cx=w*0.42
    cy=h*0.42
    r1=4
    r2=42
    for(a=0;a<360;a+=6){
        x1=cx+r1*cos(a)
        y1=cy+r1*sin(a)
        x2=cx+r2*cos(a)
        y2=cy+r2*sin(a)
        line(x1,y1,x2,y2)
        r1+=0.8
        r2+=1.8
    }
}
