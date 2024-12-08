function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('field003.js');
}

var font
var fSize = 15

function savesvg() {
    save("field003.svg");
}

function savepng() {
    save("field003.png");
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
    fill(0, 0, 0); stroke(0, 0, 0); strokeWeight(1)
    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 005). December 2024]")
    noLoop()
}

function drawart() {
    //initfield()
    shape()
}

var res = 4 //knob: density of the field
//knob: speed to navigate noise. smallest, smoother angle changes
var field = []
var nbcols = Math.floor(actualwidth / res) + 1
var nbrows = Math.floor(actualheight / res) + 1
var xoff, yoff


function initfield(noiseres) {
    let angle, row
    field = []
    yoff = 0.0
    for (let y = 0; y < nbrows; y++) {
        row = []
        yoff += noiseres
        xoff = 0.0;
        for (let x = 0; x < nbcols; x++) {
            xoff += noiseres
            let ikeda = noise(xoff, yoff)
            angle = map(ikeda, 0.0, 1.0, 0, 2 * PI)
            row.push(angle)
        }
        field.push(row)
    }
}


function shape() {
    stroke(0, 0, 100)
    noFill()
    var xoff, yoff, noiseinc, diam, diamorigin, diaminc, step, x, y, xorigin, yorigin
    diaminc = 3
    step = 4
    diamorigin = 7
    xorigin = leftmargin+actualwidth/2
    yorigin = topmargin+actualheight*0.7
    noiseinc = 3
    for (var i = 1; i < 3; i++) {
        diam = diamorigin; x=xorigin; y=yorigin+i
        for (var a = 0; a < 360; a += noiseinc) {
            xoff = 20 * i + cos(radians(a)) + 1
            yoff = 20 * i + sin(radians(a)) + 1
            var angle = map(noise(xoff, yoff), 0, 1, 0, 360)//100-i*6
            x = x+ step  * cos(radians(angle+a/2))
            y = y+step  * sin(radians(angle+a/2))
            ellipse(x, y, diam, diam)
            diam += diaminc
        }
        //endShape()
    }
}