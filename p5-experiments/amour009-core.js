let xoff, xinc, east, south, west, north
xoff = 0.0
xinc = 0.01

function hal() {
    push()
    translate(w * 0.5, h * 0.5)
    grille()
    pop()
}

function grille(){
    let cx,cy,rdist,angle,r
    cx=0
    cy=0
    rdist=Math.floor(actualwidth*0.42)
    ellipse(cx,cy,rdist*2,rdist*2)
    r=rdist*0.3
    ellipse(cx,cy,r*2,r*2)
    r=rdist*0.6
    for(angle=0;angle<360;angle+=60){
        cx=r*cos(angle)
        cy=r*sin(angle)
        ellipse(cx,cy,rdist*0.6,rdist*0.6)
    }
}


function balle(){
    let cx, cy, r, rdist, angle
    ellipse(0,0,actualwidth*0.9,actualwidth*0.9)
    r=actualwidth*0.1
    //ellipse(0,0,r*2,r*2)
    hexag(0,0,r*1.15)
    rdist=actualwidth*0.2
    for(angle=30;angle<390;angle+=60){
        cx=rdist*cos(angle)
        cy=rdist*sin(angle)
        //ellipse(cx,cy,r*2,r*2)
        hexag(cx,cy,r*1.15)
    }
    rdist=actualwidth*0.35
    for(angle=0;angle<360;angle+=60){
        cx=rdist*cos(angle)
        cy=rdist*sin(angle)
        //ellipse(cx,cy,r*2,r*2)
        hexag(cx,cy,r*1.15)
    }
    rdist=actualwidth*0.4
    for(angle=30;angle<390;angle+=60){
        cx=rdist*cos(angle)
        cy=rdist*sin(angle)
        hexag(cx,cy,r*1.15)
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