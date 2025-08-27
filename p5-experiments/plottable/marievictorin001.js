
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
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.95)
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
    stroke(0, 100, 100)
    var yinit = topmargin+random(0.1,0.5)*actualheight
    var topsegmentheigt=Math.floor(random(27,53))*penwidth
    var bottomsegmentheigt=Math.floor(random(27,53))*penwidth
    quad(leftmargin,topmargin,rightmargin,yinit,rightmargin,yinit+topsegmentheigt,leftmargin,topmargin+topsegmentheigt)
    quad(leftmargin,bottommargin,rightmargin,yinit+topsegmentheigt+bottomsegmentheigt,rightmargin,yinit+topsegmentheigt,leftmargin,bottommargin-bottomsegmentheigt)

    noLoop()
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

