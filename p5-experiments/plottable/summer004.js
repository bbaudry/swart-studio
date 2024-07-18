function savesvg() {
    save("summer004.svg");
}

function savepng() {
    save("summer004.png");
}

var font
var fSize = 13
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer004.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    noFill()
    rows(leftmargin, topmargin, rightmargin, topmargin, rightmargin - random(60), bottommargin - random(60), leftmargin + random(90), bottommargin - random(70), 0)
    textFont(font)
    textSize(fSize)
    showcredits(leftmargin, bottommargin + fSize, "al.my.re :: p5.js :: CamBam Stick [summer 004). July 2024]")
    translate(wcd, hcd * 2 + scd)
    rotate(radians(180))
    showcode(leftmargin, topmargin + 2 * fSize)
    noLoop()
}

var xoff=0
var xinc=0.1
function rows(x1, y1, x2, y2, x3, y3, x4, y4, dep) {
    var ox1, oy1, dx1, dy1, ox2, oy2, dx2, dy2, t1, t2, d, off
    t1 = 0
    t2 = 0
    off = random(0.11,0.42)
    d = dep + 1
    while (t1 < 1 && t2 < 1) {
        ox1 = (1 - t1) * x1 + (t1 * x4)
        oy1 = (1 - t1) * y1 + (t1 * y4)
        dx1 = (1 - t2) * x2 + (t2 * x3)
        dy1 = (1 - t2) * y2 + (t2 * y3)
        line(ox1, oy1, dx1, dy1);
        t1 += noise(xoff) * off; xoff+=xinc
        t2 += noise(xoff) * off;xoff+=xinc
        if(t1>=1 || t2>=1){
            ox2 = x4
            oy2 = y4
            dx2 = x3
            dy2 = y3            
        }
        else{
            ox2 = (1 - t1) * x1 + (t1 * x4)
            oy2 = (1 - t1) * y1 + (t1 * y4)
            dx2 = (1 - t2) * x2 + (t2 * x3)
            dy2 = (1 - t2) * y2 + (t2 * y3)
        }
        if (d < 3 && random()<0.84) {
            rows(ox1, oy1, ox2, oy2, dx2, dy2, dx1, dy1, d)
        }
    }
    line(ox2,oy2,dx2,dy2)
}

var randomnumbers = []
function randstore(min, max) {
    var r = random(min, max);
    randomnumbers.push(r)
    return r
}


function showcredits(posx, posy, credits) {
    text(credits, posx, posy)
}