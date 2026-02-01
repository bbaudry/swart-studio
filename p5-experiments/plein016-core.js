var xoff = 0.0
var xinc = 1

function hal() {
    push()
    translate(w*0.5,h*0.5)
    star()
    pop()
}

function star(){
    let x1,y1,x2,y2,x3,y3,x4,y4,rad,radmax,angle,a,anglestep
    radmax=w*0.49
    ellipse(0,0,radmax*2,radmax*2)
    anglestep=Math.floor(random(11,17))
    for(angle=5;angle<180-anglestep;angle+=anglestep){
        rad=random(radmax*0.6,radmax)
        a=angle
        x1=rad*cos(a)
        y1=rad*sin(a)
        x2=rad*cos(-a)
        y2=rad*sin(-a)
        x3=rad*cos(-a-anglestep)
        y3=y2
        x4=rad*cos(a+anglestep)
        y4=y1
        hu=random([30,330,180])
        
        random()<0.1?stroke(0,0,0):stroke(hu,100,100)
        noFill()

        if(random()<0.6){
            quadwlines(x1,y1,x2,y2,x3,y3,x4,y4)
        }
        if(random()<0.6){
            push()
            rotate(90)
            quadwlines(x1,y1,x2,y2,x3,y3,x4,y4)
            pop()
        }
    }

}

function quadwlines(x1,y1,x2,y2,x3,y3,x4,y4){
    let ox,oy,dx,dy
    //quad(x1,y1,x2,y2,x3,y3,x4,y4)
    ox=x1
    oy=y2
    dx=x3
    dy=oy
        console.log("line x1: "+x1+"; x2: "+x2+"; x3: "+x3+"; x4: "+x4)
        console.log("line y1: "+y1+"; y2: "+y2+"; y3: "+y3+"; y4: "+y4)
    while(oy<y4){
        line(ox,oy,dx,dy)
        oy+=penwidth
        dy=oy
    }
}