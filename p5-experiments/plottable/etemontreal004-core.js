
function cartepostale(x, y) {
    //rect(leftmargin,topmargin,actualwidth,actualheight)
    setmargins(x, y)
    vera()
    signature()
}

function vera() {
    var nbSteps = 11
    var stepx = floor(actualwidth / nbSteps)
    var stepy = stepx//floor(actualheight / nbSteps)
    var diam = floor(stepx * 0.42)
    var rayon = diam / 2
    var x, y, cx, cy, dx, dy, i, j, a
    for (i = 0; i < nbSteps; i++) {
        for (j = 0; j < nbSteps+10; j++) {
            x = leftmargin + i * stepx
            y = bottommargin - j * stepy
            cx = x + stepx * 0.5// * random(0.42, 0.57)
            cy = y - stepy * 0.5// * random(0.42, 0.57)
            //stroke(230, 100, 100)
            //ellipse(cx, cy, diam, diam)
            for (var k = 0; k < 5; k++) {
                a = radians(floor(random(360) / 40) * 40)
                dx = cx + rayon * cos(a)
                dy = cy + rayon * sin(a)
                //stroke(30, 100, 100)
                ellipse(dx, dy, 9, 9)
            }
        }
    }
}