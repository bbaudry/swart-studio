var s,off

function initspin() {
    s = O_currentsection
    off=0
}


function drawspin() {
    strokeWeight(3)
    push()
    translate(s.x, s.y)
        stroke(0,100,100)
        noFill()
        bezier(s.x1,s.y1,O_sectionwidth-off,s.y1,O_sectionwidth-off,s.y1,s.x2,s.y2)
        bezier(s.x2,s.y2,O_sectionwidth-off,s.y2,O_sectionwidth-off,s.y2,s.x3,s.y3)
        bezier(s.x3,s.y3,off,s.y3,off,s.y3,s.x4,s.y4)
        bezier(s.x4,s.y4,off,s.y4,off,s.y4,s.x1,s.y1)
    pop()
    off+=0
}
