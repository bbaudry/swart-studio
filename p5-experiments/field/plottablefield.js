//pixel = dpi * mm / 25.4 mm
//each of the 5 sections is 120mm × 170mm
//96dpi is for plotting on the UUNA TEK iDraw
//w=96*8.5=816
//h=96*11=1056
//padding=96*45/25=172

var echelle = 1
var w = 816 * echelle
var h = 1056 * echelle
var padding = 0
var rightmargin = 0.95 * w
var leftmargin = 0.05 * w
var topmargin = 0.05 * h
var bottommargin = 0.7 * h
var actualwidth = rightmargin - leftmargin
var actualheight = bottommargin - topmargin
var totalheight = padding * 2 + h 
var totalwidth = padding * 2 + w
var cnv, imgbtn

function getsvg() {
    cnv = createCanvas(totalwidth, totalheight, SVG).mousePressed(savesvg);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
}
function getpng() {
    cnv = createCanvas(totalwidth, totalheight);
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
