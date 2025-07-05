
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var resolution, sourcecode
var font
var fSize = 11

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
        sourcecode = loadStrings('stervilin001.js');
}
function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);;
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.7)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(3);
    penwidth = 0.04 * 96 // 0.04 inch is 1 mm, the width of stabilo 68/32
    resolution = Math.floor(random([3, 5, 7]))
}

function savesvg() {
    save("stervilin001.svg");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    stroke(300,80,100)
    let magie
    kerou()
    //let magicnumbers=hal()
    //magie="Magic numbers :: "+magicnumbers[0].name+": "+magicnumbers[0].val+"; "+magicnumbers[1].name+": "+magicnumbers[1].val+"; "+magicnumbers[2].name+": "+magicnumbers[2].val+"; "+magicnumbers[3].name+": "+magicnumbers[3].val+"; "+magicnumbers[4].name+": "+magicnumbers[4].val
    magie+='\n'+"beautiful noise [almyre::2025]"
    stroke(0, 0, 0); strokeWeight(1)
    let c = showcodeall(leftmargin * 4.2, bottommargin + fSize)
    text(magie, c[0], c[1] + fSize)

    noLoop()
}

function kerou(){
    let xoff,xinc,x1,y1,ax1,ay1,ax2,ay2,x2,y2
    xoff=0.0
    xinc=0.0001
    stroke(0,100,100)
    for(let i = 0;i<500;i++){
    beginShape()
    x1=leftmargin
    y1=h*0.1+i
    vertex(x1,y1)
    ax1=leftmargin+actualwidth*noise(xoff)
    xoff+=xinc
    ay1=topmargin
    ax2=leftmargin+actualwidth*(1-noise(xoff))
    xoff+=xinc
    ay2=bottommargin
    x2=rightmargin
    y2=y1
    bezierVertex(ax1,ay1,ax2,ay2,x2,y2)
    endShape()
    }
}

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
