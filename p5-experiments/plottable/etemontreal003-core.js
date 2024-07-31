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


function pei() {
    var x, y,cx,cy
    cx=leftmargin+actualwidth*0.5
    cy = topmargin + actualheight * 0.5

/*     for (var i = 0; i < 90; i += 5) {
        x = leftmargin + sin(radians(i)) * actualwidth * 0.5
        for (var j = 0; j < 90; j += 1) {
            y = topmargin + cos(radians(j)) * actualheight * 0.5
            ellipse(x, y, 2, 2)
            y = bottommargin - sin(radians(j+random(-2/(j+1),2/(j+1)))) * actualheight * 0.5
            ellipse(x, y, 2, 2)
        }
        x = rightmargin - sin(radians(i)) * actualwidth * 0.5
        for (var j = 0; j < 90; j += 10) {
            y = topmargin + cos(radians(j)) * actualheight * 0.5
            ellipse(x, y, 2, 2)
            y = bottommargin - sin(radians(j)) * actualheight * 0.5
            ellipse(x, y, 2, 2)
        }
    }
 */
    textFont(font)
    textSize(fSize)

    ellipse(cx,cy,7,7)
    ellipse(cx+actualwidth*0.5,cy,7,7)
    for(var a=180;a<360;a+=3){
        stroke(a,100,100)
        x=cx+cos(radians(a))*actualwidth*0.5
        line(x,cy-42,x,cy+42)
    }
}

var lesBlocs = []
var xoff = 0.0
var xinc = 0.001
function montreal() {
    lesBlocs = []
    var i, j, blocSud, blocOuest, cx, cy, grain
    grain = 11
    blocSud = floor((actualwidth * 0.5) / grain)
    blocOuest = floor((actualheight * 0.5) / grain)
    for (i = 0; i < grain; i++) {
        for (j = 0; j < grain; j++) {
            cx = leftmargin + i * (i / grain * blocSud)
            cy = topmargin + j * (j / grain * blocOuest)
            lesBlocs.push(createVector(cx, cy))
            cx = rightmargin - (i * blocSud)
            cy = topmargin + (j * blocOuest)
            lesBlocs.push(createVector(cx, cy))
            cx = rightmargin - (grain / i * blocSud)
            cy = bottommargin - (grain / j * blocOuest)
            //lesBlocs.push(createVector(cx, cy))
            cx = leftmargin + (grain / i * blocSud)
            cy = bottommargin - (grain / j * blocOuest)
            //lesBlocs.push(createVector(cx, cy))
        }
    }
    var offset = 2
    for (i = 0; i < lesBlocs.length - offset; i++) {
        if (i < lesBlocs.length - (grain * offset) && i % (grain * offset) != (grain - 1) * offset && i % (grain * offset) != grain * offset - 1) {
            quad(lesBlocs[i].x, lesBlocs[i].y,
                lesBlocs[i + offset * grain].x, lesBlocs[i + offset * grain].y,
                lesBlocs[i + offset * (grain + 1)].x, lesBlocs[i + offset * (grain + 1)].y,
                lesBlocs[i + offset].x, lesBlocs[i + offset].y)
        }
    }
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.1) { stroke(rarehu, 100, 100) }
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
