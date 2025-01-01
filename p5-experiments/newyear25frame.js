//pixel = dpi * mm / 25.4 mm
//each of the 5 sections is 120mm × 170mm
//96dpi is for plotting on the UUNA TEK iDraw
//w=96*297/25.4=1122
//h=96*420/25.4=1587

var echelle = 0.5
var w = 1122 * echelle
var h = 1587 * echelle
var rightmargin = 0.95 * w
var leftmargin = 0.05 * w
var topmargin = 0.05 * h
var bottommargin = 0.95 * h
var actualwidth = rightmargin - leftmargin
var actualheight = bottommargin - topmargin
var cnv, imgbtn, gensvg,genpng

function getsvg() {
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
    gensvg=true
    genpng=false
}
function getpng() {
    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    placebtn();
    imgbtn.mouseClicked(savepng);
    genpng=true
    gensvg=false
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}

function showcredits(posx,posy,credit){
    textFont(font)
    textSize(fSize)
    var coord = showcode(posx,posy)
    text(credit,coord[0],coord[1])
}

function showcode(posx,posy) {
    var allcode, c, tw 
    allcode = ''
    for (var i = 0; i < sourcecode.length; i++) {
        var token = sourcecode[i]
        var notab = token.toString().replace(/\s/g, '').split('\r\n')[0]
        allcode += notab
    }
    for (let i = 0; i < allcode.length; i++) {
        c = allcode.charAt(i)
        tw = textWidth(c)
        if (posx + tw > rightmargin) {
            posx = leftmargin
            posy += fSize + 1
        }
        text(c, posx, posy)
        posx += tw
    }
    posx = leftmargin
    posy += 2*fSize + 1
    return([posx,posy])
}

var fileName

function savesvg() {
    save(fileName+".svg");
}

function savepng() {
    save(fileName+".png");
}
