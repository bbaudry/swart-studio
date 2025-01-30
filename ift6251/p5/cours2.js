var w, h, cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
   // noLoop()
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    rect(0, 0, w, h)
    stroke(0, 0, 0)
    fill(50, 100, 100)
    var size = w * 0.9
    //    rect(w*0.5-size*0.5,h*0.5-size*0.5,size,size)
    var vera = 21
    var molnar = 11
    var hsize = size * 0.5
    var udem=false
    for (i = 0; i < molnar; i++) {
        if(udem){fill(50, 0, 0, 120);udem=false}
        else{fill(50, 100, 100, 120);udem=true}
        quad(w * 0.5 - hsize + random(-vera, vera), h * 0.5 - hsize + random(-vera, vera),
            w * 0.5 + hsize + random(-vera, vera), h * 0.5 - hsize + random(-vera, vera),
            w * 0.5 + hsize + random(-vera, vera), h * 0.5 + hsize + random(-vera, vera),
            w * 0.5 - hsize + random(-vera, vera), h * 0.5 + hsize + random(-vera, vera))
        hsize -= size * 0.05
    }
}

