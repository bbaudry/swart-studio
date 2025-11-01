function hal() {
    let x1, y1, px1, py1, px2, py2, x2, y2, t, sat
    let xoff, xinc
    xoff = 0.0
    xinc = 0.01

    for (let i = 0; i < 1; i+=0.2) {
        sat = (random() < 0.5) ? 0 : 100
        stroke(300, sat, 100)
        x1 = leftmargin + actualwidth * i; y1 = bottommargin - actualheight * 0.01
        x2 = leftmargin + actualwidth * 0.01; y2 = topmargin
        while (x2 < rightmargin) {
            px1 = x1 + (rightmargin - x1) * noise(xoff) * 0.4; py1 = y1 - actualheight * 0.1; xoff += xinc
            px2 = x1; py2 = topmargin + actualheight * 0.1
            bezier(x1, y1, px1, py1, px2, py2, x2, y2)
            t = noise(xoff) * 0.1; xoff += xinc
            x1 = bezierPoint(x1, px1, px2, x2, t)
            y1 = bezierPoint(y1, py1, py2, y2, t)
            px1 = x1 + (rightmargin - x1) * noise(xoff) * 0.4; py1 = y1 - actualheight * 0.1; xoff += xinc
            px2 = x1; py2 = topmargin + actualheight * 0.1
            x2 += actualwidth * 0.05 * noise(xoff); xoff += xinc
        }
    }
}