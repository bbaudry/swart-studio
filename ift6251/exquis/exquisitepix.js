var s, t, tinc

function initpix() {
    s = O_currentsection
    t = 0
    tinc = 0.05
}


function drawpix() {
    strokeWeight(3)
    push()
    translate(s.x, s.y)
    stroke(0, 100, 100)
    noFill()
    if (t < 1) {
        x1 = (1 - t) * s.x1 + (t * s.x3);
        y1 = (1 - t) * s.y1 + (t * s.y3);
        var side = (s.y3-s.y1)*tinc
        rect(x1,y1,side,side)
    }
    pop()
    t += tinc
}
