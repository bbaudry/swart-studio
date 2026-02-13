var xoff = 0.0
var xinc = 1
var grid = []
var resolution = 8

function hal() {
    grille()
}

function grille() {
    let x1,y1,x2,y2,x3,y3,x4,y4,gap
    x1=Math.floor(leftmargin+random(0.42,0.52)*actualwidth)
    y1=topmargin
    x2=rightmargin
    y2=Math.floor(topmargin+random(0.42,0.52)*actualheight)
    x3=Math.floor(leftmargin+random(0.42,0.52)*actualwidth)
    y3=bottommargin
    x4=leftmargin
    y4=Math.floor(topmargin+random(0.42,0.52)*actualheight)
    gap=7
    quad(leftmargin,topmargin,x1-gap,topmargin,x1-gap,y2-gap,x4,y4-gap)
    quad(x1+gap,topmargin,rightmargin,topmargin,rightmargin,y2-gap,x1+gap,y2-gap)
    quad(rightmargin,y2+gap,rightmargin,bottommargin,x3+gap,bottommargin,x1+gap,y2+gap)
    quad(x4,y4+gap,x1-gap,y2+gap,x3-gap,y3,x4,bottommargin)
}