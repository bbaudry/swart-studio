function hal() {
    let cx, cy, r
    cx = leftmargin + Math.floor(actualwidth * 0.5)
    cy = topmargin + Math.floor(actualheight * 0.5)
    r = Math.floor(actualwidth * 0.42)
    vera(cx, cy, r)
}

function vera(cx, cy, r) {
    let x1, y1, x2, y2, a, ainc
    translate(cx, cy)
    a = 90
    ainc = 0.5
    while (a >= 0) {
        y1 = r * sin(a)
        y2 = r * sin(-a)
        x1 = r * cos(a)
        x2 = r * cos(180 - a)
        molnar1(x1, y1, x2, y2, a)
        a -= ainc
    }
}

function molnar1(x1, y1, x2, y2, a) {
    let rondeur
    push()
    rondeur = a - noise(xoff) * 2 * a; xoff += xinc
    rotate(rondeur)
    line(x1, y1, x1, y2)
    rondeur = a - noise(xoff) * 2 * a; xoff += xinc
    rotate(rondeur)
    line(x1, y1, x2, y1)
    rondeur = a - noise(xoff) * 2 * a; xoff += xinc
    rotate(rondeur)
    line(x2, y1, x2, y2)
    rondeur = a - noise(xoff) * 2 * a; xoff += xinc
    rotate(rondeur)
    line(x2, y2, x1, y2)
    pop()
}

function molnar2(x1, y1, x2, y2, a) {
    let rondeur
    push()
    rondeur = a - noise(xoff) * 2 * a; xoff += xinc
    rotate(rondeur)
    line(x1, y1, x1, y2)
    line(x1, y1, x2, y1)
    line(x2, y1, x2, y2)
    line(x2, y2, x1, y2)
    pop()
}

function molnar3(x1, y1, x2, y2, a) {
    let rondeur
    rondeur = a - noise(xoff) * 2 * a; xoff += xinc
    rotate(rondeur)
    line(x1, y1, x1, y2)
    line(x1, y1, x2, y1)
    line(x2, y1, x2, y2)
    line(x2, y2, x1, y2)
}