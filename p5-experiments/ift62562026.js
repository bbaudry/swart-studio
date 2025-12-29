
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth, count
var sourcecode
var font
var fSize = 99
var characters = ['#','[',']','A','R','T','A','A','L','G','O','I','M','Q','Q','U','+','-','=']
var linelength = 7
var beat = 42

function preload() {
    font = loadFont("./fonts/FreeMonoBold.otf");
}
function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    //cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    leftmargin = Math.floor(w * 0.03)
    rightmargin = Math.floor(w * 0.97)
    topmargin = Math.floor(h * 0.02)
    bottommargin = Math.floor(h * 0.7)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*0.2/25.4
    strokeWeight(penwidth)
    count=0
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
    background(200, 100, 100)
    noStroke()
    fill(30,100,100)
    fSize=actualheight*0.26
    textFont(font)
    textSize(fSize)
    textline("__ART__",fSize)
    textline("ALGORI_",fSize*2)
    textline("THMIQUE",fSize*3)
    count++
}

function textline(arg,posy){
    let a=""
    if(count%beat<27){
        for(let i=0;i<linelength;i++){
            a+=random(characters)
        }
    }
    else{
        for(let i=0;i<arg.length;i++){
            arg.charAt(i)=='_'?a+=random(characters):a+=arg.charAt(i)
        }
    }
    y=topmargin+fSize
    text(a,leftmargin,posy)   
}