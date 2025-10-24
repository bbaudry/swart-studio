var xoff, yoff
var noiseres = 0.001
var resolutionx = 2
var resolutiony = 11
var nbx, nby

function hal() {
    let x,stepy,angle,xzone
    stepy = Math.floor(actualheight / resolutiony)
    for (let j = 0; j < resolutiony - 1; j++){
        xoff = random(100.0)
        x = leftmargin
        angle=90
        xzone=actualwidth*0.5
        while (angle<180) {
            line(x, topmargin + j * stepy, x, topmargin + (j + 1)*stepy)
            x = x+(1+sin(radians(angle)))*(xzone-x)*0.25*noise(xoff);xoff+=noiseres
            angle+=1
        }
    }
}