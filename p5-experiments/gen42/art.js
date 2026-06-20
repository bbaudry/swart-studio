
let palettes = [
    [30, 220],
    [330, 180],
    [220,30],
    [180,30],
    [180,0],
    [150,330]
]
let palette_index

function hal() {
    let res = random(3,5)
    let iter = Math.floor(random(2,5))
    let xoff=0
    let xinc=random(0.001,0.005)
    palette_index=Math.floor(random(palettes.length))
    background(palettes[palette_index][0],100,100)
    fill(palettes[palette_index][1],100,100)
    noStroke()
    for(let i=0;i<iter;i++){
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
