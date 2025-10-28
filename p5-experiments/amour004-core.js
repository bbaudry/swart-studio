var xoff, yoff, noiseres, resolutiony, resolutionx

function hal() {
//    strokeWeight(1); stroke(300, 100, 100); rect(leftmargin, topmargin, actualwidth, actualheight)
    stroke(0,0,0)
    let x1, x2, y1, y2, stepx, stepy
    xoff = 0.0
    yoff = 0.0
    noiseres = 0.001
    resolutionx = Math.floor(3,11)
    resolutiony = Math.floor(21,42)
    stepx = Math.floor(actualheight / resolutionx)
    stepy = Math.floor(actualheight / resolutiony)
    y1 = topmargin; y2 = y1 + stepy
    while (y2 < bottommargin) {
        x1 = leftmargin+ noise(xoff, yoff) * stepx; xoff+=noiseres; x2 = x1 + noise(xoff, yoff) * stepx; xoff+=noiseres
        while (x2 < rightmargin) {
            quad(x1, y1, x2, y1, x2, y2, x1, y2)
            x1 = x2
            x2 = x1 + noise(xoff, yoff) * stepx; xoff+=noiseres
        }
        y1 = y2; y2 = y1 + stepy; yoff+=noiseres
    }
}