//96dpi is for plotting on the UUNA TEK iDraw
//letter
//w=96*8.5=816
//h=96*11=1056
//CD
//wcd=96*5.59=536
//hcd=96*4.92=472
//scd=96*0.4=39

var echelle = 1
//overall frame on a letter size. (0,0) on the bottom left of a letter page, portrait position
var w = 816 * echelle
var h = 1056 * echelle
//CD case dimensions
var wcd = 536 * echelle
var hcd = 472 * echelle
//CD side height
var scd = 39 * echelle
//draw in the following area, CD case dimensions in the top left of the letter page
var rightmargin = 0.97 * wcd
var leftmargin = 0.03 * wcd
var topmargin = 0.03 * hcd
var bottommargin = 0.95 * hcd
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
    text(title, posx, posy)
    text(credits, posx, posy+fSize+5)
}