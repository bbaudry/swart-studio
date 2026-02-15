
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 8
var artname = "plein018"

function preload() {
    font = loadFont("./fonts/1CamBam_Stick_4.ttf");
        sourcecode = loadStrings(artname+'-core.js');
}
function setup() {
    w = Math.floor(96*210/25.4)
    h = Math.floor(96*297/25.4)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    //cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    angleMode(DEGREES)
    leftmargin = Math.floor(96*15/25.4)
    rightmargin = Math.floor(96*195/25.4)
    topmargin = Math.floor(96*15/25.4)
    bottommargin = Math.floor(96*280/25.4)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*0.26/25.4 //0.25mm is pigman micron 01
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
    background(0, 0, 100)
    noFill()
    textFont(font)
    textSize(fSize)
    stroke(300,100,100)   
    hal()
    stroke(0, 0, 0); noFill(); strokeWeight(1)
    // let c = showcodeall(leftmargin * 4.2, bottommargin)
    titre="plus fort que l'ocean [al.my.re :: 2026]"
    text(titre, rightmargin-textWidth(titre), bottommargin+fSize*1.2)
    noLoop()
}