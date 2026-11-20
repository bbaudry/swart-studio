/**
 * Five different algorithms for cards plotted on A3
 * comment / uncomment the different variants in drawcards
 */

let w, h
var rightmargin, leftmargin, topmargin, bottommargin, actualwidth, actualheight
var cnv, imgbtn, font, gensvg
let xoff = 0.0
let xinc = 0.01

function preload() {
    font = loadFont("../p5-experiments/fonts/1CamBam_Stick_4.ttf");
}

function setup() {
    //A3
    w = Math.floor(96 * 297 / 25.4)//=1122.5
    h = Math.floor(96 * 420 / 25.4)//=1587.4
    rightmargin = w * 0.98
    leftmargin = w * 0.02
    topmargin = h * 0.02
    bottommargin = h * 0.98
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    getsvg()
    //getpng()
    textFont(font)
    textSize(10)
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    angleMode(DEGREES);
    noFill()
}

function getsvg() {
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    centerCanvas()
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
    gensvg=true
}

function getpng() {
    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    centerCanvas()
    placebtn();
    imgbtn.mouseClicked(savepng);
    gensvg=false
}



function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0//(windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}


function savesvg() {
    save("cartes.svg");
}

function savepng() {
    save("cartes.png");
}


let resx, resy
let cellside

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    resx = 3
    resy = 4
    cellside = Math.floor(96 * 95 / 25.4)
    //drawgrid()
    // drawcards(drawcard_nucleus)
    // drawcards(drawcard_vera)
    // drawcards(drawcard_vasarely)
    draw2colors(drawcard_curves)
    //drawback()
    // noLoop()
}

function drawgrid() {
    let x, y
    noFill()
    for (let i = 0; i < resx; i++) {
        for (let j = 0; j < resy; j++) {
            x = leftmargin + i * cellside
            y = topmargin + j * cellside
            rect(x, y, cellside, cellside)
        }
    }
}

/**
 * writes credits in the back of the card
 */
function drawback() {
    let x, y
    noFill()
    for (let i = 0; i < resx; i++) {
        for (let j = 0; j < resy; j++) {
            x = leftmargin + i * cellside
            y = topmargin + j * cellside
            push()
            translate(x, y)
            text("(code encre alea)", cellside * 0.2, cellside * 0.7)
            text("11.2026 :: al.my.re", cellside * 0.5, cellside * 0.8)
            pop()
        }
    }
}

/**
 * the function draws one gen piece in each cell of the grid
 * @param cardfunction: a function that draws inside a cellside x cellside square 
 */
async function drawcards(cardfunction) {
    noFill()
    for (let i = 0; i < resx; i++) {
        for (let j = 0; j < resy; j++) {
            const x = leftmargin + i * cellside
            const y = topmargin + j * cellside
            push()
            translate(x, y)
            let empreinte = cardfunction()
            pop()
            stroke(0, 0, 0)
            const h = await hashgenerativeparameters(empreinte)
            text(h.toUpperCase(), x + 9, y + cellside - 11)
        }
    }
}

let empreintes = []
/**
 * the function draws one gen piece in each cell of the grid
 * @param cardfunction: a function that draws inside a cellside x cellside square 
 */
async function draw2colors(cardfunction) {
    noFill()
    if (frameCount == 1) {
        for (let i = 0; i < resx; i++) {
            for (let j = 0; j < resy; j++) {
                const x = leftmargin + i * cellside
                const y = topmargin + j * cellside
                push()
                translate(x, y)
                let empreinte = cardfunction()
                pop()
                empreintes.push(empreinte)
            }
        }
                if (gensvg) { save("cartes-curves.svg") }

    }
    if (frameCount == 2) {
        noLoop()      
        finishBack()
    }
}

async function finishBack() {
    try {
        await drawhashes()
        if (gensvg) { save("cartes-hashes.svg") }
    } catch (e) {
        console.error("hashing failed:", e)
    }
}

async function drawhashes() {
    noFill()
    let x, y, h
    stroke(0, 0, 0);
    for (let i = 0; i < resx; i++) {
        for (let j = 0; j < resy; j++) {
            const x = leftmargin + i * cellside
            const y = topmargin + j * cellside
            h = await hashgenerativeparameters(empreintes[i * resy + j])
            text(h.toUpperCase(), x + 9, y + cellside - 11)
        }
    }
}



/**
 * remix trottoir003, in single line. draws a spiral instead of nested independent shapes
 * spirals are cool and single line is nice for the pen
 * @returns set of random numbers generated for the piece
 */

