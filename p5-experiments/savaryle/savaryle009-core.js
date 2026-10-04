var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution = 21

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
                drawcell(x, y, cx, cy,step) 
                // a = map(dist(x, y, cx, cy), 0, maxdist, 0, maxangle)
                // angle = asin((Math.abs(x - cx)) / dist(x, y, cx, cy));
                // y < cy ? angle = 360 - angle : angle = angle
                // x < cx ? angle = angle : angle = 360 - angle
                // push()
                // translate(x, y)
                // rotate(angle)
                // let padx = step * map(noise(xoff), 0, 1, 0.3, 0.6); xoff += xinc
                // let pady = step * map(noise(xoff), 0, 1, 0.3, 0.6); xoff += xinc//random(0.3,0.6)
                // quad(-padx, -pady, padx, -pady, padx, pady, -padx, pady)
                // pop()
            }
        }
    }
}

function drawcell(x, y, cx, cy,step) {
    angle = asin((Math.abs(x - cx)) / dist(x, y, cx, cy));
    y < cy ? angle = 360 - angle : angle = angle
    x < cx ? angle = angle : angle = 360 - angle
    push()
    translate(x, y)
    rotate(angle)
    let padx = step * map(noise(xoff), 0, 1, 0.3, 0.6); xoff += xinc
    let pady = step * map(noise(xoff), 0, 1, 0.3, 0.6); xoff += xinc//random(0.3,0.6)
    quad(-padx, -pady, padx, -pady, padx, pady, -padx, pady)
    pop()
}