
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 151
var res = 42
var xoff = 0.0
var xinc = 0.0001
var textx, textspeed, texty, begin, end, nbindex

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}
function setup() {
    getsvg()
    centerCanvas();
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 250);
}

function getsvg() {
    //A3
    w=Math.floor(96*297/25.4)
    h=Math.floor(96*420/25.4)
    console.log("w: " + w + "; h: " + h + "; window: " + windowWidth)

    cnv = createCanvas(w, h, SVG)//.mousePressed(savesvg);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
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


function savesvg() {
    save("clean.svg");
}


function draw() {
    background(0, 0, 100)
    console.log("w: " + w + "; h: " + h)
    noFill()
    stroke(0, 100, 100)
    strokeWeight(1)

    writecode()
    noLoop()
}


function writecode() {
    var x, y, t, stepy, postertext
    fSize=101
    textSize(fSize)
    textFont(font)
    stepy = fSize * 1.2
    y = h*0.1
    postertext = ["ART.ALGO", "RITHMIQUE"]
    for (i in postertext) {
        t = postertext[i]
        x = w * 0.5 - textWidth(t) * 0.5
        y += stepy
        text(t, x, y)
    }
    y += stepy
    fSize=42
    textSize(fSize)
    stepy = fSize * 1.5
    postertext = ["vernissage du cours IFT::6258", "10 oeuvres algorithmiques originales"]
    for (i in postertext) {
        t = postertext[i]
        x = w * 0.5 - textWidth(t) * 0.5
        y += stepy
        text(t, x, y)
    }
    y += stepy*2
    fSize=31
    textSize(fSize)
    stepy = fSize *1.5
    postertext2 = [
    "Bouncing Discoveries  ", "  Supernova",
    "The Art of Motion  ", "  RGB Trio",
    "Cascading Echoes  ","  Just Jim",
    "Brave New World  ","  Banana Mousquetaire",
    "Mind's Maze  ","  Nat-Art",
    "Decoherence  ","  ant",
    "interaction  ","  montrealhci",
    "what the fract!  ","  the tumbling cubes",
    "Plotted shadow  ","  DS9",
    "Echoes in motion  ","  Les galactiques"]
    let links=[]
    for (let i=0;i<postertext2.length-1;i+=2) {
        t = postertext2[i]+postertext2[i+1]
        x = w * 0.5 - textWidth(t) * 0.5
        y += stepy
        links.push(createVector(x+textWidth(postertext2[i]),y))
        text(t, x, y)
    }
    for(let p=0;p<links.length;p++){
        triangle(links[p].x,links[p].y-fSize,links[p].x-fSize*0.5,links[p].y,links[p].x+fSize*0.5,links[p].y)
    }
    y += stepy*5
    fSize=21
    textSize(fSize)
    stepy = fSize *1.5
    postertext = ["https://github.com/rethread-studio/algorithmic-art-course","https://software-performing.art/vernissage2026/"]
    for (i in postertext) {
        t = postertext[i]
        x = w * 0.5 - textWidth(t) * 0.5
        y += stepy
        text(t, x, y)
    }

}


