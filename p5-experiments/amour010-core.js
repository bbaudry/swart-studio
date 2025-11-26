let xoff, xinc
xoff = 0.0
xinc = 0.01

function hal() {
    // fleur1()
    r1 = (actualwidth * 0.18) * noise(xoff); xoff += xinc
    r2 = actualwidth * 0.25
    fleur2(w * 0.25, h * 0.25, r1, r2)
    fleur2(w * 0.75, h * 0.25, r1, r2)
    fleur2(w * 0.25, h * 0.25+w * 0.5, r1, r2)
    fleur2(w * 0.75, h * 0.25+w * 0.5, r1, r2)
}


function fleur2(cx, cy, r1, r2) {
    let x1, y1, x2, y2, x3, y3, x4, y4, a1, a2, anglemax, high
    //r1 = (actualwidth * 0.3) * noise(xoff); xoff += xinc
    //r2 = actualwidth * 0.5
    a1 = 0
    a2 = 0
    anglemax = 4
    high = true
    while (a1 < 360 - anglemax) {
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        x2 = cx + (r2 * noise(xoff)) * cos(a1)
        y2 = cy + (r2 * noise(xoff)) * sin(a1)
        xoff += xinc
        a2 = a1 + anglemax
        x3 = cx + r1 * cos(a2)
        y3 = cy + r1 * sin(a2)
        x4 = cx + (r2 * noise(xoff)) * cos(a2)
        y4 = cy + (r2 * noise(xoff)) * sin(a2)
        if (high) {
            if (random() < 0.1) {
                line(x1, y1, x2, y2)
                blow(cx, cy, a1, a2, x2, y2, x4, y4, r2)
                line(x4, y4, x3, y3)
            }
            else {
                line(x1, y1, x2, y2)
                line(x2, y2, x4, y4)
                line(x4, y4, x3, y3)
            }
        }
        else {
            line(x1, y1, x3, y3)
        }
        high = !high
        //        quad(x1, y1, x2, y2, x4, y4, x3, y3)
        a1 = a2
    }
    if (high) {
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        x2 = cx + (r2 * noise(xoff)) * cos(a1)
        y2 = cy + (r2 * noise(xoff)) * sin(a1)
        a2 = 0
        x3 = cx + r1 * cos(a2)
        y3 = cy + r1 * sin(a2)
        x4 = cx + (r2 * noise(xoff)) * cos(a2)
        y4 = cy + (r2 * noise(xoff)) * sin(a2)
        line(x1, y1, x2, y2)
        line(x2, y2, x4, y4)
        line(x4, y4, x3, y3)
    }
    else {
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        a2 = 0
        x3 = cx + r1 * cos(a2)
        y3 = cy + r1 * sin(a2)
        line(x1, y1, x3, y3)
    }
}

function blow(cx, cy, a1, a2, x2, y2, x4, y4, r) {
    let p1,p2
    p1=onedge(cx,cy,r,a1)
    line(x2,y2,p1.x,p1.y)
    p2=onedge(cx,cy,r,a2)
    line(x4,y4,p2.x,p2.y)
    line(p1.x,p1.y,p2.x,p2.y)
}

// determine coordinates of a point on the edge of the canvas
// https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/les-rapports-trigonometriques-m1287
function onedge(cx, cy, rayon, a) {
    let b, r, x, y
    if (a <= 45 || a > 315) {
        b = rayon//rightmargin - cx
            r=b/cos(a)
    } else {
        if (a <= 135 && a > 45) {
            b = rayon//rightmargin - cx//bottommargin - cy
            r=b/cos(Math.abs(90-a))

        } else {
            if (a <= 225 && a > 135) {
                b = rayon//cx - leftmargin
                r=b/cos(Math.abs(180-a))
            }
            else {
                if (a <= 315 && a > 225) {
                    b = rayon//cx - leftmargin
                    r=b/Math.abs(cos(Math.abs(270-a)))
                }
            }
        }
    }
    x=cx+r*cos(a)
    y=cy+r*sin(a)
    return createVector(x, y)
}

function fleur1() {
    let cx, cy, x1, y1, x2, y2, r1, r2, a, a1, a2
    cx = w * 0.42
    cy = h * 0.42
    r1 = 42 * random()
    r2 = 342
    for (a = 0; a < 360; a += 3 * noise(xoff)) {
        xoff += xinc
        x1 = cx + r1 * cos(a)
        y1 = cy + r1 * sin(a)
        x2 = cx + (r2 * noise(xoff)) * cos(a)
        y2 = cy + (r2 * noise(xoff)) * sin(a)
        line(x1, y1, x2, y2)
        xoff += xinc
    }
}