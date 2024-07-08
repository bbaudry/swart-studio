var xoff = 0.0
var yoff1 = 0.0
var yoff2 = 0.0
var yoff3 = 0.0
var font

function savesvg() {
    save("cubes001.svg");
}

function savepng() {
    save("cubes001.png");
}

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    //frames()
    onecube()
    credits()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function onecube() {
    var x = leftmargin + 0.25 * actualwidth
    var y = topmargin + 0.25 * actualheight
    var initstep = 0.08 * actualwidth
    var step = initstep
    var bend = 0.3
    var decstep = 0.15 * step
    var dec = 0
    for (var yglobal = topmargin + 0.25 * actualheight; yglobal < bottommargin - 2 * initstep; yglobal += (1 + 2 * bend) * initstep) {
        for (var xglobal = leftmargin; xglobal < rightmargin - 2 * initstep; xglobal += 2 * initstep) {
            step = initstep
            y = yglobal
            x = xglobal
            for (var i = 0; i < 11; i++) {
                y += random() * step
                if (random() < (bottommargin - y) / bottommargin) {
                    drawoneportion(x, y, x + step, y + bend * step, x + step, y + (1 + bend) * step, x, y + step)
                    drawoneportion(x + step, y + bend * step, x + 2 * step, y, x + 2 * step, y + step, x + step, y + (1 + bend) * step)
                    drawoneportion(x, y, x + step, y - bend * step, x + 2 * step, y, x + step, y + bend * step)
                }
                x += decstep
                y += decstep
                step -= decstep
            }
        }
    }
}

function basicgrid() {
    offset = 0
    outergrid(offset)
    innergrid(offset)
}

function outergrid(offset) {
    var step = (rightmargin - leftmargin) / density - offset
    var decstep = step * 0.12
    var dec = 0
    for (var x = leftmargin; x < rightmargin; x += 2 * (step + offset)) {
        for (var y = topmargin + (step / 2); y < bottommargin; y += 2 * (step + offset)) {
            dec = 0
            drawoneportion(x + dec, y + 1.5 * dec, x + step - dec, y + 0.5 * (step + dec), x + step - dec, y + 1.5 * (step - dec), x + dec, y + step - 0.5 * dec)
            drawoneportion(x + step, y + 0.5 * step, x + 2 * step, y, x + 2 * step, y + step, x + step, y + 1.5 * step)
            drawoneportion(x, y, x + step, y - 0.5 * step, x + 2 * step, y, x + step, y + 0.5 * step)
            dec = decstep
            drawoneportion(x + dec, y + 1.5 * dec, x + step - dec, y + 0.5 * (step + dec), x + step - dec, y + 1.5 * (step - dec), x + dec, y + step - 0.5 * dec)
            dec = 2 * decstep
            drawoneportion(x + dec, y + 1.5 * dec, x + step - dec, y + 0.5 * (step + dec), x + step - dec, y + 1.5 * (step - dec), x + dec, y + step - 0.5 * dec)
            dec = 3 * decstep
            drawoneportion(x + dec, y + 1.5 * dec, x + step - dec, y + 0.5 * (step + dec), x + step - dec, y + 1.5 * (step - dec), x + dec, y + step - 0.5 * dec)
        }
    }
}

function innergrid(offset) {
    var step = (rightmargin - leftmargin) / density - offset
    for (var x = leftmargin + step + 2 * offset; x < rightmargin; x += 2 * (step + offset)) {
        for (var y = topmargin + (2 * step) + offset; y < bottommargin - step; y += 2 * (step + offset)) {
            if (x < rightmargin - 3 * step) {
                ellipse(x, y, 3, 3)
                quad(x, y, x + step, y - (step * 0.5), x + 2 * step, y, x + step, y + (step * 0.5))
            }
        }
    }
}

function drawoneportion(x1, y1, x2, y2, x3, y3, x4, y4) {
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
}


function credits() {
    var fSize = 12
    textFont(font)
    textSize(fSize)
    var x = leftmargin
    var y = bottommargin+fSize
    var c = "float(1). al.my.re. March 2024]"
    text(c, x, y)
    x = leftmargin
    y += fSize * 1.2
    c = "uunatek h3, laptop, projector // p5.js, noise, juicy-gcode, gcode-cli, ubuntu",
        text(c, x, y)

}

