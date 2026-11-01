(() => {

    let cx, cy, resx, resy, localcounter, duration, rad, xoff, xinc,pad

    async function init() {
        console.log("init refrain")
        duration = currentduration
        localcounter = 0
        cx = w * 0.5
        cy = h * 0.5
        rad = w * 0.42
        resx = 42
        resy = Math.floor(h/resx)
        xoff = 0.0
        xinc = 0.001
        noStroke()
        fill(0,0,100)
        pad=0
    }

    function draw() {
        background(0,0,0)
        let step, maxdist, x,y
        step = w / resx
        maxdist = dist(0, 0, cx, cy)
        pad+=0.0001*step
        for (let i = 0; i < resx; i++) {
            x = i * step + step * 0.5
            for (let j = 0; j < resy; j++) {
                y = j * step + step * 0.5
                push()
                translate(x,y)
                quad(-step*0.5+pad,-step*0.5+pad,
                    step*0.5-pad,-step*0.5+pad,
                    step*0.5-pad,step*0.5-pad,
                    -step*0.5+pad,step*0.5-pad)
                pop()
                // if (dist(x + step * 0.5, y + step * 0.5, cx, cy) < actualheight * 0.5) {
                //     drawcell(x + step * 0.5, y + step * 0.5, cx, cy, step * 0.8)
                // }
                // else {
                //     if (noise(xoff) < 0.2) {
                //         xoff += xinc
                //         fill(0, 100, 100)
                //         rect(x, y, step, step)
                //     }
                // }
            }
        }

        localcounter++
    }

    window.refrain = { init, draw };
})();
