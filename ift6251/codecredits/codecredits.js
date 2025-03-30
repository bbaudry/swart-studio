var w, h, cnv, font, fSize
var indexleft, indexright, x, y, allcode, boutdecode
var textarray=[]

function preload() {
    font = loadFont("./FreeMono.otf");
    getData("codecredits.js")
    getData("codecredits.html")
}

function getData(file) {
    fetch(file)
        .then((res) => res.text())
        .then((text) => {
            // allcodearr is an array that includes all text found in "index.html"
            // each line in the file is a separate element in the array
            var allcodearr = text.split("\n")
            allcode = ""
            for (i in allcodearr) {
                allcode += allcodearr[i]
            }
            textarray.push(allcode)
        })
        .catch((e) => console.error(e));
}

function setup() {
    w = windowWidth
    h = windowHeight
    fSize = 42
    cnv = createCanvas(w, h);
    stroke(0, 0, 0)
    textFont(font)
    textSize(fSize)
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    stroke(130, 100, 100); fill(130, 100, 100)

    indexleft = 0;
    indexright = 0;
    x = w
    y = fSize * 3
    boutdecode = []

}

function draw() {
    background(0, 0, 0)
    showcodeline()
    if (frameCount > allcode.length + 10) { noLoop() }
    /*    x=0
        y=fSize
        indexleft=0
        showcode()
        if(indexleft < allcode.length-1){indexleft++}
        else{noLoop()}*/
}

function showcodeline() {
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
    console.log(boutdecode.length)
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