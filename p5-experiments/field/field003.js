var font, posx, posy, knobs = []
var fSize = 12
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
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

var res = 3 //knob: density of the field
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
    //drawframe()
    drawart()
    stroke(0, 100, 100)
    var x1, y1, x2, y2, len, angle, rad, iter
    len = res
    rad=3
    iter=212
    x1 = leftmargin + 44 * res
    y1 = topmargin + (nbrows - 1) * res
    ellipse(x1, y1, rad, rad)
    stroke(0, 100, 100)
    for (var i = 1; i < iter; i++) {
        angle = field[nbrows - i][4]
        x2 = x1 + len * cos(angle + PI)
        y2 = y1 + len * sin(angle + PI)
//         ellipse(x2, y2, rad, rad)
        x1 = x2; y1 = y2;
    }
    x1 = leftmargin + 45 * res
    y1 = topmargin + (nbrows - 1) * res
    ellipse(x1, y1, rad, rad)
    stroke(0, 100, 100)
    for (var i = 1; i < iter; i++) {
        angle = field[nbrows - i][4]
        x2 = x1 + len * cos(angle + PI)
        y2 = y1 + len * sin(angle + PI)
//        ellipse(x2, y2, rad, rad)
        x1 = x2; y1 = y2;
    }
    x1 = leftmargin + 46 * res
    y1 = topmargin + (nbrows - 1) * res
    ellipse(x1, y1, rad, rad)
    stroke(0, 100, 100)
    for (var i = 1; i < iter; i++) {
        angle = field[nbrows - i][4]
        x2 = x1 + len * cos(angle + PI)
        y2 = y1 + len * sin(angle + PI)
        ellipse(x2, y2, rad, rad)
        x1 = x2; y1 = y2;
    }
    for (var i = 1; i < iter; i++) {
        angle = field[nbrows - i][4]
        x2 = x1 + len * cos(angle)
        y2 = y1 + len * sin(angle)
        ellipse(x2, y2, rad, rad)
        x1 = x2; y1 = y2;
    }
    stroke(0, 0, 0)
//    drawvecs()
    fill(0, 0, 0); stroke(0, 0, 0)
    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 003). November 2024]")
    noLoop()
}

function drawart() {
    initfield(noiseres)
    for (var j = 0; j < nbcols; j++) {
        if (random() < 0.5) {//goingdown(j)
        }
        else {//goingup(j)
        }
    }
}

function goingdown(j) {
    var col, row, x1, y1, x2, y2, steplength, rad
    col = j
    row = 1
    steplength = Math.floor(random(3, 17))
    rad = Math.floor(random(3, 7))
    stroke(0, 100, 100)
    noFill()
    x1 = leftmargin + col * res
    y1 = topmargin + row * res
    for (var i = 0; i < 210; i++) {
        ellipse(x1, y1, rad, rad)
        angle = field[row][col]//;text(Math.floor(angle),x1,y1)
        x2 = x1 + steplength * cos(angle)
        y2 = y1 + steplength * sin(angle)
        col = Math.floor(x2 / res)
        row = Math.floor(y2 / res)
        if (col >= nbcols || col < 0) { break } else { x1 = x2 }
        if (row >= nbrows || row < 0) { break } else { y1 = y2 }
    }

}

function goingup(j) {
    var col, row, x1, y1, x2, y2, steplength, rad
    col = j
    row = nbrows - 1
    steplength = Math.floor(random(3, 17))
    rad = Math.floor(random(3, 7))
    stroke(0, 100, 100)
    noFill()
    x1 = leftmargin + col * res
    y1 = row * res
    for (var i = 0; i < 21; i++) {
        ellipse(x1, y1, rad, rad)
        angle = field[row][col]//;text(Math.floor(angle),x1,y1)
        x2 = x1 + steplength * cos(angle + PI)
        y2 = y1 + steplength * sin(angle + PI)
        col = Math.floor(x2 / res)
        row = Math.floor(y2 / res)
        if (col >= nbcols || col < 0) { break } else { x1 = x2 }
        if (row >= nbrows || row < 0) { break } else { y1 = y2 }
    }
}

function shapeinfield(row, col) {
    var x1, y1, x2, y2, x3, y3, offset
    offset = 42
    x1 = col * res
    y1 = row * res
    x2 = (col + Math.floor(random(-offset, offset))) * res
    y2 = (row + Math.floor(random(-offset, offset))) * res
    x3 = (col + Math.floor(random(-offset, offset))) * res
    y3 = (row + Math.floor(random(-offset, offset))) * res
    triangle(x1, y1, x2, y2, x3, y3)
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