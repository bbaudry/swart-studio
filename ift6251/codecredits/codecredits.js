var w, h, cnv, font, ht, js
var fSize = 42
var indexleft, indexright, x, y, allcode, boutdecode, counter, speed
var textarray = []

function preload() {
    var code;
    font = loadFont("./FreeMono.otf");
    code = loadStrings("./codecredits.js", handlecode())
    textarray.push(new CodeFile(code,fSize))
    code = loadStrings("./codecredits.html", handlecode())
    textarray.push(new CodeFile(code,fSize*2))
}

function handlecode(data) {
    var codestring = ""
    for (i in data) {
        codestring += data[i]
    }
    return codestring
    
}

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    textFont(font)
    textSize(fSize)
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    stroke(130, 100, 100); fill(130, 100, 100)

    initcodefiles()

    indexleft = 0;
    indexright = 0;
    x = w
    y = fSize * 3
    boutdecode = []
    counter = 0
    speed = 7

}

function draw() {

    //if (counter % speed == 0) { showcodeline() }
    textarray[0].bouge()
    textarray[1].bouge()
    //if (frameCount > textarray[0].length + 10) { noLoop() }
    /*    x=0
        y=fSize
        indexleft=0
        showcode()
        if(indexleft < allcode.length-1){indexleft++}
        else{noLoop()}*/
    counter++
}

function showcodeline() {
    push(); noStroke(); fill(0, 0, 0); rect(0, y - fSize * 0.8, w, fSize); pop()
    boutdecode += allcode[indexright]
    var tw = textWidth(boutdecode)
    // if boutdecode's lenght is less than canvas width, continue shifting left
    // else x does not change and remove first character of boutdecode to keep fit in width
    if (x > 0) {
        x = w - tw
    }
    else {
        boutdecode = boutdecode.substring(1)
    }
    text(boutdecode, x, y)
    indexright++
    if (indexright > allcode.length) {
        indexright = 0
        fill(0, 100, 100)
    }

}

function showcode() {
    var c, tw
    c = allcode.charAt(indexleft)
    tw = textWidth(c)
    if (x + tw > w) {
        x = 0
        y += fSize + 1
    }
    text(c, x, y)
    x += tw
}

function initcodefiles() {
    console.log("code")
    console.log(textarray.length)

    for (i in textarray) {
        console.log(textarray[i].length)
    }
}