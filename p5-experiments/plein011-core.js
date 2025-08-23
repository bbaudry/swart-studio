var xoff = 0.0
var xinc = 0.0001

function hal() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, rayon
    rayon=5
    for (let t = 0; t < 360; t+=1) {
        ax1 = leftmargin; ay1 = lerp(bottommargin, topmargin, 0.05)-t
        ax2 = rightmargin; ay2 = lerp(bottommargin, topmargin, 0.05)-t
        px1 = lerp(ax1,ax2,0.25)
        py1 = lerp(ay1,ay2,0.25)+rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        px2 = lerp(ax1,ax2,0.75)
        py2 = lerp(ay1,ay2,0.75)-rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)

        ax1 = leftmargin; ay1 = lerp(topmargin, bottommargin, 0.05)+t
        ax2 = rightmargin; ay2 = lerp(topmargin, bottommargin, 0.05)+t
        px1 = lerp(ax1,ax2,0.25)
        py1 = lerp(ay1,ay2,0.25)+rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        px2 = lerp(ax1,ax2,0.75)
        py2 = lerp(ay1,ay2,0.75)-rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
        rayon+=3
    }
}

function hal5() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, rayon
    rayon=135
    for (let t = 0; t < 1; t += 0.0042) {
        ax1 = leftmargin
        ay1 = lerp(bottommargin, topmargin, t)
        ax2 = lerp(leftmargin, rightmargin, t)
        ay2 = bottommargin
        px1 = lerp(ax1,ax2,0.25)+rayon*cos(radians(315))
        py1 = lerp(ay1,ay2,0.25)+rayon*sin(radians(315))
        px2 = lerp(ax1,ax2,0.75)+rayon*cos(radians(90))
        py2 = lerp(ay1,ay2,0.75)+rayon*sin(radians(90)) 
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
        ellipse(lerp(ax1,ax2,0.25),lerp(ay1,ay2,0.25),7,7)
        ellipse(lerp(ax1,ax2,0.75),lerp(ay1,ay2,0.75),7,7)
        rayon+=3
    }
    for (let t = 0; t <= 1; t += 0.0032) {
        ax1 = lerp(leftmargin, rightmargin, t)
        ay1 = topmargin
        ax2 = rightmargin
        ay2 = lerp(bottommargin, topmargin, t)
        px1 = ax1 + (ax2-ax1) *  noise(xoff); xoff += xinc
        py1 = ay1
        px2 = ax2 - (ax2-ax1) * noise(xoff); xoff += xinc
        py2 = ay2 
        //bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
    }
}


function hal4() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, max, magicy, magicx, cy
    for (let t = 0; t < 1; t += 0.0032) {
        ax1 = leftmargin
        ay1 = lerp(bottommargin, topmargin, t)
        ax2 = lerp(leftmargin, rightmargin, t)
        ay2 = bottommargin
        px1 = ax1 + (ax2-ax1) *  noise(xoff); xoff += xinc
        py1 = ay1
        px2 = ax2 - (ax2-ax1) * noise(xoff); xoff += xinc
        py2 = ay2 
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
    }
    for (let t = 0; t <= 1; t += 0.0032) {
        ax1 = lerp(leftmargin, rightmargin, t)
        ay1 = topmargin
        ax2 = rightmargin
        ay2 = lerp(bottommargin, topmargin, t)
        px1 = ax1 + (ax2-ax1) *  noise(xoff); xoff += xinc
        py1 = ay1
        px2 = ax2 - (ax2-ax1) * noise(xoff); xoff += xinc
        py2 = ay2 
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
    }
}

function hal3() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, max, magicy, magicx, cy
    max = Math.floor(actualheight)
    cy = max / 2
    magicy = random(1.8, 2.2)
    magicx = random(0.0001, 0.005)
    for (i = 0; i < max; i++) {
        ax1 = leftmargin
        ay1 = bottommargin - i * noise(xoff); xoff += xinc
        ax2 = rightmargin
        ay2 = topmargin + i//*1.5* noise(xoff); xoff+=xinc

        px1 = ax1 + actualwidth * 0.25
        py1 = ay1 - (cy - i) * noise(xoff); xoff += xinc
        px2 = ax2 - actualwidth * 0.25
        py2 = ay2 + (cy - i) * noise(xoff); xoff += xinc
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)

    }
}

function hal2() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, max, magicy, magicx, cy
    max = Math.floor(actualheight)
    cy = max / 2
    magicy = random(1.8, 2.2)
    magicx = random(0.0001, 0.005)
    //rect(leftmargin,topmargin,actualwidth,actualheight)
    for (i = 0; i < max; i++) {
        ax1 = leftmargin
        ay1 = bottommargin - i //* noise(xoff); xoff+=xinc
        ax2 = rightmargin
        ay2 = ay1//bottommargin - i * magicy * noise(xoff); xoff+=xinc
        px1 = ax1 + actualwidth * magicx * i * noise(xoff); xoff += xinc
        py1 = ay1 - (ay1 - cy) * i * 0.005 * noise(xoff); xoff += xinc
        px2 = ax2 - actualwidth * magicx * i * noise(xoff); xoff += xinc
        py2 = ay2
        beginShape()
        vertex(ax1, ay1)
        bezierVertex(px1, py1, px2, py2, ax2, ay2)
        endShape()

    }
}