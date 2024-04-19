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
    stroke(0, 0, 100, 200)
    frames()
    destriangles(deslignes(unrond()))
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
    var diam = 0.21 * actualwidth
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
    angle = random(180)
    uneligne(cx,cy,diam*0.5,diam*1.2,diam*1.5,angle,angle-90,angle+90,11)
    angle += random(90)
    uneligne(cx,cy,diam*0.8,diam*0.8,diam*1.1,angle,angle-42,angle+90,7)
    angle = random(360)
    uneligne(cx,cy,diam*0.8,diam*0.8,diam*1.7,angle,angle-21,angle+172,7)
    return (coords)
}
// draws a line in the vicinity of a circle centered in cx,cy. 
// distance and angle are used to get 3 points: one reference and two others around this reference
function uneligne(cx,cy,distanceaucentre1,distanceaucentre2,distanceaucentre3,angle1,angle2,angle3,epaisseur){
    var ix, iy, x1, y1, x2, y2
    for (i = 0; i < epaisseur; i+=0.5) {
        ix = cx + (i + distanceaucentre1) * cos(radians(angle1))
        iy = cy + (i + distanceaucentre1) * sin(radians(angle1))
        x1 = ix + (i + distanceaucentre2) * cos(radians(angle2))
        y1 = iy + (i + distanceaucentre2) * sin(radians(angle2))
        x2 = ix + (i + distanceaucentre3) * cos(radians(angle3))
        y2 = iy + (i + distanceaucentre3) * sin(radians(angle3))
        line(x1, y1, x2, y2)
    }
}

function destriangles(coords){
    var cx = coords[0]
    var cy = coords[1]
    var diam = coords[2]

}