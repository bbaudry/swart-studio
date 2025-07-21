
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var cardwidth, cardheight, cardleftmargin, cardrightmargin, cardtopmargin, cardbottommargin, cardactualwidth, cardactualheight
var resolution, sourcecode
var font
var fSize = 27

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('spark001-core.js');
}
function setup() {
    w = Math.floor(8.5 * 96)//215.9mm
    h = Math.floor(11 * 96)// 279.4mm
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);;
    centerCanvas();
    cardwidth=Math.floor(96*140/25.4) // card is 14 cm wide
    cardheight=Math.floor(96*100/25.4) // card is 1O cm high
    cardleftmargin=cardwidth*0.02
    cardrightmargin=cardwidth*0.98
    cardtopmargin=cardheight*0.05
    cardbottommargin=cardheight*0.75
    cardactualheight=cardbottommargin-cardtopmargin
    cardactualwidth=cardrightmargin-cardleftmargin

    leftmargin = Math.floor((w-cardwidth)*0.5)
    rightmargin = Math.floor(w-(w-cardwidth)*0.5)
    topmargin = Math.floor((h-2*cardheight)*0.5)
    bottommargin = Math.floor(h-(h-2*cardheight)*0.5)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    penwidth = 0.04 * 96 // 0.04 inch is 1 mm, the width of stabilo 68/32
    
}

function savesvg() {
    save("spark001.svg");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    stroke(0,100,100)
    noFill()

    // rect(0,0,w,h)
    // rect(leftmargin,topmargin,cardwidth,cardheight)
    // rect(leftmargin,topmargin+cardheight,cardwidth,cardheight)
    
    let x,y
    textFont(font)
    
    // x=leftmargin+cardleftmargin
    // y=topmargin+cardtopmargin+cardactualheight
    // strokeWeight(penwidth);
    // spark(x,y, cardactualheight)
    // strokeWeight(1);
    // textSize(fSize)
    // text("thank you for visiting and contributing", x, y+fSize*2)

    if(frameCount==1){
    strokeWeight(1);
    fSize=10; textSize(fSize)
    x=leftmargin+cardleftmargin
    y=topmargin+cardheight+cardtopmargin
    pos=showcodeoneblock(x,y)
    fSize=27; textSize(fSize)
    text("thank you for visiting and contributing", pos[0], pos[1]+fSize)
    save("spark001-back.svg");
    }
    if(frameCount==2){
    strokeWeight(penwidth);
    x=leftmargin+cardleftmargin
    y=topmargin+cardheight+cardtopmargin+cardactualheight
    spark(x,y, cardactualheight)
    save("spark001-front.svg");
    noLoop()
    }
}

// draws the code, keeping indentation and line breaks
function showcodeall(posx, posy) {
    var x, y
    x = posx
    y = posy
    textFont(font)
    textSize(fSize)
    for (b in sourcecode) {
        text(sourcecode[b], x, y)
        y += fSize
    }
    return ([x, y])
}

// draws the code with no space, in a single block of text
function showcodeoneblock(posx,posy) {
    var allcode, c, tw, tx, ty
    allcode = ''
    tx=posx
    ty=posy
    for (var i = 0; i < sourcecode.length; i++) {
        var token = sourcecode[i]
        var notab = token.toString().replace(/\s/g, '').split('\r\n')[0]
        allcode += notab
    }
    for (let i = 0; i < allcode.length; i++) {
        c = allcode.charAt(i)
        tw = textWidth(c)
        if (tx + tw > posx+cardactualwidth) {
            tx = posx
            ty += fSize + 1
        }
        text(c, tx, ty)
        tx += tw
    }
    tx = posx
    ty += 2*fSize + 1
    return([tx,ty])
}
