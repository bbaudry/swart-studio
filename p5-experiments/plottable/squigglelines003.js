var xoff = 0.0
var yoff = 0.0
var yoff2 = 0.0


function savesvg() {
    save("squigglelines001.svg");
}

function savepng() {
    save("squigglelines001.png");
}

var xoff = 0.0
var xinc = 0.001
var y = h * 0.4
var xoff = 0.0
var xinc = 0.1
var yoff = 0.0
var yinc = 0.007

function draw() {
    //background(0, 0, 100)
    stroke(0, 0, 100, 200)
    //frames()
    //    lignecontinue()
    //    pendown()
    testloop()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    stroke(0, 100, 100)
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function lignecontinue() {
    var x1, y1, x2, y2
    var xoff = 0.0
    var xinc = 0.001
    x1 = leftmargin + random() * actualwidth
    y1 = leftmargin + random() * actualheight

    for (var i = 0; i < 41; i++) {
        if (random() < 0.5) {
            x2 = x1 + noise(xoff) * (rightmargin - x1); xoff += xinc
            y2 = y1 + noise(xoff) * (bottommargin - y1) * 0.1; xoff += xinc
        }
        else {
            x2 = x1 - noise(xoff) * (x1 - leftmargin); xoff += xinc
            y2 = y1 - noise(xoff) * (y1 - topmargin) * 0.3; xoff += xinc
        }
        //stroke(0, 0, 100); line(x1, y1, x2, y2)
        stroke(0, 100, 100); lastpoint = squiggleline(x1, x2, y1, y2)

        x1 = lastpoint[0]
        y1 = lastpoint[1]
    }
}

function testloop() {
    var x1, x2, y1, y2, ystep
    var ratio, sqiwidlarge, sqiwidsmall, sqighi, squiglo

    //x1<x2 && y1<y2
    stroke(0, 100, 100)
    x1 = rightmargin; x2 = x1 + actualwidth * 0.5; y1 = topmargin + actualheight * 0.5; y2 = y1 + 300
    ystep = (y2 - y1) / 3
    sqighi = 0.02 * ystep
    sqiglo = 0.005 * ystep
    ratio = 0.2 + random() * 0.2
    sqiwidlarge = (x2 - x1) * ratio
    sqiwidsmall = (x2 - x1) * ratio * 0.08
    beginShape();
    py = y1
    px = x1
    for (var i = 0; i < 3; i++) {
        vertex(px, py);
        cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
        cpy2 = y1 + i * ystep - sqighi
        px += sqiwidlarge
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep - sqighi
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px
        cpy2 = y1 + i * ystep
        px -= sqiwidsmall
        py = y1 + i * ystep + sqiglo
        cpx1 = px + sqiwidsmall
        cpy1 = py
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px - sqiwidsmall
        cpy2 = py
        px -= sqiwidsmall
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

    }
    endShape()
    //x1>x2 && y1<y2
    /*stroke(90, 100, 100)
    x1 = rightmargin; x2 = x1 - actualwidth * 0.5; y1 = topmargin + actualheight * 0.5; y2 = y1 + 300
    ystep = (y2 - y1) / 3
    sqighi = 0.02 * ystep
    sqiglo = 0.005 * ystep
    ratio = 0.2 + random() * 0.2
    sqiwidlarge = (x2 - x1) * ratio
    sqiwidsmall = (x2 - x1) * ratio * 0.08
    beginShape();
    py = y1
    px = x1
    for (var i = 0; i < 3; i++) {
        vertex(px, py);
        cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
        cpy2 = y1 + i * ystep - sqighi
        px += sqiwidlarge
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep - sqighi
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px
        cpy2 = y1 + i * ystep
        px -= sqiwidsmall
        py = y1 + i * ystep + sqiglo
        cpx1 = px + sqiwidsmall
        cpy1 = py
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px - sqiwidsmall
        cpy2 = py
        px -= sqiwidsmall
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

    }
    endShape()*/
    //x1>x2 && y1>y2
    /*stroke(180, 100, 100)
    x1 = rightmargin; x2 = x1 - actualwidth * 0.5; y1 = topmargin + actualheight * 0.5; y2 = y1 - 300
    ystep = (y2 - y1) / 3
    sqighi = 0.02 * ystep
    sqiglo = 0.005 * ystep
    ratio = 0.2 + random() * 0.2
    sqiwidlarge = (x2 - x1) * ratio
    sqiwidsmall = (x2 - x1) * ratio * 0.08
    beginShape();
    py = y1
    px = x1
    for (var i = 0; i < 3; i++) {
        vertex(px, py);
        cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
        cpy2 = y1 + i * ystep - sqighi
        px += sqiwidlarge
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep - sqighi
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px
        cpy2 = y1 + i * ystep
        px -= sqiwidsmall
        py = y1 + i * ystep + sqiglo
        cpx1 = px + sqiwidsmall
        cpy1 = py
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px - sqiwidsmall
        cpy2 = py
        px -= sqiwidsmall
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

    }
    endShape()    */
    //x1<x2 && y1>y2
    stroke(270, 100, 100)
    x1 = rightmargin; x2 = x1 + actualwidth * 0.5; y1 = topmargin + actualheight * 0.5; y2 = y1 - 300
    ystep = (y2 - y1) / 3
    sqighi = 0.02 * ystep
    sqiglo = 0.005 * ystep
    ratio = 0.2 + random() * 0.2
    sqiwidlarge = (x2 - x1) * ratio
    sqiwidsmall = (x2 - x1) * ratio * 0.08
    beginShape();
    py = y1
    px = x1
    for (var i = 0; i < 3; i++) {
        vertex(px, py);
        cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
        cpy2 = y1 + i * ystep - sqighi
        px += sqiwidlarge
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep - sqighi
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px
        cpy2 = y1 + i * ystep
        px -= sqiwidsmall
        py = y1 + i * ystep + sqiglo
        cpx1 = px + sqiwidsmall
        cpy1 = py
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        cpx2 = px - sqiwidsmall
        cpy2 = py
        px -= sqiwidsmall
        py = y1 + i * ystep
        cpx1 = px
        cpy1 = y1 + i * ystep
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

    }
    endShape()
}


function pendown() {
    var px, py, cpx1, cpy1, cpx2, cpy2, right, down
    var x1, y1, x2, y2
    var xoff = 0.0
    var xinc = 0.001
    x1 = leftmargin + random() * actualwidth
    y1 = leftmargin + random() * actualheight

    var ratio, sqiwidlarge, sqiwidsmall, sqighi, sqiglo
    ratio = 0.2 + random() * 0.2
    beginShape();
    y = y1
    py = y1
    px = x1
    vertex(px, py);
    for (var i = 0; i < 2; i++) {
        if (random() < 0.5) {
            x2 = x1 + noise(xoff) * (rightmargin - x1); xoff += xinc
            y2 = y1 + noise(xoff) * (bottommargin - y1) * 0.1; xoff += xinc
            console.log("x2 is greater than x1 and " + px + " = " + x1)
        }
        else {
            x2 = x1 - noise(xoff) * (x1 - leftmargin); xoff += xinc
            y2 = y1 - noise(xoff) * (y1 - topmargin) * 0.3; xoff += xinc
            console.log("x2 is lower than x1 and " + px + " = " + x1)
        }
        if (y2 > y1) { stroke(0, 100, 100); console.log("y2 greater than y1") }
        else { stroke(0, 0, 100); console.log("y2 lower than y1") }
        sqiwidlarge = (x2 - x1) * ratio
        sqiwidsmall = (x2 - x1) * ratio * 0.08
        sqighi = 0.8 * (y2 - y1)
        sqiglo = 0.05 * (y2 - y1)

        if (x2 > x1) {
            while (px < x2) {
                cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
                cpy2 = y - sqighi
                px += sqiwidlarge
                py = y
                cpx1 = px
                cpy1 = y - sqighi
                bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

                cpx2 = px
                cpy2 = y
                px -= sqiwidsmall
                py = y + sqiglo
                cpx1 = px + sqiwidsmall
                cpy1 = py
                bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

                cpx2 = px - sqiwidsmall
                cpy2 = py
                px -= sqiwidsmall
                py = y
                cpx1 = px
                cpy1 = y
                bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
                if (y2 > y1) { y += Math.abs(y2 - y1) * ratio }
                else { y -= Math.abs(y2 - y1) * ratio }
            }
        }
        else {
            while (px > x2 + sqiwidlarge) {
                console.log("x2 is lower than x1 and " + px + " = " + x1)
                cpx2 = px
                cpy2 = y + sqighi
                px -= sqiwidlarge
                py = y
                cpx1 = px
                cpy1 = y + sqighi
                bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

                cpx2 = px
                cpy2 = y
                px += sqiwidsmall
                py = y - sqiglo
                cpx1 = px - sqiwidsmall
                cpy1 = py
                bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

                cpx2 = px + sqiwidsmall
                cpy2 = py
                px += sqiwidsmall
                py = y
                cpx1 = px
                cpy1 = y
                bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
                if (y2 > y1) { y += Math.abs(y2 - y1) * ratio }
                else { y -= Math.abs(y2 - y1) * ratio }
            }
        }
        x1 = px
        y1 = py

    }
    endShape()
}

function squiggleline(x1, x2, y1, y2) {
    var px, py, cpx1, cpy1, cpx2, cpy2, px1, py1, right, down
    var ratio, sqiwidlarge, sqiwidsmall
    var sqighi = 0.02 * Math.abs(y2 - y1)
    var sqiglo = 0.005 * Math.abs(y2 - y1)
    if (x2 < x1) { right = false } else { right = true }
    if (y2 < y1) { down = false } else { down = true }
    ratio = 0.2 + random() * 0.2
    sqiwidlarge = Math.abs(x2 - x1) * ratio
    sqiwidsmall = Math.abs(x2 - x1) * ratio * 0.08
    beginShape();
    y = y1
    py = y1
    px = x1
    vertex(px, py);
    if (right) {
        while (px < x2) {
            cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
            cpy2 = y - sqighi
            px += sqiwidlarge
            py = y
            cpx1 = px
            cpy1 = y - sqighi
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px
            cpy2 = y
            px -= sqiwidsmall
            py = y + sqiglo
            cpx1 = px + sqiwidsmall
            cpy1 = py
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px - sqiwidsmall
            cpy2 = py
            px -= sqiwidsmall
            py = y
            cpx1 = px
            cpy1 = y
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
            if (down) { y += Math.abs(y2 - y1) * ratio }
            else { y -= Math.abs(y2 - y1) * ratio }
        }
    }
    else {
        while (px > x2 + sqiwidlarge) {
            cpx2 = px
            cpy2 = y + sqighi
            px -= sqiwidlarge
            py = y
            cpx1 = px
            cpy1 = y + sqighi
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px
            cpy2 = y
            px += sqiwidsmall
            py = y - sqiglo
            cpx1 = px - sqiwidsmall
            cpy1 = py
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px + sqiwidsmall
            cpy2 = py
            px += sqiwidsmall
            py = y
            cpx1 = px
            cpy1 = y
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
            if (y2 > y1) { y += Math.abs(y2 - y1) * ratio }
            else { y -= Math.abs(y2 - y1) * ratio }
        }
    }
    endShape()
    return ([px, py])
    /*        right = true
            ratio = 0.01 + random() * 0.03
            sqiwidlarge = (rightmargin - leftmargin) * ratio
            sqiwidsmall = (rightmargin - leftmargin) * ratio * 0.08
            px = leftmargin + sqiwidlarge*/


}