function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('field006.js');
}

var font
var fSize = 15

function savesvg() {
    save("field006.svg");
}

function savepng() {
    save("field006.png");
}

function setup() {
    //getsvg()
    getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0, 0, 0)
    noFill()
}

function draw() {
    drawart()
    fill(0, 0, 0); stroke(0, 0, 100); strokeWeight(1)
    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 006). December 2024]")
    noLoop()
}

function drawart() {
    stroke(0, 0, 100)
    var x1, y1, x2, y2, x3, y3, nbiter, len, vera
    nbiter=37
    len = 42
    initfield(0.05)
    for (var i = 0; i < nbiter; i++) {
        x1 = leftmargin + actualwidth * 0.1
        y1 = topmargin + actualheight * 0.75 +i*2
        x2 =  42*res// x1 + actualwidth * 0.4
        y2 =  (17+i)*res//topmargin + actualheight * 0.1 +i
        line(x1, y1, x2, y2)
        x3 = x2 + actualwidth * 0.4
        y3 = y2 + 21+i
        //line(x2, y2, x3, y3)
        vera=drawcurveinfield(Math.floor((y2)/res), Math.floor((x2)/res), len) 
        line(vera.x,vera.y,rightmargin,y1)
    }
}


var res = 7 //knob: density of the field
var steplength = res//knob: length of each curve 
var strw = 2 //knob: weight of each curve
var field = []
var nbcols = Math.floor(actualwidth / res) + 1
var nbrows = Math.floor(actualheight / res) + 1
var xoff, yoff
var noiseres


function initfield(noiseres) {
    let angle, row
    yoff=0.0
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




function drawcurveinfield(row, col, len) {
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
    return({x:x2,y:y2})
}