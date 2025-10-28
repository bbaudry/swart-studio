var xoff, yoff, noiseres, resolutiony, resolutionx

function hal() {
//    strokeWeight(1); stroke(300, 100, 100); rect(leftmargin, topmargin, actualwidth, actualheight)
    stroke(0,0,0)
    let x1, x2, y1, y2, stepx, stepy, left
    xoff = 0.0
    yoff = 0.0
    noiseres = 0.001
    resolutionx = Math.floor(7,11)
    resolutiony = Math.floor(21,42)
    stepx = Math.floor(actualheight / resolutionx)
    stepy = Math.floor(actualheight / resolutiony)
    y1 = topmargin; y2 = y1 + stepy
    while (y2 < bottommargin) {
        x1 = leftmargin+ noise(xoff, yoff) * stepx; xoff+=noiseres; x2 = x1 + noise(xoff, yoff) * stepx; xoff+=noiseres
        left=true
        while (x2 < rightmargin) {
            //strokeWeight(5);stroke(300,100,100);quad(x1, y1, x2, y1, x2, y2, x1, y2); stroke(0,0,0);
            section(x1, y1, x2, y2, left)
            x1 = x2
            x2 = x1 + noise(xoff, yoff) * stepx; xoff+=noiseres
            left=!left
        }
        y1 = y2; y2 = y1 + stepy; yoff+=noiseres
    }
}

function section(x1, y1, x2, y2,left){
    let sectionw=x2-x1
    let angle=0
    let angleinc =1
   // left=true
    let cx= left ? x1 : x2
    let angleoff = left ? 90 : 270
    let x=cx
        while (angle<90) {
            line(x, y1, x, y2)
            angle+=angleinc
            angleinc+=2
            x = cx+(sin(radians(angle+angleoff)))* sectionw
        }
  
}