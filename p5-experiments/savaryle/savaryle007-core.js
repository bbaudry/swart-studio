var xoff = 0.0
var xinc = 0.09
var grid = []
var resolution = 19

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
    cx = leftmargin+actualwidth *  0.5//random(0.4,0.8)
    cy = topmargin+actualheight * 0.5//random(0.4,0.8)
    maxdist = dist(0, 0, cx, cy)
    for (let i = 0; i < maxi; i++) {
        x = leftmargin + i * step
        for (let j = 0; j < maxj; j++) {
            y = topmargin + j * step
            maxangle = 360
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
            tx = x + step * 0.5
            ty = y + step * 0.5
            angle = acos((Math.abs(tx - cx)) / dist(tx, ty, cx, cy));
            push()
            translate(tx, ty)
            ty < cy ? angle = 360 - angle : angle = angle
            rotate(angle)
            //drawcell(x + pada, y + pada, x + step - padb, y + padb, x + step - padc, y + step - padc, x + padd, y + step - padd, angle)
            // quad(-step*0.5+pada, -step*0.5 + pada, 
            //     step*0.5 - padb, -step*0.5+ padb, 
            //     step*0.5 - padc, step*0.5 - padc, 
            //     -step*0.5 + padd, step*0.5 - padd)
            drawcell(-step * 0.5 + pada, -step * 0.5 + pada,
                step * 0.5 - padb, -step * 0.5 + padb,
                step * 0.5 - padc, step * 0.5 - padc,
                -step * 0.5 + padd, step * 0.5 - padd)
            pop()
        }
    }
}


// this function fills the cell with vertical lines
function drawcell(x1, y1, x2, y2, x3, y3, x4, y4) {
    let xo, yo, xd, yd, t, tinc
    t = 0
    tinc = 0.04
    push()
    while (t < 1) {
        xo = lerp(x4, x1, t)
        yo = lerp(y4, y1, t)
        xd = lerp(x4, x3, t)
        yd = lerp(y4, y3, t)
        line(xo, yo, xd, yd)
        t += tinc
    }
    t = 0
    while (t < 1) {
        xo = lerp(x1, x2, t)
        yo = lerp(y1, y2, t)
        xd = lerp(x3, x2, t)
        yd = lerp(y3, y2, t)
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