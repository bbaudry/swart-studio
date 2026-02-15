var xoff = 0.0
var xinc = 1
var grid = []
var resolution = 8

function hal() {
    grille()
}

function grille() {
    let x1,y1,x2,y2,x3,y3,x4,y4,gap
    x1=Math.floor(leftmargin+random(0.42,0.52)*actualwidth)
    y1=topmargin
    x2=rightmargin
    y2=Math.floor(topmargin+random(0.42,0.52)*actualheight)
    x3=Math.floor(leftmargin+random(0.42,0.52)*actualwidth)
    y3=bottommargin
    x4=leftmargin
    y4=Math.floor(topmargin+random(0.42,0.52)*actualheight)
    gap=5
    stroke(330,100,100)
    quad(x4,y1,x1-gap,y1,x1-gap,y2-gap,x4,y4-gap)
    quadwlines(x4,y1,x1-gap,y1,x1-gap,y2-gap,x4,y4-gap,3)
    quad(x1+gap,y1,x2,y1,x2,y2-gap,x1+gap,y2-gap)
    quadwlines(x1+gap,y1,x2,y1,x2,y2-gap,x1+gap,y2-gap,2)
    stroke(70,100,100)
    quad(x2,y2+gap,x2,y3,x3+gap,y3,x1+gap,y2+gap)
    quadwlines(x2,y2+gap,x2,y3,x3+gap,y3,x1+gap,y2+gap,1)
    quad(x4,y4+gap,x1-gap,y2+gap,x3-gap,y3,x4,y3)
    quadwlines(x4,y4+gap,x1-gap,y2+gap,x3-gap,y3,x4,y3,4)
}

function quadwlines(x1,y1,x2,y2,x3,y3,x4,y4,amp){
    let d,t,tinc,ox,oy,dx,dy
    dist(x1,y1,x4,y4)>dist(x2,y2,x3,y3)?d=dist(x1,y1,x4,y4):d=dist(x2,y2,x3,y3)
    //penwidth<1?tinc=d*penwidth:
    tinc=1/(d/penwidth)*amp
    console.log("d: "+d+"; tinc: "+tinc+"; penwidth: "+penwidth)
    for(t=tinc;t<1;t+=tinc){
        ox=lerp(x1,x4,t)
        oy=lerp(y1,y4,t)
        dx=lerp(x2,x3,t)
        dy=lerp(y2,y3,t)
        line(ox,oy,dx,dy)
    }
}