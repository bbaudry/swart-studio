let xoff, xinc, east, south, west, north
xoff = 0.0
xinc = 0.001

function hal() {
    push()
    translate(w * 0.5, h * 0.5)
    center()
    periphery()
    pop()
}

function center() {
    let x1, y1, x2, y2, x3, y3, x4, y4, stepx, stepy, columnwidth, rowheight
    east = []; south = []; west = []; north = []
    rowheight = 42
    columnwidth = 42
    stepx = 1; stepy = 4;
    x1 = columnwidth * 0.5; y1 = -rowheight * 0.5 // going east
    x2 = -columnwidth * 0.5; y2 = rowheight * 0.5 // going south
    x3 = -columnwidth * 0.5; y3 = -rowheight * 0.5 // going west
    x4 = -columnwidth * 0.5; y4 = -rowheight * 0.5 // going north
    noStroke()//strokeWeight(0.5); stroke(100, 100, 100)
    
    while (x1 + stepx < actualwidth * 0.5) {
        east.push(x1)
        west.push(x2)
        south.push(y2)
        north.push(y4)

        if (random() < 0.5) { fill(0, 0, 100) }
        else { fill(0, 0, 0) }
        rect(x1, y1, stepx, rowheight)
        x1 += stepx
        stepx += 2 * noise(xoff); xoff += xinc

        if(random()<0.5){fill(0,0,100)}
        else{fill(0,0,0)}
        rect(x2, y2, columnwidth, stepy)
        y2 += stepy
        stepy += 2 * noise(xoff); xoff += xinc; 

        if (random() < 0.5) { fill(0, 0, 100) }
        else { fill(0, 0, 0) }
        rect(x3, y3, stepx, rowheight); 
        x3 -= stepx
        stepx += 2 * noise(xoff); xoff += xinc

        if(random()<0.5){fill(0,0,100)}
        else{fill(0,0,0)}
        rect(x4, y4, columnwidth, stepy)
        y4 -= stepy
        stepy += 2 * noise(xoff); xoff += xinc; 
    }
}

function periphery(){
    let x1,x2,y1,y2
    for(let i=0; i< east.length-1; i++){
        x1=east[i]
        x2=east[i+1]
    console.log("go east")
        for(let j=0;j<south.length-1; j++){
            y1=south[j]
            y2=south[j+1]
            if(random()<0.3){fill(0,0,100)}
            else{fill(0,0,0)}
            quad(x1,y1,x2,y1,x2,y2,x1,y2)
        }
    }
}