function drawcard_nucleus() {
    var apx1, apy1, apx2, apy2, cpx1, cpy1, cpx2, cpy2, x1, y1, x2, y2, x3, y3, x4, y4, amp, xpos1, xpos2, ypos1, ypos2, tours
    let pad = cellside * 0.09
    let arete = cellside - 2 * pad
    let empreinte = []
    xoff = random(100.0); empreinte.push(xoff)
    let yoff = random(100.0); empreinte.push(yoff)
    let yinc = 1
    push()
    translate(pad, pad)
    amp = 5
    xpos1 = noise(xoff); xoff += xinc; empreinte.push(xpos1)
    xpos2 = noise(xoff); xoff += xinc; empreinte.push(xpos2)
    ypos1 = noise(yoff); yoff += yinc; empreinte.push(ypos1)
    ypos2 = noise(yoff); yoff += yinc; empreinte.push(ypos2)
    tours = Math.floor(random(19, 42)); empreinte.push(tours)
    stroke(0, 0, 0)
    x1 = arete * xpos1; y1 = arete - amp * 0.5
    beginShape()
    apx1 = x1
    apy1 = y1
    vertex(apx1, apy1)
    for (i = 0; i < tours; i += 0.5) {
        x2 = i * amp; y2 = arete * ypos1
        x3 = arete * xpos2; y3 = i * amp;
        x4 = arete - i * amp; y4 = arete * ypos2

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

        /** main change for the spiral: increment these points before drawing the last vertex of the iteration */
        x1 = arete * xpos1;
        y1 = arete - (i + 1) * amp
        cpx1 = x4
        cpy1 = y1
        cpx2 = x1
        cpy2 = cpy1
        apx2 = cpx2
        apy2 = cpy1
        bezierVertex(cpx1, cpy1, cpx2, cpy2, apx2, apy2)
    }
    endShape()
    pop()
    return empreinte
}

/** 
 * curves, remixing plein-011. simplify the drawing for plotting: two separate sections (bottom-up, then top-down), each section is a single line
 * @returns an array of random numbers generated to draw the piece
 */
