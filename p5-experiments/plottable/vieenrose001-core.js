let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.02; yinc = 0.7

function hal() {
    ligneavecdouceur()
}

function ligneavecdouceur() {
    let x1, y1, cx1, cy1, cx2, cy2, x2, y2, epaisseur, vera
    epaisseur = 0.1//random(0.1, 0.3)
    vera = 0.5
    x1 = leftmargin
    y1 = topmargin + random() * actualheight * vera
    beginShape()
        vertex(x1,y1)
        cx1 = x1 + w * epaisseur; xoff += xinc
        cy1 = topmargin + random() * actualheight * vera
        line(x1,y1,cx1,cy1)
        cx2 = cx1 + w * epaisseur; xoff += xinc
        cy2 = topmargin + random() * actualheight * vera
        line(cx1,cy1,cx2,cy2)
        x2 = cx2 + w * epaisseur; xoff += xinc
        y2 = topmargin + random() * actualheight * vera
        line(cx2,cy2,x2,y2)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
    endShape()
    x1=x2
    y1 = y2
    beginShape()
        vertex(x1,y1)
        cx1 = x1 + w * epaisseur; xoff += xinc
        cy1 = y1 + (y2-cy2)
        line(x1,y1,cx1,cy1)
        cx2 = cx1 + w * epaisseur; xoff += xinc
        cy2 = topmargin + random() * actualheight * vera
        line(cx1,cy1,cx2,cy2)
        x2 = cx2 + w * epaisseur; xoff += xinc
        y2 = topmargin + random() * actualheight * vera
        line(cx2,cy2,x2,y2)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
    endShape()
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
    un=y1
    deux=y2
    for (let i = 0; i < 720; i+=penwidth) {
        if (random() < 0.84) {
            line(x1, un, x2, deux)
        }
        un--
        deux--
    }
}