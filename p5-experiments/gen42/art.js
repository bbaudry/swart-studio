
let palettes = [
    [30, 220],
    [330, 180],
    [220, 30],
    [180, 30],
    [180, 0],
    [150, 330]
]
let palette_index

function hal() {
    setcolors()
    remixingsaintevictoire()
}

function remixingsaintevictoire(){
    let res, iter, xoff, xinc, dice
    res = random(1, 3)
    iter = Math.floor(random(1, 4))
    xoff = 0
    xinc = random(0.001, 0.005)
    dice = noise(xoff); xoff += xinc
    if(dice<0.5){
        vic2(res, iter, xoff, xinc)
    }   
    else{
        vic1(res, iter, xoff, xinc)

    }  
}

function vic2() {
    let x, y, top, boxwidth, boxheight, widthratio, dice
    for (let i = 0; i < iter; i++) {
        x = leftmargin
        while (x < rightmargin) {
            dice = noise(xoff); xoff += xinc
            top = noise(xoff) * actualheight * 0.5
            boxheight = noise(xoff) * (bottommargin - top)
            xoff += xinc
            if (dice < 0.5) {
                boxwidth = noise(xoff) * res; xoff += xinc
                rect(x, top, boxwidth, boxheight)
                x += boxwidth * 2
            }
            else {
                boxwidth = noise(xoff) * (rightmargin - x);
                xoff += xinc
                xoff = painthorizon(x,top,boxheight,res,boxwidth,xoff,xinc)
                x += boxwidth
            }
        }
    }
}

function vic1() {
    let x, y, top, boxwidth, boxheight, widthratio
    for (let i = 0; i < iter; i++) {
        x = leftmargin
        widthratio = random(0.5, 1.0)
        while (x < rightmargin * widthratio) {
            top = noise(xoff) * actualheight * 0.5
            boxheight = noise(xoff) * (bottommargin - top)
            xoff += xinc
            boxwidth = noise(xoff) * res; xoff += xinc
            rect(x, top, boxwidth, boxheight)
            x += boxwidth * 2
        }        
        boxwidth = rightmargin - x
        painthorizon(x,top,boxheight,res,boxwidth,xoff,xinc)
    }
}

function painthorizon(x,top,boxheight,res,boxwidth,xoff,xinc) {
    let y,large
    y = top
    while (y < top + boxheight) {
        large = noise(xoff) * res;
        xoff += xinc
        rect(x, y, boxwidth, large)
        y += large * 2
    }
    return xoff
}

function setcolors() {
    palette_index = Math.floor(random(palettes.length))
    background(palettes[palette_index][0], 100, 100)
    fill(palettes[palette_index][1], 100, 100)
    noStroke()
}
