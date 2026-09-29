
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 17
var artname = "savaryle008"
var xoff = 0.0
var xinc = 0.0001


function preload() {
        sourcecode = loadStrings(artname+'-core.js');
font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    }
function setup() {
    w = 96*12//(96*297/25.4)
    h = 96*12//(96*420/25.4)
    //cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    angleMode(DEGREES)
    leftmargin = 96*0.5
    rightmargin = 96*11.5
    topmargin = 96*0.5
    bottommargin = 96*11.5
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*0.26/25.4 //0.25mm is pigman micron 01
    strokeWeight(penwidth)
    textFont(font)
    textSize(17)
    frameRate(5)
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
    background(0, 0, 0)
    noFill()
    stroke(220,0,100)
    hal()
    text("savaryle 008",w*0.05,h*0.97)
    text("al.my.re :: 2026",w*0.80,h*0.97)
    noLoop()
}