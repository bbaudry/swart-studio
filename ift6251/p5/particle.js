class Particle {
    constructor() {
        this.x=random(w)
        this.y=random(h)
        this.speed=Math.floor(random(7,9))
        this.rad=Math.floor(random(2,7))
        this.dir=random([-1,1])
    }

    update() {  
        this.x+=this.dir*this.speed
        this.x=(this.x+w)%w
        this.y+=this.dir*this.speed
        this.y=(this.y+w)%h
    } 

    display() {
        fill(0,0,100)
        noStroke()
        ellipse(this.x,this.y,this.rad*2,this.rad*2)
    }

}