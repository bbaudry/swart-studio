var xoff, resolutiony
var noiseres = 0.001
var resolutionx = 2

function hal() {
    let x1,x2,stepy,angle,cx
    resolutiony = Math.floor(random(7,37))
    stepy = Math.floor(actualheight / resolutiony)
    for (let j = 0; j < resolutiony - 1; j++){
        xoff = random(100.0)
        angle=0
        cx=rightmargin//leftmargin+actualwidth*0.5
        x1=cx;x2=cx
        while (angle<90) {
            line(x1, topmargin + j * stepy, x1, topmargin + (j + 1)*stepy)
            line(x2, topmargin + j * stepy, x2, topmargin + (j + 1)*stepy)
            //x1 = cx+(sin(radians(angle)))* actualwidth * 0.5//*noise(xoff);xoff+=noiseres
            x2 = cx+(sin(radians(angle+270)))* actualwidth * 0.5*noise(xoff);xoff+=noiseres
            angle+=3
        }
    }
}