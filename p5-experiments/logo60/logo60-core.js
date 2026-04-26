var xoff = 0.0
var xinc = 0.01
var grid = []
var resolution = 3
var inradx, inrady, outradx, outrady
var angleleft, angleright
var backcolor, branchcolor, leafcolor

function hal() {
    backcolor = [230, 100, 40]
    branchcolor = [190, 100, 100]
    leafcolor = [280, 100, 100]
    fill(backcolor[0], backcolor[1], backcolor[2])
    rect(0, 0, w, h)
    noFill()
    stroke(branchcolor[0], branchcolor[1], branchcolor[2])
    translate(leftmargin + actualwidth * 0.5, topmargin + actualheight * 0.5)
    outradx = actualwidth * 0.5
    outrady = actualheight * 0.5 * 0.9
    inradx = actualwidth * 0.5 * 0.4
    inrady = actualheight * 0.5 * 0.3
    angleleft = 140
    angleright = 60

    // ellipse(0, 0, outradx * 2, outrady * 2)
    // ellipse(0, 0, inradx * 2, inrady * 2)
    branches()
    trunk()
}

function branches() {
    let angle, angleoff, anglespan, angleinc, index, binsecret, leaf
    angleoff = Math.floor(random(55, 70))
    anglespan = 360 - (angleoff * 2)
    let xin, yin, xout, yout
    angle = 270
    onebranch(angle)
    //left
    angle = 90 + angleoff
    binsecret = [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0]
    angleinc = Math.floor((270 - angle) / binsecret.length)
    index = 0
    while (angle < 270) {
        leaf = (binsecret[index] == 1)
        onebranch(angle, leaf)
        angle += angleinc
        index++
    }
    //right
    angle = 450 - angleoff
    binsecret = [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0]
    angleinc = Math.floor((angle - 270) / binsecret.length)
    index = 0
    while (angle > 270) {
        leaf = (binsecret[index] == 1)
        onebranch(angle, leaf)
        angle -= angleinc
        index++
    }
}

function onebranch(angle, leaf) {
    let xin, yin, xout, yout, x1, y1, x2, y2iregular
    iregular = 1//map(noise(xoff),0,1,0.75,0.95);xoff+=0.01
    push()
    inradx = inradx * iregular
    inrady = inrady * iregular
    outradx = outradx * iregular
    outrady = outrady * iregular
    xin = inradx * cos(angle)
    yin = inrady * sin(angle)
    xout = outradx * cos(angle)
    yout = outrady * sin(angle)
    ellipse(xin, yin, 7, 7)
    //low branches
    if (angle % 360 <= 180) {
        x1 = (inradx + (outradx - inradx) * 0.6) * cos(angle)
        y1 = yout
        x2 = (inradx + (outradx - inradx) * 0.01) * cos(angle)
        y2 = (inradx + (outradx - inradx) * 0.01) * sin(angle)
    }
    else {//top branches
        x1 = xout
        y1 = (inradx + (outradx - inradx) * 0.6) * sin(angle)
        x2 = (inradx + (outradx - inradx) * 0.01) * cos(angle)
        y2 = (inradx + (outradx - inradx) * 0.01) * sin(angle)
    }
    strokeWeight(random(2,9))
    line(xout, yout, x1, y1)
    line(x1, y1, x2, y2)
    line(x2, y2, xin, yin)
    if (leaf) {
        fill(leafcolor[0], leafcolor[1], leafcolor[2])
        stroke(leafcolor[0], leafcolor[1], leafcolor[2])
    }
    else {
        fill(backcolor[0], backcolor[1], backcolor[2])
        stroke(leafcolor[0], leafcolor[1], leafcolor[2])
    }
    ellipse(xout, yout, 17, 17)

    pop()
}