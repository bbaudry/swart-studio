var xoff = 0.0
var xinc = 0.005
var sectionwidth,sectionheight
// inspired by https://i.pinimg.com/originals/ce/67/ff/ce67ff060a0e13808a023b3d61389ee0.jpg
// other option https://www.pinterest.com/pin/410109109798861399/
function spark(y,s) {
    let x
    sectionheight=s
    stroke(0, 100, 100)
    noFill()
    sectionwidth = Math.floor(actualwidth * 0.2)
    x = leftmargin
    slines(x, y); 
    x += sectionwidth
    plines(x, y);  
    x += sectionwidth
    alines(x, y);
    x += sectionwidth
    rlines(x, y); 
    x += sectionwidth
    klines(x, y); 
}


function s(x, y) {
    let cxtop, cytop, cxlow, cylow, a1, a2, a3, a4, rad, x1, y1, x2, y2, x3, y3, x4, y4, offsetx, off
    off=random(0.05, 0.1)
    offsetx = sectionwidth * off
    rad = Math.floor(sectionwidth * (0.5-off))
    cxlow = x + sectionwidth * 0.5 - offsetx
    cylow = y - rad
    cxtop = x + sectionwidth * 0.5 + offsetx
    cytop = y - sectionhesectionheightight + rad
    a1 = Math.floor(random(210, 230))
    a2 = Math.floor(random(340, 360))
    a3 = Math.floor(random(30, 50))
    a4 = Math.floor(random(160, 180))

    // draw top arc
    arc(cxtop, cytop, rad * 2, rad * 2, radians(a1), radians(a2))
    // draw bottom arc
    arc(cxlow, cylow, rad * 2, rad * 2, radians(a3), radians(a4))
    // draw middle link
    x1 = cxtop + rad * cos(radians(a1))
    y1 = cytop + rad * sin(radians(a1))
    x2 = cxtop
    y2 = cytop
    x3 = cxlow + rad * cos(radians(a3))
    y3 = cylow + rad * sin(radians(a3))
    x4 = cxlow
    y4 = cylow
    quad(x1, y1, x2, y2, x3, y3, x4, y4,)
}


function slines(x, y) {
    let cxtop, cytop, cxlow, cylow, a1, a2, a3, a4, rad, x1, y1, x2, y2, x3, y3, x4, y4, offsetx, off
    
    off=random(0.05, 0.1)
    offsetx = sectionwidth * off
    rad = Math.floor(sectionwidth * (0.5-off))
    cxlow = x + sectionwidth * 0.5 - offsetx
    cylow = y - rad
    cxtop = x + sectionwidth * 0.5 + offsetx
    cytop = y - sectionheight + rad
    a1 = Math.floor(random(210, 230))
    a2 = Math.floor(random(340, 360))
    a3 = Math.floor(random(30, 50))
    a4 = Math.floor(random(160, 180))

    // draw top arc
    arcwithlines(cxtop, cytop, rad * 2, rad * 2, radians(a1), radians(a2))
    // draw bottom arc
    arcwithlines(cxlow, cylow, rad * 2, rad * 2, radians(a3), radians(a4))
    // draw middle link
    x1 = cxtop + rad * cos(radians(a1))
    y1 = cytop + rad * sin(radians(a1))
    x2 = cxtop
    y2 = cytop
    x3 = cxlow + rad * cos(radians(a3))
    y3 = cylow + rad * sin(radians(a3))
    x4 = cxlow
    y4 = cylow
    quadwithlines(x1, y1, x2, y2, x3, y3, x4, y4,)
}

function p(x, y) {
    let cx, cy, rad, thick, offset
    offset = random(0.4, 0.6)
    thick = sectionwidth * offset
    y -= sectionheight
    rect(x, y, thick, sectionheight)
    rad = sectionwidth * (0.9 - offset)
    cx = x + thick
    cy = y + rad
    arc(cx, cy, rad * 2, rad * 2, radians(270), radians(90))
}

function plines(x, y) {
    let cx, cy, rad, thick, offset
    
    offset = random(0.4, 0.6)
    thick = sectionwidth * offset
    y -= sectionheight
    rectwithlines(x, y, thick, sectionheight)
    rad = sectionwidth * (0.9 - offset)
    cx = x + thick
    cy = y + rad
    arcwithlines(cx, cy, rad * 2, rad * 2, radians(270), radians(90))
}

function a(x, y) {
    let x1, y1, x2, y2, x3, y3
    x1 = x
    y1 = y
    x2 = x + sectionwidth
    y2 = y
    x3 = x + sectionwidth * random(0.3, 0.7)
    y3 = y - sectionheight
    triangle(x1, y1, x2, y2, x3, y3)
}

