
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var cardwidth, cardheight, cardleftmargin, cardrightmargin, cardtopmargin, cardbottommargin, cardactualwidth, cardactualheight
var resolution, sourcecode
var font
var fSize

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

let allknobs=[]
function draw() {
    background(0, 0, 100)
    stroke(0,100,100)
    noFill()
    textFont(font)
    let x,y,xspark,yspark
    // front frames
    for(i=0;i<2;i++){
        for(j=0;j<4;j++){
            x=leftmargin+i*cardwidth
            y=topmargin+j*cardheight
            rect(x,y,cardwidth,cardheight)
        }
    }

    // front art
    for(i=0;i<2;i++){
        for(j=0;j<4;j++){
            x=leftmargin+i*cardwidth
            y=topmargin+j*cardheight
            push()
            translate(x,y)
            xspark=cardleftmargin
            yspark=cardbottommargin
            knobs=spark(xspark,yspark,cardactualheight)
            allknobs.push(knobs)
            fSize=37;textSize(fSize)
            text("thank you for contributing", xspark,  yspark+fSize)
            text("to the krew's scientific journey", xspark,  yspark+fSize*2)
            pop()
        }
    }
    let index, xknobs, yknobs
    // back with knobs
    for(i=2;i<0;i--){ // go on the backwards order on the x axis to match knobs on the back of the gen art work (turn the paper and left becomes tight :)
        for(j=0;j<4;j++){
            x=leftmargin+i*cardwidth
            y=topmargin+j*cardheight
            push()
            translate(x,y)
            xknobs=cardleftmargin
            yknobs=cardtopmargin
            index=i*4+j
            showknobs(xknobs,yknobs,allknobs[index])
            pop()
        }
    }

    noLoop()
}


function showknobs(posx,posy, knobs) {
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
