
function cartepostale(x, y) {
    setmargins(x, y)
    stroke(230,100,100)
    vera()
    stroke(30,100,100)
    vera()
    signature()
}

function vera() {
    var stepx = actualwidth * 0.1
    var stepy = actualheight * 0.1
    var diam = stepx*0.91
    for (var x = leftmargin; x < rightmargin; x += stepx) {
        for (var y = topmargin; y < bottommargin; y += stepy) {
            var cx = x + stepx * random(0.42, 0.57)
            var cy = y + stepy * random(0.42, 0.57)
            var a = random(360)
            ellipse(cx, cy, diam, diam)
            var dx = cx + 21 * cos(a)
            var dy = cy + 21 * sin(a)
            ellipse(dx, dy, 12, 12)
        }
    }
}