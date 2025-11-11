let xoff, xinc, east, south, west, north
xoff = 0.0
xinc = 0.01

function hal() {
    push()
    translate(w * 0.5, h * 0.5)
    balle()
    pop()
}


function balle(){
    let cx, cy, r, rdist, angle
    r=actualwidth*0.1
    //ellipse(0,0,r*2,r*2)
    hexag(0,0,r)
    rdist=actualwidth*0.2
    for(angle=30;angle<390;angle+=60){
        cx=rdist*cos(angle)
        cy=rdist*sin(angle)
        ellipse(cx,cy,r*2,r*2)
        hexag(cx,cy,r)
    }
    rdist=actualwidth*0.35
    for(angle=0;angle<360;angle+=60){
        cx=rdist*cos(angle)
        cy=rdist*sin(angle)
        ellipse(cx,cy,r*2,r*2)
        hexag(cx,cy,r)
    }
    rdist=actualwidth*0.4
    for(angle=30;angle<390;angle+=60){
        cx=rdist*cos(angle)
        cy=rdist*sin(angle)
        hexag(cx,cy,r)
    }
}

function hexag(x,y,r){
    let x1,y1,x2,y2
    for(let a=0;a<360;a+=60){
        x1=x+r*cos(a)
        y1=y+r*sin(a)
        x2=x+r*cos(a+60)
        y2=y+r*sin(a+60)
        line(x1,y1,x2,y2)
    }
}