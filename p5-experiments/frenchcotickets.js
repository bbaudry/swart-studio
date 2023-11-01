//210mm × 297mm
//pixel = dpi * mm / 25.4 mm
//w=300*210/25.4=2480.31
//h=300*297/25.4=3507.87
var w, h, res
var cnv, bowie
var x, y
var voucherw, voucherh, margin
// the frame rate
var fps = 60;
// the canvas capturer instance
var capturer = new CCapture({ format: 'png', framerate: fps });
var startMillis;


function preload(){
    bowie=loadFont("./fonts/FreeMono.ttf")
//    loadFont("./fonts/InconsolataSemiExpanded-Light.ttf");
}


function setup() {
    res = 1//0.2
    w = 2480 * res
    h = 3500 * res
    cnv = createCanvas(w, h);
    strokeCap(SQUARE)
    frameRate(fps);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    x = 0
    y = 0
    margin = 40 * res
    var nbcols = 3
    var nbrows = 5
    voucherw = (w - (margin * (nbcols + 1))) / nbcols
    voucherh = (h - (margin * (nbrows + 1))) / nbrows
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}

function draw() {
    if (frameCount===1){
        capturer.start();
    }
    background(0, 0, 0)
    for (let x = margin; x < w; x += (margin + voucherw)) {
        for (let y = margin; y < h; y += (margin + voucherh)) {
            var t = margin
            onevoucherdesign(x, y)
            //onevouchertraitsstraight(x, y)
            frenchco(x+0.25*voucherw,y+0.55*voucherh)
        }
    }
    //save("vouchers-design-f.png")
    noLoop()
    /*if (frameCount===100){
        capturer.stop();
        capturer.save();
        return;
    }
    capturer.capture(document.getElementById('defaultCanvas0'));*/
}

function onevouchertraitsstraight(x, y) {
    noStroke()
    fill(0, 0, 100)
    rect(x, y, voucherw, voucherh)
    noFill()
    stroke(0, 0, 0)
    strokeWeight(7)
    var rad = 42
    for (x1 = x; x1 < x + voucherw; x1 += rad) {
        for (y1 = y; y1 < y + voucherh; y1 += rad) {
            for (let i = 0; i < 2; i++) {
                var r0 = floor(random(8))
                switch (r0) {
                    case 0:
                        line(x1, y1, x1 + rad, y1)
                        break;
                    case 1:
                        line(x1, y1, x1, y1 + rad)
                        break;
                    case 2:
                        line(x1 + rad / 2, y1, x1 + rad / 2, y1 + rad)
                        break;
                    case 3:
                        line(x1, y1 + rad / 2, x1 + rad, y1 + rad / 2)
                        break;
                    case 4:
                        line(x1, y1, x1 + rad, y1 + rad)
                        break;
                    case 5:
                        line(x1 + rad, y1, x1, y1 + rad)
                        break;
                    case 6:
                        line(x1 + rad, y1, x1 + rad, y1 + rad)
                        break;
                    case 7:
                        line(x1, y1 + rad, x1 + rad, y1 + rad)
                        break;
                }
            }
        }
    }
}

var xoff = 0
function onevouchertraits(x, y) {
    noStroke()
    fill(0, 0, 100)
    rect(x, y, voucherw, voucherh)
    noFill()
    stroke(0, 0, 0)
    strokeWeight(3)
    var rad = 11
    var x2, y2, angle
    var yoff = 0
    var res = 0.1
    for (x1 = x; x1 < x + voucherw; x1 += rad) {
        for (y1 = y; y1 < y + voucherh; y1 += rad) {
            angle = noise(xoff, yoff) * 0.5 * PI
            yoff += res
            x2 = x1 + rad * cos(angle)
            y2 = y1 + rad * sin(angle)
            line(x1, y1, x2, y2)
        }
        yoff = 0
        xoff += res
    }
}

function onevoucherdesign(x, y) {
    stroke(0, 0, 0)
    strokeWeight(7)
    var xres = 0.2
    var yres = 0.2
    var x1 = x
    var y1 = y
    //rect(x,y,voucherw,voucherh)
    for (let i = 0; i < 1; i += xres) {
        for (let j = 0; j < 1; j += yres) {
            y1 = y + j * voucherh
            if (random() < 0.05) { fill(0, 100, 100) }
            else { fill(0, 0, 100) }
            var r0 = floor(random(4))
            var r1 = random(0.001, 0.09)
            var r2 = random(0.001, 0.09)
            switch (r0) {
                case 0:
                    rect(x1, y1, xres * voucherw, yres * voucherh, r1 * voucherw, r2 * voucherw, 0, 0)
                    break;
                case 1:
                    rect(x1, y1, xres * voucherw, yres * voucherh, 0, r1 * voucherw, r2 * voucherw, 0)
                    break;
                case 2:
                    rect(x1, y1, xres * voucherw, yres * voucherh, r1 * voucherw, 0, r2 * voucherw, 0)
                    break;
                case 3:
                    rect(x1, y1, xres * voucherw, yres * voucherh, 0, 0, r1 * voucherw, r2 * voucherw)
                    break;
            }

        }
        x1 += xres * voucherw
    }
}

function frenchco(x,y){
    textFont(bowie)
    textSize(84)
    stroke(0,0,0)
    strokeWeight(3)
    fill(0,0,0)
    text("frenchco",x,y)
}
