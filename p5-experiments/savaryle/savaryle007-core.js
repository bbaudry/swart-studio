var xoff = 0.0
var xinc = 0.09
var grid = []
var resolution

function hal() {
    background(0, 0, 0)
    vera()
}



function vera() {
    let res = Math.floor(actualwidth*random(0.05,0.1))//Math.floor(random(21, 42))
    let x, y, pad, stepx, stepy, cx, cy, tx, ty, d2centre, angle, vie
    let x1, y1, x2, y2, x3, y3, x4, y4
    stepx = Math.floor(actualwidth / res)
    stepy = stepx
    pad = -Math.floor(1,11)
    vie = Math.floor(3,9)
    cx = Math.floor(leftmargin + stepx * (res * 0.5))
    cy = Math.floor(topmargin + stepy * (res * 0.5))
    noFill()
    stroke(0, 0, 100)
    for (let i = 0; i < res; i++) {
        for (let j = 0; j < res; j++) {
            x = leftmargin + stepx * i
            y = topmargin + stepy * j
            push()
            tx = x + stepx * 0.5
            ty = y + stepy * 0.5
            d2centre = dist(tx, ty, cx, cy)
            if (d2centre < cx * 0.85) {
                translate(tx, ty)
                x1 = -stepx * 0.5 + pad + vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                y1 = -stepy * 0.5 + pad + vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                x2 = stepx * 0.5 - pad - vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                y2 = -stepy * 0.5 + pad + vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                x3 = stepx * 0.5 - pad - vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                y3 = stepy * 0.5 - pad - vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                x4 = -stepx * 0.5 + pad + vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                y4 = stepy * 0.5 - pad - vie-noise(xoff)*2*vie; xoff+=xinc//random(-vie, vie)
                let c = getCentroid(x1, y1, x2, y2, x3, y3, x4, y4)
                tx = c.x
                ty = c.y
                translate(tx, ty)
                angle = acos((tx - cx) / d2centre); console.log(angle)
                ty < cy ? angle = 360 - angle : angle = angle
                rotate(angle)
                quad(x1, y1, x2, y2, x3, y3, x4, y4)
            }
            pop()
        }
    }
}


/*
* assumes a rectangle canvas in portrait orientation (width < height)
* it selects a point (cx,cy) in the canvas
* then draws a grid, which cells shapes depend on the distance of each cell's corner to (cx,cy)
* these distorted cells create an optical illusion that circles emerge from the grid
* this design is inspired by the work of Victor Vasarely
*/
function verasav() {
    var x, y, step, othercolor, maxothercolor, cx, cy, i, maxi, j, maxj, maxdist, m, amp, angle
    // m and amp are two hyperparameters of the algorithm 
    // m determines if the cells grow (neg. value) or decreases (pos. value) when the cell is close to (cx,cy)
    // amp determines the amount of distorsion of each cell
    m = Math.floor(random(1, 17)); amp = Math.floor(random(21, 67)) //dense in the center
    //m=17;amp=19 //dense towards the edge
    maxi = resolution
    maxj = resolution + 3
    othercolor = 0
    maxothercolor = 3
    step = Math.floor(actualwidth / resolution)
    cx = leftmargin + actualwidth * 0.5// random(0.4,0.8)
    cy = topmargin + (step * maxj) * 0.5//random(0.4,0.8)
    maxdist = dist(0, 0, cx, cy)
    for (i = 0; i < maxi; i++) {
        x = leftmargin + i * step
        for (j = 0; j < maxj; j++) {
            y = topmargin + j * step
            maxangle = 360
            // (x,y) is the upper left corner of the cell
            // a, b, c, d are angles computed according to the distance of each corner to (cx,cy)
            a = map(dist(x, y, cx, cy), 0, maxdist, 0, maxangle)
            b = map(dist(x + step, y, cx, cy), 0, maxdist, 0, maxangle)
            c = map(dist(x + step, y + step, cx, cy), 0, maxdist, 0, maxangle)
            d = map(dist(x, y + step, cx, cy), 0, maxdist, 0, maxangle)
            angle = acos((Math.abs(x - cx)) / dist(x, y, cx, cy)); console.log(angle)
            pada = m - amp * sin(a)
            padb = m - amp * sin(b)
            padc = m - amp * sin(c)
            padd = m - amp * sin(d)
            random() < 0.01 ? stroke(0, 100, 100) : stroke(0, 0, 100)
            drawcell(x + pada, y + pada, x + step - padb, y + padb, x + step - padc, y + step - padc, x + padd, y + step - padd, angle)
        }
    }
}


// this function fills the cell with vertical lines
function drawcell(x1, y1, x2, y2, x3, y3, x4, y4, angle) {
    let xo, yo, xd, yd, t, tinc
    t = 0
    tinc = 0.03
    push()
    //rotate(angle)
    while (t < 1) {
        xo = lerp(x1, x4, t)
        yo = lerp(y1, y4, t)
        xd = lerp(x3, x4, t)
        yd = lerp(y3, y4, t)
        line(xo, yo, xd, yd)
        t += tinc
    }
    pop()
}


function getCentroid(x1, y1, x2, y2, x3, y3, x4, y4) {
    let ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4, inter
    ix1 = (x1 + x2 + x3) / 3
    iy1 = (y1 + y2 + y3) / 3
    ix2 = (x2 + x3 + x4) / 3
    iy2 = (y2 + y3 + y4) / 3
    ix3 = (x3 + x4 + x1) / 3
    iy3 = (y3 + y4 + y1) / 3
    ix4 = (x4 + x1 + x2) / 3
    iy4 = (y4 + y1 + y2) / 3
    inter = intersect(ix1, iy1, ix3, iy3, ix2, iy2, ix4, iy4)
    return inter
}


// found here https://jsfiddle.net/justin_c_rounds/Gd2S2/
function intersect(ix1, iy1, ix3, iy3, ix2, iy2, ix4, iy4) {
    var denominator, a, b, numerator1, numerator2, result = {
        x: null,
        y: null,
        onLine1: false,
        onLine2: false
    };
    denominator = ((iy4 - iy2) * (ix3 - ix1)) - ((ix4 - ix2) * (iy3 - iy1));
    if (denominator == 0) {
        return result;
    }
    a = iy1 - iy2;
    b = ix1 - ix2;
    numerator1 = ((ix4 - ix2) * a) - ((iy4 - iy2) * b);
    numerator2 = ((ix3 - ix1) * a) - ((iy3 - iy1) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;

    // if we cast these lines infinitely in both directions, they intersect here:
    result.x = ix1 + (a * (ix3 - ix1));
    result.y = iy1 + (a * (iy3 - iy1));
    /*
            // it is worth noting that this should be the same as:
            x = line2StartX + (b * (line2EndX - line2StartX));
            y = line2StartX + (b * (line2EndY - line2StartY));
            */
    // if line1 is a segment and line2 is infinite, they intersect if:
    if (a > 0 && a < 1) {
        result.onLine1 = true;
    }
    // if line2 is a segment and line1 is infinite, they intersect if:
    if (b > 0 && b < 1) {
        result.onLine2 = true;
    }
    // if line1 and line2 are segments, they intersect if both of the above are true
    return result;
}