var xoff, resolutiony
var noiseres = 0.001
var resolutionx = 2

function hal() {
    let x1,x2,stepy,angle,cx,cxl,cxr
    resolutiony = Math.floor(random(17,37))
    stepy = Math.floor(actualheight / resolutiony)
    xoff=0.0
    for (let j = 0; j < resolutiony - 1; j++){
       // xoff = random(1.0)
        angle=0
        cx=leftmargin+actualwidth*0.5
            x1 = cx+(sin(radians(angle+90)))* actualwidth * 0.5*noise(xoff);xoff+=noiseres
            x2 = cx+(sin(radians(angle+270)))* actualwidth * 0.5*noise(xoff);xoff+=noiseres
            cxr=rightmargin-x1
            cxl=x2-leftmargin
        while (angle<90) {
            line(x1, topmargin + j * stepy, x1, topmargin + (j + 1)*stepy)
            line(x2, topmargin + j * stepy, x2, topmargin + (j + 1)*stepy)
            angle+=3
            x1 = cx+(sin(radians(angle)))* actualwidth * 0.5*noise(xoff);xoff+=noiseres
            x2 = cx+(sin(radians(angle+270)))* actualwidth * 0.5*noise(xoff);xoff+=noiseres
        }
        angle=0
        cx=leftmargin
        while (angle<90) {
            x1 = cx+(sin(radians(angle)))* cxl//*noise(xoff);xoff+=noiseres
            line(x1, topmargin + j * stepy, x1, topmargin + (j + 1)*stepy)
            angle+=5
        }
        angle=0
        cx=rightmargin
        while (angle<90) {
            x1 = cx+(sin(radians(angle+270)))* cxr//*noise(xoff);xoff+=noiseres
            line(x1, topmargin + j * stepy, x1, topmargin + (j + 1)*stepy)
            angle+=5
        }
    }
}