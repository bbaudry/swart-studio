let xoff, xinc, innerradii, outerradii
xoff = 0.0
xinc = 0.01

function hal() {
    let cx, cy, r1, r2
    r1 = (actualwidth * 0.4) * 0.8//noise(xoff); xoff += xinc
    r2 = actualwidth * 0.5
    cx = w * 0.5
    cy = h * 0.5
    fleur3(cx, cy, r1, r2)
    //interieur(cx, cy)
    last=interieur2(cx, cy)
    x1=last[0]
    y1=last[1]
    x2=cx+outerradii[0].rayon*cos(outerradii[0].angle)
    y2=cy+outerradii[0].rayon*sin(outerradii[0].angle)
    exterieur(cx, cy, last[2])
}


function fleur3(cx, cy, r1, r2) {
    let x1, y1, x2, y2, x3, y3, x4, y4, a1, a2, anglemax, high, a1init, r3
    a1init = Math.floor(random(90))
    a1 = a1init
    a2 = 0
    anglemax = 6
    high = true
    innerradii = []
    outerradii = []
    while (a1 < a1init + 360) {
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        r3 = r2 * noise(xoff)
        x2 = cx + r3 * cos(a1)
        y2 = cy + r3 * sin(a1)
        if (r3 < r1) {
            innerradii.push({ "angle": a1, "rayon": r3 })
            outerradii.push({ "angle": a1, "rayon": r1 })
        }
        else {
            innerradii.push({ "angle": a1, "rayon": r1 })
            outerradii.push({ "angle": a1, "rayon": r3 })
        }
        xoff += xinc
        a2 = a1 + anglemax
        r3 = r2 * noise(xoff)
        x3 = cx + r1 * cos(a2)
        y3 = cy + r1 * sin(a2)
        x4 = cx + r3 * cos(a2)
        y4 = cy + r3 * sin(a2)
        if (high) {
            if (random() < 0.1) {
                line(x1, y1, x2, y2)
                blow(cx, cy, a1, a2, x2, y2, x4, y4, r2)
                line(x4, y4, x3, y3)
            }
            else {
                line(x1, y1, x2, y2)
                line(x2, y2, x4, y4)
                line(x4, y4, x3, y3)
            }
        }
        else {
            line(x1, y1, x3, y3)
        }
        high = !high
        a1 = a2
    }
}
function interieur2(cx, cy) {
    let x1, y1, x2, y2, i1, i2
    i1=0
    i2=Math.floor(innerradii.length)-1
    while(i1<i2){
        x1=cx+innerradii[i1].rayon*cos(innerradii[i1].angle)
        y1=cy+innerradii[i1].rayon*sin(innerradii[i1].angle)
        x2=cx+innerradii[i2].rayon*cos(innerradii[i2].angle)
        y2=cy+innerradii[i2].rayon*sin(innerradii[i2].angle)
        line(x1, y1, x2, y2)
        i1++
        i2--
    }
    return([x2,y2,i2])
}
function interieur(cx, cy) {
    let a1, r1, a2, r2, x1, y1, x2, y2, x3, y3, x4, y4, x5
    a1 = 0
    r1 = innerradii[0].rayon
    jump = 0
    for (let i = 0; i < Math.floor(innerradii.length * 0.5); i++) {
        jump += Math.floor(innerradii.length * 0.5) + Math.floor(noise(xoff) * 17); xoff += xinc//0.001
        index = jump % innerradii.length
        a2 = innerradii[index].angle
        r2 = innerradii[index].rayon
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        x2 = cx + r2 * cos(a2)
        y2 = cy + r2 * sin(a2)
        if ((x1 > cx && x2 < cx) || (x1 < cx && x2 > cx)){ 
            x5 = cx 
        } 
        else{ 
            if(Math.abs(cx-x1)<Math.abs(cx-x2)){
                x5 = lerp(x1, x2, 0.25) 
            }
            else{
                x5 = lerp(x2, x1, 0.25) 
            }
        }
        x3 = x1; y3 = y1
        x4 = x5; y4 = lerp(y1, y2, 0.25) + Math.abs(y2 - y1) * 0.1
        line(x3, y3, x4, y4)
        x3 = x4; y3 = y4
        x4 = x5; y4 = lerp(y1, y2, 0.5)
        line(x3, y3, x4, y4)
        x3 = x4; y3 = y4
        x4 = x5; y4 = lerp(y1, y2, 0.75) - Math.abs(y2 - y1) * 0.1
        line(x3, y3, x4, y4)
        x3 = x4; y3 = y4
        x4 = lerp(x1, x2, 1); y4 = lerp(y1, y2, 1)
        line(x3, y3, x4, y4)
        a1 = a2
        r1 = r2
    }
    x3=cx+innerradii[0].rayon*cos(innerradii[0].angle)
    y3=cy+innerradii[0].rayon*sin(innerradii[0].angle)
    line(x4,y4,x3,y3)
}

