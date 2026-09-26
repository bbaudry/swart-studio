var xoff = 0.0
var xinc = 0.09
var grid = []
var resolution = 20

function hal() {
    let cx, cy, r
    cx = leftmargin + Math.floor(actualwidth * 0.5)
    cy = topmargin + Math.floor(actualheight * 0.5)
    r = Math.floor(actualwidth * 0.42)
    vera(cx, cy, r)
}

function vera(cx, cy, r) {
    let x1, y1, x2, y2, a, ainc, step
    translate(cx,cy)
    a = 90
    ainc = 0.2
    while (a > 0) {
        y1=r*sin(a)
        y2=r*sin(-a)
        x1=r*cos(a)
        x2=r*cos(180-a)
        push()
        rotate(random(-a,a))
        line(x1,y1,x1,y2)
        line(x1,y1,x2,y1)
        line(x2,y1,x2,y2)
        line(x2,y2,x1,y2)
        pop()
        a-=ainc 
    }
}

function courbe(x1,y1,x2,y2,r){
    let ax1,ay1,ax2,ay2
    if(x1==x2){
        ax1=r; ax2=r
        ay1=y1;ay2=y2
    }
    else{
        ax1=x1;ax2=x2
        ay1=r;ay2=r
    }
    beginShape()
    bezierVertex(x1,y1)
    bezierVertex(ax1,ay1)
    bezierVertex(ax2,ay2)
    bezierVertex(x2,y2)
    endShape()
}

