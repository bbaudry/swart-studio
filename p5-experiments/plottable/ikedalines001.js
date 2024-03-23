var xoff = 0.0
var yoff = 0.0

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    frames()
    block()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    //quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function block() {
    var x1, x2, y, originx, destx, xstep, ystep, depth, xinc, yinc
    originx = leftmargin
    destx = actualwidth * random()
    x1 = originx
    x2 = originx
    xstep = random(42)
    ystep = actualheight*random()
    depth = 420
    xinc = 0.1
    yinc = 0.007
    stroke(0, 0, 0)
    while (destx < rightmargin) {
        while (x2 < destx) {
            x2 = x1 + xstep * noise(xoff); xoff += xinc;
            for (i = 0; i < depth; i += 3) {
                y = (ystep + i) * noise(yoff); yoff += yinc;
                line(x1, y, x2, y)
            }
            x1 = x2
        }
        originx = destx
        destx += actualwidth * random()
        x1 = originx
        x2 = originx
        ystep=actualheight*random()
        depth=42//Math.floor(random(420))
    }
}
