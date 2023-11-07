
var w, h
var cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
}

function centerCanvas() {
    var x = (windowWidth - 800) / 2;
    var y = (windowHeight - 800) / 2;
    cnv.position(x, y);
}

function draw() {
    //background(0, 0, 0)
    noStroke();
    strokeWeight(1)
    fill(0, 0, 0)
    var cx = w / 2
    var cy = h / 2
    var r = 20
    var density = w/40
    var step = w/4
    for (cx=step/2;cx<w;cx+=step){
        for (cy=step/2;cy<h;cy+=step){
            for (let off = w/8; off > 0; off -= density) {
                if (off % (density * 2) == 0) { fill(0, 0, 0) }
                else { fill(50, 100, 100) }
                quad(cx - (random(off - r, off + r)), cy - (random(off - r, off + r)),
                    cx + (random(off - r, off + r)), cy - (random(off - r, off + r)),
                    cx + (random(off - r, off + r)), cy + off,
                    cx - (random(off - r, off + r)), cy + (random(off - r, off + r)))
            }        
        }
    }

    noLoop()
}