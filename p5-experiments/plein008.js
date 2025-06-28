
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var resolution, sourcecode
var font
var fSize = 11

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
}
function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h)//createCanvas(w, h, SVG).mousePressed(savesvg);;
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.75)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(3);
    penwidth = 0.04 * 96 // 0.04 inch is 1 mm, the width of stabilo 68/32
    resolution = Math.floor(random([3, 5, 7]))
}

function savesvg() {
    save("plein008.svg");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    //    clemence()
    hal()
}

function hal() {
    var cx, cy, angle1, angle2, angleinc, diam, diaminc, xoff, xinc
    stroke(0, 0, 0)
    cx = w * 0.5
    cy = h * 0.5
    xoff = 0.0
    xinc = 0.1
    angleinc = 60
    diam = w * 0.1
    diaminc = 1
    angle1 = radians(noise(xoff) * angleinc); xoff += xinc
    angle2 = angle1 + radians(noise(xoff) * angleinc); xoff += xinc
    arc(cx, cy, diam, diam, angle1, angle2)
    while (diam < w * 0.7) {
        while (angle2 < radians(360)) {
            angle1 = angle2 + radians(noise(xoff) * angleinc); xoff += xinc
            angle2 = angle1 + radians(noise(xoff) * angleinc); xoff += xinc
            arc(cx, cy, diam, diam, angle1, angle2)
        }
        diam+=diaminc;
        console.log(diam)
    }

}

function clemence() {
    fill(330, 50, 100)
    noStroke()
    let x, y, rayon
    rayon = w * 0.3
    x = w * 0.5
    y = topmargin + rayon
    arc(x, y, rayon * 2, rayon * 2, PI, 2 * PI)

    fill(50, 80, 100)
    x -= rayon
    y += h * 0.1
    rect(x, y, rayon, rayon)
}