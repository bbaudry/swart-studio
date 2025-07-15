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
    offsetx = sectionwidth*0.1
    offsety = 20
    rad = sectionwidth * 0.5
    a1 = 230
    a2 = 360
    a3 = 50
    a4 = 180

    // draw top arc
    arc(cx-offsetx, cy-offsety, rad * 2, rad * 2, radians(a1), radians(a2))
    // draw bottom arc
    arc(cx+offsetx, cy+offsety, rad * 2, rad * 2, radians(a3), radians(a4))
    //
    x1=(cx+offsetx)+offsety*2*cos(radians(a3+180))
    y1=cy-offsety
    x2=cx-offsetx
    y2=cy-offsety
    x3=(cx-offsetx)+offsety*2*cos(radians(a1+180))
    y3=cy+offsety
    x4=cx+offsetx
    y4=cy+offsety
    quad(x1, y1, x2, y2, x3, y3, x4, y4,)
}

function essd(x) {
    let cx, cy, a1, a2, a3, a4, rad, x1, y1, x2, y2, offset,px, py, t, a1top, a2top, a1low, a2low
    cx = x + sectionwidth * 0.5
    cy = topmargin + actualheight * 0.5
    t = 0.5
    offset = random(0.01,0.05)
    rad = sectionwidth * (0.5 + offset / 2)
    a1 = 230
    a2 = 260
    a3 = 20
    a4 = 50

    // draw top arc
    x1 = cx + rad * cos(radians(a2))
    y1 = cy + rad * sin(radians(a2))
    x2 = cx + rad * cos(radians(a3))
    y2 = cy + rad * sin(radians(a3))
    px = (1 - t) * x1 + (t * x2);
    py = (1 - t) * y1 + (t * y2);
    a1top = a1
    a2top = 360
    ellipse(px,py,5,5)
    line(x1, y1, x2, y2)
    arc(px, py, rad * 2, rad * 2, radians(a1top), radians(a2top))

    for (let i = 0; i < 10; i++) {
        x1 = cx + rad * cos(radians(a2 - i))
        y1 = cy + rad * sin(radians(a2 - i))
        x2 = cx + rad * cos(radians(a3 + i))
        y2 = cy + rad * sin(radians(a3 + i))
//        line(x1, y1, x2, y2)
    }

    // draw bottom arc
    x1 = cx + rad * cos(radians(a1))
    y1 = cy + rad * sin(radians(a1))
    x2 = cx + rad * cos(radians(a4))
    y2 = cy + rad * sin(radians(a4))
    px = (1 - t) * x1 + (t * x2);
    py = (1 - t) * y1 + (t * y2);
    a1low = a4
    a2low = 180
    line(x1, y1, x2, y2)
    arc(px, py, rad * 2, rad * 2, radians(a1low), radians(a2low))


}


function ess(x) {
    //rect(x, topmargin, sectionwidth, actualheight)
    fill(0, 100, 100)
    noStroke()
    let cx, cy, a1, a2, diam, offset, rad, x1, y1, x2, y2, px, py, t
    cx = x + sectionwidth * 0.5
    diam = sectionwidth
    offset = 0.02
    a1 = 50
    a2 = 180
    cy = topmargin + actualheight * (0.5 + offset)
    arc(cx, cy, diam, diam, radians(a1), radians(a2))
    // a1=240
    // a2=360
    // cy = topmargin + actualheight * (0.5-offset)
    // arc(cx,cy,diam,diam,radians(a1),radians(a2))

    stroke(0, 100, 100)
    cy = topmargin + actualheight * 0.5
    ellipse(cx, cy, 5, 5)
    noFill()
    rad = sectionwidth * (0.5 + offset / 2)


    a1 = 240
    a2 = 40




    for (i = 0; i < 12; i++) {
        x1 = cx + rad * cos(radians(a1 - i))
        y1 = cy + rad * sin(radians(a1 - i))
        x2 = cx + rad * cos(radians(a2 + i))
        y2 = cy + rad * sin(radians(a2 + i))
        line(x1, y1, x2, y2)
    }
    t = 0.5
    px = (1 - t) * x1 + (t * x2);
    py = (1 - t) * y1 + (t * y2);
    a1 = 240
    a2 = 360
    cy = topmargin + actualheight * (0.5 - offset)
    arc(px, py, rad * 2, rad * 2, radians(a1), radians(a2))

    // a1=40
    // a2=51
    // arc(cx,cy,rad*2,rad*2,radians(a1),radians(a2))
    // a1=230
    // a2=241
    // arc(cx,cy,rad*2,rad*2,radians(a1),radians(a2))
}