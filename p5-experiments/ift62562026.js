
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth, count
var sourcecode
var font
var fSize = 99
var characters = ['#', '|', ':', '+', '/', '-', '=']
var beat = 84
var lines = [
    "_______________",
    "__ART____GEN___",
    "____ERATIF_____",
    "_______________",
    "_______ALGO____",
    "___RITHMI______",
    "_________QUE___",
    "_______________",
    "_______________"
]

function preload() {
    font = loadFont("./fonts/FreeMonoBold.otf");
}
function setup() {
    w = 600
    h = 600
    //cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    cnv = createCanvas(w, h).mousePressed(savepng);
    centerCanvas();
    leftmargin = Math.floor(w * 0.03)
    rightmargin = Math.floor(w * 0.97)
    topmargin = Math.floor(h * 0.02)
    bottommargin = Math.floor(h * 0.7)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth = 96 * 0.2 / 25.4
    strokeWeight(penwidth)
    count = 0
    noStroke()
    fSize = actualheight * 0.155
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
    if (count % beat < 42) {
        background(200, 100, 100)
        fill(30, 100, 100)
        for (let ind = 0; ind < lines.length; ind++) {
            textlinerand(lines[ind], fSize * (1 + ind))
        }
    }
    else {
        background(0, 100, 100)
        fill(180, 0, 0)
        for (let ind = 0; ind < lines.length; ind++) {
            textlinefix(lines[ind], fSize * (1 + ind))
        }
        //noLoop()
    }
    count++
}

function textlinerand(arg, posy) {
    let a = ""
    for (let i = 0; i < arg.length; i++) {
        a += random(characters)
    }
    text(a, leftmargin, posy)
}
function textlinefix(arg, posy) {
    let a = ""
    for (let i = 0; i < arg.length; i++) {
        arg.charAt(i) == '_' ? a += random(characters) : a += arg.charAt(i)
    }
    text(a, leftmargin, posy)
}