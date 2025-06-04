
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
    penwidth = 0.04 * 96 // 0.04 inch is 1 mm, the width of stabilo 68/32
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

var keys=[]
function vasa() {
    var cx, cy, a1, a2, r, x1, y1, x2, y2
    cx = leftmargin + actualwidth * 0.5
    cy = topmargin + actualheight * 0.6
    r = actualwidth * 0.42
    a1 = radians(random(45))
    a2 = radians(a1 + random(180, 250))
    for (i = 0; i < 42; i++) {
        arc(cx, cy, r, r, a1, a2)
        x1 = cx + r * 0.5 * cos(a1)
        y1 = cy + r * 0.5 * sin(a1)
        x2 = cx + r * 0.5 * cos(a2)
        y2 = cy + r * 0.5 * sin(a2)
        line(x1, y1, x2, y2)
        r -= 7
    }
    keys.push(createVector(x2,y2))

    r = actualwidth * 0.42
    x2 = cx + r * 0.5 * cos(a2)
    y2 = cy + r * 0.5 * sin(a2)
    y2 -= r * 0.5
    r = actualheight * 0.2
    stripesincircle(x2, y2, r); 
    keys.push(createVector(x2,y2))
    
    r += penwidth * 7
    arcstripes(x2, y2, r)
    
    x1 = cx + r * 0.5 * cos(a1)
    y1 = cy + r * 0.5 * sin(a1)
    y1 -= r * 0.5
    r = actualheight * 0.3
    sections(x1, y1, r)

    showkeys()
}

// moiré in a circle
function stripesincircle(cx, cy, r) {
    //ellipse(cx,cy,r,r)
    var x1, y1, x2, y2, a1, a2, a1init, a2init, aoffset
    a1init = Math.floor(random(60, 80))
    a2init = Math.floor(random(150, 200))
    aoffset = Math.floor(random(3, 9))
    a1 = radians(a1init)
    a2 = radians(a2init)
    for (i = 0; i < 33; i++) {
        x1 = cx + r * 0.5 * cos(a1)
        y1 = cy + r * 0.5 * sin(a1)
        x2 = cx + r * 0.5 * cos(a2)
        y2 = cy + r * 0.5 * sin(a2)
        line(x1, y1, x2, y2)
        a1 -= radians(4)
        a2 += radians(4)
    }
    a1 = radians(a1init + aoffset)
    a2 = radians(a2init + aoffset)
    for (i = 0; i < 33; i++) {
        x1 = cx + r * 0.5 * cos(a1)
        y1 = cy + r * 0.5 * sin(a1)
        x2 = cx + r * 0.5 * cos(a2)
        y2 = cy + r * 0.5 * sin(a2)
        line(x1, y1, x2, y2)
        a1 -= radians(4)
        a2 += radians(4)
    }
}

// stripes as arcs
function arcstripes(cx, cy, r) {
    var aoffset, nbstripes
    aoffset = Math.floor(random(9, 17))
    nbstripes = Math.floor(random(2, 6))
    a1 = radians(Math.floor(random(180, 220)))
    a2 = radians(Math.floor(random(250, 359)))
    for (i = 0; i < nbstripes; i++) {
        for (j = 0; j < 11; j++) {
            arc(cx, cy, r, r, a1, a2)
            r += penwidth
        }
        a1 += radians(aoffset)
        r += penwidth * 3
    }
    r -= penwidth * 3
    let x = cx+r*0.5*cos(a2)
    let y = cy+r*0.5*sin(a2)
    keys.push(createVector(x,y))
}

function sections(cx, cy, r) {
    var a1, a2, x1, y1, x2, y2, x3, y3, x4, y4
    //ellipse(cx,cy,r,r)
    a1 = radians(300)
    a2 = radians(404)
    arc(cx, cy, r, r, a1, a2)
    arc(cx, cy, r*0.2, r*0.2, a1, a2)
    while (a1 < a2) {
        x1 = cx + r * 0.5 * cos(a1)
        y1 = cy + r * 0.5 * sin(a1)
        x2 = cx + r * 0.5 * cos(a2)
        y2 = cy + r * 0.5 * sin(a2)
        x3 = cx + r * 0.1 * cos(a1)
        y3 = cy + r * 0.1 * sin(a1)
        x4 = cx + r * 0.1 * cos(a2)
        y4 = cy + r * 0.1 * sin(a2)
        line(x1, y1, x3, y3)
        a1+=radians(1)
    }
    keys.push(createVector(x1,y1))
}

function showkeys(){
    for(i=0;i<keys.length;i++){
        fill(200,100,100)
        ellipse(keys[i].x,keys[i].y,11,11)
    }
}