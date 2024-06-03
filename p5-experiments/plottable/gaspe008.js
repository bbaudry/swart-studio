function savesvg() {
    save("gaspe008.svg");
}

function savepng() {
    save("gaspe008.png");
}

var font, xoff,yoff,inc,shake, h1,h2,h3,stepsize, nbhorizontalsteps, nbvertcicalsteps
var fSize = 14
var palette = [{ h1: 280, h2: 300, h3: 330 }, { h1: 180, h2: 30, h3: 200 }, { h1: 280, h2: 30, h3: 250 }, { h1: 270, h2: 0, h3: 90 }]
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe008.js');
}

function draw() {
    background(0, 0, 100)
    //inc,shake,stepsize,palettecolor are the main knobs that steer the artwork 
    inc = 0.004
    if(random()<0.5){shake=true;}else{shake=false}
    stepsize = Math.floor(actualwidth * 0.011)
    palettecolor = palette[Math.floor(random(palette.length))]
    h1=palettecolor.h1;h2=palettecolor.h2;h3=palettecolor.h3;
    var vratio = random(0.21, 0.63)
    var hratio = random(0.21, 0.63)
    var oratio = random(0.009, 0.03)
    grid(leftmargin, topmargin, leftmargin + actualwidth * vratio, topmargin + actualheight * hratio, stepsize)
    grid(leftmargin + actualwidth * (vratio + oratio), topmargin, rightmargin, topmargin + actualheight * hratio, stepsize)
    grid(leftmargin, topmargin + actualheight * (hratio + oratio), rightmargin, bottommargin, stepsize)
    stroke(0, 0, 0)
    textFont(font)
    textSize(fSize)
    var s = showcode(leftmargin, bottommargin + fSize * 2)
    showcredits(leftmargin, s[1])
    noLoop()
}


function grid(x1, y1, x2, y2, stepsize) {
    nbhorizontalsteps = Math.floor((x2 - x1) / stepsize)
    nbvertcicalsteps = Math.floor((y2 - y1) / stepsize)
    var v, x, y
    yoff = 0.0
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff += inc
        xoff = 0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            xoff += inc
            v = noise(xoff, yoff)
            x = x1 + i * stepsize
            y = y1 + j * stepsize
            if (v >= 0.34 && v < 0.44) {
                stroke(h1, 100, 100)//300
            }
            else {
                if (v >= 0.5 && v < 0.6) {
                    stroke(h2, 100, 100)//330
                }
                else {
                    if (v >= 0.63 && v < 0.84) {
                        noStroke()
                    }
                    else {
                        stroke(h3, 100, 100)//280
                    }
                }
            }
            var loupe 
            if(shake){loupe=random(1, 1.42)}else{loupe=2}
            ellipse(x + stepsize * 0.5, y + stepsize * 0.5, stepsize * loupe, stepsize * loupe)
        }
    }
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). June 2024]"
    text(c, posx, posy)
}