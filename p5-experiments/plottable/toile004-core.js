let xoff, xinc
xoff = 0.0;
xinc = 0.001;

function hal(x,y,drawwidth,drawheight) {
    //rect(x, y, drawwidth, drawheight)
    push()
    translate(x + drawwidth * 0.5, y + drawheight * 0.5)
    gear=random([0,1,2,3,4,5])
    helicoide(gear,drawwidth,drawheight)
    pop()
}

function helicoide(gear,drawwidth,drawheight) {
    let cx, cy, x, y, inrad, inangle, inangleinc, inradinc, outrad, outangle, outangleinc, outradinc, diam
    inangle = 0
    inrad = 21
    inangleinc = random(1, 3)
    inradinc = 0.1
    outangle = random(360)
    outrad = drawwidth * 0.15
    outangleinc = 0.5
    outradinc = 0.1
    diam = drawwidth*0.2//*noise(xoff);xoff+=xinc
    for (let i = 0; i < 2* 360; i++) {
        cx = inrad * cos(inangle)
        cy = inrad * sin(inangle)
        x = cx + outrad * cos(outangle)
        y = cy + outrad * sin(outangle)
        switch (gear){
            case 0:ellipse(x,y,y,y); break;
            case 1:ellipse(x,y,x,x); break;
            case 2:
                dm=Math.abs(y)
                ellipse(x,y,dm,dm); 
            break;
            case 3:ellipse(x,y,Math.abs(x*cos(outangle)),Math.abs(x*cos(outangle))); break;
            case 4:ellipse(x,y,diam,diam); break;
            case 5:ellipse(x,y,Math.abs(x*cos(outangle)),Math.abs(y*sin(outangle))); break;
        }
        inangle += inangleinc;
        inrad += inradinc
        outangle += outangleinc
        outrad += 0.2 * noise(xoff); xoff += xinc
    }
}
