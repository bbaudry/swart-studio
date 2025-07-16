var xoff = 0.0
var xinc = 0.005
var sectionwidth
// inspired by https://i.pinimg.com/originals/ce/67/ff/ce67ff060a0e13808a023b3d61389ee0.jpg
// other option https://www.pinterest.com/pin/410109109798861399/
function spark() {
    let x,y
    stroke(0,100,100)
    fill(0,100,100)
    sectionwidth = Math.floor(actualwidth * 0.2)
    sectionheight = Math.floor(actualheight * 0.3)
    x = leftmargin
    y = bottommargin
    s(x,y); noFill();quad(x,y,x,y-sectionheight,x+sectionwidth,y-sectionheight,x+sectionwidth,y);fill(0,100,100)
    x+=sectionwidth
    p(x,y); noFill();quad(x,y,x,y-sectionheight,x+sectionwidth,y-sectionheight,x+sectionwidth,y);fill(0,100,100)
    x+=sectionwidth
    a(x,y); noFill();quad(x,y,x,y-sectionheight,x+sectionwidth,y-sectionheight,x+sectionwidth,y);fill(0,100,100)
    x+=sectionwidth
    a(x,y); noFill();quad(x,y,x,y-sectionheight,x+sectionwidth,y-sectionheight,x+sectionwidth,y);fill(0,100,100)
    x+=sectionwidth
    a(x,y); noFill();quad(x,y,x,y-sectionheight,x+sectionwidth,y-sectionheight,x+sectionwidth,y);fill(0,100,100)
}


function s(x,y) {
    let cxtop, cytop, cxlow, cylow, a1, a2, a3, a4, rad, x1, y1, x2, y2, x3, y3, x4, y4, offsetx,offsety
    offsetx = sectionwidth*random(0.05,0.1)
    rad = Math.floor(sectionwidth * 0.38)
    cxlow = x + sectionwidth * 0.5 - offsetx
    cylow = y - rad
    cxtop = x + sectionwidth * 0.5 + offsetx
    cytop = y - sectionheight + rad
    a1 = Math.floor(random(210,230))
    a2 = Math.floor(random(340,360))
    a3 = Math.floor(random(30,50))
    a4 = Math.floor(random(160,180))

    // draw top arc
    arc(cxtop, cytop, rad * 2, rad * 2, radians(a1), radians(a2))
    // draw bottom arc
    arc(cxlow, cylow, rad * 2, rad * 2, radians(a3), radians(a4))
    // draw middle link
    x1=cxtop+rad*cos(radians(a1))
    y1=cytop+rad*sin(radians(a1))
    x2=cxtop
    y2=cytop
    x3=cxlow+rad*cos(radians(a3))
    y3=cylow+rad*sin(radians(a3))
    x4=cxlow
    y4=cylow
    quad(x1, y1, x2, y2, x3, y3, x4, y4,)
}

function p(x,y){
    let cx,cy,rad,thick,offset
    offset=random(0.4,0.6)
    thick=sectionwidth*offset
    y-=sectionheight
    rect(x,y,thick,sectionheight)
    rad=sectionwidth*(0.9-offset)
    cx=x+thick
    cy=y+rad
    arc(cx,cy,rad*2,rad*2,radians(270),radians(90))
}

function a(x,y){
    let x1,y1,x2,y2,x3,y3
    x1=x
    y1=y
    x2=x+sectionwidth
    y2=y
    x3=x+sectionwidth*random(0.3,0.7)
    y3=y-sectionheight
    triangle(x1,y1,x2,y2,x3,y3)
}