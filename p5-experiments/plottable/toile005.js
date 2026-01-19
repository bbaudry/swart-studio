
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 12
var artname = "toile004"

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
        sourcecode = loadStrings(artname+'-core.js');
}
function setup() {
    // letter 
    w = Math.floor(8.5 * 96); 
    h = Math.floor(11 * 96)
    // A3
    // w = Math.floor(96*297/25.4)
    // h = Math.floor(96*420/25.4)
    angleMode(DEGREES) 
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    //cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    // margins for the area in frame
    frameleft=0
    frametop=0
    frameright=w
    framebottom=h
    // margins for the drawing area
    topmargin = frametop+Math.floor((framebottom-frametop) * 0.02)
    bottommargin = frametop+Math.floor((framebottom-frametop) * 0.98)
    actualheight = bottommargin - topmargin
    leftmargin = frameleft+Math.floor((frameright-frameleft) * 0.02)
    rightmargin = frameleft+Math.floor((frameright-frameleft)    * 0.98)
    actualwidth = rightmargin-leftmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*0.4/25.4
    strokeWeight(penwidth)
        background(220, 0, 0)
        frameRate(10)

}

function savesvg() {
    save(artname+".svg");
}


function savepng() {
    save(artname+".png");
}


function centerCanvas() {
    var x = (windowWidth-w) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    noFill()
    textFont(font)
    textSize(fSize)
    stroke(300,0,100);  
      hal(leftmargin,topmargin,actualwidth,actualwidth)
    credit="confused shapes [al.my.re::2026]"
    text(credit, rightmargin-(textWidth(credit) + 2*fSize) , bottommargin - 2*fSize)
    // text("p5.js + axidraw", bottommargin, rightmargin - 5*fSize)
    // let c = showcodeallwithoutindentation(bottommargin, rightmargin - 7*fSize)
    noLoop()
}


function showcodeallwithindentation(posx, posy) {
    var x, y
    x = posx
    y = posy
    for (b in sourcecode) {
        text(sourcecode[b], x, y)
        y += fSize
    }
    return ([x, y])
}

function showcodeallwithoutindentation(posx, posy) {
    var allcode, c, tw, initx, inity
    initx = posx
    inity = posy
    allcode = ''
    for (let i = 0; i < sourcecode.length; i++) {//
        var token = sourcecode[i]
        var notab = token.toString().replace(/\s/g, '').split('\r\n')[0]
        allcode += notab
    }
    for (let i = 0; i < allcode.length; i++) {
        c = allcode.charAt(i)
        tw = textWidth(c)
        if (posx + tw > rightmargin) {
            posx = initx
            posy -= fSize + 1
        }
        text(c, posx, posy)
        posx += tw
    }
    posx = initx
    posy -= fSize+1
    return([posx,posy])
}