
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 17
var xoff, xinc, resolution

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h).mousePressed(savepng);
    //centerCanvas();
    angleMode(DEGREES)
    leftmargin = w*0
    rightmargin = w
    topmargin = h*0
    bottommargin = h
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*0.26/25.4 //0.25mm is pigman micron 01
    strokeWeight(penwidth)
    frameRate(11)
     xoff = 0.0
 xinc = 0.0001
 resolution = 131

}

function savesvg() {
    save(artname+".svg");
}


function savepng() {
    save(artname+".png");
}


function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 0)
    noFill()
    stroke(220,0,100)
    hal()
    // text("savaryle 009",w*0.05,h*0.97)
    // text("al.my.re :: 2026",w*0.80,h*0.97)
//    noLoop()
}