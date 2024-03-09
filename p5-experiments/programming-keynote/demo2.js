var coords
var neoncounter

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
    initCoords()
    neoncounter = 0
}


function initCoords() {
    coords = []
    for (let i = 0; i < 7; i++) {
        onepoint = [];
        let col = 180 + i * 21; onepoint.push(col);
        let cx = 0.5 * w; onepoint.push(cx);
        let cy = 0.5 * h; onepoint.push(cy);
        let rad = (0.05 * w + random() * 0.4 * w); onepoint.push(rad);
        let nb = 2 + 2 * Math.floor(random(4)); onepoint.push(nb);
        coords.push(onepoint);
    }
}

function draw() {
    noFill();
    strokeWeight(0.5)
    for (let i = 0; i < coords.length; i++) {
        stroke(coords[i][0], 100, 100, 42);
        let black = Math.floor(coords[i][4]);
        oneLayerCompact(black, coords[i][1], coords[i][2], coords[i][3]);
    }
    neoncounter++
}


function oneLayerCompact(nbRays, cx, cy, rad) {
    let angle = 360 / nbRays;
    let px, py, px1, py1, cpx1, cpy1, cpx2, cpy2;
    controls = [];
    beginShape();
    px = cx + rad * cos(radians(0));
    py = cy + rad * sin(radians(0));
    vertex(px, py);
    controls = drawTang(0, cx, cy, rad);
    cpx2 = controls[2];
    cpy2 = controls[3];
    for (let i = 1; i <= nbRays; i++) {
        px1 = cx + rad * cos(radians(angle * i));
        py1 = cy + rad * sin(radians(angle * i));
        controls = drawTang(angle * i, cx, cy, rad);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
        cpx2 = controls[2];
        cpy2 = controls[3];
    }
    controls = drawTang(0, cx, cy, rad);
    cpx1 = controls[0];
    cpy1 = controls[1];
    endShape();
}

function drawTang(deg, cx, cy, rad) {
    let tx = cx + rad * cos(radians(deg));
    let ty = cy + rad * sin(radians(deg));
    let wid = (float)(168 + neoncounter * 0.1);
    let ang = 90 - neoncounter / 10;
    let dx1 = tx + wid * cos(radians(deg - ang));
    let dy1 = ty + wid * sin(radians(deg - ang));
    let dx2 = tx + wid * cos(radians(deg - ang + 180));
    let dy2 = ty + wid * sin(radians(deg - ang + 180));
    res = [dx1, dy1, dx2, dy2];
    return res;
}
