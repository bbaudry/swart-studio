(() => {

    let cx, cy, localcounter, duration, rad, xoff, xinc

    async function init() {
        console.log("init _1_")
        duration = currentduration
        localcounter = 0
        cx = w * 0.5
        cy = h * 0.5
        rad = h * 0.42
        xoff = 0.0
        xinc = 0.001
        background(0, 0, 0)
    }

    function draw() {
        if(localcounter==0){
        drawgrid()}
        localcounter++
    }


    function drawgrid() {
        let x, y, blanc
        let resx = 5
        let resy = 21 
        let stepx = w / 5
        let stepy = h / resy*random(0.5,2.1)
        blanc = true
        y = 0
        while (y < h) {
            for (let i = 0; i < resx; i++) {
                x = i * stepx
                blanc ? fill(0, 0, 100) : noFill()
                blanc = !blanc
                rect(x, y, stepx, stepy)
            }
            y += stepy
            stepy = h / resy*random(0.5,2.1)

        }
    }

    window._1_ = { init, draw };
})();
