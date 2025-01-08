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
    translate(w * 0.5, h * 0.5)
    noStroke()
    fill(0, 0,100, 199)
    rect(-w * 0.25, -h * noise(xoff)*0.5, w * 0.5, h * noise(xoff))
    if (i > 30 && i < 330) {
        rect(-w * noise(xoff) * 0.5, -h * 0.1, w * noise(xoff), h * 0.2)
    }
    if (i > 90 && i < 270) {
        rect(-w * noise(xoff) * 0.5, -h * 0.3, w * noise(xoff) , h * 0.6)
    }
    if (i > 150 && i < 210) {
        rect(-w * noise(xoff) * 0.5, -h * noise(xoff) * 0.5, w * noise(xoff) , h * noise(xoff) )
    }
    xoff = map(cos(radians(i)), -1, 1, 0, 4);
    i += 2
    if (i % 360 == 0) { i = 0; }
}

function nest(cx,cy,dx,dy){
    var offset=5
    if(dx>dy){
        while(dy>offset){
            noFill()
            stroke(0,0,100)
            ellipse(cx,cy,dx,dy)
            dx-=offset;dy-=offset;
        }
    }
    else{
        while(dx>offset){
            noFill()
            stroke(0,0,100)
            ellipse(cx,cy,dx,dy)
            dx-=offset;dy-=offset;
        }
    }
}