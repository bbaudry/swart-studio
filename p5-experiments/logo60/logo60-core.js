var xoff = 0.0
var xinc = 0.01
var grid = []
var minWeight=3
var maxWeight=11
var resolution = 3
var inradx, inrady, outradx, outrady
var angleleft, angleright
var backcolor, branchcolor, leafcolor

function hal() {
    backcolor = [230, 100, 40]
    branchcolor = [190, 100, 100]
    leafcolor = [280, 100, 100]
    fill(backcolor[0], backcolor[1], backcolor[2])
    noStroke()
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

function trunk(){
    let off = 55
    let x1,y1,x2,y2
    x1=inradx*cos(90+off)
    y1=inrady*sin(90+off)
    x2=inradx*cos(90-off)
    y2=inrady*sin(90-off)
    line(x1,y1,x2,y2)
    off=35
    x1=outradx*cos(90+off)
    y1=outrady*sin(90+off)
    x2=outradx*cos(90-off)
    y2=outrady*sin(90-off)
    ellipse(x1,y1,8,8)
}

function branches() {
    let angleoff, binsecret
    angleoff = Math.floor(random(55, 70))
    // branch in the midlle
    // onebranch(270)
    //left
    binsecret = [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0]
    leftbranches(angleoff,binsecret)
    //right
    binsecret = [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0]
    rigthbranches(angleoff,binsecret)
}

function leftbranches(angleoff,binsecret){
    let angle = 90 + angleoff
    let leaf
    let angleinc = Math.floor((270 - angle) / binsecret.length)
    let index = 0
    while (angle < 270) {
        leaf = (binsecret[index] == 1)
        onebranch(angle, leaf)
        angle += angleinc
        index++
    }
}
function rigthbranches(angleoff,binsecret){
    let angle = 450 - angleoff
    let leaf
    let angleinc = Math.floor((angle - 270) / binsecret.length)
    let index = 0
    while (angle > 270) {
        leaf = (binsecret[index] == 1)
        onebranch(angle, leaf)
        angle -= angleinc
        index++
    }

}

function onebranch(angle, leaf) {
    let xin, yin, xout, yout, x1, y1, x3, y3, seg1, seg2, seg3, iregular
    iregular = 1//map(noise(xoff),0,1,0.75,0.95);xoff+=0.01
    push()
    stroke(branchcolor[0], branchcolor[1]*random(), branchcolor[2])
    seg1 = random(0.5, 0.7)
    seg2 = random(0.28, 0.42)
    seg3 = random(0.01, 0.1)
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
        x1 = (inradx + (outradx - inradx) * seg1) * cos(angle)
        y1 = yout
        x2 = (inradx + (outradx - inradx) * seg2) * cos(angle)
        y2 = (inradx + (outrady - inrady) * seg2) * sin(angle)
        x3 = (inradx + (outradx - inradx) * seg3) * cos(angle)
        y3 = (inradx + (outrady - inrady) * seg3) * sin(angle)
    }
    else {//top branches
        x1 = xout
        y1 = (inradx + (outrady - inrady) * seg1) * sin(angle)
        x2 = (inradx + (outradx - inradx) * seg2) * cos(angle)
        y2 = (inradx + (outrady - inrady) * seg2) * sin(angle)
        x3 = (inradx + (outradx - inradx) * seg3) * cos(angle)
        y3 = (inradx + (outrady - inrady) * seg3) * sin(angle)
    }
    strokeWeight(random(minWeight, maxWeight))
    line(xout, yout, x1, y1)
    // randomly decide between 2 or 3 intermediate segments
    if (random() < 0.2) {
        line(x1, y1, x3, y3)
    } else {
        line(x1, y1, x2, y2)
        line(x2, y2, x3, y3)
        // extra small branch
        if(random()<0.9 && (angle<260 || angle >280)){
            let ratio1=random(0.3,0.4)
            let ratio2=random(0.42,0.55)
            let ratio3=random(0.1,0.2)
            let ox,oy,dx,dy 
            line(lerp(x3,x2,ratio1),lerp(y3,y2,ratio1),lerp(x2,x1,ratio3),lerp(y3,y2,ratio2))
                ox=lerp(x2,x1,ratio3)
                oy=lerp(y3,y2,ratio2)
            if(Math.abs(y2-y3)>actualheight*0.05 && Math.abs(x2-x3)>actualwidth*0.05){  
                dx=lerp(ox,x1,0.8)
                dy=lerp(oy,y1,0.8)
                line(ox,oy,dx,dy)
                ellipse(dx,dy,8,8)
            }
            else{
                ellipse(ox,oy,8,8)
            }
        }

    } 
    line(x3, y3, xin, yin)

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