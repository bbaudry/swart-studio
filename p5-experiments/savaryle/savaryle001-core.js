var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution = 3

function hal() {
    vera()
}

function vera(){
    var resolution,x,y,step,othercolor,maxothercolor,pad,cx,cy,i,maxi,j,maxj,maxdist
    resolution = 22
    maxi = resolution
    maxj = resolution+3
    othercolor = 0
    maxothercolor = 3
    step = Math.floor(actualwidth / resolution)
    cx=leftmargin+actualwidth*random(0.4,0.8)
    cy=topmargin+(step*maxj)*random(0.4,0.8)
    maxdist=dist(0,0,cx,cy)
    for (i = 0; i < maxi; i++) {
        x = leftmargin + i * step
        for (j = 0; j < maxj; j++) {
            y = topmargin + j * step
//            pad = dist(x,y,cx,cy)*0.01
            maxangle=180
            a=map(dist(x,y,cx,cy),0,maxdist,0,maxangle)
            b=map(dist(x+step,y,cx,cy),0,maxdist,0,maxangle)
            c=map(dist(x+step,y+step,cx,cy),0,maxdist,0,maxangle)
            d=map(dist(x,y+step,cx,cy),0,maxdist,0,maxangle)
            pad=8-7*sin(a) // the further from the center, the smaller the pad value, follow a sin function
            m=-5;amp=-9 //dense in the center
            //m=7;amp=6 //dense towards the edge
            pada=m-amp*sin(a)
            padb=m-amp*sin(b)
            padc=m-amp*sin(c)
            padd=m-amp*sin(d) 
            quadwlines(x+pada,y+pada,x+step-padb,y+padb,x+step-padc,y+step-padc,x+padd,y+step-padd)
            //molnar(x+pad, y+pad, step-2*pad)
        }
    }
}


function molnar(x, y, step) {
    var off, inc, desordre, horizon
    off = 0; inc = penwidth*0.9; horizon = 0
    desordre = noise(xoff)*7.2-3.6;xoff+=xinc// random(-3.6, 3.6);
    push()
    translate(x, y); rotate(desordre)
    quadwlines(0,0,step,0,step,step,0,step)
    pop()
}

function quadwlines(x1, y1, x2, y2, x3, y3, x4, y4) {
    let d, t, tinc, ox, oy, dx, dy, amp
    amp = 1//random(1,2)
    dist(x1, y1, x4, y4) > dist(x2, y2, x3, y3) ? d = dist(x1, y1, x4, y4) : d = dist(x2, y2, x3, y3)
    //penwidth<1?tinc=d*penwidth:
    tinc = 1 / (d / penwidth) * amp
    console.log("d: " + d + "; tinc: " + tinc + "; penwidth: " + penwidth)
    quad(x1+penwidth, y1+penwidth, x2-penwidth, y2+penwidth, x3-penwidth, y3-penwidth, x4+penwidth, y4-penwidth)
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    for (t = tinc; t < 1; t += tinc) {
        ox = lerp(x1, x4, t)
        oy = lerp(y1, y4, t)
        dx = lerp(x2, x3, t)
        dy = lerp(y2, y3, t)
        line(ox, oy, dx, dy)
    }
}