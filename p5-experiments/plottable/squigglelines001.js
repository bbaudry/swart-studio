var xoff = 0.0
var yoff = 0.0
var yoff2 = 0.0


function savesvg() {
    save("squigglelines001.svg");
}

function savepng() {
    save("squigglelines001.png");
}

var xoff = 0.0
var xinc = 0.001

function draw() {
    background(0, 0, 100)
    frameRate(1)
    stroke(0, 0, 0, 100)
    frames()
    squiggleline()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}


function squiggleline() {
    var px, py, cpx1, cpy1, cpx2, cpy2, px1, py1
    var wavewidth = rightmargin - leftmargin
    var ratio = 0.2
    var c = 20
    var y = h * 0.5
    beginShape();
    px = leftmargin
    py = y
    vertex(px, py);//y * 0.0001
    for (var x = ratio; x <= 1; x += ratio) {
        ellipse(px,py,5,5)
        cpx2 = px //+ wavewidth * (ratio * 0.5) 
        cpy2 = y - 0.1 * h 
        px += wavewidth * ratio
        py = y //+ random(-actualheight*0.2, actualheight*0.2)
        cpx1 = px //- wavewidth * (ratio * 0.5) 
        cpy1 = y - 0.1 * h 
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        ellipse(cpx1,cpy1,15,15)
        ellipse(cpx2,cpy2,25,25)

        ellipse(px,py,5,5)
        cpx2 = px //- wavewidth * (ratio * 0.1) 
        cpy2 = y //+ 0.01 * h 
        px -= wavewidth * ratio*0.2
        py = y+h*0.03//+h*0.05 //+ random(-actualheight*0.2, actualheight*0.2)
        cpx1 = px+ wavewidth * (ratio * 0.2) 
        cpy1 = py  
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        ellipse(cpx1,cpy1,15,15)
        ellipse(cpx2,cpy2,25,25)


        ellipse(px,py,5,5)
        cpx2 = px- wavewidth * (ratio * 0.2) 
        cpy2 = py  
        px -= wavewidth * ratio*0.2
        py = y//+h*0.05 //+ random(-actualheight*0.2, actualheight*0.2)
        cpx1 = px// + wavewidth * (ratio * 0.1) 
        cpy1 = y //+ 0.01 * h 
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        ellipse(cpx1,cpy1,15,15)
        ellipse(cpx2,cpy2,25,25)

    }
    endShape()
}