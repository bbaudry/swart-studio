var w, h, cnv, font
var     fSize = 42
var indexleft, indexright, x, y, allcode, boutdecode, counter, speed
var textarray=[]

function preload() {
    font = loadFont("./FreeMono.otf");
    getData("codecredits.js")
    getData("codecredits.html")
}

function getData(file,y) {
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
    
    if(counter%speed==0){showcodeline()}
    //textarray[0].bouge()
    if (frameCount > allcode.length + 10) { noLoop() }
    /*    x=0
        y=fSize
        indexleft=0
        showcode()
        if(indexleft < allcode.length-1){indexleft++}
        else{noLoop()}*/
        counter++
}

function showcodeline() {
    push();noStroke();fill(0,0,0);rect(0,y-fSize*0.8,w,fSize);pop()
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

function initcodefiles(){
    console.log("code")
    console.log(textarray.length)

    for(i in textarray){
        console.log(textarray[i].length)
    }
}