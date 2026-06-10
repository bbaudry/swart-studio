
let palettes = [
    [30, 220],
    [330, 180]
]
let palette_index

function hal() {
    let res = 20
    let stepx = actualwidth / res
    let stepy = actualheight / res
    palette_index=Math.floor(random(palettes.length))
    background(palettes[palette_index][0],100,100)
    fill(palettes[palette_index][1],100,100)
    noStroke()
    rect(leftmargin,topmargin+actualheight*random(0.8),actualwidth,actualheight*0.1)
}
