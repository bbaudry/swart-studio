var w, h, cnv, font, black, sections, nbsectionshorizontal, nbsectionsvertical, sectionw, sectionh



function preload() {
    font = loadFont("./FreeMono.otf");
}

function setup() {
    w = Math.floor(windowWidth * 0.95)
    h = Math.floor(w / 5.48)
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    nbsectionshorizontal = 6
    nbsectionsvertical = 3
    sectionw = Math.floor(w / nbsectionshorizontal)
    sectionh = Math.floor(h / nbsectionsvertical)
    initsections()
    sections=shuffle(sections)
}

function initsections() {
    sections = []
    var x1, y1, x2, y2, x3, y3, x4, y4
    for (var i = 0; i < nbsectionshorizontal; i++) {
        for (var j = 0; j < nbsectionsvertical; j++) {
            if (i == 0) {
                y4 = random(sectionh * 0.1, sectionh * 0.9)
            }
            else {
                y4 = sections[(i - 1) * nbsectionsvertical + j].y2
            }
            if (j == 0) {
                x1 = random(sectionw * 0.1, sectionw * 0.9)
            }
            else {
                x1 = sections[i * nbsectionsvertical + (j - 1)].x3
            }
            var s = {
                x: i * sectionw,
                y: j * sectionh,
                x1: x1,
                y1: 0,
                x2: sectionw,
                y2: random(sectionh * 0.1, sectionh * 0.9),
                x3: random(sectionw * 0.1, sectionw * 0.9),
                y3: sectionh,
                x4: 0,
                y4: y4
            }
            sections.push(s)
        }
    }
}

var indexleft = 0

function draw() {
    if (frameCount % 30 == 0 && indexleft < sections.length) {
        var s = sections[indexleft]
        var dice = Math.floor(random(3))
        switch (dice) {
            case 0:
                tile001(s)
                break;
            case 1:
                tile002(s)
                break;
                case 2:
                    tile003(s)
                    break;
            }
        indexleft++
    }
}

function tile001(s) {
    push()
    translate(s.x, s.y)
    noStroke()
    fill(0, 100, 100)
    quad(s.x1, s.y1, s.x2, s.y2, s.x3, s.y3, s.x4, s.y4)
    pop()
}

function tile002(s) {
    var x1, y1, x2, y2
    push()
    translate(s.x, s.y)
    stroke(0, 0, 100)
    var inc = random([0.01, 0.02, 0.05, 0.1, 0.15, 0.2])
    for (var t = 0; t < 1; t += inc) {
        x1 = (1 - t) * s.x1 + (t * sectionw);
        y1 = s.y1
        x2 = (1 - t) * s.x3 + (t * 0);
        y2 = s.y3
        line(x1, y1, x2, y2)
    }
    for (var t = 0; t < 1; t += inc) {
        x1 = (1 - t) * s.x1 + (t * 0);
        y1 = s.y1
        x2 = (1 - t) * s.x3 + (t * sectionw);
        y2 = s.y3
        line(x1, y1, x2, y2)
    }
    for (var t = 0; t < 1; t += inc) {
        x1 = sectionw;
        y1 = (1 - t) * s.y2 + (t * sectionh)
        x2 = 0
        y2 = (1 - t) * s.y4 + (t * 0)
        line(x1, y1, x2, y2)
    }
    for (var t = 0; t < 1; t += inc) {
        x1 = sectionw;
        y1 = (1 - t) * s.y2 + (t * 0)
        x2 = 0
        y2 = (1 - t) * s.y4 + (t * sectionh)
        line(x1, y1, x2, y2)
    }
    pop()
}

function tile003(s){
    noFill()
    stroke(100,100,100)
    push()
    translate(s.x, s.y)
    quad(s.x1, s.y1, s.x2, s.y2, s.x3, s.y3, s.x4, s.y4)

    var apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2, x1, y1, x2, y2, x3, y3, x4, y4, amp, xpos1, xpos2, ypos1, ypos2, xpos3, ypos3, xpos4, ypos4
    amp=3
    tours=Math.floor(random(21,42))
    xpos1 = s.x1; ypos1 = s.y1
    xpos2 = leftmargin ; ypos2 = topmargin + actualheight * random()
    xpos3 = leftmargin + actualwidth * random(); ypos3 = topmargin
    xpos4 = rightmargin; ypos4 = topmargin + actualheight * random()

    for (var t = 1; t > 0.6; t-=0.003) {
        x1 = (1 - t) * xpos1 + (t * xpos3); y1 = (1 - t) * ypos1 + (t * ypos3)
        x2 = (1 - t) * xpos2 + (t * xpos4); y2 = (1 - t) * ypos2 + (t * ypos4)
        x3 = (1 - t) * xpos3 + (t * xpos1); y3 = (1 - t) * ypos3 + (t * ypos1)
        x4 = (1 - t) * xpos4 + (t * xpos2); y4 = (1 - t) * ypos4 + (t * ypos2)
        beginShape()
        apx1 = x1
        apy1 = y1
        vertex(apx1, apy1)

        cpx1 = x2
        cpy1 = y1
        cpx2 = cpx1
        cpy2 = y2
        apx2 = cpx1
        apy2 = cpy2
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x2
        cpy1 = y3
        cpx2 = x3
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x4
        cpy1 = y3
        cpx2 = cpx1
        cpy2 = y4
        apx2 = cpx1
        apy2 = cpy2
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)

        cpx1 = x4+random(84)
        cpy1 = y1
        cpx2 = x1
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)
        noStroke()
        //stroke(0, 0, 100);
        endShape(CLOSE)
    }
    pop()

}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}
