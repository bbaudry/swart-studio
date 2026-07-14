
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
    paint2()
}

function paint2() {
    let res,iter,x,y,top,boxwidth,boxheight,widthratio,dice
    res = random(3, 5)
    iter = Math.floor(random(2, 5))
    let xoff = 0
    let xinc = random(0.001, 0.005)
    for (let i = 0; i < iter; i++) {
        x = leftmargin
        while(x<rightmargin){
            dice=noise(xoff)
            xoff+=xinc
            top = noise(xoff) * actualheight
            boxheight = noise(xoff) * (bottommargin - top)
            if (dice < 0.5) {
                boxwidth = noise(xoff) * res;
                xoff += xinc
                rect(x, top, boxwidth, boxheight)
                x += boxwidth * 2
            }
            else{
                y = top
                boxwidth = noise(xoff) * (rightmargin-x) * 0.5;
                xoff += xinc
                while (y<top+boxheight) {
                    let large = noise(xoff) * res;
                    xoff += xinc
                    rect(x, y, boxwidth, large)
                    y += large * 2
                }
                x+=boxwidth
            }
        }
    }
}

function paint() {
    let res,iter,x,y,top,boxwidth,boxheight,widthratio
    res = random(3, 5)
    iter = Math.floor(random(2, 5))
    let xoff = 0
    let xinc = random(0.001, 0.005)
    for (let i = 0; i < iter; i++) {
        x = leftmargin
        widthratio = random(0.5,1.0)
            while (x < rightmargin * widthratio) {
                boxwidth = noise(xoff) * res;
                top = noise(xoff) * actualheight
                boxheight = noise(xoff) * (bottommargin - top)
                xoff += xinc
                rect(x, top, boxwidth, boxheight)
                x += boxwidth * 2
            }
            y = top
            while (y<top+boxheight) {
                let large = noise(xoff) * res;
                xoff += xinc
                rect(x, y, rightmargin-x, large)
                y += large * 2
            }
        
    }
}

function setcolors() {
    palette_index = Math.floor(random(palettes.length))
    background(palettes[palette_index][0], 100, 100)
    fill(palettes[palette_index][1], 100, 100)
    noStroke()
}
