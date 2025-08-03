
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
    cardbottommargin=cardheight*0.95
    cardactualheight=cardbottommargin-cardtopmargin
    cardactualwidth=cardrightmargin-cardleftmargin

    leftmargin = Math.floor((w-cardwidth*2)*0.5)
    rightmargin = Math.floor(w-(w-cardwidth*2)*0.5)
    topmargin = Math.floor((h-4*cardheight)*0.5)
    bottommargin = Math.floor(h-(h-4*cardheight)*0.5)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth = 96*0.2/25.4
    strokeWeight(penwidth)
    
}

function savesvg() {
    save("plein008-postcards-A3.svg");
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
    textFont(font)
    let x,y,xspark,yspark

    // front art
    if(frameCount==1){
    for(i=0;i<2;i++){
        for(j=0;j<4;j++){
            x=leftmargin+i*cardwidth
            y=topmargin+j*cardheight
//            rect(x,y,cardwidth,cardheight)
            push()
            translate(x,y)
            xspark=cardleftmargin
            yspark=cardtopmargin
            hal(xspark,yspark)
            pop()
        }
    }
    }
noLoop()
}


function showknobs(posx, posy, aknobs) {
    var knob_on_card, tx, ty, ind
    tx=posx
    ty=posy
    ind=10
        // knob_on_card=aknobs[ind].name+" "+aknobs[ind].val
        // text(knob_on_card, tx, ty)
        // ty+=fSize
        //     console.log(knob_on_card)
    for (let k in aknobs){
        knob_on_card=aknobs[k].name+" "+aknobs[k].val
        text(knob_on_card, tx, ty)
        ty+=fSize
    }
    return([tx,ty])
}
