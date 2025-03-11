var s

function initred() {
    s = currentsection
}


function drawred() {
    var r=random()
    push()
    translate(s.x, s.y)
    if(r>0.91){
        fill(0,100,100)
        noStroke()
        quad(s.x1,s.y1,s.x2,s.y2,s.x3,s.y3,s.x4,s.y4)
    }
    else{
        fill(0,0,0)
        rect(0,0,sectionwidth,sectionheight)
    }
    pop()
}
