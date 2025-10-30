var xoff, yoff, noiseres, resolutiony, resolutionx
function hal() {
    let x1, x2, y1, y2, stepx, stepy, left
    xoff = 0.0; yoff = 0.0
    noiseres = 0.005
    resolutiony = Math.floor(random(21, 42)) ; stepy = Math.floor(actualheight / resolutiony)
    resolutionx = Math.floor(random(3, 7)) ; stepx = Math.floor(actualheight / resolutionx)
    y1 = topmargin; y2 = y1 + stepy
    while (y2 < bottommargin) {
        x1 = leftmargin + noise(xoff, yoff) * stepx; xoff += noiseres; x2 = x1 + noise(xoff, yoff) * stepx; xoff += noiseres
        left = true
        while (x2 < rightmargin) {
            section(x1, y1, x2, y2, left)
            x1 = x2; x2 = x1 + noise(xoff, yoff) * stepx; xoff += noiseres
            left = !left;console.log(left)
        }
        y1 = y2; y2 = y1 + stepy; yoff += noiseres
}}
function section(x1, y1, x2, y2, left) {
    let sectionw = x2 - x1
    let angle = 0
    let angleinc = 1
    let cx = left ? x1 : x2
    let angleoff = left ? 90 : 270
    let x = cx
    while (angle < 90) {
        line(x, y1, x, y2)
        angle += angleinc
        angleinc += 3
        x = cx + (sin(radians(angle + angleoff))) * sectionw
}}