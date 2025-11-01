let xoff, xinc
xoff = 0.0
xinc = 0.001

function hal() {
    let r1, r2
    r1 = 11
    r2 = (actualheight < actualwidth) ? actualheight * 0.4 : actualwidth * 0.4
    quad(-r1, -r1, r1, -r1, r1, r1, -r1, r1)
    quad(-r2, -r2, r2, -r2, r2, r2, -r2, r2)
    section(-r1, -r1, r1, -r1, -r2, -r2, r2, -r2, -1, -1)
    section(r1, -r1, r1, r1, r2, -r2, r2, r2, 1, -1)
    section(r1, r1, -r1, r1, r2, r2, -r2, r2, 1, 1)
    section(-r1, r1, -r1, -r1, -r2, r2, -r2, -r2, -1,  1)
}
function section(ox1, oy1, ox2, oy2, dx1, dy1, dx2, dy2, dirx, diry) {
    let x1, y1, px1, py1, px2, py2, x2, y2, t, k
    for (t = 0; t < 1; t += 0.01) {
        k = actualwidth * noise(xoff); xoff += xinc
        x1 = lerp(ox1, ox2, t); y1 = lerp(oy1, oy2, t)
        px1 = x1 + dirx * k * noise(xoff); py1 = y1 + diry * k * noise(xoff); xoff += xinc
        x2 = lerp(dx1, dx2, t); y2 = lerp(dy1, dy2, t)
        px2 = x2 - dirx * k * noise(xoff); py2 = y2 - diry * k * noise(xoff); xoff += xinc
        bezier(x1, y1, px1, py1, px2, py2, x2, y2)
    }
}

function hal2() {
    let x1, y1, px1, py1, px2, py2, x2, y2, t, sat, r1, r2, a
    r1 = 11
    r2 = (actualheight < actualwidth) ? actualheight * 0.4 : actualwidth * 0.4
    for (a = 0; a < (360 * 2); a++) {
        t = r2 * noise(xoff); xoff += xinc
        x1 = r1 * cos(a); y1 = r1 * sin(a)
        px1 = x1 + t * noise(xoff); py1 = y1 + t * noise(xoff); xoff += xinc
        x2 = r2 * cos(a + 12); y2 = r2 * sin(a + 12)
        px2 = x2 - t * noise(xoff); py2 = y2 - t * noise(xoff); xoff += xinc
        bezier(x1, y1, px1, py1, px2, py2, x2, y2)
    }
}