function drawcard_curves() {
    let pad = cellside * 0.07
    let arete = cellside - 2 * pad
    let empreinte = []
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, nextay, rayoninit, rayoninc, rayon, xoffinit, tinc, maxt
    tinc = 2//3
    maxt = 233//233
    rayoninc = 2//4
    rayoninit = Math.floor(random(42, 63))
    xoffinit = random(1000)
    xoff = xoffinit
    xinc = 0.02
    stroke(0, 100, 100)
    rayon = rayoninit
    push()
    translate(pad, pad)
    beginShape()
    nextay = lerp(arete, 0, 0.05)
    for (let t = 0; t < maxt; t += tinc * 2) {
        ax1 = 0; ay1 = nextay
        ax2 = arete; ay2 = nextay
        px1 = lerp(ax1, ax2, 0.25)
        py1 = lerp(ay1, ay2, 0.25) + rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        px2 = lerp(ax1, ax2, 0.75)
        py2 = lerp(ay1, ay2, 0.75) - rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
        nextay = lerp(arete, 0, 0.05) - (t + tinc)
        line(ax2, ay2, ax2, nextay)
        rayon += rayoninc
        ax1 = 0; ay1 = nextay
        ax2 = arete; ay2 = nextay
        px1 = lerp(ax1, ax2, 0.25)
        py1 = lerp(ay1, ay2, 0.25) + rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        px2 = lerp(ax1, ax2, 0.75)
        py2 = lerp(ay1, ay2, 0.75) - rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        bezier(ax2, ay2, px2, py2, px1, py1, ax1, ay1)
        nextay = lerp(arete, 0, 0.05) - t - (tinc * 2)
        line(ax1, ay1, ax1, nextay)
        rayon += rayoninc
    }
    endShape()
    xoff = xoffinit
    rayon = rayoninit
    beginShape()
    nextay = lerp(0, arete, 0.05)
    for (let t = 0; t < maxt; t += tinc * 2) {
        ax1 = 0; ay1 = nextay
        ax2 = arete; ay2 = nextay
        px1 = lerp(ax1, ax2, 0.25)
        py1 = lerp(ay1, ay2, 0.25) + rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        px2 = lerp(ax1, ax2, 0.75)
        py2 = lerp(ay1, ay2, 0.75) - rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
        nextay = lerp(0, arete, 0.05) + t + tinc
        line(ax2, ay2, ax2, nextay)
        rayon += rayoninc
        ax1 = 0; ay1 = nextay
        ax2 = arete; ay2 = nextay
        px1 = lerp(ax1, ax2, 0.25)
        py1 = lerp(ay1, ay2, 0.25) + rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        px2 = lerp(ax1, ax2, 0.75)
        py2 = lerp(ay1, ay2, 0.75) - rayon * sin(rayon * map(noise(xoff), 0.0, 1.0, 0.3, 1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        bezier(ax2, ay2, px2, py2, px1, py1, ax1, ay1)
        nextay = lerp(0, arete, 0.05) + t + tinc * 2
        line(ax1, ay1, ax1, nextay)
        rayon += rayoninc
    }
    endShape()
    pop()
    return empreinte
}

/** 
 * tribute to vasarely's op-art with distorted squares
 * @returns an array of random numbers generated to draw the piece
 */
function drawcard_vasarely() {
    let pad = cellside * 0.09
    let arete = cellside - 2 * pad
    let empreinte = []
    let res = Math.floor(random(7, 19)); empreinte.push(res)
    let step = arete / res
    let x, y, ynoise, noise_inc, xnoiseinit, cx, cy
    xnoiseinit = random(100.0)
    ynoise = random(100.0)
    noise_inc = 0.1
    push()
    translate(pad, pad)
    for (let j = 0; j < res; j++) {
        xnoise = xnoiseinit
        ynoise += noise_inc
        x = j * step
        cx = x + step * 0.5
        for (let i = 0; i < res; i++) {
            xnoise += noise_inc
            y = i * step
            cy = y + step * 0.5
            const v = noise(xnoise, ynoise); empreinte.push(v)
            quad(cx - step * v, cy - step * v, cx + step * v, cy - step * v, cx + step * v, cy + step * v, cx - step * v, cy + step * v,)
        }
    }
    pop()
    return empreinte
}

/** 
 * random red threads in the card. tribute to chiharu shiota
 * grid with randomly chosen resolution; central points of the cells are saved, shuffled and connected with a single continuous lines
 * @returns an array of random numbers generated to draw the piece
 */
function drawcard_chiharu() {
    let pad = cellside * 0.07
    let arete = cellside - 2 * pad
    let empreinte = []
    let res = Math.floor(random(3, 17)); empreinte.push(res)
    let step = arete / res
    let x, y, cx, cy, anchors, horizon
    anchors = []
    push()
    translate(pad, pad)
    random() < 0.5 ? horizon = true : horizon = false
    empreinte.push(horizon)
    for (let i = 0; i < res; i++) {
        if (horizon) {
            y = i * step
            cy = y + step / 2
        }
        else {
            x = i * step
            cx = x + step / 2
        }
        for (let j = 0; j < res; j++) {
            if (horizon) {
                x = j * step
                cx = x + step / 2
            }
            else {
                y = j * step
                cy = y + step / 2
            }
            anchors.push(createVector(cx, cy))
        }
    }
    // shuffle the points. rate controls the amount of shuffling, pass multiple times to account for the small variations of noise
    let randanchors = anchors
    let rate = Math.floor(random(3, 11)) * randanchors.length
    for (var i = rate; i > 0; i--) {
        var j = Math.floor(noise(xoff) * (randanchors.length)); xoff += xinc
        var k = Math.floor(noise(xoff) * (randanchors.length)); xoff += xinc
        empreinte.push(j)
        empreinte.push(k)
        var temp = randanchors[k];
        randanchors[k] = randanchors[j];
        randanchors[j] = temp;
    }
    // connect points with a single red line
    stroke(0, 100, 100)
    beginShape()
    for (let i = 0; i < anchors.length; i++) {
        vertex(randanchors[i].x, randanchors[i].y)
    }
    endShape()
    pop()
    return empreinte
}

/**
 * tribute to Vera Molnar. squares and randomness to rotate the squares and decide on their size
 * @returns an array of random numbers generated to draw the piece
 */
function drawcard_vera() {
    let pad = cellside * 0.07
    let arete = cellside - 2 * pad
    let res = 3
    let step = arete / res
    let empreinte = []
    let angle = Math.floor(random(5, 11)); empreinte.push(angle)
    let nbpasses = Math.floor(random(1, 9)); empreinte.push(nbpasses)
    let x, y, cx, cy, localstep, decalage
    push()
    translate(pad, pad)
    for (let i = 0; i < res; i++) {
        x = i * step
        cx = x + step / 2
        for (let j = 0; j < 3; j++) {
            y = j * step
            cy = y + step / 2
            for (let passes = 0; passes < nbpasses; passes++) {
                localstep = step * random(0.8, 1.0); empreinte.push(localstep)
                decalage = random(-angle, angle); empreinte.push(decalage)
                push()
                translate(cx, cy)
                rotate(decalage)
                rect(-localstep / 2, -localstep / 2, localstep, localstep)
                pop()
            }
        }
    }
    pop()
    return empreinte
}

/**
 * @param alea: an array of objects
 * @returns a hash of the array's content
 */
async function hashgenerativeparameters(alea) {
    var bruit = new Float64Array(1);
    var tout = 0.0
    for (i = 0; i < alea.length; i++) {//sum all random numbers used for the piece
        tout += alea[i]
    }
    bruit[0] = tout//pass the sum to the typedArray
    h = await window.crypto.subtle.digest("SHA-1", bruit)//hash the sum of all random numbers
    //console.log("raw "+h)
    const hashArray = Array.from(new Uint8Array(h)); // convert buffer to byte array
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(""); // convert bytes to hex string
    return hashHex
}

