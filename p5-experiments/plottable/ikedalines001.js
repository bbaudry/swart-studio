var xoff=0.0 
var yoff=0.0 
var yoff2=0.0


function savesvg() {
    save("ikedalines001.svg");
}

function savepng() {
    save("ikedalines001.png");
}

function draw() {
    //background(0, 0, 100)
    frameRate(1)
    stroke(0, 0, 0,100)
    //frames()
    var nbblocks=7
    if(frameCount<nbblocks){
        block()
    }
    else{
    noLoop()
}
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
    yinc1 = 0.001
    yinc2 = 0.1
    originx = leftmargin + (actualwidth*0.1) * noise(xoff); xoff += xinc;//*random()
    destx = originx+(actualwidth*0.5) * noise(xoff); xoff += xinc;// * random()
    console.log("right margin: "+rightmargin)
    console.log("origin x: "+originx)
    console.log("dest x: "+destx)
    x1 = originx
    x2 = originx
    xstep = random(42,84)
    ystep = topmargin+actualheight* noise(yoff2); yoff2 += yinc2;//*random()
    depth = 42
    while (destx < rightmargin) {
        while (x2 < destx) {
            x2 = x1 + xstep * noise(xoff); xoff += xinc;
            for (i = 0; i < depth; i += 3) {
                y = ystep+i* noise(yoff); yoff += yinc1;
                line(x1, y, x2, y)
            }
            x1 = x2
            ystep=actualheight* noise(yoff); yoff += yinc1;//*random()
        }
        originx = destx
        destx += (actualwidth*0.5) * random()
        x1 = originx
        x2 = originx
        xstep = random(4,42)
        ystep=topmargin+actualheight* noise(yoff2); yoff2 += yinc2;//*random()
        depth=Math.floor(random(84))
    }
}
