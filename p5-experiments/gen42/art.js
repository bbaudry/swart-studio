
let palettes = [
    [30, 220],
    [330, 180],
    [220,30],
    [180,30]
]
let palette_index

function hal() {
    let res = 3
    let stepx = actualwidth / res
    let stepy = actualheight / res
    let xoff=0
    let xinc=0.001
    palette_index=Math.floor(random(palettes.length))
    background(palettes[palette_index][0],100,100)
    fill(palettes[palette_index][1],100,100)
    noStroke()
    for(let i=0;i<Math.floor(random(2,5));i++){
    let x=leftmargin
    while(x<rightmargin){
        let large=noise(xoff)*res; 
        let top=noise(xoff)*actualheight
        let bottom=noise(xoff)*(bottommargin-top)
        xoff+=xinc
        rect(x,top,large,bottom)
        x+=large*2
    }}
}
