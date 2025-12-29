let xoff, xinc
xoff = 0.0;
xinc = 0.001;

function hal() {
    rect(leftmargin, topmargin, actualwidth, actualheight)
    push()
    translate(leftmargin + actualwidth * 0.5, topmargin + actualheight * 0.5)
    multihelice()
    pop()
}

function multihelice() {
    let cx, cy, x, y, inrad, inangle, inangleinc, inradinc, outrad, outangle, outangleinc, outradinc, diam
    inangle = 0
    inrad = 42
    inangleinc = random(1, 3)
    inradinc = 0.1
    outangle = 0
    outrad = actualwidth * 0.1
    outangleinc = 0.6
    outradinc = 0.1
    diam = 142
    for (let i = 0; i < 2.5 * 360; i++) {
        cx = inrad * cos(inangle)
        cy = inrad * sin(inangle)
        x = cx + outrad * cos(outangle)
        y = cy + outrad * sin(outangle)
        ellipse(x, y, diam, diam)
        inangle += inangleinc;
        inrad += inradinc
        outangle += outangleinc
        outrad += 0.3 * noise(xoff); xoff += xinc
    }
}
