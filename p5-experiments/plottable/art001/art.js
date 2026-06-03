
function hal() {
    let x1,y1,x2,y2,x3,y3,x4,y4,cx,cy
    cx=leftmargin+actualwidth*random(0.48,0.52)
    cy=topmargin+actualheight*random(0.48,0.52)
    x1=leftmargin; y1=topmargin+actualheight*random()
    x2=leftmargin+actualwidth*random(); y2=topmargin
    x3=rightmargin; y3=topmargin+actualheight*random()
    x4=leftmargin+actualwidth*random(); y4=bottommargin
    quad(x1,y1,cx,cy,x2,y2,leftmargin,topmargin)
    quad(x2,y2,cx,cy,x3,y3,rightmargin,topmargin)
    quad(x3,y3,cx,cy,x4,y4,rightmargin,bottommargin)
    quad(x4,y4,cx,cy,x1,y1,leftmargin,bottommargin)
}
