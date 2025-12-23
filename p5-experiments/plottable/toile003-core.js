let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.01; yinc = 0.6

function hal() {
    ruban()
}

function ruban() {
    let x1,y1,cx1,cy1,cx2,cy2,x2,y2
for(let i=0; i<11; i++){
    x1=w*noise(xoff); xoff+=xinc  //*0.5
    y1=topmargin
    cx1=x1+actualwidth*noise(xoff); xoff+=xinc  //*0.4
    cy1=y1+actualheight*0.1
    cx2=x1-actualwidth*0.2
    cy2=y1+actualheight*noise(xoff); xoff+=xinc  //*0.6
    x2=x1-actualwidth*0.2
    y2=y1+actualheight*0.8
    beginShape()
    vertex(x1,y1)
    bezierVertex(cx1,cy1,cx2,cy2,x2,y2)
    endShape()

    x1=x2
    y1=y2
    cx1=x1 + (x2 - cx2)
    cy1=y1 + (y2 - cy2)
    cx2=x1+actualwidth*0.4
    cy2=y1+actualheight*0.3
    x2=x1+actualwidth*0.3
    y2=y1
    beginShape()
    vertex(x1,y1)
    bezierVertex(cx1,cy1,cx2,cy2,x2,y2)
    endShape()

    x1=x2
    y1=y2
    cx1=x1 + (x2 - cx2)
    cy1=y1 + (y2 - cy2)
    cx2=x1+actualwidth*0.24
    cy2=y1-actualheight*0.3
    x2=x1+actualwidth*0.3
    y2=y1
    beginShape()
    vertex(x1,y1)
    bezierVertex(cx1,cy1,cx2,cy2,x2,y2)
    endShape()
}}
