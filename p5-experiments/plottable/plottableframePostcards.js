//96dpi is for plotting on the UUNA TEK iDraw
//A3
//w=96*297/25.4=1122.5
//h=96*420/25.4=1587.4
//A4
//h=96*210/25.4=793.7
//h=96*297/25.4=1122.5
//postcard 120x192 (192 is 1.6*120, a.k.a golden ratio)
//wpost=120*96/25.4 = 454
//hpost=192*96/25.4 = 726
//letter, used for testing
//w=96*8.5=816
//h=96*11=1056

var echelle = 1
//overall frame on a letter size. (0,0) on the bottom left of a letter page, portrait position
var w = 1122 * echelle
var h = 1587 * echelle
//postcard dimensions
var wpostcard = 454 * echelle
var hpostcard = 726 * echelle

var rightmargin, leftmargin, topmargin, bottommargin, actualwidth, actualheight
var globalmargin=22
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

function setmargins(xorigin,yorigin){
    rightmargin = xorigin + 0.93 * wpostcard
    leftmargin = xorigin + 0.03 * wpostcard
    topmargin = yorigin+ 0.02 * hpostcard
    bottommargin = yorigin + 0.98 * hpostcard
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
}

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

async function gentle(alea){
    var bruit = new Float64Array(1);
    var tout=0.0
    for(i=0;i<alea.length;i++){//sum all random numbers used for the piece
        tout+=alea[i]
    }
    bruit[0]=tout//pass the sum to the typedArray
    h=await window.crypto.subtle.digest("SHA-1", bruit)//hash the sum of all random numbers
    console.log(h)
    const hashArray = Array.from(new Uint8Array(h)); // convert buffer to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex 
}

function showcredits(posx, posy, title, credits) {
    console.log("write text at "+posx+", "+posy+". title: "+title+", credits: "+credits)
    text(title, posx, posy)
    text(credits, posx, posy+fSize+2)
}