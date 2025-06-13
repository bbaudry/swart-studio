
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var resolution, sourcecode
var font
var fSize = 11

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('plein007-core.js');
}
function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);;
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
    resolution = Math.floor(random([3,5,7]))
}

function savesvg() {
    save("plein007.svg");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
        stroke(0, 100, 100)
        vera()
    stroke(0,0,0);strokeWeight(1)
    let c=showcodeall(leftmargin*4.2,bottommargin+fSize)
    text("deux pourcent de désordre [almyre::2025]",c[0],c[1]+fSize)
    noLoop()
}


function showcodeall(posx,posy) {
    var x, y
    x=posx
    y=posy
    textFont(font)
    textSize(fSize)
    for (b in sourcecode) {
      text(sourcecode[b], x, y)
      y += fSize
    }
    return([x,y])
}

