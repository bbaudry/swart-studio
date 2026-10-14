var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution = 12

function hal() {
    vera()
}


/*
* assumes a rectangle canvas in portrait orientation (width < height)
* it selects a point (cx,cy) in the canvas
* then draws a grid, which cells shapes depend on the distance of each cell's corner to (cx,cy)
* these distorted cells create an optical illusion that circles emerge from the grid
* this design is inspired by the work of Victor Vasarely
*/
function vera() {
    var x, y, step, othercolor, maxothercolor, cx, cy, i, maxi, j, maxj, maxdist, m, amp, angle
    // m and amp are two hyperparameters of the algorithm 
    // m determines if the cells grow (neg. value) or decreases (pos. value) when the cell is close to (cx,cy)
    // amp determines the amount of distorsion of each cell
    m = Math.floor(random(1, 17)); amp = 17//Math.floor(random(21, 42)) //dense in the center
    // let magic="m: "+m+"; amp: "+amp
    // text(magic,0,h)
    // //m=11;amp=19 //dense towards the edge  
    maxi = resolution
    maxj = resolution
    othercolor = 0
    maxothercolor = 3
    step = Math.floor(actualwidth / resolution)
    cx = leftmargin + actualwidth * 0.5//random(0.4,0.8)
    cy = topmargin + actualheight * 0.5//random(0.4,0.8)
    maxdist = dist(leftmargin, topmargin, cx, cy)
    for (let i = 0; i < maxi; i++) {
        x = leftmargin + i * step + step * 0.5
        for (let j = 0; j < maxj; j++) {
            y = topmargin + j * step + step * 0.5
            maxangle = 180
            if (dist(x, y, cx, cy) < actualheight * 0.5) {
                drawcell(x, y, cx, cy, step * 0.8)
            }
        }
    }
    push()
    stroke(0, 100, 100)
    ellipse(cx, cy, actualwidth, actualwidth)
    pop()
}

function drawcell(x, y, cx, cy, step) {
    // dive(x, y, cx, cy, step, 0)
    let angle = asin((Math.abs(x - cx)) / dist(x, y, cx, cy));
    y < cy ? angle = 360 - angle : angle = angle
    x < cx ? angle = angle : angle = 360 - angle
    push()
    translate(x, y)
    rotate(angle)
    divebis(0, 0, step, 0)
    pop()
}

function divebis(x, y, step, level) {
    if (level < 1) {
        let l = level + 1
        if (random() < 0.82) {
            divebis(x - step * 0.25, y - step * 0.25, step * 0.5, l)
            divebis(x + step * 0.25, y - step * 0.25, step * 0.5, l)
            divebis(x + step * 0.25, y + step * 0.25, step * 0.5, l)
            divebis(x - step * 0.25, y + step * 0.25, step * 0.5, l)
        }
        else {
            onecell(x, y, step, level)
        }
    }
    else {
        onecell(x, y, step, level)
    }
}

function onecell(x, y, step, level) {
    let padx = step * map(noise(xoff), 0, 1, 0.2, 1.2); xoff += xinc
    let pady = step * map(noise(xoff), 0, 1, 0.2, 1.2); xoff += xinc
    push()
    translate(x, y)
    rotate(90*level)
    hache(-padx, -pady, padx, -pady, padx, pady, -padx, pady)
    pop()
}

function hache(x1, y1, x2, y2, x3, y3, x4, y4) {
    let ox1, oy1, ox2, oy2
    let t = 0
    while (t < 1) {
        ox1 = lerp(x1, x4, t)
        oy1 = lerp(y1, y4, t)
        ox2 = lerp(x2, x3, t)
        oy2 = lerp(y2, y3, t)
        line(ox1, oy1, ox2, oy2)
        t += random(0.02, 0.1)
    }
}
