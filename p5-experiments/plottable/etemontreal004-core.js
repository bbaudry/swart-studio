
function cartepostale(x, y) {
    setmargins(x, y)
    vera()
    molnar()
    signature()
}
var nbSteps = 13

function vera() {
    stroke(0,0,0)
    strokeWeight(1)
    alea=[]
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

function molnar(){
    stroke(50,100,100)
    strokeWeight(5)
    var xind,yind
    xind = floor(random(nbSteps))
    var x1 = leftmargin + floor(actualwidth / nbSteps) * xind
    var y1 = topmargin
    xind = floor(random(nbSteps))
    yind = floor(random(nbSteps))
    var x2 = leftmargin + floor(actualwidth / nbSteps) * xind
    var y2 = topmargin + floor(actualheight / nbSteps) * yind
    line(x1,y1,x2,y2)
    xind = floor(random(nbSteps))
    yind = floor(random(nbSteps-yind))
    var x3 = leftmargin + floor(actualwidth / nbSteps) * xind
    var y3 = topmargin + floor(actualheight / nbSteps) * yind
    line(x2,y2,x3,y3)
    xind = floor(random(nbSteps))
    var x4 = leftmargin + floor(actualwidth / nbSteps) * xind
    var y4 = bottommargin
    line(x3,y3,x4,y4)
}