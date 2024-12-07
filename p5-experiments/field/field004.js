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

var nbcells = 6 //knob: density of the field
//knob: speed to navigate noise. smallest, smoother angle changes
var yoff, field


function initgrid(noiseres) {
    let x1, y1, x2, y2, x3, y3, x4, y4, off
    field = []
    yoff = 0.0
    off = 3
    x1 = leftmargin
    x4 = leftmargin
    for (let x = 0; x < nbcells; x++) {
        yoff += noiseres
        y1 = topmargin
        y2 = topmargin
        x2 = x1 + (actualwidth - (nbcells - 1) * off) / nbcells
        x3 = x4 + (actualwidth - (nbcells - 1) * off) / nbcells
        for (let y = 0; y < nbcells - 1; y++) {
            y3 = y2 + (actualheight / nbcells) + (17 - noise(yoff) * 34); yoff += noiseres
            y4 = y1 + (actualheight / nbcells) + (17 - noise(yoff) * 34); yoff += noiseres
            field.push({ x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3, x4: x4, y4: y4 })
            y1 = y4 + off
            y2 = y3 + off
        }
        y3 = bottommargin
        y4 = bottommargin
        field.push({ x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3, x4: x4, y4: y4 })
        x1 = x2 + off
        x4 = x3 + off
    }
}

function draw() {
    background(0,0,100)
    initgrid(0.1)
    drawart()
    fill(0, 0, 0); stroke(0, 0, 0)
    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 003). November 2024]")
    noLoop()
}

function drawart() {
    for (i = 0; i < field.length; i++) {
        var s = field[i]
        stroke(0, 100, 100)
        //quad(s.x1, s.y1, s.x2, s.y2, s.x3, s.y3, s.x4, s.y4)
        if(random()<0.8){eye(s)}
        else{eye2(s)}
    }
    strokeWeight(3)
    drawflower()
}

function eye(s) {
    var x1, y1, x2, y2, x3, y3, t, ox, oy, dx, dy, alea
    alea = random()
    if (alea < 0.25) {
        x1 = s.x1; y1 = s.y1; x2 = s.x2; y2 = s.y2; x3 = s.x3; y3 = s.y3;
    }
    else {
        if (alea < 0.5) {
            x1 = s.x3; y1 = s.y3; x2 = s.x4; y2 = s.y4; x3 = s.x1; y3 = s.y1;
        }
        else {
            if (alea < 0.75) {
                x1 = s.x4; y1 = s.y4; x2 = s.x1; y2 = s.y1; x3 = s.x2; y3 = s.y2;
            }
            else {
                x1 = s.x2; y1 = s.y2; x2 = s.x3; y2 = s.y3; x3 = s.x4; y3 = s.y4;
            }
        }
    }
    for (t = 0; t < 1; t += 0.1) {
        ox = (1 - t) * x1 + (t * x2);
        oy = (1 - t) * y1 + (t * y2);
        dx = (1 - t) * x2 + (t * x3);
        dy = (1 - t) * y2 + (t * y3);
        line(ox, oy, dx, dy)
    }
}

function eye2(s){
    var x1, y1, x2, y2, x3, y3, t, ox, oy, dx, dy, alea
    //quad(s.x1, s.y1, s.x2, s.y2, s.x3, s.y3, s.x4, s.y4)
    x1=s.x1; y1=s.y1; x2=s.x2; y2=s.y2; x3=s.x3; y3=s.y3; x4=s.x4; y4=s.y4
    line(x1,y1,x2,y2);line(x4,y4,x3,y3)
    for (t = 0; t < 1; t += 0.1) {
        ox = (1 - t) * x1 + (t * x2);
        oy = (1 - t) * y1 + (t * y2);
        dx = (1 - t) * x3 + (t * x4);
        dy = (1 - t) * y3 + (t * y4);
        line(ox, oy, dx, dy)
    }
}

var res = 4 //knob: density of the field
//knob: speed to navigate noise. smallest, smoother angle changes
var fieldflower = []
var nbcols = Math.floor(actualwidth / res) + 1
var nbrows = Math.floor(actualheight / res) + 1
var xoff, yoff


function initfieldflower(noiseres) {
    let angle, row
    fieldflower = []
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
        fieldflower.push(row)
    }
}


function drawflower() {
    initfieldflower(0.02)
    for (var j = 0; j < 7; j++) {
        oneloop()
    }
}

function oneloop(){
    var initx, inity, x1, y1, x2, y2, len, angle, rad, iter, hu
    len = res *3
    rad=0.5
    iter=37
    initx=Math.floor(random(nbcols))
    inity=Math.floor(nbrows*0.7)
    x1 = leftmargin + Math.floor(nbcols/2) * res
    y1 = topmargin + inity * res
    hu=random([50])
    stroke(hu,100,100)
    beginShape()
    for (var i = 1; i < iter; i++) {
        console.log("nbrows: "+nbrows+"; field rows: "+field.length)
        angle = fieldflower[nbrows - i][initx]
        x2 = x1 + len * cos(angle+ PI*rad)
        y2 = y1 + len * sin(angle+ PI*rad)
        vertex(x2, y2)
        x1 = x2; y1 = y2;
    }
    for (var i = 1; i < iter; i++) {
        angle = fieldflower[nbrows - i][initx]
        x2 = x1 + len * cos(angle- PI*(1-rad))
        y2 = y1 + len * sin(angle- PI*(1-rad))
        vertex(x2, y2)
        x1 = x2; y1 = y2;
    }
    endShape(CLOSE)
}
