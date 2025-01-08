var w, h, cnv, i, maxi

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    i = 0
    maxi = 242
}

function draw() {
    background(0, 0, 0)
    withcolors()
}
let phase = 0;
let zoff = 0;
let grow = true
function withnoise() {
    translate(w / 2, h / 2);
    stroke(0, 0, 100);
    strokeWeight(2);
    fill(0,0,100)
    beginShape();
    let noiseMax = 0.1;
    for (let a = 0; a < TWO_PI; a += radians(7)) {
        let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
        let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
        let r = map(noise(xoff, yoff, zoff), 0, 1, 100, h * 0.6);
        let x = (r-i) * cos(a);
        let y = (r-i) * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    //phase += 0.003;
    if(grow && i<maxi){i+=4}
    else{grow=false; 
        if(i>0){i-=4}
        else{grow=true}
    }
//    zoff += 0.01;
}

let xoff=0.0

function withcolors() {
    stroke(0, 100, 100)
    fill(0, 100, 100, 100)
    translate(w * 0.5, h * 0.5)
//    rotate(radians(i))
    ellipse(0, 0, w * 0.5, h * noise(xoff))
    if (i > 30 && i < 330) {
        stroke(90, 100, 100)
        fill(90, 100, 100, 100)
        ellipse(0, 0, w * noise(xoff), h * 0.1)
    }
    if (i > 90 && i < 270) {
        stroke(180, 100, 100)
        fill(180, 100, 100, 100)
        ellipse(0, 0, w * noise(xoff), h * 0.7)
    }
    if (i > 150 && i < 210) {
        stroke(270, 100, 100)
        fill(270, 100, 100, 100)
        ellipse(0, 0, w * noise(xoff), h * noise(xoff))
    }
    xoff = map(cos(radians(i)), -1, 1, 0, 1);
    i += 2
    if (i % 360 == 0) { i = 0; }
}