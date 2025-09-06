class Walker{
    constructor(x,y){
        this.pos=createVector(x,y)
    }

    update(){
        this.pos.x=this.pos.x+random(-5,5)
        this.pos.y=this.pos.y+random(-5,5)
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