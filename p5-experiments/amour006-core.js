let xoff, xinc
xoff = 0.0
xinc = 0.001
function hal() {
    let x1, y1, px1, py1, px2, py2, x2, y2, t, sat, r1, r2, a
    r1 = 1
    r2 = (actualheight < actualwidth) ? actualheight * 0.4 : actualwidth * 0.4
    for (a = 0; a < (360); a += 1) {
        t = r2 * noise(xoff); xoff += xinc
        x1 = r1 * cos(a); y1 = r1 * sin(a)
        px1 = x1 + t * noise(xoff); py1 = y1 + t * noise(xoff); xoff += xinc
        x2 = r2 * cos(a); y2 = r2 * sin(a)
        px2 = x2 - t * noise(xoff); py2 = y2 - t * noise(xoff); xoff += xinc
        bezier(x1, y1, px1, py1, px2, py2, x2, y2)
        r1 +=0.42//= noise(xoff); xoff += xinc
    }

}