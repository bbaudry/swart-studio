let xoff, xinc
xoff = 0.0
xinc = 0.0001

function hal() {
    flaque2()
    //courbe()
}


function flaque2() {
    let xe, ye, xs, ys, xw, yw, xn, yn, x1, y1, cx1, cy1, cx2, cy2, x2, y2, offset, pad, flaquewidth, flaqueheight
    offset = 6
    pad=0.2
    xe = leftmargin + actualwidth * 0.3 * noise(xoff); ye = topmargin + actualheight * 0.3; xoff += xinc
    xs = xe - (xe-leftmargin) * noise(xoff); ys = topmargin + actualheight * 0.5 * noise(xoff); xoff += xinc
    xw = leftmargin+(xs-leftmargin) * noise(xoff); yw = topmargin + actualheight * 0.36; xoff += xinc
    xn = leftmargin + actualwidth * 0.5; yn = topmargin + actualheight * 0.1;
    flaquewidth = xe - xw; flaqueheight = ys - yn
    let xeast, yeast, xsouth, ysouth, xwest, ywest, xnorth, ynorth
    yeast=ye;xsouth=xs;ywest=yw;xnorth=xn
    for (let i = 0; i < 2; i++) {
        xeast = xe - i * offset; ysouth = ys - i * offset;
        xwest = xw + i * offset; ynorth = yn + i * offset;
        
        beginShape()
        x1 = xeast; y1 = yeast
        cx1 = xeast; cy1 = yeast + flaqueheight * pad - i * offset
        cx2 = xsouth + flaquewidth * pad - i * offset; cy2 = ysouth
        x2 = xsouth; y2 = ysouth
        vertex(x1, y1)
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        x1 = xsouth; y1 = ysouth
        cx1 = xsouth - flaquewidth * pad + i * offset; cy1 = ysouth
        cx2 = xwest; cy2 = ywest + flaqueheight * pad - i * offset
        x2 = xwest; y2 = ywest
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        x1 = xwest; y1 = ywest
        cx1 = xwest; cy1 = ywest - flaqueheight * pad + i * offset
        cx2 = xnorth - flaquewidth * pad + i * offset; cy2 = ynorth
        x2 = xnorth; y2 = ynorth
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

        x1 = xnorth; y1 = ynorth
        cx1 = xnorth + flaquewidth * pad - i * offset; cy1 = ynorth
        cx2 = xeast; cy2 = yeast - flaqueheight * pad + i * offset
        x2 = xeast; y2 = yeast
        bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
        endShape()
    }
        push()
    stroke(50,100,100); ellipse(xs,ys,7,7)
    stroke(150,100,100); ellipse(xn,yn,7,7)
    stroke(200,100,100); ellipse(xe,ye,7,7)
    stroke(250,100,100); ellipse(xw,yw,7,7)
    pop()

}

