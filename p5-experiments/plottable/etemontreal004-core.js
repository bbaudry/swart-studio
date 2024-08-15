
function cartepostale(x, y) {
    setmargins(x, y)
    stroke(230,100,100)
    vera()
    stroke(30,100,100)
    vera()
    signature()
}

function vera() {
    var nbSteps = 17
    var stepx = floor(actualwidth /nbSteps)
    var stepy = stepx//floor(actualheight / nbSteps)
    var diam = floor(stepx*0.91)
    var rayon = diam/2
    var x,y,cx,cy,dx,dy,i,j
    for (i=0;i<nbSteps;i++) {
        for (j=0;j<nbSteps;j++) {
            x = leftmargin + i*stepx
            y = topmargin + j*stepy
            cx = x + stepx * random(0.42, 0.57)
            cy = y + stepy * random(0.42, 0.57)
            var a = random(360)
            ellipse(cx, cy, diam, diam)
            dx = cx + rayon * cos(a)
            dy = cy + rayon * sin(a)
            ellipse(dx, dy, 12, 12)
        }
    }
}