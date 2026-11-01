(() => {

    let localcounter, duration, ratio, cx, cy, rad

    async function init() {
        console.log("init ouverture")
        duration=currentduration
        localcounter=0
        cx=w*0.5
        cy=h*0.5
        rad=w*0.05
    }

    function draw() {
        ratio=localcounter/duration
        random() < ratio ? fill(0, 100, 100) : fill(0, 0, 100)
        ellipse(cx,cy,rad,rad)
        if(rad<w*0.48){rad+=w*0.0001}
        localcounter++
    }

    window.ouverture = { init, draw };
})();
