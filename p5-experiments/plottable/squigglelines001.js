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
var y = h * 0.5
var yoff = 0.0
var yinc = 0.3

function draw() {
    background(0, 0, 100)
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
    var ratio = 0.04
    var sqiwidlarge = (rightmargin - leftmargin)*ratio
    var sqiwidsmall = (rightmargin - leftmargin)*ratio*0.08
    var sqighi = 0.02*h
    var sqiglo = 0.005*h
    var yamplitude = 50
    beginShape();
    px = leftmargin
    py = y
    vertex(px, py);
    while(px<rightmargin-sqiwidlarge){
//        ellipse(px,py,5,5)
        cpx2 = px 
        cpy2 = y - sqighi
        px += sqiwidlarge
        py = y 
        cpx1 = px  
        cpy1 = y - sqighi
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
//        ellipse(cpx1,cpy1,15,15)
//        ellipse(cpx2,cpy2,25,25)

//        ellipse(px,py,5,5)
        cpx2 = px 
        cpy2 = y 
        px -= sqiwidsmall
        py = y+sqiglo
        cpx1 = px+ sqiwidsmall 
        cpy1 = py  
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
//        ellipse(cpx1,cpy1,15,15)
//        ellipse(cpx2,cpy2,25,25)


//        ellipse(px,py,5,5)
        cpx2 = px- sqiwidsmall 
        cpy2 = py  
        px -= sqiwidsmall
        py = y
        cpx1 = px
        cpy1 = y 
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
//        ellipse(cpx1,cpy1,15,15)
//        ellipse(cpx2,cpy2,25,25)

        y+=yamplitude*0.5-noise(yoff)*yamplitude; yoff+=yinc
    }
    endShape()
}