//pixel = dpi * mm / 25.4 mm
//each of the 5 sections is 120mm × 170mm
//96dpi is for plotting on the UUNA TEK iDraw
//w=96*297/25.4=1122
//h=96*420/25.4=1587

var echelle = 1
var w = 1122 * echelle
var h = 1587 * echelle
var wpadding = 25.5 
var hpadding = 20.25
var postcardwidth = 502 //13.3cm
var postcardheight = 340 //9cm
var rightmargin = 0.97 * postcardwidth
var leftmargin = 0.03 * postcardwidth
var topmargin = 0.03 * postcardheight
var bottommargin = 0.93 * postcardheight
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

function drawframe(){
    for(var i=0;i<2;i++){
        for(var j=1;j<3;j++){
            push()
            translate(wpadding+i*(wpadding+postcardheight),j*(hpadding+postcardwidth))
            rotate(radians(270))
            rect(0,0,postcardwidth,postcardheight)
            rect(leftmargin,topmargin,actualwidth,actualheight)
            stroke(0,0,0); fill(0,0,0)
            textFont(font)
            textSize(fSize)
            text("ptpx001",leftmargin,bottommargin+fSize)
            pop()        
        }
    }
}


var font
var fSize = 12
var fileName

function savesvg() {
    save(fileName+".svg");
}

function savepng() {
    save(fileName+".png");
}
