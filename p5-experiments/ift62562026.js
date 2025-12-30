
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth, count, charsperline
var sourcecode
var font
var fSize
var characters = [ '|', '+', '/', '-', '=', '\\']
var beat = 84
var lines = [
    "__________",
    "__ART_____",
    "_____GEN__",
    "__ERATIF__",
    "__________",
    "___ALGO___",
    "___RITHMI_",
    "_____QUE__",
    "__________",
    "__________"
]
//14
var template

function preload() {
    font = loadFont("./fonts/FreeMonoBold.otf");
}
function setup() {
    fSize = 42//actualheight * 0.08
    charsperline = 10
    w = fSize * 10 + fSize * 2
    h = fSize * 10 + fSize * 2
    //cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    leftmargin = fSize
    rightmargin = w - fSize
    topmargin = fSize
    bottommargin = h - fSize
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    template = []
    for (i in lines) {
        for(j in lines[i]){
        template.push({ c: lines[i][j], flip: true })}
    }
    penwidth = 96 * 0.2 / 25.4
    strokeWeight(penwidth)
    count = 0
    noStroke()
    textFont(font)
    textSize(fSize)

}

function savesvg() {
    save(artname + ".svg");
}


function savepng() {
    save(artname + ".png");
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    flip()
}

function flip() {
    background(0,0,0)
    fill(0, 0, 100)
    let x, y, t, i
    i = Math.floor(random(template.length))
    template[i].flip=false
    x = leftmargin
    y = topmargin


    for (let ind=0;ind<template.length;ind++) {
        if (ind % charsperline == 0) {
            x = leftmargin
            y += fSize
        }
        else {
            x += fSize
        }
        if (template[ind].flip) {
            t=random(characters)
        }
        else {
            if(template[ind].c=='_'){
                t=random(characters)
                template[ind].c=t
                template[ind].flip=false
            }
            else{t=template[ind].c}
        }
        text(t,x,y)
    }
}