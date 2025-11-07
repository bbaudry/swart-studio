let xoff, xinc, east, south, west, north
xoff = 0.0
xinc = 0.01

function hal() {
    push()
    translate(w * 0.5, h * 0.5)
    center()
    periphery()
    pop()
}

function center() {
    let x1, y1, x2, y2, x3, y3, x4, y4, stepx, stepy, columnwidth, rowheight, ampli
    east = []; south = []; west = []; north = []
    rowheight = 18
    columnwidth = 18
    ampli = 5
    stepx = penwidth*2; stepy = penwidth*5;
    x1 = columnwidth * 0.5; y1 = -rowheight * 0.5 // going east
    x2 = -columnwidth * 0.5; y2 = rowheight * 0.5 // going south
    x3 = -columnwidth * 0.5; y3 = -rowheight * 0.5 // going west
    x4 = -columnwidth * 0.5; y4 = -rowheight * 0.5 // going north
    noStroke()//strokeWeight(0.5); stroke(100, 100, 100)

    east.push(x1)
    south.push(y2)
    west.push(x3)    
    north.push(y4)
 
    while (x1 + stepx < actualwidth * 0.5) {

        setfill(0.5)
//        rect(x1, y1, stepx, rowheight)
//        quad(x1,y1,x1+stepx,y1,x1+stepx,y1+rowheight,x1,y1+rowheight)
//        plottablequad(x1,y1,x1+stepx,y1,x1+stepx,y1+rowheight,x1,y1+rowheight)
        x1 += stepx
        east.push(x1)
        stepx += ampli * noise(xoff); xoff += xinc

        setfill(0.5)
        rect(x2, y2, columnwidth, stepy)
        y2 += stepy
        south.push(y2)
        stepy += ampli * noise(xoff); xoff += xinc; 

        setfill(0.5)
        rect(x3-stepx, y3, stepx, rowheight)
        x3 -= stepx
        west.push(x3)
        stepx += ampli * noise(xoff); xoff += xinc

        setfill(0.5)
        rect(x4, y4-stepy, columnwidth, stepy)//; push(); stroke(300,100,100); noFill(); line(x4-10,y4-stepy,x4,y4-stepy); pop()
        y4 -= stepy
        north.push(y4)
        stepy += ampli * noise(xoff); xoff += xinc; 
    }
}

function periphery(){
    let x1,x2,y1,y2
    // south east
    for(let i=0; i< east.length-1; i++){
        x1=east[i]
        x2=east[i+1]
        for(let j=0;j<south.length-1; j++){
            y1=south[j]
            y2=south[j+1]
            t=setfill(0.5)
            //noFill()
            plottablequad(x1,y1,x2,y1,x2,y2,x1,y2,t)
        }
    }
    //north west
    for(let i=0; i< west.length-1; i++){
        x1=west[i]
        x2=west[i+1]
        for(let j=0;j<north.length-1; j++){
            y1=north[j]
            y2=north[j+1]
            setfill(0.5)
            quad(x1,y1,x2,y1,x2,y2,x1,y2)
        }
    }
    //south west
    for(let i=0; i< west.length-1; i++){
        x1=west[i]
        x2=west[i+1]
        for(let j=0;j<north.length-1; j++){
            y1=south[j]
            y2=south[j+1]
            setfill(0.5)
            quad(x1,y1,x2,y1,x2,y2,x1,y2)
        }
    }
    //north east
    for(let i=0; i< west.length-1; i++){
        x1=east[i]
        x2=east[i+1]
        for(let j=0;j<north.length-1; j++){
            y1=north[j]
            y2=north[j+1]
            setfill(0.5)
            quad(x1,y1,x2,y1,x2,y2,x1,y2)
        }
    }
}

function setfill(proba){
    if(random()<proba){fill(0,0,100);return true}
    else{fill(0,0,0);return false}
    
}

function plottablequad(x1,y1,x2,y2,x3,y3,x4,y4,fil){
    let largeur=x2-x1
    let hauteur=y4-y1
    console.log('hi')
    push()
    stroke(0,0,100)
    strokeWeight(penwidth)
    noFill()
    if(fil){
    for(let x=penwidth*0.5;x<largeur-penwidth;x+=penwidth){
        line(x1+x,y1+penwidth*0.5,x1+x,y4-penwidth*0.5)
    rect(x1+penwidth*0.5,y1+penwidth*0.5,largeur,hauteur)
    }
    }
    pop()
}