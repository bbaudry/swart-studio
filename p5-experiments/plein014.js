
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 9

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
        sourcecode = loadStrings('plein014-core.js');
}
function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.02)
    bottommargin = Math.floor(h * 0.7)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*0.2/25.4
    strokeWeight(penwidth)
}

function savesvg() {
    save("plein014.svg");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    textFont(font)
    textSize(fSize)
    stroke(200,100,100)   
    hal()
    stroke(0, 0, 0); noFill(); strokeWeight(1)
    let c = showcodeall(leftmargin * 4.2, bottommargin)
    text("plein014[automne]", c[0], c[1] + fSize)
    text("p5.js + axidraw [almyre::2025]", c[0], c[1] + 2*fSize)
    noLoop()
}


function showcodeall(posx, posy) {
    var x, y
    x = posx
    y = posy
    for (b in sourcecode) {
        text(sourcecode[b], x, y)
        y += fSize
    }
    return ([x, y])
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