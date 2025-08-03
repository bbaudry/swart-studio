
function hal() {
    let x1, y1, x2, y2, x3, y3, x4, y4, resolution, stepx, stepy, noisex, noisexinc, xoffset, yoffset
    resolution = 100
    stepx = Math.floor(actualwidth / resolution)
    stepy = Math.floor(actualheight / resolution)
    noisex = 0.0
    noisexinc = 0.001
    xoffset = stepx * 0.5
    yoffset = stepy * 0.5
    x1 = leftmargin + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
    x2 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
    x3 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
    x4 = x1 + (-xoffset + 2 * noise(noisex) * xoffset)
    while (x2 < rightmargin) {
        y1 = topmargin + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
        y2 = y1 + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
        y3 = y1 + stepy + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
        y4 = y1 + stepy + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
        while (y3 < bottommargin && y4 < bottommargin) {
            quad(x1, y1, x2, y2, x3, y3, x4, y4)
            y1 = y4
            y2 = y3
            y3 = y2 + stepy + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
            y4 = y1 + stepy + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
        }
        x1 = x2
        x2 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
        x4 = x3
        x3 = x4 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
    }
}
