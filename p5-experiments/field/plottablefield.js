//pixel = dpi * mm / 25.4 mm
//each of the 5 sections is 120mm × 170mm
//96dpi is for plotting on the UUNA TEK iDraw
//w=96*210/25.4=1122
//h=96*420/25.4=1587
//padding=96*45/25=172

var echelle = 1
var w = 1122 * echelle
var h = 1587 * echelle
var padding = 7
var rightmargin = 0.97 * w
var leftmargin = 0.03 * w
var topmargin = 0.02 * h
var bottommargin = 0.98 * h
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

