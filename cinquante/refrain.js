(() => {

    let cx, cy, resx, resy, localcounter, duration, rad, xoff, xinc, pad
    let grille, vasarely, vera

    async function init() {
        console.log("init refrain")
        duration = currentduration
        localcounter = 0
        cx = w * 0.5
        cy = h * 0.5
        rad = h * 0.42
        resx = 84
        resy = Math.floor(h / (w / resx))
        xoff = 0.0
        xinc = 0.005
        noStroke()
        fill(0, 0, 100)
        pad = 0
        grille = true
        vasarely = false
        vera = false
    }

    function draw() {
        background(0, 0, 0, 10)
        let step, maxdist, x, y
        step = w / resx
        maxdist = dist(0, 0, cx, cy)
        if (pad < 0.042 * step && grille) {
            pad += 0.0001 * step
            drawgrid(step, pad)
        }
        else {
            grille = false
            vasarely = true
            drawvasarely(step, pad)
        }

        localcounter++
    }

    function drawgrid(step, pad) {
        let x, y
        for (let i = 0; i < resx; i++) {
            x = i * step + step * 0.5
            for (let j = 0; j < resy; j++) {
                y = j * step + step * 0.5
                push()
                translate(x, y)
                quad(-step * 0.5 + pad, -step * 0.5 + pad,
                    step * 0.5 - pad, -step * 0.5 + pad,
                    step * 0.5 - pad, step * 0.5 - pad,
                    -step * 0.5 + pad, step * 0.5 - pad)
                pop()
            }
        }
    }

    function drawvasarely(step, pad) {
        let x, y
        let padx = step * map(noise(xoff), 0, 1, 0.1, 1); xoff += xinc
        let pady = step * map(noise(xoff), 0, 1, 0.1, 1); xoff += xinc
        for (let i = 0; i < resx; i++) {
            x = i * step + step * 0.5
            for (let j = 0; j < resy; j++) {
                y = j * step + step * 0.5
                if (dist(x + step * 0.5, y + step * 0.5, cx, cy) < rad) {
                        fill(0, 0, 100)
                    push()
                    translate(x, y)
                    quad(-padx, -pady, padx, -pady, padx, pady, -padx, pady)
                    pop()
                }
                else {
                    if (noise(xoff) < 0.42) {
                        fill(0, 100, 100)
                    push()
                    translate(x, y)
                    quad(-padx, -pady, padx, -pady, padx, pady, -padx, pady)
                    pop()
                    }
                }
            }
        }
    }


    window.refrain = { init, draw };
})();