function exterieur(cx, cy, initialindex) {
    let a1, r1, x1, y1, a2, r2, x2, y2, extension, x3, index
    extension = actualwidth*0.2
    for (i = initialindex; i < initialindex+outerradii.length - 1; i++) {
        index = i%(outerradii.length-1)
        a1 = outerradii[index].angle
        r1 = outerradii[index].rayon
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)

        a2 = outerradii[index + 1].angle
        r2 = outerradii[index + 1].rayon
        x2 = cx + r2 * cos(a2)
        y2 = cy + r2 * sin(a2)

        x1 < cx ? x3 = x1 - (extension * noise(xoff)) : x3 = x1 + extension * noise(xoff)
        xoff += xinc
        line(x1, y1, x3, y1)
        line(x3, y1, x3, y2)
        line(x3, y2, x2, y2)
    }
}

function fleur2(cx, cy, r1, r2) {
    let x1, y1, x2, y2, x3, y3, x4, y4, a1, a2, anglemax, high
    a1 = 0
    a2 = 0
    anglemax = 3
    high = true

    while (a1 < 360 - anglemax) {
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        x2 = cx + (r2 * noise(xoff)) * cos(a1)
        y2 = cy + (r2 * noise(xoff)) * sin(a1)
        xoff += xinc
        a2 = a1 + anglemax
        x3 = cx + r1 * cos(a2)
        y3 = cy + r1 * sin(a2)
        x4 = cx + (r2 * noise(xoff)) * cos(a2)
        y4 = cy + (r2 * noise(xoff)) * sin(a2)
        if (high) {
            if (random() < 0.1) {
                line(x1, y1, x2, y2)
                blow(cx, cy, a1, a2, x2, y2, x4, y4, r2)
                line(x4, y4, x3, y3)
            }
            else {
                line(x1, y1, x2, y2)
                line(x2, y2, x4, y4)
                line(x4, y4, x3, y3)
            }
        }
        else {
            line(x1, y1, x3, y3)
        }
        high = !high
        //        quad(x1, y1, x2, y2, x4, y4, x3, y3)
        a1 = a2
    }
    if (high) {
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        x2 = cx + (r2 * noise(xoff)) * cos(a1)
        y2 = cy + (r2 * noise(xoff)) * sin(a1)
        a2 = 0
        x3 = cx + r1 * cos(a2)
        y3 = cy + r1 * sin(a2)
        x4 = cx + (r2 * noise(xoff)) * cos(a2)
        y4 = cy + (r2 * noise(xoff)) * sin(a2)
        line(x1, y1, x2, y2)
        line(x2, y2, x4, y4)
        line(x4, y4, x3, y3)
    }
    else {
        x1 = cx + r1 * cos(a1)
        y1 = cy + r1 * sin(a1)
        a2 = 0
        x3 = cx + r1 * cos(a2)
        y3 = cy + r1 * sin(a2)
        line(x1, y1, x3, y3)
    }
}

function blow(cx, cy, a1, a2, x2, y2, x4, y4, r) {
    let p1, p2
    p1 = onedge(cx, cy, r, a1)
    line(x2, y2, p1.x, p1.y)
    p2 = onedge(cx, cy, r, a2)
    line(x4, y4, p2.x, p2.y)
    line(p1.x, p1.y, p2.x, p2.y)
}

// determine coordinates of a point on the edge of the canvas
// https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/les-rapports-trigonometriques-m1287
function onedge(cx, cy, rayon, a) {
    let b, r, x, y
    if (a <= 45 || a > 315) {
        b = rayon//rightmargin - cx
        r = b / cos(a)
    } else {
        if (a <= 135 && a > 45) {
            b = rayon//rightmargin - cx//bottommargin - cy
            r = b / cos(Math.abs(90 - a))

        } else {
            if (a <= 225 && a > 135) {
                b = rayon//cx - leftmargin
                r = b / cos(Math.abs(180 - a))
            }
            else {
                if (a <= 315 && a > 225) {
                    b = rayon//cx - leftmargin
                    r = b / Math.abs(cos(Math.abs(270 - a)))
                }
            }
        }
    }
    x = cx + r * cos(a)
    y = cy + r * sin(a)
    return createVector(x, y)
}

function fleur1() {
    let cx, cy, x1, y1, x2, y2, r1, r2, a, a1, a2
    cx = w * 0.42
    cy = h * 0.42
    r1 = 42 * random()
    r2 = 342
    for (a = 0; a < 360; a += 3 * noise(xoff)) {
        xoff += xinc
        x1 = cx + r1 * cos(a)
        y1 = cy + r1 * sin(a)
        x2 = cx + (r2 * noise(xoff)) * cos(a)
        y2 = cy + (r2 * noise(xoff)) * sin(a)
        line(x1, y1, x2, y2)
        xoff += xinc
    }
}