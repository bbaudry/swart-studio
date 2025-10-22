var xoff, yoff
var noiseres = 0.01
var resolutionx = 11
var resolutiony = 42
var nbx, nby

function hal() {
    let x, stepx, stepy
    stepy = Math.floor(actualheight / resolutiony)
    for (let j = 0; j < resolutiony - 1; j++){

        xoff = random(100.0)
        x = leftmargin
        stepx = noise(xoff) * resolutionx; xoff += noiseres
        while (x + stepx < rightmargin) {
            line(x, topmargin + j * stepy, x, topmargin + (j + 1)*stepy)
            x += stepx
            stepx = noise(xoff) * resolutionx; xoff += noiseres
        }
    }
}