var xoff = 0.0
var yoff = 0.0
var yoff2 = 0.0

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    frames()
    for(var i=0;i<21;i++){
        block()
    }
    stroke(0, 100, 100)
    for(var i=0;i<21;i++){
        block()
    }
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function block() {
    var x1, x2, y, originx, destx, xstep, ystep, depth, xinc, yinc1, yinc2
    xinc = 0.01
    yinc1 = 0.001
    yinc2 = 0.1
    originx = leftmargin + actualwidth*random()
    destx = originx+actualwidth * random()
    x1 = originx
    x2 = originx
    xstep = random(42,84)
    ystep = actualheight* noise(yoff2); yoff2 += yinc2;//*random()
    depth = 42
    while (destx < rightmargin) {
        while (x2 < destx) {
            x2 = x1 + xstep * noise(xoff); xoff += xinc;
            for (i = 0; i < depth; i += 3) {
                y = ystep+i* noise(yoff); yoff += yinc1;
                line(x1, y, x2, y)
            }
            x1 = x2
            ystep=actualheight* noise(yoff); yoff += yinc1;//*random()
        }
        originx = destx
        destx += actualwidth * random()
        x1 = originx
        x2 = originx
        xstep = random(42,126)
        ystep=topmargin+actualheight*random()//* noise(yoff2); yoff2 += yinc2;//*random()
        depth=Math.floor(random(84))
    }
}
