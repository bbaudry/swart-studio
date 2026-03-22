var xoff = 0.0
var xinc = 0.001
var grid = []
var resolution = 3

function hal() {
    stroke(0,0,0)
    vera()
}


function vera() {
    let x = leftmargin
    let y = topmargin
    let boxh = 0.05 * actualheight
    let boxw
    let blanc=true
    while (y < bottommargin) {
        while (x < rightmargin) {
            boxw = noise(xoff) * 0.01 * actualwidth; xoff += xinc
            blanc?fill(0,0,100):fill(0,0,0)
            blanc=!blanc
            rect(x, y, boxw, boxh)
            x += boxw
        }
        y += boxh
        x=leftmargin
        console.log("y: "+y+"; fond: "+bottommargin)
    }
}