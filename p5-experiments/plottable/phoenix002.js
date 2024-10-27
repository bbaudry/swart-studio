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
var steps = 17
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
    initgrid()
    //showgrid()
    xinc = 0.5
    for(var i=0;i<84;i++){
        cactus()
    }
    noLoop()
}

var grille = []
function initgrid() {
    var x, y
    for (i = 1; i < steps; i++) {
        x = leftmargin + i * xstep + noise(xoff) * (xstep*0.5-xstep); xoff += xinc
        for (j = 1; j < steps; j++) {
            y = topmargin + j * ystep + random(xoff) * (ystep*0.5-ystep); xoff += xinc
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
    var p1=Math.floor(noise(xoff)*grille.length);xoff+=xinc
    var p2,p3,p4
    if(p1<grille.length-steps+1){
        p2=p1+steps
        p3=p2+1
        p4=p1+1
        if(random()<0.2){
        innerquad(grille[p1].x,grille[p1].y,
            grille[p2].x,grille[p2].y,
            grille[p3].x,grille[p3].y,
            grille[p4].x,grille[p4].y,)
        }
        else{
            if(random()<0.42){
                line(grille[p1].x,grille[p1].y,
                grille[p3].x,grille[p3].y)
            }
            else{
                line(grille[p2].x,grille[p2].y,
                    grille[p4].x,grille[p4].y)    
            }
        }
    }
}

function innerquad(x1, y1, x2, y2, x3, y3, x4, y4) {
    var h = random([0,90,180,230])
    stroke(h, 100, 100)
    var ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4
    var tstep=random(0.008,0.02)
    var maxt=random(0.21,0.42)
    var t = 0
    while (t < maxt) {
        ix1 = (1 - t) * x1 + (t * x2)
        iy1 = (1 - t) * y1 + (t * y4)
        ix2 = (1 - (1 - t)) * x1 + ((1 - t) * x2)
        iy2 = (1 - t) * y2 + (t * y3)
        ix3 = (1 - (1 - t)) * x4 + ((1 - t) * x3)
        iy3 = (1 - (1 - t)) * y2 + ((1 - t) * y3)
        ix4 = (1 - t) * x4 + (t * x3)
        iy4 = (1 - (1 - t)) * y1 + ((1 - t) * y4)
        quad(ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4)
        t+=tstep
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