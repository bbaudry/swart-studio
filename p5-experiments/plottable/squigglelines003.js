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
var right = true

function draw() {
    //background(0, 0, 100)
    stroke(0, 0, 100, 200)
    frames()
    lignecontinue()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function lignecontinue(){
    var x1,y1,x2,y2
    var xoff=0.0
    var xinc=0.001
    x1=leftmargin+random()*actualwidth
    y1=leftmargin+random()*actualheight
    beginShape()
    for (var i=0;i<42;i++){
        if(random()<0.5){
            x2=x1+noise(xoff)*(rightmargin-x1); xoff+=xinc
            y2=y1+noise(xoff)*(bottommargin-y1)*0.1;xoff+=xinc
        }
        else{
            x2=x1-noise(xoff)*(x1-leftmargin); xoff+=xinc
            y2=y1-noise(xoff)*(y1-topmargin)*0.3;xoff+=xinc
        }
        line(x1,y1,x2,y2)
        x1=x2
        y1=y2
    }
}


function squiggleline(y) {
    var px, py, cpx1, cpy1, cpx2, cpy2, px1, py1
    var ratio, sqiwidlarge, sqiwidsmall
    var sqighi = 0.02 * h
    var sqiglo = 0.005 * h
    var yamplitude = 40
    var inc = 7
    ratio = 0.02 + random() * 0.02
    sqiwidlarge = (rightmargin - leftmargin) * ratio
    sqiwidsmall = (rightmargin - leftmargin) * ratio * 0.08
    beginShape();
    py = y
    px = leftmargin + sqiwidlarge
    vertex(px, py);
    for (var i = 0; i < 39; i++) {
        while (px < rightmargin - sqiwidlarge && right) {
            //        ellipse(px,py,5,5)
            cpx2 = px + 5 * noise(xoff) - 10; xoff += xinc
            cpy2 = y - sqighi
            px += sqiwidlarge
            py = y
            cpx1 = px
            cpy1 = y - sqighi
            bezierVertex(cpx2, cpy2+inc*0, cpx1, cpy1+inc*0, px, py+inc*0);
            bezierVertex(cpx2, cpy2+inc*1, cpx1, cpy1+inc*1, px, py+inc*1);
            bezierVertex(cpx2, cpy2+inc*2, cpx1, cpy1+inc*2, px, py+inc*2);
            //        ellipse(cpx1,cpy1,15,15)
            //        ellipse(cpx2,cpy2,25,25)

            //        ellipse(px,py,5,5)
            cpx2 = px
            cpy2 = y
            px -= sqiwidsmall
            py = y + sqiglo
            cpx1 = px + sqiwidsmall
            cpy1 = py
            bezierVertex(cpx2, cpy2+inc*0, cpx1, cpy1+inc*0, px, py+inc*0);
            bezierVertex(cpx2, cpy2+inc*1, cpx1, cpy1+inc*1, px, py+inc*1);
            bezierVertex(cpx2, cpy2+inc*2, cpx1, cpy1+inc*2, px, py+inc*2);
             //        ellipse(cpx1,cpy1,15,15)
            //        ellipse(cpx2,cpy2,25,25)


            //        ellipse(px,py,5,5)
            cpx2 = px - sqiwidsmall
            cpy2 = py
            px -= sqiwidsmall
            py = y
            cpx1 = px
            cpy1 = y
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
            bezierVertex(cpx2, cpy2+3, cpx1, cpy1+3, px, py+3);
            bezierVertex(cpx2, cpy2+6, cpx1, cpy1+6, px, py+6);
             //        ellipse(cpx1,cpy1,15,15)
            //        ellipse(cpx2,cpy2,25,25)

            y += yamplitude * 0.5 - random() * yamplitude; yoff += yinc
        }
        right = false
        while (px > leftmargin + sqiwidlarge && !right) {
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

            y += yamplitude * 0.5 - random() * yamplitude; yoff += yinc
        }
        right = true
        ratio = 0.01 + random()*0.03
        sqiwidlarge = (rightmargin - leftmargin) * ratio
        sqiwidsmall = (rightmargin - leftmargin) * ratio * 0.08
        px = leftmargin + sqiwidlarge
    }
    endShape()
}