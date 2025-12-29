
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth, count
var sourcecode
var font
var fSize = 99
var characters = ['#', '[', ']', 'A', 'R', 'T', 'A', 'A', 'L', 'G', 'O', 'I', 'M', 'Q', 'Q', 'U', '+', '-', '=']
var linelength = 7
var beat = 42

function preload() {
    font = loadFont("./fonts/FreeMonoBold.otf");
}
function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
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
    fSize = actualheight * 0.1
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
    if (count % beat < 21) {
    //if(false){
        background(200, 100, 100)
        fill(30, 100, 100)
        textlinerand("__________________", fSize)
        textlinerand("___ART____________", fSize * 2)
        textlinerand("__________________", fSize * 3)
        textlinerand("__________AL______", fSize * 4)
        textlinerand("_________GORI______", fSize * 5)
        textlinerand("____THMI__________", fSize * 6)
        textlinerand("____________QUE___", fSize * 7)
        textlinerand("__________________", fSize * 8)
        textlinerand("__________________", fSize * 9)
    }
    else {
        background(0, 100, 100)
        fill(100, 100, 100)
        textlinefix("__________________", fSize)
        textlinefix("___ART____________", fSize * 2)
        textlinefix("__________________", fSize * 3)
        textlinefix("__________AL______", fSize * 4)
        textlinefix("_________GORI______", fSize * 5)
        textlinefix("____THMI__________", fSize * 6)
        textlinefix("____________QUE___", fSize * 7)
        textlinefix("__________________", fSize * 8)
        textlinefix("__________________", fSize * 9)
    noLoop()
    }
    count++
}

function textlinerand(arg,posy) {
    let a = ""
    for (let i = 0; i < arg.length; i++) {
        a += random(characters)
    }
    y = topmargin + fSize
    text(a, leftmargin, posy)
}
function textlinefix(arg, posy) {
    let a = ""
    for (let i = 0; i < arg.length; i++) {
        arg.charAt(i) == '_' ? a += random(characters) : a += arg.charAt(i)
    }
    y = topmargin + fSize
    text(a, leftmargin, posy)
}