
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 9
var artname = "amour004"

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
        sourcecode = loadStrings(artname+'-core.js');
}
function setup() {
    w = Math.floor(8.5 * 96) // (297 / 25.4)
    h = Math.floor(11 * 96) // (420 / 25.4)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    //cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    leftmargin = Math.floor(w * 0.09)
    rightmargin = Math.floor(w * 0.91)
    topmargin = Math.floor(h * 0.2)
    bottommargin = Math.floor(h * 0.8)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*1.0/25.4
    strokeWeight(penwidth)
}

function savesvg() {
    save(artname+".svg");
}


function savepng() {
    save(artname+".png");
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(220, 100, 60)
    noFill()
    textFont(font)
    textSize(33)
    stroke(0,0,100)
    hal()
    stroke(0, 0, 100); noFill(); 
    // let c = showcodeall(leftmargin * 4.2, bottommargin)
    // text(artname+"[automne]", c[0], c[1] + fSize)
    text("almyre", rightmargin*0.9, h*0.96)
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