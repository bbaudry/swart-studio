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
var y = h * 0.4
var xoff = 0.0
var xinc = 0.1
var yoff = 0.0
var yinc = 0.007

function draw() {
    //background(0, 0, 100)
    stroke(0, 0, 100, 200)
    //frames()
    //lignecontinue()
    var x1, x2, y1, y2
    x1=rightmargin
    x2=x1-222
    y1=h*0.5
    y2=h*0.6
    squiggleline(x1, x2, y1, y2)
    ellipse(x1,y1,7,7)
    ellipse(x2,y2,7,7)
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function lignecontinue() {
    var x1, y1, x2, y2
    var xoff = 0.0
    var xinc = 0.001
    x1 = leftmargin + random() * actualwidth
    y1 = leftmargin + random() * actualheight
    beginShape()
    for (var i = 0; i < 4; i++) {
        if (random() < 0.5) {
            x2 = x1 + noise(xoff) * (rightmargin - x1); xoff += xinc
            y2 = y1 + noise(xoff) * (bottommargin - y1) * 0.1; xoff += xinc
        }
        else {
            x2 = x1 - noise(xoff) * (x1 - leftmargin); xoff += xinc
            y2 = y1 - noise(xoff) * (y1 - topmargin) * 0.3; xoff += xinc
        }
        stroke(0,0,100);line(x1, y1, x2, y2)
        stroke(0,100,100);squiggleline(x1, x2, y1, y2)
        x1 = x2
        y1 = y2
    }
}


function squiggleline(x1, x2, y1, y2) {
    var px, py, cpx1, cpy1, cpx2, cpy2, px1, py1, right, down
    var ratio, sqiwidlarge, sqiwidsmall
    var sqighi = 0.02 * Math.abs(y2-y1)
    var sqiglo = 0.005 * Math.abs(y2-y1)
    if (x2 < x1) { right=false } else {right =true}
    if (y2 < y1) { down=false } else {down =true}
    ratio = 0.2 + random() * 0.2
    sqiwidlarge = Math.abs(x2 - x1) * ratio
    sqiwidsmall = Math.abs(x2 - x1) * ratio * 0.08
    beginShape();
    py = y1
    y=y1
    if(right){px = x1}
    else{px = x2}
    px=x1
    vertex(px, py);
        if(right){
        while (px < x2) {
            cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
            cpy2 = y - sqighi
            px += sqiwidlarge
            py = y
            cpx1 = px
            cpy1 = y - sqighi
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px
            cpy2 = y
            px -= sqiwidsmall
            py = y + sqiglo
            cpx1 = px + sqiwidsmall
            cpy1 = py
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px - sqiwidsmall
            cpy2 = py
            px -= sqiwidsmall
            py = y
            cpx1 = px
            cpy1 = y
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            y += Math.abs(y2-y1)*ratio
        }}
        else{
        while (px > x2 + sqiwidlarge) {
            cpx2 = px
            cpy2 = y + sqighi
            px -= sqiwidlarge
            py = y
            cpx1 = px
            cpy1 = y + sqighi
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px
            cpy2 = y
            px += sqiwidsmall
            py = y - sqiglo
            cpx1 = px - sqiwidsmall
            cpy1 = py
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

            cpx2 = px + sqiwidsmall
            cpy2 = py
            px += sqiwidsmall
            py = y
            cpx1 = px
            cpy1 = y
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
            y += Math.abs(y2-y1)*ratio
        }}
/*        right = true
        ratio = 0.01 + random() * 0.03
        sqiwidlarge = (rightmargin - leftmargin) * ratio
        sqiwidsmall = (rightmargin - leftmargin) * ratio * 0.08
        px = leftmargin + sqiwidlarge*/
    
    endShape()
}