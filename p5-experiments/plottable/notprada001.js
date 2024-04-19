var xoff = 0.0
var yoff = 0.0
var yoff2 = 0.0


function savesvg() {
    save("squigglelines001.svg");
}

function savepng() {
    save("squigglelines001.png");
}

var xoff = 0.0
var xinc = 0.001
var y = h * 0.4
var xoff = 0.0
var xinc = 0.1
var yoff = 0.0
var yinc = 0.007

function draw() {
    //background(0, 0, 100)
    stroke(0, 0, 100, 200)
    frames()
    coords = unrond()
    deslignes(coords)
    //destriangles()
    noLoop()
}

function frames() {
    rect(0, 0, w, h);
    stroke(0, 100, 100)
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);
}

function unrond() {
    var cx = random(leftmargin + actualwidth * 0.2, leftmargin + actualwidth * 0.7)
    var cy = random(topmargin + actualheight * 0.2, leftmargin + actualwidth * 0.7)
    var diam = 0.4 * actualwidth
    var density = 2 //the largest the least dense
    stroke(50, 100, 100)
    strokeWeight(0.8)
    for (var i = diam; i > 0; i -= density) {
        ellipse(cx, cy, i, i)
    }
    return ([cx, cy, diam])
}

function deslignes(coords) {
    var cx = coords[0]
    var cy = coords[1]
    var diam = coords[2]
    var ix, iy, x1, y1, x2, y2, angle
    angle = random(360)
    for (i = 0; i < 11; i+=0.5) {
        ix = cx + (i + diam * 0.5) * cos(radians(angle))
        iy = cy + (i + diam * 0.5) * sin(radians(angle))
        x1 = ix + (i + diam * 1.2) * cos(radians(angle - 90))
        y1 = iy + (i + diam * 1.2) * sin(radians(angle - 90))
        x2 = ix + (i + diam * 1.5) * cos(radians(angle + 90))
        y2 = iy + (i + diam * 1.5) * sin(radians(angle + 90))
        line(x1, y1, x2, y2)
    }
}
