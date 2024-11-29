var font, posx, posy, knobs = []
var fSize = 15
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('field003.js');
}
function savesvg() {
    save("field003.svg");
}

function savepng() {
    save("field003.png");
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
    noiseres = 0.007

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
    stroke(0, 0, 0)
//    drawvecs()
    fill(0, 0, 0); stroke(0, 0, 0)
    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 003). November 2024]")
    noLoop()
}

function drawart() {
    for (var j = 0; j < 2; j++) {
        initfield(0.001)
        oneloop(j)
        //noiseres+=0.001
    }
}

function oneloop(j){
    var initx, inity, x1, y1, x2, y2, len, angle, rad, iter
    len = res
    rad=1
    iter=199
    initx=Math.floor(nbcols/2)//Math.floor(random(nbcols-1))
    inity=nbrows-1//Math.floor(random(nbrows-1))
    x1 = leftmargin + initx * res
    y1 = topmargin + inity * res
    stroke(200,100,100)
    beginShape()
    for (var i = 1; i < iter; i++) {
        angle = field[nbrows - i][initx]
        x2 = x1 + len * cos(angle+ PI)
        y2 = y1 + len * sin(angle+ PI)
        vertex(x2, y2)
        x1 = x2; y1 = y2;
    }
    for (var i = 1; i < iter; i++) {
        angle = field[nbrows - i][initx]
        x2 = x1 + len * cos(angle)
        y2 = y1 + len * sin(angle)
        vertex(x2, y2)
        x1 = x2; y1 = y2;
    }
    endShape(CLOSE)
}
