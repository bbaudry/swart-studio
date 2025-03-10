var s

function initbw(section) {
    s = section
}


function drawbw() {
    var r=random()
    push()
    translate(s.x, s.y)
    fill(0,0,0)
    rect(0,0,sectionwidth,sectionheight)
    if(r>0.5){
        line(s.x1,s.y1,s.x3,s.y3)
    }
    else{
        line(s.x2,s.y2,s.x4,s.y4)
    }
    pop()
}
