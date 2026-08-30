var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution 

function hal() {
    background(0,0,0)
    resolution =  Math.floor(random(77,99))
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
    var x, y, step, othercolor, maxothercolor, cx, cy, i, maxi, j, maxj, maxdist, m, amp
    // m and amp are two hyperparameters of the algorithm 
    // m determines if the cells grow (neg. value) or decreases (pos. value) when the cell is close to (cx,cy)
    // amp determines the amount of distorsion of each cell
    m = Math.floor(random(1,17)); amp = Math.floor(random(21,67)) //dense in the center
    //m=7;amp=46 //dense towards the edge
    maxi = resolution
    maxj = resolution + 3
    othercolor = 0
    maxothercolor = 3
    step = Math.floor(actualwidth / resolution)
    cx = leftmargin + actualwidth * random(0.4,0.8)
    cy = topmargin + (step * maxj) * random(0.4,0.8)
    maxdist = dist(0, 0, cx, cy)
    for (i = 0; i < maxi; i++) {
        x = leftmargin + i * step
        for (j = 0; j < maxj; j++) {
            y = topmargin + j * step
            maxangle = 180
            // (x,y) is the upper left corner of the cell
            // a, b, c, d are angles computed according to the distance of each corner to (cx,cy)
            a = map(dist(x, y, cx, cy), 0, maxdist, 0, maxangle)
            b = map(dist(x + step, y, cx, cy), 0, maxdist, 0, maxangle)
            c = map(dist(x + step, y + step, cx, cy), 0, maxdist, 0, maxangle)
            d = map(dist(x, y + step, cx, cy), 0, maxdist, 0, maxangle)
            pada = m - amp * sin(a)
            padb = m - amp * sin(b)
            padc = m - amp * sin(c)
            padd = m - amp * sin(d)
            random()<0.01?stroke(0,100,100):stroke(0,0,0)
            stroke(0,0,100)
            // random()<0.5?
            // drawcell_horizon(x + pada, y + pada, x + step - padb, y + padb, x + step - padc, y + step - padc, x + padd, y + step - padd):
            // drawcell_vertical(x + pada, y + pada, x + step - padb, y + padb, x + step - padc, y + step - padc, x + padd, y + step - padd)
        quad(x + pada, y + pada, x + step - padb, y + padb, x + step - padc, y + step - padc, x + padd, y + step - padd)
        }
    }
}

// this function fills the cell with horizontal lines
function drawcell_horizon(x1, y1, x2, y2, x3, y3, x4, y4) {
    let d, t, tinc, ox, oy, dx, dy, amp
    amp = Math.floor(random(2,3))
    dist(x1, y1, x4, y4) > dist(x2, y2, x3, y3) ? d = dist(x1, y1, x4, y4) : d = dist(x2, y2, x3, y3)
    tinc = 1 / (d / penwidth) * amp
    for (t = tinc; t < 1; t += tinc) {
        ox = lerp(x1, x4, t)
        oy = lerp(y1, y4, t)
        dx = lerp(x2, x3, t)
        dy = lerp(y2, y3, t)
        line(ox, oy, dx, dy)
    }
}

// this function fills the cell with vertical lines
function drawcell_vertical(x1, y1, x2, y2, x3, y3, x4, y4) {
    let d, t, tinc, ox, oy, dx, dy, amp
    amp = Math.floor(random(2,3))
    dist(x1, y1, x4, y4) > dist(x2, y2, x3, y3) ? d = dist(x1, y1, x4, y4) : d = dist(x2, y2, x3, y3)
    tinc = 1 / (d / penwidth) * amp
    for (t = tinc; t < 1; t += tinc) {
        ox = lerp(x1, x2, t)
        oy = lerp(y1, y2, t)
        dx = lerp(x4, x3, t)
        dy = lerp(y4, y3, t)
        line(ox, oy, dx, dy)
    }
}