var font, posx,posy, knobs=[]
var fSize = 11
function preload() {
    font = loadFont("1CAMBam_Stick_9.ttf");
    //font = loadFont("FreeMono.ttf");
    sourcecode = loadStrings('field002.js');
}
function savesvg() {
    save("field002.svg");
}

function savepng() {
    save("field002.png");
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    initfield()
    maxcount = random(39, 45)
    yoff = 0.0
    noiseres = 0.05

}

var res = 7 //knob: density of the field
//knob: speed to navigate noise. smallest, smoother angle changes
var steplength = 3 * res//knob: length of each curve 
var strw = 2 //knob: weight of each curve
var field = []
var nbcols = Math.floor(actualwidth / res) + 1
var nbrows = Math.floor(actualheight / res) + 1
var xoff, yoff
var noiseres


function initfield(noiseres) {
    let angle, row
    field = []
    for (let y = 0; y < nbrows; y++) {
        row = []
        yoff += noiseres
        xoff = 0.0;
        for (let x = 0; x < nbcols; x++) {
            xoff += noiseres
            let ikeda = noise(xoff, yoff)
            angle = map(ikeda, 0.0, 1.0, 0, PI)
            row.push(angle)
        }
        field.push(row)
    }
}


function draw() {
    drawart()
    fill(0,0,0)
    showcredits(leftmargin,bottommargin*1.04,"al.my.re :: p5.js :: CamBam Stick [field 002). November 2024]")
    noLoop()
}

function drawart() {
    var len = 420
        initfield(noiseres)
        push()
        translate(padding + leftmargin, padding + topmargin)
        for (var j = 0; j < 42; j += 1) {
            var u=Math.floor(random(nbcols*0.42,nbcols*0.45))
            if(random()<0.7){drawcurveinfield(Math.floor(random(0,5)), u, len)}
            if(random()<0.7){drawcurveinfield(Math.floor(random(0,nbrows-1)), u, len)}
            if(random()<0.007){shapeinfield(Math.floor(random(0,nbrows-1)), u)}
        }
        pop()
}



function shapeinfield(row,col){
    var x1,y1,x2,y2,x3,y3,offset
    offset=42
    x1 = col * res
    y1 = row * res
    x2 = (col+Math.floor(random(-offset,offset)))*res
    y2 = (row+Math.floor(random(-offset,offset)))*res
    x3 = (col+Math.floor(random(-offset,offset)))*res
    y3 = (row+Math.floor(random(-offset,offset)))*res
    triangle(x1,y1,x2,y2,x3,y3)
}

function drawcurveinfield(row, col, len) {
    strokeWeight(strw)
    stroke(200, 100, 100, 42)
    noFill()
    beginShape()
    x1 = col * res
    y1 = row * res
    curveVertex(x1, y1)
    curveVertex(x1, y1)
    for (let i = 0; i < len; i++) {
        angle = field[row][col]
        x2 = x1 + steplength * cos(angle)
        y2 = y1 + steplength * sin(angle)
        curveVertex(x2, y2)
        col = Math.floor(x2 / res)
        row = Math.floor(y2 / res)
        if (col >= nbcols || col < 0) { break } else { x1 = x2 }
        if (row >= nbrows || row < 0) { break } else { y1 = y2 }
    }
    curveVertex(x2, y2)
    curveVertex(x2, y2)
    endShape()
}




function showcredits(posx,posy,credit){
    textFont(font)
    console.log(font.textBounds('p5*js', 35, 53))
    textSize(fSize)
    var coord = showcode(posx,posy)
    text(credit,coord[0],coord[1])
    //text("hi",leftmargin,bottommargin)
}


function showcode(posx,posy) {
    var allcode, c, tw 
    allcode = ''
    for (var i = 0; i < sourcecode.length; i++) {
        var token = sourcecode[i]
        var notab = token.toString().replace(/\s/g, '').split('\r\n')[0]
        allcode += notab
    }
    for (let i = 0; i < allcode.length; i++) {
        c = allcode.charAt(i)
        tw = textWidth(c)
        if (posx + tw > rightmargin) {
            posx = leftmargin
            posy += fSize + 1
        }
        text(c, posx, posy)
        posx += tw
    }
    posx = leftmargin
    posy += 2*fSize + 1
    return([posx,posy])
}