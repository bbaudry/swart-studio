//pixel = dpi * mm / 25.4 mm
//A3: 297mm × 420mm
//96dpi is for plotting on the UUNA TEK iDraw
//w=96*297/25.4=1122.5
//h=96*420/25.4=1587.4
//w=96*8.5=816
//h=96*11=1056

var echelle = 0.5
var w = 816 * echelle
var h = 1056 * echelle
var rightmargin = 0.95 * w
var leftmargin = 0.05 * w
var topmargin = 0.1 * h
var bottommargin = 0.95 * h
var actualwidth = rightmargin - leftmargin
var actualheight = bottommargin - topmargin
var cnv, imgbtn

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    maxcount = random(39, 45)
}

function getsvg() {
    cnv = createCanvas(w, h, SVG);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
}
function getpng() {
    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    placebtn();
    imgbtn.mouseClicked(savepng);
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}

function savesvg() {
    save("plottableperspective004.svg");
}
function savepng() {
    save("plottableperspective004.png");
}