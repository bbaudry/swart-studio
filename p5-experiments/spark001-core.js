var xoff = 0.0
var xinc = 0.005
var sectionwidth
// inspired by https://i.pinimg.com/originals/ce/67/ff/ce67ff060a0e13808a023b3d61389ee0.jpg
// other option https://www.pinterest.com/pin/410109109798861399/
function spark() {
    let x
    stroke(0,100,100)
    fill(0,100,100)
    sectionwidth = Math.floor(actualwidth * 0.2)
    x = leftmargin
    s(x)
    x+=sectionwidth
    p(x)
}


function s(x) {
    let cx, cy, a1, a2, a3, a4, rad, x1, y1, x2, y2, x3, y3, x4, y4, offsetx,offsety
    cx = x + sectionwidth * 0.5
    cy = topmargin + actualheight * 0.5
    offsetx = sectionwidth*0.1
    offsety = Math.floor(random(10,20))
    rad = Math.floor(sectionwidth * 0.38)
    a1 = Math.floor(random(210,230))
    a2 = Math.floor(random(340,360))
    a3 = Math.floor(random(30,50))
    a4 = Math.floor(random(160,180))

    // draw top arc
    arc(cx+offsetx, cy-offsety, rad * 2, rad * 2, radians(a1), radians(a2))
    // draw bottom arc
    arc(cx-offsetx, cy+offsety, rad * 2, rad * 2, radians(a3), radians(a4))
    // draw middle link
    x1=(cx+offsetx)+rad*cos(radians(a1))
    y1=(cy-offsety)+rad*sin(radians(a1))
    x2=cx+offsetx
    y2=cy-offsety
    x3=(cx-offsetx)+rad*cos(radians(a3))
    y3=(cy+offsety)+rad*sin(radians(a3))
    x4=cx-offsetx
    y4=cy+offsety
    quad(x1, y1, x2, y2, x3, y3, x4, y4,)
}

function p(x){
    let y,cx,cy,rad,thick
    thick=sectionwidth*random(0.3,0.5)
    y=topmargin+actualheight*0.5
    y-=sectionwidth*0.5
    rect(x,y,thick,sectionwidth)
    rad=sectionwidth*random(0.2,0.3)
    cx=x+thick
    cy=y+rad
    arc(cx,cy,rad*2,rad*2,radians(270),radians(90))
}