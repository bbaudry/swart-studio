var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution = 3

function hal() {
    grille()
}


function grille() {
    let stepx, stepy, x, y, offset
    offset=3
    stepx = actualwidth/resolution 
    stepy = actualwidth/resolution
    for (let i = 0; i < resolution; i++) {
        x = leftmargin + i * stepx
        for (let j = 0; j < resolution; j++) {
            y = topmargin + j * stepy
            pad = offset*noise(xoff)*resolution;xoff+=xinc
            push()
            translate(x+stepx*0.5,y+stepy*0.5)
            if(random()<0.1){;rotate(random(-11,11));stroke(220,100,100)}
            quadwlines(-stepx*0.5+pad,-stepy*0.5+pad,
                stepx*0.5-pad,-stepy*0.5+pad,
                stepx*0.5-pad,stepy*0.5-pad,
                -stepx*0.5+pad,stepy*0.5-pad)
//            rect(x+pad, y+pad, stepx-2*pad, stepy-2*pad)
            pop()
        }
    }
}


function splitquad(x1, y1, x2, y2, x3, y3, x4, y4) {
    let resx, resy, i, j, stepx, stepy, ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4, largeur, hauteur
    resx = 1//Math.floor(random(2,4))
    resy = Math.floor(random(4, 7))
    largeur = (x2 - x1) / resx
    hauteur = (y3 - y1) / resy
    i = 0
    stepx = noise(xoff); xoff += xinc
    while (i + stepx < resx) {
        ix1 = lerp(x1, x2, i / resx)
        ix2 = lerp(x1, x2, (i + stepx) / resx)
        ix3 = lerp(x4, x3, (i + stepx) / resx)
        ix4 = lerp(x4, x3, i / resx)
        oy1 = lerp(y1, y2, i / resx)
        oy2 = lerp(y1, y2, (i + stepx) / resx)
        dy1 = lerp(y4, y3, i / resx)
        dy2 = lerp(y4, y3, (i + stepx) / resx)
        stepy = 0
        j = 0
        stepy = noise(xoff); xoff += xinc
        while (j + stepy < resy) {
            j += stepy
            iy1 = lerp(oy1, dy1, j / resy)
            iy2 = lerp(oy2, dy2, j / resy)
            iy3 = lerp(oy2, dy2, (j + stepy) / resy)
            iy4 = lerp(oy1, dy1, (j + stepy) / resy)
            quadwlines(ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4)
            stepy = noise(xoff); xoff += xinc
        }
        i += stepx

        stepx = noise(xoff); xoff += xinc
    }
}
function splittri(x1, y1, x2, y2, x3, y3) {
    triangle(x1, y1, x2, y2, x3, y3)
}
function quadwlines(x1, y1, x2, y2, x3, y3, x4, y4) {
    let d, t, tinc, ox, oy, dx, dy, amp
    amp = 1//random(1,2)
    dist(x1, y1, x4, y4) > dist(x2, y2, x3, y3) ? d = dist(x1, y1, x4, y4) : d = dist(x2, y2, x3, y3)
    //penwidth<1?tinc=d*penwidth:
    tinc = 1 / (d / penwidth) * amp
    console.log("d: " + d + "; tinc: " + tinc + "; penwidth: " + penwidth)
    for (t = tinc; t < 1; t += tinc) {
        ox = lerp(x1, x4, t)
        oy = lerp(y1, y4, t)
        dx = lerp(x2, x3, t)
        dy = lerp(y2, y3, t)
        line(ox, oy, dx, dy)
    }
}