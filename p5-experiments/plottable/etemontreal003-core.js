
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
    jardin=floor(random(7,11))
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
            if (random() < 0.21) {
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

