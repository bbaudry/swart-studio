let xoff, xinc
xoff = 0.0
xinc = 0.001

function hal() {
    push()
    translate(w * 0.5, h * 0.5)
    center()
    pop()
}

function center() {
    let x1, y1, x2, y2, x3, y3, x4, y4, stepx, stepy, columnwidth, rowheight
    rowheight = 14
    columnwidth = 14
    stepx = 3; stepy = 4;
    x1 = columnwidth * 0.5; y1 = -rowheight * 0.5 // going east
    x2 = -columnwidth * 0.5; y2 = rowheight * 0.5 // going south
    x3 = -2 * columnwidth * 0.5; y3 = -rowheight * 0.5 // going west
    x4 = -columnwidth * 0.5; y4 = -1.5 * rowheight // going north
    noStroke()//strokeWeight(0.5); stroke(100, 100, 100)
    
    while (x1 + stepx < actualwidth * 0.5) {
        if (random() < 0.5) { fill(0, 0, 100) }
        else { fill(0, 0, 0) }
        rect(x1, y1, stepx, rowheight)
        x1 += stepx
        stepx += noise(xoff); xoff += xinc

        if(random()<0.5){fill(0,0,100)}
        else{fill(0,0,0)}
        rect(x2, y2, columnwidth, stepy)
        y2 += stepy
        stepy += noise(xoff); xoff += xinc; 

        if (random() < 0.5) { fill(0, 0, 100) }
        else { fill(0, 0, 0) }
        rect(x3, y3, stepx, rowheight); 
        x3 -= stepx
        stepx += noise(xoff); xoff += xinc

        if(random()<0.5){fill(0,0,100)}
        else{fill(0,0,0)}
        rect(x4, y4, columnwidth, stepy)
        y4 -= stepy
        stepy += noise(xoff); xoff += xinc; 

    }
}

