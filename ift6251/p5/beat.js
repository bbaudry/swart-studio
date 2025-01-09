var w, h, cnv, i, maxi, step

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    i=0
    maxi=242
    step=4
}

function draw() {
    background(0, 0, 0)
    withnoise()
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
    let noiseMax = 1;
    for (let a = 0; a < TWO_PI; a += radians(7)) {
        let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
        let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
        let r = map(noise(xoff, yoff, zoff), 0, 1, 100, h * 0.6);
        let x = (r-i) * cos(a);
        let y = (r-i) * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    phase += 0.003;
    if(grow && i<maxi){i+=step}
    else{grow=false; 
        if(i>0){i-=step}
        else{grow=true}
    }
    zoff += 0.01;
}
