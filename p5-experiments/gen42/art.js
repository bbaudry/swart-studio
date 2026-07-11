
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
    paint()
}

function paint() {
    let res = random(3, 5)
    let iter = Math.floor(random(2, 5))
    let widthratio = random(0.8,1.0)
    let xoff = 0
    let xinc = random(0.001, 0.005)
    let x,y,top,stringheight
    for (let i = 0; i < iter; i++) {
        x = leftmargin
        while (x < rightmargin * widthratio) {
            let large = noise(xoff) * res;
            top = noise(xoff) * actualheight
            stringheight = noise(xoff) * (bottommargin - top)
            xoff += xinc
            rect(x, top, large, stringheight)
            x += large * 2
        }
        y = top
        while (y<top+stringheight) {
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
