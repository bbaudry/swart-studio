
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth

function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h);
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.95)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(3)
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    stroke(0, 100, 100)
    var x2 = leftmargin + Math.floor(random(actualwidth))
    nucleus(leftmargin, topmargin, x2, bottommargin, topmargin, bottommargin)
    noLoop()
}

function nucleus(x1, y1, x2, y2, x3, y3) {
    var cx = leftmargin + actualwidth * random(0.3, 0.5)
    var cy = topmargin + actualheight * random(0.3, 0.6)
    var rinit = w * 0.3
    var rdec = 5
    var initangle = Math.floor(random(30))
    var ox, oy, dx, dy
    for (var r = rinit; r > rdec; r -= rdec) {
        x1 = cx + r * cos(radians(initangle))
        y1 = cy + r * sin(radians(initangle))
        x2 = cx + r * cos(radians(initangle + 120))
        y2 = cy + r * sin(radians(initangle + 120))
        x3 = cx + r * cos(radians(initangle + 240))
        y3 = cy + r * sin(radians(initangle + 240))
        triangle(x1, y1, x2, y2, x3, y3)
        x2 = cx + rinit * cos(radians(initangle + 120))
        y2 = cy + rinit * sin(radians(initangle + 120))
    }
    x1 = cx + rinit * cos(radians(initangle))
    y1 = cy + rinit * sin(radians(initangle))
    x2 = cx + rinit * cos(radians(initangle + 120))
    y2 = cy + rinit * sin(radians(initangle + 120))
    x3 = cx + rinit * cos(radians(initangle + 240))
    y3 = cy + rinit * sin(radians(initangle + 240))
    stroke(0, 0, 0)
    for (var t = 0; t < 1; t += 0.01) {
        ox = (1 - t) * x2 + (t * x3);
        oy = (1 - t) * y2 + (t * y3);
        dx = leftmargin;
        dy = oy;
        line(ox, oy, dx, dy)
    }
    line(x3, y3, leftmargin, y3)
    for (var t = 0; t < 0.5; t += 0.01) {
        ox = (1 - t) * x3 + (t * x1);
        oy = (1 - t) * y3 + (t * y1);
        dx = ox;
        dy = topmargin;
        line(ox, oy, dx, dy)
    }
    for (var t = 0.5; t < 1; t += 0.01) {
        ox = (1 - t) * x3 + (t * x1);
        oy = (1 - t) * y3 + (t * y1);
        dx = rightmargin;
        dy = oy;
        line(ox, oy, dx, dy)
    }
    line(x1, y1, rightmargin, y1)
    var xoff = Math.floor(random(w*0.1,w*0.21))
    for (var t = 0; t < 0.5; t += 0.01) {
        ox = (1 - t) * x1 + (t * x2);
        oy = (1 - t) * y1 + (t * y2);
        dx = ox-xoff;
        dy = bottommargin;
        line(ox, oy, dx, dy)
    }
}

