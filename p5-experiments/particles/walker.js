class Walker{
    constructor(x,y){
        this.pos=createVector(x,y)
        this.vel=p5.Vector.random2D()
        this.vel=this.vel*random(3,21)
    }

    update(){
        this.pos.add(this.vel)
        this.vel=p5.Vector.random2D()
    }

    show(){
        stroke(0,0,100,10)
        strokeWeight(7)
        point(this.pos.x,this.pos.y)
        stroke(0,100,100,200)
        strokeWeight(1)
        point(this.pos.x,this.pos.y)
    }
}