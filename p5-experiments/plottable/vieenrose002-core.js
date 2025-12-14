let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 1; yinc = 0.6

function hal() {
    sweetwheel()
}

function sweetwheel() {
    let cx, cy, x1, y1, cx1, cy1, cx2, x2, y2,r,i,increment,odd,dir
    cx=topmargin+actualheight*0.5
    cy=leftmargin+actualwidth*0.5
    r=actualwidth*0.2
    increment=10
    odd=true
    dir=1
    for(i=0;i<360*2;i+=increment*3){
        x1=cx+r*cos(i)
        y1=cy+r*sin(i)
        //push();stroke(200,100,100);ellipse(x1,y1,3,3);pop()
        odd?dir=1:dir=-1
        odd=!odd
        r+=dir*noise(xoff)*42;xoff+=xinc
        cx1=cx+r*cos(i+increment)
        cy1=cy+r*sin(i+increment)
        r-=dir*noise(xoff)*42;xoff+=xinc
        cx2=cx+r*cos(i+increment*2)
        cy2=cy+r*sin(i+increment*2)
        r+=noise(xoff);xoff+=xinc
        x2=cx+r*cos(i+increment*3)
        y2=cy+r*sin(i+increment*3)
        beginShape()
        vertex(x1,y1)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
        endShape()
    }



        // for(let i = 0; i<360*11;i+=20){
    //     x1=cx+r*cos(i)
    //     y1=cy+r*sin(i)
    //     r+=noise(xoff);xoff+=xinc
    //     x2=cx+r*cos(i+20)
    //     y2=cy+r*sin(i+20)
    //     line(x1,y1,x2,y2)
    // }
}
