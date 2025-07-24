
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var cardwidth, cardheight, cardleftmargin, cardrightmargin, cardtopmargin, cardbottommargin, cardactualwidth, cardactualheight
var resolution, sourcecode
var font
var fSize = 25

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('spark001-core.js');
}
function setup() {
    //A3
    w = Math.floor(96*297/25.4)
    h = Math.floor(96*420/25.4)
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

    leftmargin = Math.floor((w-cardwidth*2)*0.5)
    rightmargin = Math.floor(w-(w-cardwidth*2)*0.5)
    topmargin = Math.floor((h-4*cardheight)*0.5)
    bottommargin = Math.floor(h-(h-4*cardheight)*0.5)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.4/25.4 : 0.4mm is the width of stabylo fineliners
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
    let x,y,xpark,yspark
    for(i=0;i<2;i++){
        for(j=0;j<4;j++){
            x=leftmargin+i*cardwidth
            y=topmargin+j*cardheight
            rect(x,y,cardwidth,cardheight)
            push()
            translate(x,y)
            xspark=cardleftmargin
            yspark=cardbottommargin
            spark(xspark,yspark,cardactualheight)
            pop()
        }
    }
    noLoop()
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


function showknobs(posx,posy) {
    var knob, tx, ty
    tx=posx
    ty=posy
    for (k in knobs){
        knob=knobs[k].name+" "+knobs[k].val
        text(knob, tx, ty)
        ty+=fSize
    }
    return([tx,ty])
}
