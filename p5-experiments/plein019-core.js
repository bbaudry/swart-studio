var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution = 3

function hal() {
    vera()
}

function vera(){
    var resolution,x,y,step,othercol,pad
    resolution = 21
    othercol = 0
    step = Math.floor(actualwidth / resolution)
    for (var i = 0; i < resolution; i++) {
        x = leftmargin + i * step
        for (var j = 0; j < resolution+1; j++) {
            if(random()<0.1 && othercol<3){stroke(0,100,100);othercol++}
            else{stroke(330,100,100)}
            y = topmargin + j * step
            pad = Math.floor(random(1,7))
            molnar(x+pad, y+pad, step-2*pad)
        }
    }
}


function molnar(x, y, step) {
    var off, inc, desordre, horizon
    off = 0; inc = penwidth*0.9; horizon = 0
    desordre = random(-4.6, 4.6);//noise(xoff)*18.4-9.2;xoff+=xinc// 
    push()
    translate(x, y); rotate(desordre)
    // for (let i = 0; i < step; i += inc) {
    //     line(0, horizon, step, horizon)
    //     horizon += inc    }
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