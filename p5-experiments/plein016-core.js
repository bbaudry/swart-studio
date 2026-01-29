var xoff = 0.0
var xinc = 1

function hal() {
    push()
    translate(w*0.5,h*0.5)
    star()
    pop()
}

function star(){
    let x1,y1,x2,y2,x3,y3,x4,y4,rad,radmax,angle,anglestep
    radmax=w*0.49
    anglestep=Math.floor(random(10,20))
    rad=radmax
    ellipse(0,0,radmax*2,radmax*2)
    for(angle=5;angle<175;angle+=anglestep){
        x1=rad*cos(angle)
        y1=rad*sin(angle)
        x2=rad*cos(-angle)
        y2=rad*sin(-angle)
        x3=rad*cos(-angle-anglestep)
        y3=y2
        x4=rad*cos(angle+anglestep)
        y4=y1
        quad(x1,y1,x2,y2,x3,y3,x4,y4)
    }

}
