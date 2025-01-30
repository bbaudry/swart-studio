
var w, h
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
        rose()
    noLoop()
}

function rose(){
    noStroke()
    fill(330,100,100)
    ellipse(0,h*0.5,6,6)
    ellipse(w,h*0.5,6,6)
    ellipse(w*0.5,0,6,6)
    ellipse(w*0.5,h,6,6)
    var px1,py1,px2,py2,px3,py3,px4,py4
    px1 = 0; py1 = h*0.5
    px2 = w*0.5; py2 = 0
    px3 = w; py3 = h*0.5
    px4 = w*0.5; py4 = h
    beginShape();
    vertex(px1, py1);
    bezierVertex(px1, py2,px1,py4,px2,py2);
    endShape();

}
