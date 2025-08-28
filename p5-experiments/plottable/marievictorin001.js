const { useOptimistic } = require("react");

var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth

function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
        //sourcecode = loadStrings('marievictorin001-core.js');
}


function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    //cnv = createCanvas(w, h).mousePressed(savepng);
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    centerCanvas();
    leftmargin = Math.floor(w * 0.03)
    rightmargin = Math.floor(w * 0.97)
    topmargin = Math.floor(h * 0.03)
    bottommargin = Math.floor(h * 0.97)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    //96*0.2/25.4 : 0.2mm is the width of a fineliner
    //0.04 * 96 : 0.04 inch is 1 mm, the width of stabilo 68/32
    penwidth =0.04 * 96
    strokeWeight(penwidth)
}

function savepng(){
    save("marievictorin001.png")
}

function savesvg(){
    save("marievictorin001.svg")
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    var yinit = topmargin+random(0.21,0.42)*actualheight
    var topsegmentheigt=Math.floor(random(32,63))*penwidth
    var bottomsegmentheigt=Math.floor(random(32,63))*penwidth
    var x1,y1,x2,y2,x3,y3
    var x4,y4,x5,y5,x6,y6
    var x7,y7,x8,y8,x9,y9
    x1=leftmargin;y1=topmargin
    x2=rightmargin;y2=topmargin
    x3=rightmargin;y3=topmargin+random(0.1,0.5)*actualheight
    x4=leftmargin;y4=topmargin+topsegmentheigt
    x5=rightmargin;y5=y3+topsegmentheigt
    x6=rightmargin;y6=y5+bottomsegmentheigt
    x7=leftmargin;y7=bottommargin
    x8=leftmargin;y8=bottommargin-bottomsegmentheigt
    x9=rightmargin;y9=bottommargin
    stroke(0, 100, 100)
    quadwithlines(x1,y1,x3,y3,x5,y5,x4,y4)
    quadwithlines(x8,y8,x5,y5,x6,y6,x7,y7)
    stroke(200, 100, 100)
    triwstripes(x1,y1,x2,y2,x3,y3)
    triwstripes(x4,y4,x5,y5,x8,y8)
    triwstripes(x7,y7,x6,y6,x9,y9)
    noLoop()
}

function quadwithlines(x1,y1,x2,y2,x3,y3,x4,y4){
    quad(x1,y1,x2,y2,x3,y3,x4,y4)
    var yleft,yright
    yleft=y1;yright=y2
    while(yleft<y4){
        line(x1,yleft,x2,yright)
        yleft+=penwidth
        yright+=penwidth    
    }
}

function triwstripes(x1,y1,x2,y2,x3,y3){
    var xi,yi,xd,yd,step,up,i
    xi=x1;yi=y1
    xd=x2;yd=y2
    step=0.02
    up=true
    i=0
    line(xi,yi,xd,yd)
    while(step*i<1){
        if(up){
    xi=xd;yi=yd
    xd=lerp(x2,x3,step*i)
    yd=lerp(y2,y3,step*i)
    line(xi,yi,xd,yd)
    xi=xd;yi=yd
    xd=lerp(x1,x3,step*i)
    yd=lerp(y1,y3,step*i)
    line(xi,yi,xd,yd)
    }else{
    xi=xd;yi=yd
    xd=lerp(x1,x3,step*i)
    yd=lerp(y1,y3,step*i)
    line(xi,yi,xd,yd)
    xi=xd;yi=yd
    xd=lerp(x2,x3,step*i)
    yd=lerp(y2,y3,step*i)
    line(xi,yi,xd,yd)
    }
    up=!up
    i++
}
}

function nucleus(x1, y1, x2, y2, x3, y3) {
    var cx = leftmargin + actualwidth * random(0.3, 0.5)
    var cy = topmargin + actualheight * random(0.3, 0.8)
    var rinit = w * 0.3
    var rdec = 5
    var initangle = Math.floor(random(59))
    var ox, oy, dx, dy
    for (var r = rinit; r > rdec; r -= penwidth) {
        x1 = cx + r * cos(radians(initangle))
        y1 = cy + r * sin(radians(initangle))
        x2 = cx + r * cos(radians(initangle + 120))
        y2 = cy + r * sin(radians(initangle + 120))
        x3 = cx + r * cos(radians(initangle + 240))
        y3 = cy + r * sin(radians(initangle + 240))
        triangle(x1, y1, x2, y2, x3, y3)
        x2 = cx + rinit * cos(radians(initangle + 120))
        y2 = cy + rinit * sin(radians(initangle + 120))
    }
    x1 = cx + rinit * cos(radians(initangle))
    y1 = cy + rinit * sin(radians(initangle))
    x2 = cx + rinit * cos(radians(initangle + 120))
    y2 = cy + rinit * sin(radians(initangle + 120))
    x3 = cx + rinit * cos(radians(initangle + 240))
    y3 = cy + rinit * sin(radians(initangle + 240))
    stroke(0, 0, 0)
    for (var t = 0; t < 1; t += 0.01) {
        ox = (1 - t) * x2 + (t * x3);
        oy = (1 - t) * y2 + (t * y3);
        dx = leftmargin;
        dy = oy;
        line(ox, oy, dx, dy)
    }
    line(x3, y3, leftmargin, y3)
    for (var t = 0; t < 0.5; t += 0.01) {
        ox = (1 - t) * x3 + (t * x1);
        oy = (1 - t) * y3 + (t * y1);
        dx = ox;
        dy = topmargin;
        line(ox, oy, dx, dy)
    }
    for (var t = 0.5; t < 1; t += 0.01) {
        ox = (1 - t) * x3 + (t * x1);
        oy = (1 - t) * y3 + (t * y1);
        dx = rightmargin;
        dy = oy;
        line(ox, oy, dx, dy)
    }
    line(x1, y1, rightmargin, y1)
    var xoff = Math.floor(random(w*0.1,w*0.21))
    for (var t = 0; t < 0.5; t += 0.01) {
        ox = (1 - t) * x1 + (t * x2);
        oy = (1 - t) * y1 + (t * y2);
        dx = ox-xoff;
        dy = bottommargin;
        line(ox, oy, dx, dy)
    }
}

