function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('field005.js');
}

var font
var fSize = 15

function savesvg() {
    save("field005.svg");
}

function savepng() {
    save("field005.png");
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
    // knobs
    step = 2 // how far to move in the canvas
    diamorigin = 2 // value of the circle diameter, when a new trace starts
    diaminc = 0.1 // increment at each trace step
    xorigin = leftmargin+actualwidth/2 
    yorigin = topmargin//+actualheight*0.7    
    noiseinc = 1 // speed at which we move around a circle in the noise space
    //draw one or more traces
    for (var i = 1; i < 2; i++) {
        diam = diamorigin; x=xorigin; y=yorigin+i
        //one trace drawn, fetching noise values on a circle, and considering the value as an angle to move in the canvas
        for (var a = 0; a < 360; a += noiseinc) {
            xoff = 20 * i + 42*cos(radians(a)) + 1 // 20*i is to move in the noise space at each iteration i
            yoff = 20 * i + 42*sin(radians(a)) + 1
            var angle = map(noise(xoff, yoff), 0, 1, 0, 360);console.log(noise(xoff, yoff))
            x = x+step  * cos(radians(angle-90))
            y = y+step  * sin(radians(angle-90))
            ellipse(x, y, diam, diam)
            diam += diaminc
        }
        //endShape()
    }
}