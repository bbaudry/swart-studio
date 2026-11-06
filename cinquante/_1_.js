(() => {

    let cx, cy, localcounter, duration, rad, xoff, xinc

    async function init() {
        console.log("init _1_")
        duration = currentduration
        localcounter = 0
        cx = w * 0.5
        cy = h * 0.5
        rad = h * 0.42
        xoff=0.0
        xinc=0.001
    }

    function draw() {
        background(0, 0, 0, 10)
        stroke(0,0,100)
        noFill()
        ellipse(cx,cy,rad,rad)
        localcounter++
    }

    window._1_ = { init, draw };
})();
