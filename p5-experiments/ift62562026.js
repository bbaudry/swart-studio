
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, charsperline
var font
var fSize
var characters = ['|', '+', '/', '-', '=', '\\']
var lines = [
    "__________",
    "__ART_____",
    "_____GEN__",
    "__ERATIF__",
    "__________",
    "___ALGO___",
    "__RITHMI__",
    "_____QUE__",
    "__________",
    "__________"
]
//14
var template

function preload() {
    font = loadFont("./fonts/MapleMono-Bold.ttf");
}

var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({ format: 'png' });

function setup() {
    fSize = 42
    charsperline = 10
    w = fSize * 10 + fSize * 2
    h = fSize * 10 + fSize * 2
    cnv = createCanvas(w, h);
    centerCanvas();
    leftmargin = fSize
    rightmargin = w - fSize
    topmargin = fSize
    bottommargin = h - fSize
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    template = []
    for (i in lines) {
        for (j in lines[i]) {
            template.push({ c: lines[i][j], flip: true })
        }
    }
    noStroke()
    textFont(font)
    textSize(fSize)
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    if (frameCount == 1) {
        capturer.start();
        capture = true
    }
    stillflipping = flip()
    if (capture) {
        capturer.capture(canvas); // if capture is 'true', save the frame
        if (!stillflipping) { //stop and save after NUM_FRAMES
            capturer.stop();
            capturer.save();
            noLoop();
        }
    }
    // if (!stillflipping) {
    //     console.log("done")
    //     noLoop()
    // }

}

function flip() {
    if (random() < 0.95) {
        background(0, 100, 100)
        fill(30, 0, 0)
    }
    else {
        background(0, 0, 0)
        fill(30, 0, 100)
    }
    let x, y, t, i, stillflipping
    i = Math.floor(random(template.length))
    template[i].flip = false
    stillflipping = false
    x = leftmargin
    y = topmargin
    for (let ind = 0; ind < template.length; ind++) {
        if (ind % charsperline == 0) {
            x = leftmargin
            y += fSize
        }
        else {
            x += fSize
        }
        if (template[ind].flip) {
            t = random(characters)
            stillflipping = true
        }
        else {
            if (template[ind].c == '_') {
                t = random(characters)
                template[ind].c = t
                template[ind].flip = false
            }
            else { t = template[ind].c }
        }
        text(t, x + textWidth(t) * 0.25, y - fSize * 0.25)
    }
    return stillflipping
}