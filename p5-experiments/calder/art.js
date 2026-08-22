let seuil = 0.42*2
let maxdepth = 6
let black = true
function hal() {
    dig(0, leftmargin, topmargin, actualwidth, actualheight)
}

function dig(depth, x, y, large, haut) {
    noStroke()
    black ? fill(0, 0, 0) : fill(0, 0, 100)
    black = !black
    rect(x, y, large, haut)
    let d = depth + 1
    let rl = noise(xoff); xoff += xinc;//random()
    let rh = 1/(depth+1)//noise(xoff); xoff += xinc;//random()
    if(depth==0){
            dig(d, x, y, large * rl, haut * rh); dig(d, x + large * rl, y, large * (1 - rl), haut * rh)
            dig(d, x + large * rl, y + haut * rh, large * (1 - rl), haut * (1 - rh)); dig(d, x, y + haut * rh, large * rl, haut * (1 - rh))
    }
    else{
    if (depth < maxdepth) {
        if (random() < seuil) {
            dig(d, x, y, large * rl, haut * rh); dig(d, x + large * rl, y, large * (1 - rl), haut * rh)
        }
        if (random() < seuil) {
            dig(d, x + large * rl, y + haut * rh, large * (1 - rl), haut * (1 - rh)); dig(d, x, y + haut * rh, large * rl, haut * (1 - rh))
        }
    }}
}

