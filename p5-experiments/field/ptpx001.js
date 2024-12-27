function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    fileName = "ptpx001"
    sourcecode = loadStrings(fileName + '.js');
}

function setup() {
    //getsvg()
    getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0, 0, 100)
    noFill()
}

function draw() {
    //    drawframe()
    //    fill(0, 0, 0); stroke(0, 0, 100); strokeWeight(1)
    //    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 006). December 2024]")
    for (var i = 0; i < 2; i++) {
        for (var j = 1; j < 3; j++) {
            push()
            translate(wpadding + i * (wpadding + postcardheight), j * (hpadding + postcardwidth))
            rotate(radians(270))
            rect(0, 0, postcardwidth, postcardheight)
            rect(leftmargin, topmargin, actualwidth, actualheight)

            star()

            stroke(0, 0, 0); fill(0, 0, 0)
            textFont(font)
            textSize(fSize)
            text("ptpx001", leftmargin, bottommargin + fSize)
            pop()
        }
    }
    noLoop()
}

function star() {
    stroke(0, 0, 0)
    var x1, y1, x2, y2, x3, y3, nbiter, len, luxus, vera, molnar
    nbiter = Math.floor(random(21, 42))
    len = Math.floor(random(37, 53))
    vera = Math.floor(random(21, 33))
    molnar = random(0.1, 0.77)
    initfield(0.05)
    for (var i = 0; i < nbiter; i++) {
        x1 = leftmargin
        y1 = topmargin + actualheight * molnar + i
        x2 = vera * res * 2
        y2 = (17 + i) * res
        line(x1, y1, x2, y2)
        x3 = x2 + actualwidth * 0.4
        y3 = y2 + 21 + i
        luxus = drawcurveinfield(Math.floor((y2) / res), Math.floor((x2) / res), len)
        beginShape()
        var diffx = rightmargin - luxus.x
        var diffy = Math.abs(y1 - luxus.y)
        vertex(luxus.x, luxus.y)
        bezierVertex(luxus.x + diffx * 0.2, luxus.y - diffy * 0.7, luxus.x + diffx * 0.7, luxus.y - diffy * 1.7, rightmargin, y1)
        endShape()
    }
}


var res = 5 //knob: density of the field
var steplength = res * 2//knob: length of each curve 
var strw = 2 //knob: weight of each curve
var field = []
var nbcols = Math.floor(actualwidth / res) + 1
var nbrows = Math.floor(actualheight / res) + 1
var xoff, yoff
var noiseres


function initfield(noiseres) {
    let angle, row
    yoff = 0.0
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
    return ({ x: x2, y: y2 })
}