var xoff = 0.0
var xinc = 42

function hal() {
    let resx, resy, stepx, stepy, x, y, x1, y1, coords, p1, p2, p3, p4
    resx = 2 * Math.floor(random(2, 5)); resy = 2 * Math.floor(random(2, 5)); coords = []
    stepx = Math.floor(actualwidth / resx); stepy = Math.floor(actualheight / resy)
    x = leftmargin
    for (let i = 0; i < resx; i++) {
        y = topmargin
        for (let j = 0; j < resy; j++) {
            x1 = x + stepx * noise(xoff); xoff += xinc; y1 = y + stepy * noise(xoff)
            coords.push({ x: x1, y: y1 })
            y += stepy}
        x += stepx}
    for (let i = 0; i < resx - 1; i++) {
        for (let j = 0; j < resy - 1; j++) {
            p1 = coords[i * resy + j]; p2 = coords[i * resy + j + resy]; p3 = coords[i * resy + j + resy + 1]; p4 = coords[i * resy + j + 1]
            trianglewlines(p1.x, p1.y, p2.x, p2.y, p4.x, p4.y);
            trianglewlines(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
}}}

function trianglewlines(x1, y1, x2, y2, x3, y3) {
    // https://mathopenref.com/coordincenter.html
    len1 = dist(x2, y2, x3, y3); len2 = dist(x1, y1, x3, y3); len3 = dist(x1, y1, x2, y2)
    cx = (len1 * x1 + len2 * x2 + len3 * x3) / (len1 + len2 + len3); cy = (len1 * y1 + len2 * y2 + len3 * y3) / (len1 + len2 + len3)
    for (let i = 0; i < 1; i += 0.03) {
        triangle(lerp(cx, x1, i), lerp(cy, y1, i), lerp(cx, x2, i), lerp(cy, y2, i), lerp(cx, x3, i), lerp(cy, y3, i),
)}}