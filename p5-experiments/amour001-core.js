var xoff = 0.0
var xinc = 0.0001

function hal() {
    let x1,y1,x2,y2,x3,y3,x4,y4
    let cx=leftmargin+actualwidth*0.5
    let cy=topmargin+actualheight*0.5
    let midx=actualwidth*0.5
    let midy=actualheight*0.5
    let angle=0
    while(angle<85){
        x1=cx+midx*sin(radians(angle))
        y1=cy+midy*sin(radians(angle))
        x2=cx-midx*sin(radians(angle))
        y2=cy-midy*sin(radians(angle))
        angle+=noise(xoff);xoff+=xinc
        x3=cx+midx*sin(radians(angle))
        y3=cy+midy*sin(radians(angle))
        x4=cx-midx*sin(radians(angle))
        y4=cy-midy*sin(radians(angle))
        //quad(x1,y1,x3,y3,x3,y4,x1,y2)
        //quad(x1,y1,x1,y2,x3,y4,x3,y3)
        //quad(x1,y1,x3,y3,x4,y3,x2,y1)
        quad(x1,y1,x3,y3,x4,y3,x2,y2)
        quad(x2,y2,x4,y4,x3,y3,x1,y2)
    }
}

