
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 33
var artname = "amour010"

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
        sourcecode = loadStrings(artname+'-core.js');
}
function setup() {
    //letter: w = Math.floor(8.5 * 96); h = Math.floor(11 * 96)
    w = Math.floor(96*297/25.4)//
    h = Math.floor(96*420/25.4)//
    angleMode(DEGREES) 
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    //cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.95)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =96*1.0/25.4
    strokeWeight(penwidth)
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
    background(220, 0, 0)
    noFill()
    textFont(font)
    textSize(fSize)
    stroke(0,0,100);rect(0,0,w,h)
    stroke(300,100,100);     
    // draw the gen art on full page
    hal()
//    draw the gen art code on page that's 3cm more narrow
    rightmargin -= Math.floor(96*30/25.4)
    stroke(0,0,100); strokeWeight(1)
    //let c = showcodeallwithoutindentation(leftmargin, fSize)
    // text(artname+"[automne]", c[0], c[1] + fSize)
    // text("p5.js + axidraw [almyre::2025]", leftmargin, c[1] + 2*fSize)
    // text(artname+"[automne]", leftmargin, bottommargin)
    // text("p5.js + axidraw [almyre::2025]", leftmargin, bottommargin + fSize)
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
    var allcode, c, tw, initx 
    initx = posx
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
            posx = initx
            posy += fSize + 1
        }
        text(c, posx, posy)
        posx += tw
    }
    posx = initx
    posy += fSize + 1
    return([posx,posy])
}