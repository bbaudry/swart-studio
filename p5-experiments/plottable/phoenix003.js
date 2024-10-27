function savesvg() {
    save("phoenix001.svg");
}

function savepng() {
    save("phoenix001.png");
}

var fSize = 17
var bowie
var xoff = 0.0
var xinc = 0.01 
var steps = 21
var xstep = actualwidth / steps
var ystep = actualheight / steps

function preload() {
    bowie = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('phoenix001.js');
}

function draw() {
    background(0, 0, 0)
    noFill()
    stroke(0, 0, 100)
    rect(leftmargin, topmargin, actualwidth, actualheight)
    rect(0, 0, w, h)
    initgrid()
    //showgrid()
    cactus()
    noLoop()
}

var grille = []
function initgrid() {
    var x, y
    for (i = 1; i < steps; i++) {
        x = leftmargin + i * xstep + noise(xoff) * (xstep*0.42-xstep); xoff += xinc
        for (j = 1; j < steps; j++) {
            y = topmargin + j * ystep + random(xoff) * (ystep*0.42-ystep); xoff += xinc
            grille.push({ x: x, y: y })
        }
    }
}

function showgrid() {
    for (var i = 0; i < grille.length; i++) {
        ellipse(grille[i].x, grille[i].y, 5, 5)
    }
}

function cactus() {
    
    for (i = 0; i < steps -1; i++) {
        for (j = 0; j < steps -2; j++) {
            var index1 = (i*(steps-1))+j
            var index2 = (i*(steps-1))+j+steps-1
            var index3 = (i*(steps-1))+j+steps
            var index4 = (i*(steps-1))+j+1
            for(t=0;t<11;t++){
            quad(grille[index1].x,grille[index1].y+t,
                grille[index2].x,grille[index2].y-t,
                grille[index3].x+t,grille[index3].y,
                grille[index4].x-t,grille[index4].y
            )
        }
        }
    }
}



function showcredits(posx, posy) {
    textFont(bowie)
    textSize(fSize);
    stroke(0, 0, 100)
    fill(0, 0, 100)
    var c = "al.my.re [noline 004). 20 September 2024"
    text(c, posx, posy)
    c = "p5.js :: random() :: juicy-gcode"
    text(c, posx, posy + fSize)
    c = "pour alice"
    text(c, posx, posy + 2 * fSize)

}