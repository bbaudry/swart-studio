
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
    strokeWeight(3);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth = 96*0.2/25.4
    strokeWeight(penwidth)
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
