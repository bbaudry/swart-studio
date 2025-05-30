function savesvg() {
    save("summer004.svg");
}

function savepng() {
    save("summer004.png");
}

var font
var fSize = 13
var xoff=0
var xinc=0.1
var alea=[]
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer004.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    noFill()
    var droite=random(60); alea.push(droite)
    var bottom1=random(60); alea.push(bottom1)
    var bottom2=random(90); alea.push(bottom2)
    var gauche=random(70); alea.push(gauche)
    rows(leftmargin, topmargin, rightmargin, topmargin, rightmargin - droite, bottommargin - bottom1, leftmargin + bottom2, bottommargin - gauche, 0)
    textFont(font)
    textSize(fSize)
    gentle(alea).then((h) => {
        showcredits(leftmargin, bottommargin + fSize,  "[" + h.toUpperCase() + "]", "al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ gcode ~ juicy ~ "+alea.length+" random numbers)")
        translate(wcd, hcd * 2 + scd)
        rotate(radians(180))
        showcode(leftmargin, topmargin + 5 * fSize)
        })    
    noLoop()
}

function rows(x1, y1, x2, y2, x3, y3, x4, y4, dep) {
    var ox1, oy1, dx1, dy1, ox2, oy2, dx2, dy2, t1, t2, d, off
    t1 = 0
    t2 = 0
    off = 0.1+noise(xoff) * 0.21; xoff+=xinc ; alea.push(off)//random(0.11,0.42)
    d = dep + 1
    while (t1 < 1 && t2 < 1) {
        ox1 = (1 - t1) * x1 + (t1 * x4)
        oy1 = (1 - t1) * y1 + (t1 * y4)
        dx1 = (1 - t2) * x2 + (t2 * x3)
        dy1 = (1 - t2) * y2 + (t2 * y3)
        line(ox1, oy1, dx1, dy1);
        t1 += noise(xoff) * off; xoff+=xinc;alea.push(t1)
        t2 += noise(xoff) * off;xoff+=xinc;alea.push(t2)
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

