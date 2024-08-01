var mainhu = 0
var rarehu = 270

function cartepostale(x, y) {
    noFill()
    setmargins(x, y)
    alea = []
    stroke(mainhu, 0, 100)
    //montreal()
    pei()
    rect(x, y, wpostcard, hpostcard)
    signature()
}


var lesBlocs = []
function pei() {
    var x, y, cx, cy, count, density
    lesBlocs = []
    cx = leftmargin + actualwidth * 0.5
    cy = topmargin + actualheight * 0.5
    density=floor(random(7,11))
    for (var a = 180; a < 360; a += density) {
        x = cx + cos(radians(a + random(-a / 90, a / 90))) * actualwidth * 0.5
        count = 0
        for (var b = 270; b < 450; b += density) {
            y = cy + sin(radians(b + random(-b / 360, b / 360))) * actualheight * 0.5
            //ellipse(x, y, 3, 3)
            lesBlocs.push(createVector(x, y))
            count++
        }
    }
    for (i = 0; i < lesBlocs.length; i++) {
        if (i < lesBlocs.length - count && i % count != count - 1 && random()<0.42) {
            if (random() < 0.1) {
                colorie(lesBlocs[i].x, lesBlocs[i].y,
                    lesBlocs[i + count].x, lesBlocs[i + count].y,
                    lesBlocs[i + count + 1].x, lesBlocs[i + count + 1].y,
                    lesBlocs[i + 1].x, lesBlocs[i + 1].y)
            }
            else{
                quad(lesBlocs[i].x, lesBlocs[i].y,
                    lesBlocs[i + count].x, lesBlocs[i + count].y,
                    lesBlocs[i + count + 1].x, lesBlocs[i + count + 1].y,
                    lesBlocs[i + 1].x, lesBlocs[i + 1].y)    
            }
        }
    }
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.42) { stroke(rarehu, 100, 100) }
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    for (var t1 = 0; t1 < 1; t1 += 0.1) {
        ox = (1 - t1) * x1 + (t1 * x2)
        oy = (1 - t1) * y1 + (t1 * y2)
        dx = (1 - t1) * x4 + (t1 * x3)
        dy = (1 - t1) * y4 + (t1 * y3)
        line(ox, oy, dx, dy)
    }
    pop()
}


function signature() {
    var title = "~ été à montréal #2  ~"
    var credits = "al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ vpype ~ juicy ~ gcode ~ " + alea.length + " random numbers)"
    textFont(font)
    textSize(fSize)
    push()
    translate(rightmargin, bottommargin);
    rotate(radians(270))
    showcredits(0, fSize, title, credits)
    pop()
}
