(() => {

    let localcounter, duration, ratio

    async function init() {
        duration=currentduration
        localcounter=0
    }

    function draw() {
        ratio=localcounter/duration
        random() < ratio ? fill(0, 100, 100) : fill(0, 0, 100)
        ellipse(w * 0.5, h * 0.5, w * 0.42, w * 0.42)
        localcounter++
    }

    window.ouverture = { init, draw };
})();
