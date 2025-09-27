class Walker{
    constructor(x,y){
        this.pos=createVector(x,y)
        this.vel=p5.Vector.random2D().mult(7)
        //this.vel.mult(random(21,42))
        this.xoff=random(1000.0)
        this.xinx=0.001
        this.acc=p5.Vector.random2D().setMag(0.001)
        this.x=x
        this.y=y
    }

    update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
//        this.vel=p5.Vector.random2D().mult(21+noise(this.xoff)*42);this.xoff+=this.xinc
        if(this.pos.x<0 || this.pos.x>w || this.pos.y<0 || this.pos.y>h ){
            this.pos=createVector(this.x,this.y)
            this.vel=p5.Vector.random2D()
            this.acc=p5.Vector.random2D().setMag(0.001)  
        }
    }

    show(){
        stroke(this.x%360,0,100,20)
        strokeWeight(2)
        point(this.pos.x,this.pos.y)
    }
}