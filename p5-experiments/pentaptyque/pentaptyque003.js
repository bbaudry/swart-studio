function savesvg() {
    save("pentaptyque001.svg");
}

function savepng() {
    save("pentaptyque001.png");
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    maxcount = random(39, 45)
}

var res = 11 //knob: density of the field
var noiseres = 0.09//knob: speed to navigate noise. smallest, smoother angle changes
var steplength = 2*res//knob: length of each curve 
var strw = 2 //knob: weight of each curve
var field = []
var nbcols = Math.floor(w / res) + 1
var nbrows = Math.floor(h / res) + 1


function initfield() {
    let angle, row

    for (let y = 0; y < nbrows; y++) {
        row = []
        yoff += noiseres
        xoff = 0.0;
        for (let x = 0; x < nbcols; x++) {
            xoff += noiseres
            let ikeda = noise(xoff, yoff, zoff)
            angle = map(ikeda, 0.0, 1.0, 0, PI)
            row.push(angle)
        }
        field.push(row)
    }
}


function draw(){
    drawmask()
    for(var i=0;i<1;i++){
        drawart()
    }
    noLoop()
}

function drawmask(){
    rect(0,0,totalwidth,totalheight)
    for(var i=0; i<5; i++){
        rect(padding,(i+1)*padding+i*h,w,h)
        rect(padding+leftmargin,(i+1)*padding+i*h+topmargin,actualwidth,actualheight)
    }
}

function drawart(){
    for(var i=0; i<5; i++){
        push()
        translate(padding+leftmargin,(i+1)*padding+i*h+topmargin)
        pop()
    }
}
