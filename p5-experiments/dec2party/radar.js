
var x, y, grain, offx, inc

function setupradar() {
    x = 0.1 * w
    y = 0.1 * h
    grain = 0.1 * w
    offx = 0
    inc = 0.01
    background(0,0,0)
}

function drawradar() {
    shape();
    if (x < 0.9 * w - grain) { x += grain; }
    else {
        x = 0.1 * w;
        if (y < 0.9 * h - grain) {
            y += grain;
        }
        else {
            y = 0.1 * h;
        }
    }
}

function shape() {
    fill(230, 100, 100, 7)
    noStroke()
    var s = Math.floor(random(7))
    switch (s) {
        case 0:
            rect(x, y, grain, grain)
            break;
        case 1:
            ellipse(x + grain / 2, y + grain / 2, grain, grain)
            break;
        case 2:
            noFill()
            stroke(230, 100, 100, 21)
            for (var i = 0; i < 44; i += 4) {
                quad(x + i, y + i, x + grain - i, y + i, x + grain - i, y + grain - i, x + i, y + grain - i)
            }
            break;
        case 3:
            noFill()
            stroke(230, 100, 100, 21)
            for (var i = 0; i < 44; i += 4) {
                triangle(x + i, y + i, x + grain - i, y + i, x + grain - i, y + grain - i)
            }
            break;
        case 4:
            noFill()
            stroke(230, 100, 100, 21)
            for (var i = 0; i < 44; i += 4) {
                triangle(x + i, y + i, x + grain - i, y + i, x + i, y + grain - i)
            }
            break;
        case 5:
            noFill()
            stroke(230, 0, 100, 42)
            var cx = x + grain / 2
            var cy = y + grain / 2
            ellipse(cx, cy, grain, grain)
            for (var i = 0; i < 10; i++) {
                var rad = noise(offx) * (grain / 2); offx += inc
                var angle = noise(offx) * 360; offx += inc
                var x1 = cx + rad * cos(radians(angle))
                var y1 = cy + rad * sin(radians(angle))
                ellipse(x1, y1, 21, 21)
            }
        case 6:
            noFill()
            stroke(330, 100, 100, 42)
            var cx = x + grain / 2
            var cy = y + grain / 2
            ellipse(cx, cy, grain, grain)
            for (var i = 0; i < 7; i++) {
                var rad = noise(offx) * (grain / 2); offx += inc
                var angle = random(360)
                var x1 = cx + rad * cos(radians(angle))
                var y1 = cy + rad * sin(radians(angle))
                ellipse(x1, y1, 21, 21)
            }
    }


}
