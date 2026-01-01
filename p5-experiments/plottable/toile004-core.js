let xoff, xinc
xoff = 0.0;
xinc = 0.001;

function hal() {
    rect(leftmargin, topmargin, actualwidth, actualheight)
    push()
    translate(leftmargin + actualwidth * 0.5, topmargin + actualheight * 0.5)
    gear=random([0,1,2,4,5])
    text(gear,actualwidth*0.51,0)
    helicoide(gear)
    pop()
}

function helicoide(gear) {
    let cx, cy, x, y, inrad, inangle, inangleinc, inradinc, outrad, outangle, outangleinc, outradinc, diam
    inangle = 0
    inrad = 21
    inangleinc = random(1, 3)
    inradinc = 0.05
    outangle = 0
    outrad = actualwidth * 0.1
    outangleinc = 0.5
    outradinc = 0.05
    diam = actualwidth*0.2//*noise(xoff);xoff+=xinc
    for (let i = 0; i < 1.8* 360; i++) {
        cx = inrad * cos(inangle)
        cy = inrad * sin(inangle)
        x = cx + outrad * cos(outangle)
        y = cy + outrad * sin(outangle)
        //if(random()>0.99){gear=random([0,1,2,3,4,5])}
        switch (gear){
            case 0:ellipse(x,y,y,y); break;
            case 1:ellipse(x,y,x,x); break;
            case 2:ellipse(x,y,Math.abs(y),Math.abs(y)); break;
            case 3:ellipse(x,y,cx,cx); break;
            case 4:ellipse(x,y,diam,diam); break;
            case 5:ellipse(x,y,Math.abs(x*cos(x)),Math.abs(y*sin(y))); break;
        }
        inangle += inangleinc;
        inrad += inradinc
        outangle += outangleinc
        outrad += 0.17 * noise(xoff); xoff += xinc
    }
}
