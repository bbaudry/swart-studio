let w, h
var rightmargin, leftmargin, topmargin, bottommargin, actualwidth, actualheight
var cnv, imgbtn, font
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
}

function getpng() {
    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    centerCanvas()
    placebtn();
    imgbtn.mouseClicked(savepng);
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
    drawgrid()
    drawcards()
    noLoop()
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

async function drawcards() {
    noFill()
    for (let i = 0; i < resx; i++) {
        for (let j = 0; j < resy; j++) {
            const x = leftmargin + i * cellside
            const y = topmargin + j * cellside
            push()
            translate(x, y)
            //let empreinte = drawcard_vera()
            //let empreinte = drawcard_chiharu()
            //let empreinte = drawcard_curves()
            let empreinte = drawcard_vasarely()
            //let empreinte = drawcard_boxes()
            pop()
            stroke(0, 0, 0)
            const h = await hashgenerativeparameters(empreinte)
            text(h.toUpperCase(), x + 9, y + cellside - 7)
        }
    }
}

/** 
 * remix plottable017
 * @returns an array of random numbers generated to draw the piece
 */
function drawcard_boxes() {
    let pad = cellside * 0.09
    let arete = cellside - 2 * pad
    let empreinte = []
    let res = Math.floor(random(2, 5)); empreinte.push(res)
    let step = arete / res
    let x1, y1, x2, y2
    push()
    translate(pad, pad)
    x1 = 0
    for (let i = 0; i < res-1; i++) {
        x2 = x1+step* random(0.8,1.2)
        y1 = 0
        for (let j = 0; j < res; j++) {
            y1=j*step
            quad(x1,y1,x2,y1,x2,y1+step,x1,y1+step)
        }
        x1=x2
    }
    pop()
    return empreinte
}


/** 
 * curves, remixing plein-011
 * @returns an array of random numbers generated to draw the piece
 */
function drawcard_curves() {
    let pad = cellside * 0.07
    let arete = cellside - 2 * pad
    let empreinte = []
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, rayon, xoffinit
    stroke(330, 100, 100)
    xoffinit=random(1000)
    xoff=xoffinit
    rayon = 0
    push()
    translate(pad, pad)
    for (let t = 0; t < 233; t += 3) {
        ax1 = 0; ay1 = lerp(arete, 0, 0.05) - t
        ax2 = arete; ay2 = lerp(arete, 0, 0.05) - t
        px1 = lerp(ax1, ax2, 0.25)
        py1 = lerp(ay1, ay2, 0.25) + rayon * sin(rayon * map(noise(xoff),0.0,1.0,0.3,1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        px2 = lerp(ax1, ax2, 0.75)
        py2 = lerp(ay1, ay2, 0.75) - rayon * sin(rayon * map(noise(xoff),0.0,1.0,0.3,1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
        rayon += 4
    }
    xoff=xoffinit
    rayon=0
    for (let t = 0; t < 233; t += 3) {
        ax1 = 0; ay1 = lerp(0, arete, 0.05) + t
        ax2 = arete; ay2 = lerp(0, arete, 0.05) + t
        px1 = lerp(ax1, ax2, 0.25)
        py1 = lerp(ay1, ay2, 0.25) + rayon * sin(rayon * map(noise(xoff),0.0,1.0,0.3,1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        px2 = lerp(ax1, ax2, 0.75)
        py2 = lerp(ay1, ay2, 0.75) - rayon * sin(rayon * map(noise(xoff),0.0,1.0,0.3,1.0)); empreinte.push(rayon * noise(xoff)); xoff += xinc
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
        rayon += 4
    }

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
    let res = Math.floor(random(9, 17)); empreinte.push(res)
    let step = arete / res
    let x, y, xnoise, ynoise, noise_inc, xnoiseinit, cx, cy
    xnoiseinit = random(100.0)
    ynoise = random(100.0)
    noise_inc = 0.15
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

