(() => {

    let cx, cy, localcounter, duration, rad, xoff, xinc, resx, stripes,depth,index

    async function init() {
        console.log("init _1_")
        duration = currentduration
        localcounter = 0
        cx = w * 0.5
        cy = h * 0.5
        rad = h * 0.42
        xoff = 0.0
        xinc = 0.001
        resx = 5
        depth=0
        index=0
        stripes=[]
        background(0, 0, 0)
    }

    function draw() {
        if (localcounter == 0) {
            drawgrid()
        }
        else{
            dig(depth,index)
        }
        localcounter++
    }


    function drawgrid() {
        let y1,y2, blanc
        let resy = 21
        let stepx = w
        let stepy = h / resy * random(0.5, 2.1)
        blanc = true
        y1 = 0
        while (y1 < h) {
            blanc ? fill(0, 0, 100) : noFill()
            blanc = !blanc
            rect(0, y1, stepx, stepy)
            y2 = y1 + stepy
            stepy = h / resy * random(0.5, 2.1)
            stripes.push({"top":y1,"bottom":y2})
            y1=y2
        }
    }
    function dig(depth,index){
        let stepx=w/(depth+1)/resx
        let x=depth*index*stepx
        let stripeh=stripes[0].bottom-stripes[0].top
        fill(0,0,0)
        rect(x,0,stepx,stripeh)
    }

    window._1_ = { init, draw };
})();
