
function cartepostale(x, y) {
    setmargins(x, y)
    vera()
    signature()
}

function vera() {
    var nbSteps = 17
    var stepx = floor(actualwidth /nbSteps)
    var stepy = stepx//floor(actualheight / nbSteps)
    var diam = floor(stepx*0.42)
    var rayon = diam/2
    var x,y,cx,cy,dx,dy,i,j
    for (i=0;i<nbSteps;i++) {
        for (j=0;j<nbSteps;j++) {
            x = leftmargin + i*stepx
            y = bottommargin - j*stepy
            cx = x + stepx*0.5// * random(0.42, 0.57)
            cy = y + stepy*0.5// * random(0.42, 0.57)
            var a = radians(floor(random(360)/30)*30)
            stroke(230,100,100)
            ellipse(cx, cy, diam, diam)
            dx = cx + rayon * cos(a)
            dy = cy + rayon * sin(a)
            stroke(30,100,100)
            ellipse(dx, dy, 12, 12)
        }
    }
}