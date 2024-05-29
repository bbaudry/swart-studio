function savesvg() {
    save("gaspe008.svg");
}

function savepng() {
    save("gaspe008.png");
}

var font, posx, posy, stepsize, nbhorizontalsteps, nbvertcicalsteps
var fSize = 15
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe008.js');
}

function draw() {
    background(0, 0, 100)
    stepsize = Math.floor(actualwidth * 0.009)
    grid(leftmargin,topmargin,rightmargin,bottommargin,stepsize)
    stroke(0, 0, 0)
    textFont(font)
    textSize(fSize)
    var s=showcode(leftmargin,bottommargin+fSize*2)
    showcredits(leftmargin,s[1])
    noLoop()
}

function grid(x1,y1,x2,y2,stepsize) {
    nbhorizontalsteps = Math.floor((x2-x1) / stepsize)
    nbvertcicalsteps = Math.floor((y2-y1) / stepsize)
    var yoff = 0.0
    var xoff, v, x, y
    var inc = 0.004
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff += inc
        xoff = 0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            xoff += inc
            v = noise(xoff, yoff)
            x = x1 + i * stepsize
            y = y1 + j * stepsize
            if (v >= 0.34 && v < 0.44 ) {
                stroke(300, 100, 100)
            }
            else {
                if ( v >= 0.5 && v < 0.6) {
                    stroke(330, 100, 100)
                }
                else{
                stroke(280, 100, 100)
            }
            }
            //ellipse(x + stepsize * 0.5, y + stepsize * 0.5, stepsize*2, stepsize*2)
            line(x,y,x+stepsize, y+stepsize*v)
        }
    }
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vyper [gaspe 008). May 2024]"
    text(c, posx, posy)
}