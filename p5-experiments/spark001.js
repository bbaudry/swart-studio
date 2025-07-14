
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var resolution, sourcecode
var font
var fSize = 11

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('stervilin003-core.js');
}
function setup() {
    w = Math.floor(8 * 96)
    h = Math.floor(8 * 96)
    cnv = createCanvas(w, h)//createCanvas(w, h, SVG).mousePressed(savesvg);;
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.67)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    penwidth = 0.04 * 96 // 0.04 inch is 1 mm, the width of stabilo 68/32
    //strokeWeight(penwidth);
}

function savesvg() {
    save("spark001.svg");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    stroke(300, 80, 100)
    spark();
    noLoop()
}

function showcodeall(posx, posy) {
    var x, y
    x = posx
    y = posy
    textFont(font)
    textSize(fSize)
    for (b in sourcecode) {
        text(sourcecode[b], x, y)
        y += fSize
    }
    return ([x, y])
}
