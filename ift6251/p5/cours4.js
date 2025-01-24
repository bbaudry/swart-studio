function preload() {
    font = loadFont("./FreeMono.otf");
}
var w, h, cnv, stepsize, nbhorizontalsteps, nbvertcicalsteps, grid, font

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    stepsize = Math.floor(w * 0.02)
    nbhorizontalsteps = Math.floor(w / stepsize)
    nbvertcicalsteps = Math.floor(h / stepsize)
    // noLoop()
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    diag()
    noLoop()
}

function diag() {
    var black = true
    noFill()
    strokeWeight(2)
    for (var t = 0; t < 1; t += 0.008) {
        if (black) {
            stroke(30, 100, 100)
            black = false
        }
        else {
            stroke(210, 100, 100)
            black = true
        }
        x1 = (1 - t) * 0 + (t * w * 0.5);
        y1 = (1 - t) * 0 + (t * 0);
        x2 = (1 - t) * w * 0.5 + (t * w * 0.5);
        y2 = (1 - t) * 0 + (t * h * 0.5);
        line(x1, y1, x2, y2)
        x1 = (1 - t) * w + (t * w * 0.5);
        y1 = (1 - t) * 0 + (t * 0);
        x2 = (1 - t) * w * 0.5 + (t * w * 0.5);
        y2 = (1 - t) * 0 + (t * h * 0.5);
        line(x1, y1, x2, y2)
    }
    arc(0, h * 0.5, w, w, PI * 1.5, PI * 2)
    stroke(330,100,100)
    beginShape();
    vertex(0, 0);
    bezierVertex(w*0.5, 0, w*0.5, h*0.40, w*0.5, h*0.5);
    endShape();
    beginShape();
    vertex(0, 0);
    bezierVertex(w*0.5, 0, w*0.5, h*0.45, w*0.5, h*0.5);
    endShape();
}

function grid2() {
    grid = []
    var x, y, cx, cy, jardin, a, b, off
    alea = []
    lesBlocs = []
    cx = w * 0.5
    cy = h * 0.5
    jardin = 5
    jazz = floor(180 / jardin)
    a = 180
    for (var i = 0; i < jazz; i++) {
        off = random(-a / 90, a / 90); alea.push(off)
        x = cx + cos(radians(a)) * w * 0.5
        b = 270
        for (var j = 0; j < jazz; j++) {
            off = random(-b / 360, b / 360); alea.push(off)
            y = cy + sin(radians(b)) * h * 0.5
            grid.push(createVector(x, y))
            ellipse(x, y, 7, 7)
            b += jardin
        }
        a += jardin
    }

}
function initgrid1() {
    grid = []
    var yoff = 0.0
    var xoff
    var inc = 0.1
    var v, x, y
    for (j = 0; j < nbvertcicalsteps; j++) {
        yoff += inc
        xoff = 0.0
        for (i = 0; i < nbhorizontalsteps; i++) {
            x = i * stepsize
            y = j * stepsize
            xoff += inc
            v = noise(xoff, yoff)
            grid.push(v)
        }
    }
}

function asciigrid() {
    textFont(font)
    textSize(22)
    for (j = 0; j < nbvertcicalsteps; j++) {
        for (i = 0; i < nbhorizontalsteps; i++) {
            x = i * stepsize
            y = j * stepsize + stepsize
            stroke(0, 0, 0)
            fill(0, 0, 0)
            var v = Math.floor(grid[j * nbhorizontalsteps + i] * 12)
            //var v = Math.floor(random() * 12)
            switch (v) {
                case 0:
                    text("#", x, y)
                    break;
                case 1:
                    text(":", x, y)
                    break;
                case 2:
                    text("[", x, y)
                    break;
                case 3:
                    text("]", x, y)
                    break;
                case 4:
                    text("&", x, y)
                    break;
                case 5:
                    text("°", x, y)
                    break;
                case 6:
                    text("{", x, y)
                    break;
                case 7:
                    text("}", x, y)
                    break;
                case 8:
                    text("-", x, y)
                    break;
                case 9:
                    text("_", x, y)
                    break;
                case 9:
                    text("^", x, y)
                    break;
                case 9:
                    text("'", x, y)
                    break;

            }
        }
    }

}