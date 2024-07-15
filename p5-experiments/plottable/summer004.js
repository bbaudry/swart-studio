function savesvg() {
    save("summer004.svg");
}

function savepng() {
    save("summer004.png");
}

var font
var fSize = 13
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer004.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    noFill()
    //rowoblique(20,20,40,80,280,90,240,40)
    //rowsinglerec(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin, 1)
    //testturn()
    rows(leftmargin, topmargin, rightmargin, topmargin, rightmargin - 60, bottommargin - 60, leftmargin + 90, bottommargin - 70, 0)
    textFont(font)
    textSize(fSize)
    showcredits(leftmargin, bottommargin + fSize)
    translate(wcd, hcd * 2 + scd)
    rotate(radians(180))
    showcode(leftmargin, topmargin + 2 * fSize)
    noLoop()
}

function rows(x1, y1, x2, y2, x3, y3, x4, y4, dep) {
    var ox1, oy1, dx1, dy1, ox2, oy2, dx2, dy2, t1, t2, d
    t1 = 0
    t2 = 0
    d = dep + 1
    ox1 = (1 - t1) * x1 + (t1 * x4)
    oy1 = (1 - t1) * y1 + (t1 * y4)
    dx1 = (1 - t2) * x2 + (t2 * x3)
    dy1 = (1 - t2) * y2 + (t2 * y3)
    while (t1 < 1 && t2 < 1) {
        line(ox1, oy1, dx1, dy1);
        t1 += random() * 0.17;
        t2 += random() * 0.17;
        ox2 = (1 - t1) * x1 + (t1 * x4)
        oy2 = (1 - t1) * y1 + (t1 * y4)
        dx2 = (1 - t2) * x2 + (t2 * x3)
        dy2 = (1 - t2) * y2 + (t2 * y3)
        if (d < 2) {
            rows(ox1, oy1, ox2, oy2, dx2, dy2, dx1, dy1, d)
            line(ox2,oy2,dx2,dy2)
        }
        ox1 = ox2
        oy1 = oy2
        dx1 = dx2
        dy1 = dy2
}
    }

var randomnumbers = []
function randstore(min, max) {
    var r = random(min, max);
    randomnumbers.push(r)
    return r
}

function testrand() {
    var r
    r = randstore()
    console.log("with no arg " + r)
    r = randstore(0.5)
    console.log("with one arg " + r)
    r = randstore(2, 5)
    console.log("with two args " + r)
    for (i = 0; i < randomnumbers.length; i++) {
        console.log(randomnumbers[i])
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick [summer 004). July 2024]"
    text(c, posx, posy)
}