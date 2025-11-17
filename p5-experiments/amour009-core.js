let xoff, xinc
xoff = 0.0
xinc = 0.0001

function hal() {
    flaque2()
    //courbe()
}


function flaque2(){
    let xeast,yeast,xsouth,ysouth,xwest,ywest,xnorth,ynorth,x1, y1, cx1, cy1, cx2, cy2, x2, y2
    xeast=leftmargin+actualwidth*0.7;yeast=topmargin+actualheight*0.3;
    xsouth=leftmargin+actualwidth*0.3;ysouth=topmargin+actualheight*0.5;
    xwest=leftmargin+actualwidth*0.1;ywest=topmargin+actualheight*0.36;
    xnorth=leftmargin+actualwidth*0.5;ynorth=topmargin+actualheight*0.1;
    beginShape()
    x1=xeast;y1=yeast
    cx1=xeast;cy1=yeast+142
    cx2=xsouth+122;cy2=ysouth
    x2=xsouth;y2=ysouth
    vertex(x1,y1)
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

    x1=xsouth;y1=ysouth
    cx1=xsouth-122;cy1=ysouth
    cx2=xwest;cy2=ywest+99
    x2=xwest;y2=ywest
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

    x1=xwest;y1=ywest
    cx1=xwest;cy1=ywest-199
    cx2=xnorth-84;cy2=ynorth
    x2=xnorth;y2=ynorth
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

    x1=xnorth;y1=ynorth
    cx1=xnorth+122;cy1=ynorth
    cx2=xeast;cy2=yeast-99
    x2=xeast;y2=yeast
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
    endShape()
}



function courbe() {
    let cx, cy, r1, r2, a1, a2, x1, y1, cx1, cy1, cx2, cy2, x2, y2, rseed
    cx = w * 0.4; cy = h * 0.3
    r1 = 300; r2 = 320
    a1 = 40; a2 = 130
    x1 = cx + r1 * cos(a1)
    y1 = cy + r1 * sin(a1)
    cx1 = x1//cx+(r1+100)*cos(a1)
    cy1 = cy + (r1 + 100 * noise(xoff)) * sin(a1); xoff+=xinc
    ellipse(cx1, cy1, 7, 7)
    x2 = cx + r2 * cos(a2)
    y2 = cy + r2 * sin(a2)
    cx2 = x2//cx+(r2+100)*cos(a2)
    cy2 = cy + (r2 + 100 * noise(xoff)) * sin(a2); xoff+=xinc
    ellipse(cx2, cy2, 7, 7)
    beginShape()
    vertex(x1, y1)
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
    endShape()
}


function flaque1() {
    let cx, cy, r1, r2, a1, a2, x1, y1, cx1, cy1, cx2, cy2, x2, y2, rseed
    cx = w * 0.4
    cy = h * 0.3
    ellipse(cx, cy, 7, 7)
    rseed = 10
    while (rseed < 11) {
        beginShape()
        a1 = 40
        a2 = 120
        r1 = rseed * noise(xoff); xoff += xinc
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        vertex(x1, y1)

        cx1 = cx + (r1 + 100) * cos(a1)
        cy1 = cy + (r1 + 100) * sin(a1)
        r2 = rseed * noise(xoff); xoff += xinc
        x2 = cx + r1 * cos(a2)
        y2 = cy + r1 * sin(a2)
        cx2 = cx + (r1 + 100) * cos(a2)
        cy2 = cy + (r1 + 100) * sin(a2)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        a1 = 120
        a2 = 200
        x1 = x2
        y1 = y2
        cx1 = cx + (r1 + 100) * cos(a1)
        cy1 = cy + (r1 + 100) * sin(a1)
        r2 = rseed * noise(xoff); xoff += xinc
        x2 = cx + r1 * cos(a2)
        y2 = cy + r1 * sin(a2)
        cx2 = cx + (r1 + 100) * cos(a2)
        cy2 = cy + (r1 + 100) * sin(a2)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        a1 = 200
        a2 = 300
        x1 = x2
        y1 = y2
        cx1 = cx + (r1 + 100) * cos(a1)
        cy1 = cy + (r1 + 100) * sin(a1)
        r2 = rseed * noise(xoff); xoff += xinc
        x2 = cx + r1 * cos(a2)
        y2 = cy + r1 * sin(a2)
        cx2 = cx + (r1 + 100) * cos(a2)
        cy2 = cy + (r1 + 100) * sin(a2)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        a1 = 300
        a2 = 360
        x1 = x2
        y1 = y2
        cx1 = cx + (r1 + 100) * cos(a1)
        cy1 = cy + (r1 + 100) * sin(a1)
        r2 = rseed * noise(xoff); xoff += xinc
        x2 = cx + r1 * cos(a2)
        y2 = cy + r1 * sin(a2)
        cx2 = cx + (r1 + 100) * cos(a2)
        cy2 = cy + (r1 + 100) * sin(a2)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        endShape(CLOSE)
        rseed += 17
    }

}

function flaque() {
    let cx, cy, r1, r2, a1, a2, x1, y1, cx1, cy1, cx2, cy2, x2, y2
    cx = w * 0.4
    cy = h * 0.3
    rseed = 7
    ellipse(cx, cy, 2, 2)
    while (rseed < 100) {
        beginShape()
        for (a1 = 0; a1 < 360; a1 += 2) {
            r1 = rseed + sin(a1) * 300 * noise(xoff); xoff += xinc
            r2 = rseed + sin(a1 + 6) * 300 * noise(xoff); xoff += xinc
            x1 = cx + r1 * cos(a1)
            y1 = cy + r1 * sin(a1)
            x2 = cx + r1 * cos(a1 + 2)
            y2 = cy + r1 * sin(a1 + 2)
            vertex(x1, y1)
        }
        vertex(x2, y2)
        endShape()
        rseed += 7
    }
}
