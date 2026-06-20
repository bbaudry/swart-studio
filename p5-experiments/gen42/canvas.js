
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 11

function preload() {
    font = loadFont("./FreeMono.otf");
}
function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h)
    leftmargin = Math.floor(w * 0.03)
    rightmargin = Math.floor(w * 0.97)
    topmargin = Math.floor(h * 0.03)
    bottommargin = Math.floor(h * 0.96)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    noiseSeed(3)
    randomSeed(3)
}


function draw() {
    background(0, 0, 0)
    hal()
    noFill()
    stroke(0,0,100)
    textFont(font)
    textSize(fSize)
    let drawDate = new Date(Date.now())
    let date = "automatically generated on "+drawDate.toUTCString()//getDate()+" "+ drawDate.getUTCMonth()+" "+ drawDate.getUTCFullYear()+" "+drawDate.getUTCHours()+":"+drawDate.getUTCMinutes()+", UTC"
    let nextDrawDate = new Date(Date.now()+frequency)
    let nextDate = "next piece will show on "+nextDrawDate.toUTCString()//.getDate()+" "+nextDrawDate.getUTCMonth()+" "+ nextDrawDate.getUTCFullYear()+" "+nextDrawDate.getUTCHours()+":"+nextDrawDate.getUTCMinutes()+", UTC"
    text(date,leftmargin,bottommargin+fSize)
    text(nextDate,rightmargin-textWidth(nextDate),bottommargin+fSize)
    noLoop()
}
