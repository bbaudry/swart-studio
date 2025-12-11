let xoff, xinc, innerradii, outerradii
xoff = 0.0
xinc = 0.02

function hal() {
    rect(leftmargin, topmargin, actualwidth, actualheight)
    ligne()
}

function ligne() {
    let x1, y1, x2, y2, bande
    bande=random(0.2,0.4)
    x1 = leftmargin
    y1 = topmargin + random() * actualheight
    x2 = x1 + noise(xoff) * w * bande; xoff += xinc
    y2 = topmargin + random() * actualheight
    beginShape()
    while (x2 < rightmargin) {
        line(x1, y1, x2, y2)
        x1 = x2
        y1 = y2
        x2 = x1 + noise(xoff) * w * bande
        xoff += xinc
        y2 = topmargin + random() * actualheight
    }
    endShape()
}
