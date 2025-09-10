class Walker{
    constructor(x,y){
        this.pos=createVector(x,y)
        this.vel=p5.Vector.random2D()
        this.vel.mult(random(21,42))
        this.xoff=0.0
        this.xinx=0.001
    }

    update(){
        this.pos.add(this.vel)
        this.vel=p5.Vector.random2D().mult(21+noise(this.xoff)*42);this.xoff+=this.xinc
        if(this.pos.x<0 || this.pos.x>w || this.pos.y<0 || this.pos.y>h ){
            this.pos.x=200
            this.pos.y=200
        }
    }

    show(){
        stroke(frameCount*0.1,0,100,10)
        strokeWeight(7)
        //point(this.pos.x,this.pos.y)
        stroke(frameCount*0.001,100,100,20)
        strokeWeight(7)
        point(this.pos.x,this.pos.y)
    }
}