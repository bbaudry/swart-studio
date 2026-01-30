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
    anglestep=Math.floor(random(5,17))
    for(angle=5;angle<180-anglestep;angle+=anglestep){
        rad=random(radmax*0.5,radmax)
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
        fill(hu,100,100)
        
        if(random()<0.5){
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            console.log("ok")
        }
        else{
            push()
            rotate(90)
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            pop()
        }
    }

}
