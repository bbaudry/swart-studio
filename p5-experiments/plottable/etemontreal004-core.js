
function cartepostale(x, y) {
    setmargins(x, y)
    vera()
    signature()
}

function vera() {
    alea=[]
    var nbSteps = 13
    var stepx = floor(actualwidth / nbSteps)
    var stepy = floor(actualheight / nbSteps)
    var diam = stepx
    var rayon = diam / 2
    var x, y, cx, cy, dx, dy, i, j, a, r1, r2, r3
    for (i = 0; i < nbSteps; i++) {
        for (j = 0; j < nbSteps; j++) {
            x = leftmargin + i * stepx
            y = bottommargin - j * stepy
            r1 = random(0.42, 0.57); alea.push(r1)
            r2 = random(0.42, 0.57); alea.push(r2)
            cx = x + stepx * r1
            cy = y - stepy * r2
            ellipse(cx,cy,diam,diam)
            for (var k = 0; k < 5; k++) {
                r3=random(360); alea.push(r3)
                a = radians(floor(r3 / 40) * 40)
                dx = cx + rayon * cos(a)
                dy = cy + rayon * sin(a)
                ellipse(dx, dy, 9, 9)
            }
        }
    }
}