function alines(x, y) {
    let x1, y1, x2, y2, x3, y3
    
    x1 = x
    y1 = y
    x2 = x + sectionwidth
    y2 = y
    x3 = x + sectionwidth * random(0.3, 0.7)
    y3 = y - sectionheight
    trianglewithlines(x3, y3, x2, y2, x3, y1); 
    trianglewithlines(x3, y3, x1, y1, x3, y1); 
}


function r(x, y) {
    let cx, cy, rad, thick, offset, x1, y1, x2, y2, x3, y3
    offset = random(0.4, 0.6)
    thick = sectionwidth * offset
    rect(x, y - sectionheight, thick, sectionheight)

    rad = sectionwidth * (0.9 - offset)
    cx = x + thick
    cy = y - sectionheight + rad
    arc(cx, cy, rad * 2, rad * 2, radians(270), radians(90))

    x1 = cx; x2 = x + sectionwidth; x3 = cx
    y1 = cy + rad * random(); y2 = y; y3 = y
    triangle(x1, y1, x2, y2, x3, y3)
}

function rlines(x, y) {
    let cx, cy, rad, thick, offset, x1, y1, x2, y2, x3, y3
    
    offset = random(0.4, 0.6)
    thick = sectionwidth * offset
    rectwithlines(x, y - sectionheight, thick, sectionheight)

    rad = sectionwidth * (0.9 - offset)
    cx = x + thick
    cy = y - sectionheight + rad
    arcwithlines(cx, cy, rad * 2, rad * 2, radians(270), radians(90))

    x1 = cx; x2 = x + sectionwidth; x3 = cx
    y1 = cy + rad * random(); y2 = y; y3 = y
    trianglewithlines(x1, y1, x2, y2, x3, y3)
}

function k(x, y) {
    let cx, cy, thick, offset, x1, y1, x2, y2, x3, y3
    offset = random(0.4, 0.6)
    thick = sectionwidth * offset
    rect(x, y - sectionheight, thick, sectionheight)

    cx = x + thick
    cy = y - sectionheight * 0.5

    x1 = cx; x2 = x + sectionwidth; x3 = cx
    y1 = cy + sectionheight * random(-0.15, 0.15); y2 = y - sectionheight; y3 = y - sectionheight
    triangle(x1, y1, x2, y2, x3, y3)

    y2 = y; y3 = y
    triangle(x1, y1, x2, y2, x3, y3)
}

function klines(x, y) {
    let cx, cy, thick, offset, x1, y1, x2, y2, x3, y3
    
    offset = random(0.4, 0.6)
    thick = sectionwidth * offset
    rectwithlines(x, y - sectionheight, thick, sectionheight)

    cx = x + thick
    cy = y - sectionheight * 0.5

    x1 = cx; x2 = x + sectionwidth; x3 = cx
    y1 = cy + sectionheight * random(-0.15, 0.15); y2 = y - sectionheight; y3 = y - sectionheight
    trianglewithlines(x1, y1, x2, y2, x3, y3)

    y2 = y; y3 = y
    trianglewithlines(x1, y1, x2, y2, x3, y3)
}

function rectwithlines(x, y, rectw, recth) {
    let penwidth = 1
    let x1, y1, x2, y2
    y1 = y
    y2 = y + recth
    x1 = x
    while (x1 < x + rectw) {
        x2 = x1
        line(x1, y1, x2, y2)
        x1 += penwidth
    }
}

// draws a triangle with lines
// assumes it is a right triangle with hypothenus (x1,y1,x2,y2)
function trianglewithlines(x1, y1, x2, y2, x3, y3){
    triangle(x1, y1, x2, y2, x3, y3)
    let lx1, ly1, lx2, ly2,t
    t=0
    while(t<1){
        lx1 = (1 - t) * x1 + (t * x2);
        ly1 = (1 - t) * y1 + (t * y2);
        lx2 = lx1
        ly2 = y2
        line(lx1, ly1, lx2, ly2)
        t+=0.02
    }
}

function arcwithlines(cx, cy, rad, rad, a1, a2){
    arc(cx, cy, rad, rad, a1, a2)
    let r = rad
    let penwidth = 3
    while(r>0){
        arc(cx, cy, r, r, a1, a2)
        r-=penwidth
    }
}

function quadwithlines(x1, y1, x2, y2, x3, y3, x4, y4){
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    let lx1, ly1, lx2, ly2,t
    t=0
    while(t<1){
        lx1 = (1 - t) * x1 + (t * x4);
        ly1 = (1 - t) * y1 + (t * y4);
        lx2 = (1 - t) * x2 + (t * x3);
        ly2 = (1 - t) * y2 + (t * y3);
        line(lx1, ly1, lx2, ly2)
        t+=0.05
    }
}
