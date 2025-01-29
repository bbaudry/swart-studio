
var w, h, boites
var cnv

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(windowHeight, windowHeight);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
}


function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 0)
    noStroke()
    ellipse(w*0.5,h*0.5,100,100)
    ellipse(0,h*0.5,6,6)
    ellipse(w,h*0.5,6,6)
    ellipse(w*0.5,0,6,6)
    ellipse(w*0.5,h,6,6)
    beginShape();
    vertex(ox1, oy1);
    bezierVertex(
        dx1 + ecartx * i * offx, dy1, 
        dx2, dx2 * 1.2 + ecarty * i * offy, 
        dx2, dy2);
    endShape();
        rose()
    noLoop()
}

function rose(){

    ellipse(0,h*0.5,6,6)
}
