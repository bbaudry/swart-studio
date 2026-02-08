var xoff = 0.0
var xinc = 1
var grid = []
function hal() {
    initgrid()
}

function initgrid() {
    let gridwidth = Math.floor(actualwidth - (actualwidth % 3))
    let gridheight = Math.floor(actualheight - (actualheight % 3))
    stroke(30, 100, 100)
    noFill()
    splittile(leftmargin, topmargin,
        leftmargin + gridwidth, topmargin,
        leftmargin + gridwidth, topmargin + gridheight,
        leftmargin, topmargin + gridheight, 0)
}

function splittile(x1, y1, x2, y2, x3, y3, x4, y4, d) {
    if (d < 5) {
        d++
        let denominator=3
        let r = Math.floor(random(1,denominator))
        if (random() < 0.5) {
            let largeur = x2 - x1
            let tiers = r*largeur / denominator
            let nextx2 = x2 - (denominator-r) * tiers
            let nextx3 = x3 - (denominator-r) * tiers
            splittile(x1, y1, nextx2, y2, nextx3, y3, x4, y4, d)
            splittile(nextx2, y1, x2, y2, x3, y3, nextx3, y4, d)
        }
        else{
            let hauteur = y3 - y2
            let tiers = r*hauteur / denominator
            let nexty3 = y3 - (denominator-r) * tiers
            let nexty4 = y4 - (denominator-r) * tiers
            splittile(x1, y1, x2, y2, x3, nexty3, x4, nexty4, d)
            splittile(x1, nexty4, x2, nexty3, x3, y3, x4, y4, d)
        }
    }
    else {
        if(random()<0.9){
        let hu = random([30,330,200])
        stroke(hu,100,100)
        quadwlines(x1, y1, x2, y2, x3, y3, x4, y4)}
    }
}

function quadwlines(x1, y1, x2, y2, x3, y3, x4, y4) {
    let ox, oy, dx, dy
    //quad(x1, y1, x2, y2, x3, y3, x4, y4)
    ox = x1
    oy = y2
    dx = x3
    dy = oy
    console.log("line x1: " + x1 + "; x2: " + x2 + "; x3: " + x3 + "; x4: " + x4)
        //console.log("line y1: "+y1+"; y2: "+y2+"; y3: "+y3+"; y4: "+y4)
    while (oy < y4) {
        line(ox, oy, dx, dy)
        oy += penwidth 
        dy = oy
    }
}