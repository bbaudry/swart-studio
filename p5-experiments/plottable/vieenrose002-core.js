let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.01; yinc = 0.6

function hal() {
    ribbon()
    ribbon2()
    ribbon()
}

function ribbon() {
    let x1, y1, cx1, cy1, cx2, cy2, x2, y2
    for (i = 0; i < penwidth*42; i += penwidth) {
        x1 = topmargin
        y1 = leftmargin + actualwidth * 0.42 + i * 2
        cx1 = topmargin + actualheight * 0.3 * noise(xoff); xoff += xinc
        cy1 = y1-i*1.3
        xoff += xinc
        cx2 = topmargin + actualheight * 0.6 * noise(xoff); xoff += xinc
        cy2 = leftmargin + actualwidth *0.8 +i
        x2 = bottommargin
        y2 = leftmargin + actualwidth * 0.32 + i * 2.5
        beginShape()
        vertex(x1, y1)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
        endShape()
    }
}

function ribbon2() {
    let x1, y1, cx1, cy1, cx2, cy2, x2, y2
    for (i = 0; i < penwidth*52; i += penwidth) {
        x1 = topmargin
        y1 = leftmargin + i*1.3
        cx1 = topmargin + actualheight * 0.4 * noise(xoff); xoff += xinc
        cy1 = y1-7*noise(xoff) 
        xoff += xinc
        cx2 = topmargin + actualheight * 0.5 * noise(xoff); xoff += xinc
        cy2 = cy1+1.7*noise(xoff)
        x2 = bottommargin
        y2 = leftmargin + actualwidth * 0.05 + i * 2
        line(x1,y1,cx1,cy1);line(cx1,cy1,cx2,cy2);line(cx2,cy2,x2,y2)
    }
}