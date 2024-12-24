//pixel = dpi * mm / 25.4 mm
//each of the 5 sections is 120mm × 170mm
//96dpi is for plotting on the UUNA TEK iDraw
//w=96*8.5=816
//h=96*11=1056
//padding=96*45/25=172

var echelle = 1
var w = 816 * echelle
var h = 706 * echelle
var rightmargin = 0.95 * w
var leftmargin = 0.05 * w
var topmargin = 0.05 * h
var bottommargin = 0.7 * h
var actualwidth = rightmargin - leftmargin
var actualheight = bottommargin - topmargin
var cnv, imgbtn

function getsvg() {
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
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
    var y = 0//(windowHeight - h) / 2;
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


function drawvecs() {
    for (let y = 0; y < nbrows; y++) {
        for (let x = 0; x < nbcols; x++) {
            push()
            translate(leftmargin+x * res, topmargin+y * res)
            rotate(field[y][x])
            line(0, 0, res, 0)
            pop()
        }
    }
}

function drawframe(){
    rect(0,0,w,h)
    rect(leftmargin,topmargin,actualwidth,actualheight)
}