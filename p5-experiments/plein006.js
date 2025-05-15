
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth

function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h);
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.95)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(3);
    penwidth=0.04*96 // 0.04 inch is 1 mm, the width of stabilo 68/32
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
    vasa()
    //save("plein005.png")
    noLoop()
}


function vasa() {
    var cx, cy, a1, a2, r, x1, y1, x2, y2
    cx = leftmargin + actualwidth * 0.5
    cy = topmargin + actualheight * 0.5
    r = actualwidth * 0.42
    a1 = radians(random(45))
    a2 = radians(a1 + random(180, 250))
    console.log("angles, a1: " + a1 + ", a2:" + a2)
    for (i = 0; i < 42; i++) {
        arc(cx, cy, r, r, a1, a2)
        x1 = cx + r * 0.5 * cos(a1)
        y1 = cy + r * 0.5 * sin(a1)
        x2 = cx + r * 0.5 * cos(a2)
        y2 = cy + r * 0.5 * sin(a2)
        line(x1, y1, x2, y2)
        r -= 7
    }
    r = actualwidth * 0.42
    x2 = cx + r * 0.5 * cos(a2)
    y2 = cy + r * 0.5 * sin(a2)
    r = actualheight * 0.2
    y2 -= r * 0.5
    stripesincircle(x2,y2,r)
    a1 = radians(220)
    a2 = radians(320)
    r += penwidth*7
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 11; j++) {
            arc(x2, y2, r, r, a1, a2)
            r+=penwidth
        }
        a1+=radians(11)
            r+=penwidth*3
    }
}

function stripesincircle(cx,cy,r){
    //ellipse(cx,cy,r,r)
    var x1,y1,x2,y2,a1,a2,a1init,a2init,aoffset
    a1init=Math.floor(random(60,80))
    a2init=Math.floor(random(150,200))
    aoffset=Math.floor(random(3,9))
    a1=radians(a1init)
    a2=radians(a2init)
    for(i=0;i<33;i++){
    x1=cx+r*0.5*cos(a1)
    y1=cy+r*0.5*sin(a1)
    x2=cx+r*0.5*cos(a2)
    y2=cy+r*0.5*sin(a2)
    line(x1,y1,x2,y2)
    a1-=radians(4)
    a2+=radians(4)
    }
    a1=radians(a1init+aoffset)
    a2=radians(a2init+aoffset)
    for(i=0;i<33;i++){
    x1=cx+r*0.5*cos(a1)
    y1=cy+r*0.5*sin(a1)
    x2=cx+r*0.5*cos(a2)
    y2=cy+r*0.5*sin(a2)
    line(x1,y1,x2,y2)
    a1-=radians(4)
    a2+=radians(4)
    }
}