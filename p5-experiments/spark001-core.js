var xoff = 0.0
var xinc = 0.005
var sectionwidth
// inspired by https://i.pinimg.com/originals/ce/67/ff/ce67ff060a0e13808a023b3d61389ee0.jpg
// other option https://www.pinterest.com/pin/410109109798861399/
function spark() {
    let x
    sectionwidth = Math.floor(actualwidth * 0.5)
    x = leftmargin
    essbis(x)
}


function essbis(x) {
    let cx, cy, a1, a2, a3, a4, rad, x1, y1, x2, y2, x3, y3, x4, y4, offsetx,offsety,px, py, t, a1top, a2top, a1low, a2low
    fill(0,100,100)
    stroke(0,100,100)
    cx = x + sectionwidth * 0.5
    cy = topmargin + actualheight * 0.5
    t = 0.5
    offsetx = sectionwidth*0.08
    offsety = 20
    rad = sectionwidth * 0.5
    a1 = 210
    a2 = 360
    a3 = 30
    a4 = 180

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
