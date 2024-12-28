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
    initallfields()
    frameRate(1)
}

var res = 7 //knob: density of the field
var steplength = res //knob: length of each curve 
var nbcols = Math.floor(actualwidth / res) + 1
var nbrows = Math.floor(actualheight / res) + 1
var allfields = []

function draw() {
    //    drawframe()
    //    fill(0, 0, 0); stroke(0, 0, 100); strokeWeight(1)
    //    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 006). December 2024]")
    background(0, 0, 100)
    var field, len, vera, molnar
    if (frameCount == 1) {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                push()
                translate(wpadding + i * (wpadding + postcardheight), (j + 1) * (hpadding + postcardwidth))
                rotate(radians(270))
                rect(0, 0, postcardwidth, postcardheight)
                rect(leftmargin, topmargin, actualwidth, actualheight)

                stroke(0, 0, 0)
                field = allfields[i * 2 + j]
                len = field[field.length - 1].len
                vera = field[field.length - 1].vera
                molnar = field[field.length - 1].molnar
                wave(Math.floor(random(21, 42)), field, len, vera, molnar)
                pop()
            }
        }
        if(gensvg){save("ptpx001-main.svg")}
    }
    if (frameCount == 2) {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                push()
                translate(wpadding + i * (wpadding + postcardheight), (j + 1) * (hpadding + postcardwidth))
                rotate(radians(270))

                stroke(0, 100, 100); strokeWeight(3)
                field = allfields[i * 2 + j]
                len = field[field.length - 1].len
                vera = field[field.length - 1].vera
                molnar = field[field.length - 1].molnar
                wave(1, field, len, vera, molnar)

                pop()
            }
        }
        if(gensvg){save("ptpx001-guild.svg")}

    }
    if (frameCount==3){
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                push()
                translate(wpadding + i * (wpadding + postcardheight), (j + 1) * (hpadding + postcardwidth))
                rotate(radians(270))
                stroke(0,0,0)
                fill(0, 0, 0)
                textFont(font)
                textSize(fSize)
                text("ptpx001", leftmargin, bottommargin + fSize)
                pop()
            }
        }
        if(gensvg){save("ptpx001-credits.svg")}
        noLoop()
    }
}

function initallfields() {
    var field = []
    var len, vera, molnar
    for (var f = 0; f < 4; f++) {
        field = initfield(0.05)
        len = Math.floor(random(37, 53))
        vera = Math.floor(random(11, 29))
        molnar = random(0.1, 0.69)
        field.push({ len: len, vera: vera, molnar: molnar })
        console.log(field)
        allfields.push(field)
    }
}

function wave(nbiter, field, len, vera, molnar) {
    for (var i = 0; i < nbiter; i++) {
        uneligne(i, len, vera, molnar, field)
    }
}

function uneligne(i, len, vera, molnar, field) {
    var x1, y1, x2, y2, x3, y3, luxus
    x1 = leftmargin
    y1 = topmargin + actualheight * molnar + i
    x2 = vera * res * 2
    y2 = (7 + i) * res
    line(x1, y1, x2, y2)
    x3 = x2 + actualwidth * 0.4
    y3 = y2 + 21 + i
    luxus = drawcurveinfield(Math.floor((y2) / res), Math.floor((x2) / res), len, field)
    beginShape()
    var diffx = rightmargin - luxus.x
    var diffy = Math.abs(y1 - luxus.y)
    vertex(luxus.x, luxus.y)
    bezierVertex(luxus.x + diffx * 0.2, luxus.y - diffy * 0.7, luxus.x + diffx * 0.7, luxus.y - diffy * 1.6, rightmargin, y1)
    endShape()
}

function initfield(noiseres) {
    let angle, row, field, xoff, yoff
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
    return field
}




function drawcurveinfield(row, col, len, field) {
    beginShape()
    x1 = col * res
    y1 = row * res
    curveVertex(x1, y1)
    curveVertex(x1, y1)
    for (let i = 0; i < len; i++) {
        //console.log("try row "+row+" out of "+nbrows+"; at iteration "+i+" for length "+len)
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