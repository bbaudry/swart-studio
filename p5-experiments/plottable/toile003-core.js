let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.01; yinc = 0.6

function hal() {
    let x
    x=ruban1(0)
    x=ruban1(50)
    ruban2(x,topmargin+actualheight*0.01,200)
    ruban2(x,topmargin+actualheight*0.03,100)
}


function ruban1(xoffinit) {
    let x1, y1, cx1, cy1, cx2, cy2, x2, y2,xinit
    xinit = leftmargin + actualwidth *0.7*noise(xoff);xoff+=xinc
    for (let i = 0; i < 42; i+=penwidth) {
        xoff=xoffinit
        x1 = xinit+i//leftmargin + actualwidth *0.8*noise(xoff) + i;xoff+=xinc
        y1 = topmargin
        cx1 = x1 + (actualwidth - x1) *0.4*noise(xoff) + i;xoff+=xinc
        cy1 = y1 + actualheight * 0.4 *noise(xoff) + i;xoff+=xinc
        cx2 = x1 - (actualwidth - x1) * 0.2*noise(xoff) + i;xoff+=xinc
        cy2 = y1 + actualheight * 0.6
        x2 = (actualwidth - x1) * 0.4+i
        y2 = y1 + actualheight * 0.8
        beginShape()
        vertex(x1, y1)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        x1 = x2
        y1 = y2
        cx1 = x1 + (x2 - cx2)
        cy1 = y1 + (y2 - cy2)
        cx2 = x1 + (actualwidth - x1) * 0.4*noise(xoff) + i;xoff+=xinc
        cy2 = y1 + actualheight * 0.3*noise(xoff) + i;xoff+=xinc
        x2 = x1 + actualwidth * 0.5*noise(xoff) + i;xoff+=xinc
        y2 = y1
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        x1 = x2
        y1 = y2
        cx1 = x1 + (x2 - cx2)
        cy1 = y1 + (y2 - cy2)
        cx2 = x1 + (actualwidth - x1) * 0.24*noise(xoff) + i;xoff+=xinc
        cy2 = y1 - actualheight * 0.3*noise(xoff) + i;xoff+=xinc
        x2 = x1 + actualwidth * 0.3*noise(xoff) + i;xoff+=xinc
        y2 = bottommargin
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
        endShape()
    }
    return xinit
}
function ruban2(x,y,xoffinit){
    for (let i = 0; i < 42; i+=penwidth) {
        xoff=xoffinit
        x1 = x+actualwidth*0.05-i//rightmargin - actualwidth *0.8*noise(xoff) - i;xoff+=xinc
        y1 = y
        cx1 = x1 - (actualwidth - x1) *0.4*noise(xoff) + i;xoff+=xinc
        cy1 = y1 + actualheight * 0.8 *noise(xoff) + i;xoff+=xinc
        cx2 = x1 + (actualwidth - x1) * 0.6*noise(xoff) + i;xoff+=xinc
        cy2 = y1 + actualheight * 0.6
        x2 = rightmargin-(actualwidth - x1) * 0.4+i
        y2 = y1 + actualheight * 0.8
        beginShape()
        vertex(x1, y1)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        x1 = x2
        y1 = y2
        cx1 = x1 + (x2 - cx2)
        cy1 = y1 + (y2 - cy2)
        cx2 = x1 - (actualwidth - x1) * 0.4*noise(xoff) + i;xoff+=xinc
        cy2 = y1 + actualheight * 0.3*noise(xoff) + i;xoff+=xinc
        x2 = x1 - actualwidth * 0.5*noise(xoff) + i;xoff+=xinc
        y2 = y1
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        x1 = x2
        y1 = y2
        cx1 = x1 + (x2 - cx2)
        cy1 = y1 + (y2 - cy2)
        cx2 = x1 - (actualwidth - x1) * 0.24*noise(xoff) + i;xoff+=xinc
        cy2 = y1 - actualheight * 0.8*noise(xoff) + i;xoff+=xinc
        x2 = x1 - actualwidth * 0.3*noise(xoff) + i;xoff+=xinc
        y2 = bottommargin
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
        endShape()
    }}

