
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 7
var res=42
var xoff=0.0
var xinc=0.0001
var textx,textspeed,texty,begin,end,nbindex

function preload() {
    font = loadFont("../fonts/FreeMono.otf");
    sourcecode = loadStrings('dataCleaning_notebookExcerpt.js');
}
function setup() {
    getpng()
    centerCanvas();
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 250);
}

function getpng() {
    //A3
    w=Math.floor(96*297/25.4)
    h=Math.floor(96*420/25.4)

    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    placebtn();
    imgbtn.mouseClicked(savepng);
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0//(windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}


function savepng() {
    save("clean.png");
}


function draw() {
    background(0, 0, 100)
    noFill()
    stroke(0,100,100)
    writecode()
    noLoop()
}


function writecode() {
    var x, y, loc
    x = 42
    y = 42
    stroke(0,0,0)
    fill(0,0,0)
    textSize(fSize)
    textFont(font)
    for (let b in sourcecode) {
        loc=sourcecode[b]
        text(loc,x, y)
        y += fSize
    }
}