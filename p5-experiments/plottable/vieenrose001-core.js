let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.01; yinc = 0.6

function hal() {
    ligneavecdouceur()
}

function ligneavecdouceur() {
    let x1, y1, cx1, cy1, cx2, cy2, x2, y2, epaisseur, vera, avance
    epaisseur = 0.1//random(0.1, 0.3)
    vera = 0.3
    for (let i = 0; i < 420; i++) {
        if(random()<0.7){
        yoff = 0.0
        xoff = 0.0
        avance=true
        x1 = topmargin
        y1 = noise(yoff) * actualwidth * vera + i; yoff += yinc
        cx1 = x1 + w * noise(xoff) * epaisseur; xoff += xinc
        cy1 = topmargin + noise(yoff) * actualwidth * vera + i; yoff += yinc
        while (avance) {
            beginShape()
            vertex(x1, y1)
            cx2 = cx1 + w * noise(xoff) * epaisseur; xoff += xinc
            cy2 = topmargin + noise(yoff) * actualwidth * vera + i; yoff += yinc
            x2 = cx2 + w * noise(xoff) * epaisseur; xoff += xinc
            y2 = topmargin + noise(yoff) * actualwidth * vera + i; yoff += yinc
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



function ligne() {
    let x1, y1, x2, y2, epaisseur, ampli
    epaisseur = random(0.2, 0.3)
    ampli = 0.5
    x1 = leftmargin
    y1 = ampli * actualheight + random() * actualheight * ampli
    x2 = x1 + noise(xoff) * w * epaisseur; xoff += xinc
    y2 = ampli * actualheight + random() * actualheight * ampli
    beginShape()
    while (x2 < rightmargin) {
        //        line(x1, y1, x2, y2); 
        bande(x1, y1, x2, y2);
        x1 = x2
        y1 = y2
        x2 = x1 + noise(xoff) * w * epaisseur
        xoff += xinc
        y2 = ampli * actualheight + noise(yoff) * actualheight * ampli; yoff += yinc
        ampli -= 0.01
    }
    endShape()
}

function bande(x1, y1, x2, y2) {
    un = y1
    deux = y2
    for (let i = 0; i < 720; i += penwidth) {
        if (random() < 0.84) {
            line(x1, un, x2, deux)
        }
        un--
        deux--
    }
}