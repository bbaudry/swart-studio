var xoff, resolutiony
var noiseres = 0.001
var resolutionx = 2

function hal() {
    let x,stepy,angle,xzone
    resolutiony = Math.floor(random(7,37))
    stepy = Math.floor(actualheight / resolutiony)
    for (let j = 0; j < resolutiony - 1; j++){
        xoff = random(100.0)
        x = leftmargin
        angle=90
        xzone=actualwidth*0.5
        while (angle<180) {
            line(x, topmargin + j * stepy, x, topmargin + (j + 1)*stepy)
            x = x+(sin(radians(angle)))*(xzone-x)*0.5*noise(xoff);xoff+=noiseres
            angle+=1
        }
    }
}