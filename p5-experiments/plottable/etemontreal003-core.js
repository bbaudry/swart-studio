
function cartepostale(x, y) {
    setmargins(x, y)
    montreal()
    ete()
    signature()
}

var jazz
function montreal() {
    var x, y, sherbrooke, stlaurent, jardin, a, b, off
    alea = []
    lesBlocs = []
    sherbrooke = leftmargin + actualwidth * 0.5
    stlaurent = topmargin + actualheight * 0.5
    jardin=floor(random(5,11))
    jazz =floor(180/jardin)
    a = 180
    for (var i = 0; i < jazz; i++) {
        off=random(-a / 90, a / 90); alea.push(off)
        x = sherbrooke + cos(radians(a + off)) * actualwidth * 0.5
        b = 270
        for (var j = 0; j < jazz; j++) {
            off=random(-b / 360, b / 360); alea.push(off)
            y = stlaurent + sin(radians(b + off)) * actualheight * 0.5
            lesBlocs.push(createVector(x, y))
            b += jardin
        }
        a+=jardin
    }
}
function ete(){    
    for (i = 0; i < lesBlocs.length; i++) {
        if (i < lesBlocs.length - jazz && i % jazz != jazz - 1 && random()<0.42) {
            if (random() < 0.17) {
                colorie(lesBlocs[i].x, lesBlocs[i].y,
                    lesBlocs[i + jazz].x, lesBlocs[i + jazz].y,
                    lesBlocs[i + jazz + 1].x, lesBlocs[i + jazz + 1].y,
                    lesBlocs[i + 1].x, lesBlocs[i + 1].y)
            }
            else{
                quad(lesBlocs[i].x, lesBlocs[i].y,
                    lesBlocs[i + jazz].x, lesBlocs[i + jazz].y,
                    lesBlocs[i + jazz + 1].x, lesBlocs[i + jazz + 1].y,
                    lesBlocs[i + 1].x, lesBlocs[i + 1].y)    
            }
        }
    }
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.42) { stroke(0, 100, 100) }
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    for (var t1 = 0; t1 < 1; t1 += 0.02) {
        ox = (1 - t1) * x1 + (t1 * x2)
        oy = (1 - t1) * y1 + (t1 * y2)
        dx = (1 - t1) * x4 + (t1 * x3)
        dy = (1 - t1) * y4 + (t1 * y3)
        line(ox, oy, dx, dy)
    }
    pop()
}