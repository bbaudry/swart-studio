function vera() {
    var step = Math.floor(actualwidth / resolution)
    for (var i = 0; i < resolution; i++) {
        x = leftmargin + i * step
        for (var j = 0; j < resolution; j++) {
            y = topmargin + j * step
            tiltquad(x, y, step)
} } }

function tiltquad(x, y, step) {
    var off, inc, desordre, horizon
    off = 0.8; inc = penwidth + off; horizon = 0
    desordre = random(-3.6, 3.6); 
    push()
    translate(x, y); rotate(radians(desordre))
    for (let i = 0; i < step; i += inc) {
        line(0, horizon, step, horizon)
        horizon += inc    }
    pop()
}