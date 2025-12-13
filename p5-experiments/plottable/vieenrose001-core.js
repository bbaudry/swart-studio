let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.02; yinc = 0.7

function hal() {
    ligne()
}

function ligne() {
    let x1, y1, x2, y2, bande, ampli
    bande = random(0.2, 0.3)
    ampli = 0.5
    x1 = leftmargin
    y1 = ampli * actualheight + random() * actualheight * ampli
    x2 = x1 + noise(xoff) * w * bande; xoff += xinc
    y2 = ampli * actualheight + random() * actualheight * ampli
    beginShape()
    while (x2 < rightmargin) {
        //        line(x1, y1, x2, y2); 
        band(x1, y1, x2, y2);
        x1 = x2
        y1 = y2
        x2 = x1 + noise(xoff) * w * bande
        xoff += xinc
        y2 = ampli * actualheight + noise(yoff) * actualheight * ampli; yoff += yinc
        ampli -= 0.01
    }
    endShape()
}

function band(x1, y1, x2, y2) {
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