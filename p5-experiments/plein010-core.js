var sections;
function hal() {
    let x1, y1, x2, y2, x3, y3, x4, y4, resolution, stepx, stepy, noisex, noisexinc, noisey, noiseyinc, xoffset, yoffset, nbsectionshorizontal, nbsectionsvertical
    sections = []
    resolution = 17
    nbsectionshorizontal = resolution*5
    nbsectionsvertical = resolution*15
    noisex = 0.0; noisey = 0.0
    noisexinc = 0.001; noiseyinc = 0.01
    stepx = Math.floor(actualwidth / nbsectionshorizontal)
    stepy = Math.floor(actualheight / nbsectionsvertical)
    xoffset = stepx * 0.1; yoffset = stepy * 0.1
    for (let i = 0; i < nbsectionshorizontal; i++) {
        for (let j = 0; j < nbsectionsvertical; j++) {
            if (i == 0) {
                if (j == 0) {
                    x1 = leftmargin*2 + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    x2 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    x3 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    x4 = leftmargin*2 + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    y1 = topmargin + (-yoffset + 2 * noise(noisey) * yoffset); noisey += noiseyinc
                    y2 = topmargin + (-yoffset + 2 * noise(noisey) * yoffset); noisey += noiseyinc
                    y3 = y2 + stepy + (-yoffset + 2 * noise(noisey) * yoffset); noisey += noiseyinc
                    y4 = y1 + stepy + (-yoffset + 2 * noise(noisey) * yoffset); noisey += noiseyinc
                }
                else {
                    x1 = sections[(j - 1)].x4
                    x2 = sections[(j - 1)].x3
                    x3 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    x4 = x1 + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    y1 = sections[(j - 1)].y4
                    y2 = sections[(j - 1)].y3
                    y3 = y2 + stepy + (-yoffset + 2 * noise(noisey) * yoffset);
                    y4 = y1 + stepy + (-yoffset + 2 * noise(noisey) * yoffset);
                }
            } else {
                if (j == 0) {
                    x1 = sections[((i - 1) * nbsectionsvertical) + j].x2
                    x2 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    x3 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    x4 = sections[((i - 1) * nbsectionsvertical) + j].x3
                    y1 = sections[((i - 1) * nbsectionsvertical) + j].y2
                    y2 = y1 + (-yoffset + 2 * noise(noisey) * yoffset); noisey += noiseyinc
                    y3 = y2 + stepy + (-yoffset + 2 * noise(noisey) * yoffset); noisey += noiseyinc
                    y4 = sections[((i - 1) * nbsectionsvertical) + j].y3
                }
                else {
                    x1 = sections[((i - 1) * nbsectionsvertical) + j].x2
                    x2 = sections[i * nbsectionsvertical + j - 1].x3
                    x3 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
                    x4 = sections[((i - 1) * nbsectionsvertical) + j].x3
                    y1 = sections[i * nbsectionsvertical + j - 1].y4
                    y2 = sections[i * nbsectionsvertical + j - 1].y3
                    y3 = y2 + stepy + (-yoffset + 2 * noise(noisey) * yoffset);
                    y4 = sections[((i - 1) * nbsectionsvertical) + j].y3
                }
            }
            let section = {
                x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3, x4: x4, y4: y4,
            };
            sections.push(section);
        }
    }
    showgrid()
}

function showgrid() {
    let black = true
    //fill(0,0,0)
    for (s in sections) {
        if (black) {
            quad(sections[s].x1, sections[s].y1, sections[s].x2, sections[s].y2, sections[s].x3, sections[s].y3, sections[s].x4, sections[s].y4)
        }
        black=!black
    }
}


function hal_sav() {
    let x1, y1, x2, y2, x3, y3, x4, y4, resolution, stepx, stepy, noisex, noisexinc, xoffset, yoffset
    resolution = 15
    stepx = Math.floor(actualwidth / resolution)
    stepy = Math.floor(actualheight / resolution)
    noisex = 0.0; noisexinc = 0.001
    xoffset = stepx * 0.5; yoffset = stepy * 0.5
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
            y1 = y4; y2 = y3
            y3 = y2 + stepy + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
            y4 = y1 + stepy + (-yoffset + 2 * noise(noisex) * yoffset); noisex += noisexinc
            x1 = x4; x4 = x1 + (-xoffset + 2 * noise(noisex) * xoffset)
            x2 = x3; x3 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
        }
        x1 = x2; x2 = x1 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
        x4 = x3; x3 = x4 + stepx + (-xoffset + 2 * noise(noisex) * xoffset); noisex += noisexinc
    }
}
