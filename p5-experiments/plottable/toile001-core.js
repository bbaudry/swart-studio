let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.001; yinc = 0.6

function hal() {
    profondeur()
}

function profondeur() {
    let resolution, step, stepy, niveau, x, y
    resolution = 3
    step = Math.floor(actualwidth / resolution)
    niveau = 0
    for (let i = 0; i < resolution; i++) {
        for (let j = 0; j < resolution; j++) {
            cell(leftmargin + i * step, topmargin + j * step, step, niveau)
            //une(leftmargin + i * step, topmargin + j * step, step)
        }
    }
}

function cell(x, y, s, d) {
    if (random() < 0.8 && d < 3) {
        d++
        s = Math.floor(s / 2)
        cell(x, y, s, d)
        cell(x + s, y, s, d)
        cell(x + s, y + s, s, d)
        cell(x, y + s, s, d)
    }
    else {
        if (d == 0) {
            line(x, y, x + s, y + s)
            line(x, y + s, x + s, y)
        }
        else {
            une(x, y, s)
        }
    }
}

function une(x,y,s){
//    rect(x,y,s,s)
    let x1,y1,x2,y2,x0,y0,monte,t,stept
    t=0;stept=0.01
    if(random()<0.5){x0=x;y0=y;monte=false}
    else{x0=x;y0=y+s,monte=true}
    while(t<1){
        x1=x//lerp(x0,x0+s,t)
        x2=x+s
        monte?y1=lerp(y0,y0-s,t):y1=lerp(y0,y0+s,t)
        y2=y1
        line(x1,y1,x2,y2)
        t+=stept
        stept+=noise(xoff)*0.01;xoff+=xinc
    }
}