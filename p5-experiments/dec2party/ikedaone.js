var ikedacounter
var startone = 1
var endone = 42 * 4
var starttwo = endone + 42
var endtwo = starttwo + 42 * 8
var startthree = endtwo + 42
var endthree = startthree + 42 * 12
var startfour = endthree + 42
var endfour = startfour + 42 * 30
var startfive = endfour + 42
var endfive = startfive + 42 * 12
var column
var manycols
var xmoon
var largeurs

function setupikedaone() {
    column = []
    ikedacounter = 0
}

function drawikedaone() {
    background(0, 0, 0)
    if (ikedacounter >= startone && ikedacounter < endone) {
        oneblock()
    }
    if (ikedacounter >= starttwo && ikedacounter < endtwo) {
        onecolumn()
    }
    if (ikedacounter == startthree) { xmoon = 0 }
    if (ikedacounter >= startthree && ikedacounter < endthree) {
        ikedamoon()
    }
    if (ikedacounter == startfour) { initmulti() }
    if (ikedacounter >= startfour && ikedacounter < endfour) {
        multicolumn()
    }
    if (ikedacounter == startfive) { xmoon = 0 }
    if (ikedacounter >= startfive && ikedacounter < endfive) {
        ikedamoon()
    }


    ikedacounter++
}

function oneblock() {
    if (random() < 0.5) { fill(0, 0, 100) }
    else { fill(0, 0, 0) }
    rect(0.4 * w, 0.4 * h, 0.2 * w, 0.2 * h)
}

function onecolumn() {
    noStroke()
    column.push({ x1: 0.4 * w, x2: 0.6 * w, hblock: random(0.01) * h })
    var y = 0
    for (var i = 0; i < column.length; i++) {
        var b = column[i]
        if (random() < 0.5) { fill(0, 0, 100) }
        else { fill(0, 0, 0) }
        quad(b.x1, y, b.x2, y, b.x2, y + b.hblock, b.x1, y + b.hblock)
        if (y < h) { y += b.hblock }
        else { break; }
    }
}

function ikedamoon() {
    fill(0, 0, 100)
    stroke(0, 0, 100)
    ellipse(w / 2, h / 2, h, h)
    line(xmoon, h / 2, xmoon + 168, h / 2)
    xmoon += 3
}


function initmulti() {
    manycols = []
    largeurs = []
    largeurs.push(0)
    largeurs.push(0.1 * w)
    largeurs.push(0.15 * w)
    largeurs.push(0.3 * w)
    largeurs.push(0.4 * w)
    largeurs.push(0.6 * w)
    largeurs.push(0.7 * w)
    largeurs.push(0.85 * w)
    largeurs.push(0.9 * w)
    largeurs.push(w)
    for (var i = 0; i < largeurs.length; i++) {
        manycols.push([])
    }
}

function multicolumn() {
    noStroke()
    var onerow = []
    for (var i = 0; i < largeurs.length - 1; i++) {
        manycols[i].push({
            x1: largeurs[i],
            x2: largeurs[i + 1],
            hblock: random(0.01) * h
        })
    }
    manycols.push(onerow)
    var y = 0
    for (var j = 0; j < manycols.length; j++) {
        var acol = manycols[j]
        var y = 0
        for (var ryoji = 0; ryoji < acol.length; ryoji++) {
            var ablock = acol[ryoji]
            if (random() < 0.5) { fill(0, 0, 100) }
            else { fill(0, 0, 0) }
            quad(ablock.x1, y, ablock.x2, y, ablock.x2, y + ablock.hblock, ablock.x1, y + ablock.hblock)
            if (y < h) { y += ablock.hblock }
            else { break; }
        }
    }
}
