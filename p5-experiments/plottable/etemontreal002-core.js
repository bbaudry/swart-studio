var mainhu = 0
var rarehu = 270

function cartepostale(x, y) {
    noFill()
    setmargins(x, y)
    alea = []
    stroke(mainhu, 100, 100)
    montreal()
    rect(x, y, wpostcard, hpostcard)
    signature()
}

var lesBlocs = []
var xoff = 0.0
var xinc = 0.001
function montreal() {
    lesBlocs = []
    var i, j, blocSud, blocOuest, cx, cy, grain
    grain = 21
    blocSud = floor(actualwidth / grain)
    blocOuest = floor(actualheight / grain)
    for (i = 0; i < grain; i++) {
        for (j = 0; j < grain; j++) {
            cx = leftmargin + (i * blocSud) + noise(xoff) * blocSud; alea.push(cx); xoff += xinc
            cy = topmargin + (j * blocOuest) + noise(xoff) * blocOuest; alea.push(cy); xoff += xinc
            lesBlocs.push(createVector(cx, cy))
            
        }
        xinc+=0.5
    }
    for (i = 0; i < lesBlocs.length - 1; i++) {
        if (i < lesBlocs.length - grain && i % grain != grain - 1 && random() < 0.42) {
            if (random() < 0.21) {
                colorie(lesBlocs[i].x, lesBlocs[i].y,
                    lesBlocs[i + grain].x, lesBlocs[i + grain].y,
                    lesBlocs[i + grain + 1].x, lesBlocs[i + grain + 1].y,
                    lesBlocs[i + 1].x, lesBlocs[i + 1].y)
            }
            else{
                quad(lesBlocs[i].x, lesBlocs[i].y,
                    lesBlocs[i + grain].x, lesBlocs[i + grain].y,
                    lesBlocs[i + grain + 1].x, lesBlocs[i + grain + 1].y,
                    lesBlocs[i + 1].x, lesBlocs[i + 1].y)    
            }
        }
    }
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.1) { stroke(rarehu, 100, 100) }
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    for (var t1 = 0; t1 < 1; t1 += 0.25) {
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
