
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 12
var artname = "card"

function preload() {
    font = loadFont("../p5-experiments/fonts/1CAMBam_Stick_9.ttf");
        sourcecode = loadStrings(artname+'-core.js');
}
function setup() {
    // letter 
    // w = Math.floor(8.5 * 96); 
    // h = Math.floor(11 * 96)
    // A3
    w = Math.floor(96*297/25.4)
    h = Math.floor(96*420/25.4)
    angleMode(DEGREES) 
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    //cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    topmargin = Math.floor(h * 0.02)
    bottommargin = Math.floor(h * 0.98)
    actualheight = bottommargin - topmargin
    leftmargin = Math.floor(w * 0.02)
    rightmargin = Math.floor(w * 0.98)
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
    rect(0,0,w,h)
    rect(leftmargin,topmargin,actualwidth,actualheight)
    cardwidth=actualwidth*0.5
    cardheight=actualheight*0.25
    carddrawheight=cardheight*0.94
    carddrawwidth=carddrawheight
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            rect(leftmargin+i*cardwidth,topmargin+j*cardheight,cardwidth,cardheight)
            hal(leftmargin+i*cardwidth+cardwidth*0.03,topmargin+j*cardheight+cardheight*0.03,carddrawwidth,carddrawheight)
        }
    }
    // rect(leftmargin,topmargin,cardwidth,cardheight)
    // hal(leftmargin+cardwidth*0.03,topmargin+cardheight*0.03,carddrawwidth,carddrawheight)
    // rect(leftmargin+cardwidth,topmargin,cardwidth,cardheight)
    // hal(leftmargin+cardwidth+cardwidth*0.03,topmargin+cardheight*0.03,carddrawwidth,carddrawheight)
    // text("la vie en rose [al.my.re::2025]", bottommargin, rightmargin - fSize)
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