var xoff, yoff
var noiseres = 0.001
var resolutionx = 11
var resolutiony = 11
var nbx, nby

function hal() {
    let x, stepx, stepy,angle
    stepy = Math.floor(actualheight / resolutiony)
    for (let j = 0; j < resolutiony - 1; j++){

        xoff = random(100.0)
        x = leftmargin
        //stepx = noise(xoff) * resolutionx; xoff += noiseres
        angle=0
        while (angle<90) {
            line(x, topmargin + j * stepy, x, topmargin + (j + 1)*stepy)
            x = leftmargin+sin(radians(angle))*actualwidth*noise(xoff);xoff+=noiseres
            angle+=3
        }
    }
}