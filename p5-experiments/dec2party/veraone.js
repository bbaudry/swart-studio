
var x, y
var xoff, yoff
var step, stepx, stepy

function setupveraone() {
    noFill();
    background(0, 0, 0)
    stroke(0, 0, 100);
    x = 0
    y = 0
    xoff = random() * 100
    yoff = random() * 100
    step = w / 11
    stepx = w / step
    stepy = h / step
}


function drawveraone() {
    drawrandom()
}

var noisestep = 0.05
function drawrandom() {
    let x = Math.floor(noise(xoff) * stepx) * step
    xoff += noisestep
    let y = Math.floor(noise(yoff) * stepy) * step
    yoff += noisestep
    stroke(0, 0, 100,42); noFill()
    if (random() < 0.2) { stroke(180, 100, 100, 42) }
    else {
    if (random() < 0.2) { stroke(330, 100, 100, 42) }}
    verablock(x, y, step, step)

}

function verablock(x, y, step, step) {
    console.log(frameCount+" vera block")
    let size = random() * step
    let m = step - size
    x += m / 2
    y += m / 2
    rect(x, y, size, size)
}
