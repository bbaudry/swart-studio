var w, h, cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
}

function draw() {
    background(0, 0, 0)
    var cx = w*0.5
    var cy = h*0.5
    fill(50,100,100)
    ellipse(cx,cy,w*0.91,h*0.91)
    noStroke()
    fill(0,0,100)
    var corner = Math.floor(random(42,333))
    rect(corner,corner,w*0.3,h*0.3)
    noLoop()
}
