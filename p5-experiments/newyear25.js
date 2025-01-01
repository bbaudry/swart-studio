function preload() {
    font = loadFont("./fonts/FreeMonoBold.ttf");
    fileName = "newyear25"
    sourcecode = loadStrings(fileName + '.js');
}

function setup() {
    //getsvg()
    getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0, 0, 100)
    noFill()
}

var font
var fSize = 111

function draw() {
    background(0, 0, 100)
    stroke(0,0,0)
    noFill()
    //rect(leftmargin, topmargin, actualwidth, actualheight)
    push()
    translate(w,0)
    rotate(radians(90))
    stroke(0, 0, 0)
    rect(topmargin, leftmargin, actualheight, actualwidth)

    fill(0, 0, 0)
    textFont(font)
    textSize(fSize)
    text("11111101001", topmargin, leftmargin + fSize*2.5)

    pop()
    noLoop()
}

