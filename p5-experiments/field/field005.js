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
    fill(0, 0, 0); stroke(0, 0, 0);     strokeWeight(1)
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
            angle = map(ikeda, 0.0, 1.0, 0, 2*PI)
            row.push(angle)
        }
        field.push(row)
    }
}


function shape(){
    translate(leftmargin+actualwidth/2,topmargin+actualheight/2)
    stroke(0,100,100)
    noFill()
    var xoff=0.0
    var xinc=0.01
    for(var i=0;i<7;i++){
    beginShape()
    for(var a=0; a<360; a+=3){
        var r=map(noise(xoff),0,1,100-i*6,200-i*6)
        var x=r*cos(radians(a))
        var y=r*sin(radians(a))
        vertex(x,y)
        xoff+=xinc
    }
    endShape(CLOSE)
}
}