
function cartepostale(x, y) {
    setmargins(x, y)
    vera()
    signature()
}

function vera() {
    var nbSteps = 13
    var stepx = floor(actualwidth / nbSteps)
    var stepy = floor(actualheight / nbSteps)
    var diam = floor(stepx * 0.42)
    var rayon = diam / 2
    var x, y, cx, cy, dx, dy, i, j, a
    for (i = 0; i < nbSteps; i++) {
        for (j = 0; j < nbSteps; j++) {
            x = leftmargin + i * stepx
            y = bottommargin - j * stepy
            cx = x + stepx * random(0.42, 0.57)
            cy = y - stepy * random(0.42, 0.57)
            for (var k = 0; k < 5; k++) {
                a = radians(floor(random(360) / 40) * 40)
                dx = cx + rayon * cos(a)
                dy = cy + rayon * sin(a)
                ellipse(dx, dy, 9, 9)
            }
        }
    }
}