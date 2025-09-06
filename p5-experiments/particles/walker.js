class Walker{
    constructor(x,y){
        this.pos=createVector(x,y)
    }

    update(){
        this.pos.x=this.pos.x+random(-1,1)
        this.pos.y=this.pos.y+random(-1,1)
    }

    show(){
        stroke(0,0,100)
        strokeWeight(2)
        point(this.pos.x,this.pos.y)
    }
}