var xoff = 0.0
var xinc = 0.01
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
    let x1, y1, x2, y2, a, ainc, rondeur
    translate(cx,cy)
    a = 90
    ainc = 0.5
    while (a > 0) {
        rondeur=a
        y1=r*sin(a)
        y2=r*sin(-a)
        x1=r*cos(a)
        x2=r*cos(180-a)
        push()
//        rotate(random(-a,a))
        rondeur=a-noise(xoff)*2*a;xoff+=xinc
        rotate(rondeur)
        line(x1,y1,x1,y2)
        line(x1,y1,x2,y1)
        line(x2,y1,x2,y2)
        line(x2,y2,x1,y2)
        pop()
        a-=ainc 
    }
}
