(() => {

    let cx, cy, resx, resy, localcounter, duration, rad, xoff, xinc
    let grid

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
        initgrid()
    }

    function initgrid(){
        grid=[]
                let step = w / resx

        let x, y
        for (let i = 0; i < resx; i++) {
            x = i * step + step * 0.5
            for (let j = 0; j < resy; j++) {
                y = j * step + step * 0.5
                let inside
                dist(x + step * 0.5, y + step * 0.5, cx, cy) < rad?inside=true:inside=false
                let c = new Cell(x,y,inside,step,step)
                grid.push(c)
            }
        }


    }

    function draw() {
        background(0, 0, 0, 10)
        drawgrid()
        localcounter++
    }

    function drawgrid() {
        for(let c in grid){
            grid[c].display()
            grid[c].update()
        }
    }



    window.refrain2 = { init, draw };
})();

class Cell{
    constructor(x,y,inside,stepx,stepy){
        this.x=x
        this.y=y
        this.inside=inside
        this.stepx=stepx
        this.stepy=stepy
        this.pad=0
        this.angle=0
    }

    display() {
        this.inside?fill(0,0,100):fill(0,100,100)
        push()
        translate(this.x,this.y)
        rotate(this.angle)
        quad(
            -this.stepx*0.5+this.pad,-this.stepy*0.5+this.pad,
            this.stepx*0.5-this.pad,-this.stepy*0.5+this.pad,
            this.stepx*0.5-this.pad,this.stepy*0.5-this.pad,
            -this.stepx*0.5+this.pad,this.stepy*0.5-this.pad
        )
        pop()
    }

    update(){
        this.angle+=0.001
    }
}