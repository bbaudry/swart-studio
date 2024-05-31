function savesvg() {
    save("gaspe008.svg");
}

function savepng() {
    save("gaspe008.png");
}

var font, posx, posy, stepsize, nbhorizontalsteps, nbvertcicalsteps
var fSize = 15
var palette =[{h1:280,h2:300,h3:330},{h1:180,h2:30,h3:200},{h1:280,h2:30,h3:250}]
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('gaspe008.js');
}

function draw() {
    background(0, 0, 100)
    stepsize = Math.floor(actualwidth * 0.009)
    var vratio = random(0.21,0.63)
    var hratio = random(0.21,0.63)
    var oratio = random(0.009,0.03)
    grid(leftmargin,topmargin,leftmargin+actualwidth*vratio,topmargin+actualheight*hratio,stepsize)
    grid(leftmargin+actualwidth*(vratio+oratio),topmargin,rightmargin,topmargin+actualheight*hratio,stepsize)
    grid(leftmargin,topmargin+actualheight*(hratio+oratio),rightmargin,bottommargin,stepsize)
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
                stroke(30, 100, 100)//300
            }
            else {
                if ( v >= 0.5 && v < 0.6) {
                    stroke(280, 100, 100)//330
                }
                else{
                         stroke(250, 100, 100)//280
            }
            }
            ellipse(x + stepsize * 0.5, y + stepsize * 0.5, stepsize*2, stepsize*2)
        }
    }
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [gaspe 008). May 2024]"
    text(c, posx, posy)
}