var xoff=0.0
var xinc=0.005
function newfoundland() {
    let x1,y1,x2,y2,cx,cy,r,aorigin,ainc
    cx=leftmargin+actualwidth*0.5
    cy=topmargin+actualheight*0.5
    r=actualheight*0.4
    aorigin=Math.floor(random(270,310))
    ainc=2
    for(let i=0;i<42;i++){
    x1=cx+r*cos(radians(aorigin+i*ainc))
    y1=cy+r*sin(radians(aorigin+i*ainc))
    x2=x1-actualwidth*0.8*noise(xoff);xoff+=xinc
    y2=actualheight*noise(xoff);xoff+=xinc
    line(x1,y1,x2,y2)

    }

}