let xoff, xinc, east, south, west, north
xoff = 0.0
xinc = 0.01

function hal() {
    push()
    translate(w * 0.5, h * 0.5)
    center()
    periphery()
    pop()
    topz()
}

function center() {
    let x1, y1, x2, y2, x3, y3, x4, y4, stepx, stepy, columnwidth, rowheight, ampli, t
    east = []; south = []; west = []; north = []
    rowheight = 18
    columnwidth = 18
    ampli = 5
    stepx = penwidth * 2; stepy = penwidth * 5;
    x1 = columnwidth * 0.5; y1 = -rowheight * 0.5 // going east
    x2 = -columnwidth * 0.5; y2 = rowheight * 0.5 // going south
    noFill()
        stroke(0, 0, 100)
    strokeWeight(penwidth)


    east.push(x1)
    south.push(y2)
    west.push(x3)
    north.push(y4)

    while (x1 + stepx < actualwidth * 0.4) {

        t = setfill(0.5)
        plottablequad(x1, y1, x1+stepx, y1+rowheight, t)
        x1 += stepx
        east.push(x1)
        stepx += ampli * noise(xoff); xoff += xinc

        t = setfill(0.5)
        plottablequad(x2, y2, x2+columnwidth, y2+stepy, t)
        y2 += stepy
        south.push(y2)
        stepy += ampli * noise(xoff); xoff += xinc;

    }
}

function periphery() {
    let x1, x2, y1, y2
    // south east
    for (let i = 0; i < east.length - 1; i++) {
        x1 = east[i]
        x2 = east[i + 1]
        for (let j = 0; j < south.length - 1; j++) {
            y1 = south[j]
            y2 = south[j + 1]
            t = setfill(0.5)
            //plottablequad(x1, y1, x2, y1, x2, y2, x1, y2, t)
            plottablequad(x1, y1, x2, y2, t)
        }
    }
}

function setfill(proba) {
   // if (random() < proba) { fill(0, 0, 100); return true }
   // else { fill(0, 0, 0); return false }
    return random() < proba ? true:false
}

// assumption x2 > x1 and y2 > y1
function plottablequad(x1, y1, x2, y2, fil) {
    let largeur = x2 - x1
    let hauteur = y2 - y1
    push()
    noFill()
    if (fil) {
        rect(x1 + penwidth * 0.5, y1 + penwidth * 0.5, largeur, hauteur)
        for (let x = penwidth * 0.5; x < largeur+penwidth*0.5; x += penwidth*0.9) {
            line(x1 + x, y1 + penwidth*0.5, x1 + x, y2)
        }
    }
    pop()
}

function topz(){
    let x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9
    x1=leftmargin+random(0.1)*actualwidth;y1=topmargin+random(0.1)*actualheight
    x2=leftmargin+random(0.4,0.6)*actualwidth;y2=topmargin
    x3=leftmargin+random(0.9,1.0)*actualwidth;y3=topmargin+random(0.1)*actualheight

    x4=leftmargin+random(0.1)*actualwidth;y4=topmargin+random(0.17,0.23)*actualheight
    x5=leftmargin+random(0.4,0.6)*actualwidth;y5=topmargin+actualwidth*0.2
    x6=leftmargin+random(0.9,1.0)*actualwidth;y6=topmargin+random(0.17,0.23)*actualheight

    x7=leftmargin+random(0.1)*actualwidth;y7=topmargin+random(0.3,0.42)*actualheight
    x8=leftmargin+random(0.4,0.6)*actualwidth;y8=topmargin+actualwidth*0.42
    x9=leftmargin+random(0.9,1.0)*actualwidth;y9=topmargin+random(0.3,0.42)*actualheight

    push()
    stroke(50,100,100)
    hash(x1,y1,x2,y2,x5,y5,x4,y4);
    hash(x2,y2,x3,y3,x6,y6,x5,y5);
    hash(x4,y4,x5,y5,x8,y8,x7,y7);
    hash(x5,y5,x6,y6,x9,y9,x8,y8);
    pop()

    stroke(200,100,100)
    hash(x2,y2,x5,y5,x4,y4,x1,y1)
    hash(x3,y3,x6,y6,x5,y5,x2,y2)
    hash(x5,y5,x8,y8,x7,y7,x4,y4)
    hash(x6,y6,x9,y9,x8,y8,x5,y5)
}

function hash(x1,y1,x2,y2,x3,y3,x4,y4){
    let ox,oy,dx,dy
    for(t=0;t<1;t+=0.035){
        ox=lerp(x1,x2,t)
        oy=lerp(y1,y2,t)
        dx=lerp(x4,x3,t)
        dy=lerp(y4,y3,t)
        line(ox,oy,dx,dy)
    }
}