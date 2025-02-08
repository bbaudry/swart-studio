var w, h, cnv, leftmargin, rightmargin, topmargin, bottommargin, actualwidth, actualheight, imgbtn, palette

var palettes = [[0, 90, 180, 270], [0, 30, 60, 90, 120, 150, 180], [180, 210, 240, 270, 300, 330, 30, 60], [200, 230, 260, 290, 320, 350]]
function setup() {
    w=900
    h=900
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    //cnv = createCanvas(w, h).mousePressed(savepng);
    var x = (windowWidth - w) / 2;
    var y = 0;
    cnv.position(x, y);
    leftmargin = Math.floor(w*0.01)
    rightmargin = Math.floor(w*0.99)
    actualwidth = rightmargin - leftmargin
    topmargin = Math.floor(w*0.01)
    bottommargin = Math.floor(w*0.99)
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    palette = palettes[Math.floor(random(palettes.length))]
    angleMode(DEGREES);
    strokeWeight(2.2)
}

function savesvg() {
    save("porte003.svg");
}
function savepng() {
    save("porte003.png");
}

function draw() {
    background(0, 0, 100)
    sky()
    field()
    noLoop()
}

function sky() {
    var a1, a2, rad
    rad = 0.35 * w
    push()
    translate(leftmargin+actualwidth*0.5,topmargin+actualheight*0.5)
    noStroke()
    a2 = 0
    for (var i = 0; i < 42; i++) {
        hu=random(palette)
        fill(hu, 100, 100,100)
            a1 = a2 + 280 * noise(xoff); xoff += xinc
        a2 = a1 + 278 * noise(xoff); xoff += xinc
        arc(0, 0, rad * 2, rad * 2, a1, a2, CHORD)
    }
    pop()
}

function field() {
    var cx, cy, rad1, rad2, x1, y1, x2, y2, x3, y3, x4, y4, anggleinc
    cx = leftmargin+actualwidth*0.5
    cy = topmargin+actualheight*0.5
    rad1 = 15
    rad2 = actualwidth * 0.5
    anggleinc = 15
    for (var a = 0; a < 360; a += anggleinc) {
        x1 = cx + rad1 * cos(a)
        y1 = cy + rad1 * sin(a)
        x2 = cx + rad2 * cos(a)
        y2 = cy + rad2 * sin(a)
        x3 = cx + rad1 * cos(a + anggleinc)
        y3 = cy + rad1 * sin(a + anggleinc)
        x4 = cx + rad2 * cos(a + anggleinc)
        y4 = cy + rad2 * sin(a + anggleinc)
        quartier(x1, y1, x2, y2, x3, y3, x4, y4, a, a + anggleinc)
    }
}

var xoff = 0.0
var xinc = 0.05

function quartier(x1, y1, x2, y2, x3, y3, x4, y4, a1, a2) {
    var ox1, oy1, dx1, dy1, ox2, oy2, dx2, dy2, t, maxt
    t = 0.7 * noise(xoff); xoff += xinc
    maxt = random(0.8, 0.91)
    noStroke()
    while (t < maxt) {
        hu=random(palette)
        fill(hu, 100, 100)
        ox1 = (1 - t) * x1 + (t * x2);
        oy1 = (1 - t) * y1 + (t * y2);
        dx1 = (1 - t) * x3 + (t * x4);
        dy1 = (1 - t) * y3 + (t * y4);
        t += 0.045 * noise(xoff); xoff += xinc
        ox2 = (1 - t) * x1 + (t * x2);
        oy2 = (1 - t) * y1 + (t * y2);
        dx2 = (1 - t) * x3 + (t * x4);
        dy2 = (1 - t) * y3 + (t * y4);
        //        t += 0.085 * noise(xoff); xoff += xinc
        quad(ox1, oy1, dx1, dy1, dx2, dy2, ox2, oy2)
    }
    var cx, cy, outx1, outy1, outx2, outy2
    cx = leftmargin+actualwidth*0.5
    cy = topmargin+actualheight*0.5
    if ((a1 >= 315 || a1 <= 45) && (a2 >= 315 || a2 <= 45)) {
        console.log("right")
        outx1 = rightmargin; outy1 = 0; outx2 = rightmargin; outy2 = h
    }
    if ((a1 >= 45 && a1 <= 135) && (a2 >= 45 && a2 <= 135)) {
        console.log("bottom")
        outx1 = 0; outy1 = bottommargin; outx2 = w; outy2 = bottommargin
    }
    if ((a1 >= 135 && a1 <= 225) && (a2 >= 135 && a2 <= 225)) {
        console.log("left")
        outx1 = leftmargin; outy1 = h; outx2 = leftmargin; outy2 = 0
    }
    if ((a1 >= 225 && a1 <= 315) && (a2 >= 225 && a2 <= 315)) {
        console.log("top")
        outx1 = 0; outy1 = topmargin; outx2 = w; outy2 = topmargin
    }
    var p1 = intersect(
        cx, cy,
        cx + 2 * w * cos(a1), cy + 2 * w * sin(a1),
        outx1, outy1,
        outx2, outy2
    )
    var p2 = intersect(
        cx, cy,
        cx + 2 * w * cos(a2), cy + 2 * w * sin(a2),
        outx1, outy1,
        outx2, outy2
    )
    carte(ox2, oy2, p1.x, p1.y, p2.x, p2.y, dx2, dy2, 0)
}
function carte(x1, y1, x2, y2, x3, y3, x4, y4, d) {
    var ox, oy, dx, dy, t

    if (d < 3) {
        t = noise(xoff); xoff += xinc
        ox = (1 - t) * x1 + (t * x2);
        oy = (1 - t) * y1 + (t * y2);
        dx = (1 - t) * x3 + (t * x4);
        dy = (1 - t) * y3 + (t * y4);
        line(ox, oy, dx, dy)
        d++
        carte(ox, oy, dx, dy, x4, y4, x1, y1, d)
        carte(ox, oy, dx, dy, x3, y3, x2, y2, d)
    }
    else {
        noStroke()
        hu=random(palette)
        fill(hu, 100, 100,100)
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
        hu=random(palette)
        fill(hu, 100, 100,100)
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
    }
}


/*function by Paul Bourke
https://paulbourke.net/geometry/pointlineplane/javascript.txt
returns coordinates where two segments [x1, y1, x2, y2] and [x3, y3, x4, y4] intersect*/
function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

    // Check if none of the lines are of length 0
    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return false
    }

    denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

    // Lines are parallel
    if (denominator === 0) {
        return false
    }

    let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
    let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

    // is the intersection along the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return false
    }

    // Return a object with the x and y coordinates of the intersection
    let x = x1 + ua * (x2 - x1)
    let y = y1 + ua * (y2 - y1)

    return { x, y }
}