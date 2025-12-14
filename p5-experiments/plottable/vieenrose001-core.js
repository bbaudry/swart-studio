let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.0001; yinc = 0.6

function hal() {
    ligneavecdouceur()
}

function ligneavecdouceur() {
    let x1, y1, cx1, cy1, cx2, cy2, x2, y2, epaisseur, vera, avance
    epaisseur = 0.2//random(0.1, 0.3)
    vera = 0.2
    for (let i = Math.floor(actualwidth*0.8); i > 0 ; i--) {
        if(random()<0.6){
        yoff = 0.0
        xoff = 0.0
        avance=true
        x1 = topmargin
        y1 = rightmargin - noise(yoff) * actualwidth * vera - i; yoff += yinc
        cx1 = x1 + w * noise(xoff) * epaisseur; xoff += xinc
        cy1 = rightmargin - noise(yoff) * actualwidth * vera - i; yoff += yinc
        while (avance) {
            beginShape()
            vertex(x1, y1)
            cx2 = cx1 + w * noise(xoff) * epaisseur; xoff += xinc
            cy2 = rightmargin - noise(yoff) * actualwidth * vera - i * 1.01; yoff += yinc
            x2 = cx2 + w * noise(xoff) * epaisseur; xoff += xinc
            y2 = rightmargin - noise(yoff) * actualwidth * vera - i * 0.9; yoff += yinc
            if (x2 < actualheight) {
                bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
                x1 = x2
                y1 = y2
                cx1 = x1 + w * noise(xoff) * epaisseur; xoff += xinc
                cy1 = y1 + (y2 - cy2)
            }
            else { avance = false }
            endShape()
        }}
    }
}
