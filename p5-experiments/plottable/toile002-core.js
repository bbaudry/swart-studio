// exactly the same as toile001-core except for one instruction swap: 
// dice=random([1,2,3]) is in the while loop instead of out, in function une()

let xoff, xinc
xoff = 0.0
xinc = 0.001 

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
        une(x, y, s)
    }
}

function une(x,y,s){
    let x1,y1,x2,y2,x0,y0,monte,t,stept,dice
    t=0;stept=0.01
    if(random()<0.5){y0=y;monte=false}
    else{y0=y+s,monte=true}
    while(t<1){
        dice=random([1,2,3])
        switch (dice){
            case 1:x1=x;x2=x+s
                break
            case 2:x1=lerp(x,x+s,t);x2=x+s
                break
            case 3:x1=x;x2=lerp(x+s,x,t)
                break
        }
        monte?y1=lerp(y0,y0-s,t):y1=lerp(y0,y0+s,t)
        y2=y1
        line(x1,y1,x2,y2)
        t+=stept
        stept+=noise(xoff)*0.01;xoff+=xinc
    }
}