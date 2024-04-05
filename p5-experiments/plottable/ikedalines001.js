var xoff=0.0 
var yoff1=0.0 
var yoff2=0.0
var yoff3=0.0
var font

function savesvg() {
    save("ikedalines001.svg");
}

function savepng() {
    save("ikedalines001.png");
}

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}

function draw() {
    background(0, 0, 0)
    frameRate(1)
    stroke(0, 0, 100)
    //frames()
    var nbblocks=17
    for(var i=0; i<nbblocks;i++){
        block()
    }
    credits()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function block() {
    var x1, x2, y, originx, destx, xstep, ystep, depth, xinc, yinc1, yinc2
    xinc = 0.01
    yinc1 = 0.1
    yinc2 = 0.03
    yinc3 = 0.09
    originx = leftmargin + (actualwidth*0.1) * noise(xoff); xoff += xinc;//*random()
    destx = originx+(actualwidth*0.5) * noise(xoff); xoff += xinc;// * random()
    x1 = originx
    x2 = originx
    xstep = random(42,84)
    ystep = topmargin+actualheight* noise(yoff2); yoff2 += yinc2;//*random()
    depth = 42
    while (destx < rightmargin) {
        while (x2 < destx) {
            x2 = x1 + xstep * noise(xoff); xoff += xinc;
            for (i = 0; i < depth; i += 3) {
                y = ystep+i* noise(yoff1); yoff1 += yinc1;
                line(x1, y, x2, y)
            }
            x1 = x2
            ystep=actualheight* noise(yoff2); yoff2 += yinc2;//*random()
        }
        originx = destx
        destx += (actualwidth*0.5) * random()
        x1 = originx
        x2 = originx
        xstep = random(42,126)
        ystep=topmargin+actualheight* noise(yoff3); yoff3 += yinc3;//*random()
        depth=Math.floor(random(42,84))
    }
}
function credits(){
    stroke(0,0,0)
    var fSize = 12
    textFont(font)
    textSize(fSize)
    var x = leftmargin
    var y = bottommargin 
    var c="ikeda[lines]. al.my.re. March 2024]"
    text(c,x,y)
    x = leftmargin
    y += fSize*1.2
    c="uunatek h3, laptop, projector // p5.js, noise, juicy-gcode, gcode-cli, ubuntu",
    text(c,x,y)

}

