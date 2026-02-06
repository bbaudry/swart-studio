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
    console.log("w: " + gridwidth + "; h: " + gridheight)
    splittile2(leftmargin, topmargin,
        leftmargin + gridwidth, topmargin,
        leftmargin + gridwidth, topmargin + gridheight,
        leftmargin, topmargin + gridheight, 0)
}

function splittile2(x1, y1, x2, y2, x3, y3, x4, y4, d) {
    if (d < 4) {
        d++
        let r = Math.floor(random(1,3))
        if (random() < 0.5) {
            let largeur = x2 - x1
            let tiers = r*largeur / 3
            let nextx2 = x2 - (3-r) * tiers
            let nextx3 = x3 - (3-r) * tiers
            splittile2(x1, y1, nextx2, y2, nextx3, y3, x4, y4, d)
            splittile2(nextx2, y1, x2, y2, x3, y3, nextx3, y4, d)
        }
        else{
            let hauteur = y3 - y2
            let tiers = r*hauteur / 3
            let nexty3 = y3 - (3-r) * tiers
            let nexty4 = y4 - (3-r) * tiers
            splittile2(x1, y1, x2, y2, x3, nexty3, x4, nexty4, d)
            splittile2(x1, nexty4, x2, nexty3, x3, y3, x4, y4, d)
        }
    }
    else {
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
    }
}

function splittile(x, y, localw, localh, d) {
    if (d < 4) {
        if (random() < 0.9) {
            d++
            let ratio = Math.floor(random(1, 3))
            let horizontal = random() < 0.5
            if (horizontal) {
                let newh = ratio * localh / 3
                console.log("d: " + d + "; w: " + localw + "; h: " + localh + "; newh: " + newh + "; ratio: " + ratio)
                splittile(x, y, w, newh, d)
                splittile(x, y + newh, w, localh - newh, d)
            }
            else {
                let neww = ratio * localw / 3
                console.log("d: " + d + "; w: " + localw + "; h: " + localh + "; neww: " + neww + "; ratio: " + ratio)
                splittile(x, y, neww, h, d)
                splittile(x + neww, y, localw - neww, h, d)
            }
        }
        else {
            rect(x, y, localw, localh)
        }
    }
    else {
        rect(x, y, localw, localh)
    }
}