let xoff, xinc
xoff = 0.0
xinc = 0.01

function hal() {
    // fleur1()
    // fleur2(w * 0.5, h * 0.5)
    rect(leftmargin,topmargin,actualwidth,actualheight)
    test()
}

function test() {
    cx = w * 0.5
    cy = h * 0.5
    a = 42//random(0,360)
    p = onedge(cx, cy, a)
    ellipse(cx, cy, 7, 7)
    ellipse(p.x, p.y, 7, 7)
}

function fleur2(cx, cy) {
    let x1, y1, x2, y2, x3, y3, x4, y4, r1, r2, a1, a2, anglemax, high
    r1 = (actualwidth * 0.3) * noise(xoff); xoff += xinc
    r2 = actualwidth * 0.5
    a1 = 0
    a2 = 0
    anglemax = 3
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
                blow(cx, cy, a1, a2, x2, y2, x4, y4)
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

function blow(cx, cy, a1, a2, x2, y2, x4, y4) {
    let r1, r2, dx1, dy1, dx2, dy2
    r1 = dist(cx, cy, x2, y2)
    r2 = dist(cx, cy, x4, y4)
    dx1 = cx + actualheight * cos(a1); dx11 = constrain(dx1, leftmargin, leftmargin + actualwidth)
    dy1 = cy + actualheight * sin(a1); dy11 = constrain(dy1, topmargin, topmargin + actualheight)
    line(x2, y2, dx1, dy1)
}

// determine coordinates of a point on the edge of the canvas
// https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/les-rapports-trigonometriques-m1287
function onedge(cx, cy, a) {
    let b, r, x, y
    a = 135
    actuala = a%45
    console.log("cx: " + cx + "; cy: " + cy + "; a: " + a + "; actual a: "+actuala+"; left:  " + leftmargin + "; right:  " + rightmargin + "; top:  " + topmargin + "; bottom:  " + bottommargin)
    if (a <= 45 && a > 315) {
        b = rightmargin - cx
            r=b/cos(a)
    } else {
        if (a <= 135 && a > 45) {
            b = bottommargin - cy
            r=b/cos(Math.abs(90-a))

        } else {
            if (a <= 225 && a > 135) {
                b = cx - leftmargin
                r=b/cos(Math.abs(180-a))
            }
            else {
                if (a <= 315 && a > 225) {
                    b = cy - topmargin
                    r=b/Math.abs(cos(Math.abs(270-a)))
                }
            }
        }
    }
    x = cx + b * cos(180)
    y = cy + b * sin(180)
    ellipse(x, y, 7, 7)
    console.log("x: " + x + "; y: " + y + "; b: " + b)
    x=cx+r*cos(a)
    y=cy+r*sin(a)
    console.log("x: "+x+"; y: "+y+"; r: "+r)
    ellipse(x, y, 7, 7)
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