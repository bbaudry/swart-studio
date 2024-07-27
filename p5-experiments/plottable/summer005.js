function savesvg() {
    save("summer005.svg");
}

function savepng() {
    save("summer005.png");
}

var font
var fSize = 12
var alea = []
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer005.js');
}

function draw() {
    background(0, 0, 100)
    drawpostcard(globalmargin, globalmargin)
    drawpostcard(globalmargin + wpostcard, globalmargin)
    drawpostcard(globalmargin, globalmargin + hpostcard)
    drawpostcard(globalmargin + wpostcard, globalmargin + hpostcard)
    noLoop()
}

function drawpostcard(x, y) {
    noFill()
    setmargins(x, y)
    onepiece()
    rect(x, y, wpostcard, hpostcard)
    sign()
}
function onepiece() {
    alea = []
    punch4()
}

function punch() {
    stroke(0, 0, 0)
    var xoff, yoff, i, j, yinc
    yinc = 1 + random()
    xoff = floor(actualwidth * 0.01)
    i = leftmargin
    while (i < rightmargin - xoff) {
        j = bottommargin
        yoff = floor(actualheight * 0.001)
        while (j > topmargin - yoff) {
            var black = random(); alea.push(black)
            if (black < 0.21) {
                colorie(i, j, i + xoff, j, i + xoff, j + yoff, i, j + yoff)
            }
            else {
                var bound = random(); alea.push(bound)
                if (bound > 0.42) {
                    line(i + xoff, j, i, j + yoff)
                }
                if (bound < 0.1) {
                    colorie(i, j, i + xoff, j, i, j + yoff, i - xoff, j + yoff)
                }
            }
            yoff++;
            j -= yoff
        }
        xoff++
        i += xoff
    }
}

var offset = 0.0
var xinc = 0.01
function punch2() {
    stroke(0, 0, 0)
    var xoff, yoff, i, j, plein
    xoff = floor(actualwidth * 0.01)
    i = leftmargin
    while (i < rightmargin - xoff) {
        j = bottommargin
        yoff = noise(offset) * 11; offset += xinc; alea.push(yoff)
        while (j > topmargin - yoff) {
            plein = random(); alea.push(plein)
            if (plein < 0.11) {
                colorie(i, j, i + xoff, j, i + xoff, j + yoff, i, j + yoff)
            }
            else {
                var bound = random(); alea.push(bound)
                if (bound > 0.42) {
                    line(i, j, i, j + yoff)
                }
                else {
                    line(i + xoff, j, i, j + yoff)
                }
            }
            j -= yoff
            yoff = noise(offset) * 11; offset += xinc; alea.push(yoff)
        }
        xoff++
        i += xoff
    }
}

function punch3() {
    var ox1, oy1, dx1, dy1, ox2, oy2, dx2, dy2, t1
    for (t1 = 0; t1 < 1; t1 += 0.05) {
        ox1 = leftmargin
        oy1 = bottommargin
        dx1 = rightmargin
        dy1 = (1 - t1) * bottommargin + (t1 * topmargin)
        ox2 = leftmargin
        oy2 = bottommargin
        dx2 = rightmargin
        dy2 = (1 - (t1+0.05)) * bottommargin + ((t1+0.05) * topmargin)
        section(ox1,oy1,dx1,dy1,dx2,dy2)
    }
    for (t1 = 0; t1 < 1; t1 += 0.05) {
        ox1 = leftmargin
        oy1 = bottommargin
        dx1 = (1 - t1) * leftmargin + (t1 * rightmargin)
        dy1 = topmargin
        ox2 = leftmargin
        oy2 = bottommargin
        dx2 = (1 - (t1+0.05)) * leftmargin + ((t1+0.05) * rightmargin)
        dy2 = topmargin
        section(ox1,oy1,dx1,dy1,dx2,dy2)
    }
    ellipse(rightmargin,topmargin,7,7)
}

function section(x1, y1, x2, y2, x3, y3){
    var ox1, oy1, dx1, dy1, ox2, oy2, dx2, dy2, t1, step
    step=0.01
    for (t1 = 0; t1 < 1; t1 += step) {
        ox1 = (1 - t1) * x1 + (t1 * x2)
        oy1 = (1 - t1) * y1 + (t1 * y2)
        dx1 = (1 - t1) * x1 + (t1 * x3)
        dy1 = (1 - t1) * y1 + (t1 * y3)
        if(random()<0.42){line(ox1,oy1,dx1,dy1)}
        ox2 = (1 - (t1-step)) * x1 + ((t1-step) * x2)
        oy2 = (1 - (t1-step)) * y1 + ((t1-step) * y2)
        dx2 = (1 - (t1-step)) * x1 + ((t1-step) * x3)
        dy2 = (1 - (t1-step)) * y1 + ((t1-step) * y3)
        if(random()<0.2){colorie(dx2,dy2,dx1,dy1,ox1,oy1,ox2,oy2)}
    }
    for (t1 = 0; t1 < 1; t1 += step) {
        ox1 = (1 - t1) * x1 + (t1 * x2)
        oy1 = (1 - t1) * y1 + (t1 * y2)
        dx1 = (1 - (t1+step)) * x1 + ((t1+step) * x2)
        dy1 = (1 - (t1+step)) * y1 + ((t1+step) * y2)
        if(random()>0.42){line(ox1,oy1,dx1,dy1)}
    }
}


var noff=42
var ninc=0.001
function punch4(){
    var x1=leftmargin
    var x2=leftmargin
    var y2=topmargin
    var step=1
    while(x1<rightmargin){
        ocean(x2,bottommargin,x1,y2)
        x1+=random(2,9)
        x2+=2
        y2+=2
        step+=random()
    }
    var cx=leftmargin+actualwidth*0.5
    var cy=topmargin+actualheight*0.5

}

function ocean(x1, y1, x2, y2){
    var ox1, oy1, cpx1,cpy1,cpx2,cpy2,t1, step
    var ratio1=0.5
    var ratio2=0.5
    step=0.2
    beginShape()
    ox1=x1
    oy1=y1
    vertex(x1,y1)
    for (var t1 = step; t1 < 1+step; t1 += step) {
        dx1 = (1 - t1) * x1 + (t1 * x2)
        dy1 = (1 - t1) * y1 + (t1 * y2)
        cpx1 = ((1 - ratio1) * ox1 + (ratio1 * dx1))-21//+random(-42,84)
        cpy1 = ((1 - ratio1) * oy1 + (ratio1 * dy1))
        cpx2 = ((1 - ratio2) * ox1 + (ratio2 * dx1))+21//+random(-42,84)
        cpy2 = ((1 - ratio2) * oy1 + (ratio2 * dy1))
        bezierVertex(cpx1,cpy1,cpx2,cpy2,dx1, dy1)
        ox1 = dx1
        oy1 = dy1
    }
    endShape()
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.1) { stroke(0, 100, 100) }
    for (var t1 = 0; t1 < 1; t1 += 0.03) {
        ox = (1 - t1) * x1 + (t1 * x2)
        oy = (1 - t1) * y1 + (t1 * y2)
        dx = (1 - t1) * x4 + (t1 * x3)
        dy = (1 - t1) * y4 + (t1 * y3)
        line(ox, oy, dx, dy)
    }
    pop()
}


function sign() {
    var title = "[summer005]"
    var credits = "al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ gcode ~ juicy ~ " + alea.length + " random numbers)"
    textFont(font)
    textSize(fSize)
    push()
    translate(rightmargin, bottommargin);
    rotate(radians(270))
    showcredits(0, fSize, title, credits)
    pop()
}
