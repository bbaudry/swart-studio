class Balle {
    constructor() {
        this.cx = random(offset, w - offset)
        this.cy = 90//random(offset)
        this.vitesse = random(3, 9)
        this.diam = Math.floor(random(50, 210))
        this.down = true
        this.hu = Math.floor(random(30, 230))
    }

    bouge() {
        if (this.down) { this.cy += this.vitesse }
        else { this.cy -= this.vitesse }
    }

    dessine() {
        fill(this.hu,100,100);noStroke()
        ellipse(this.cx,this.cy,this.diam,this.diam)    
    }

    rebondi(){
        if(this.cy>h-this.diam/2 && this.down){this.down=false}
        if(this.cy-this.diam/2<0 && !this.down){this.down=true}
    }

    joue(){
        if(this.vitesse>1){this.vitesse+=movedY/10}
        else{this.vitesse=1.1}
        console.log("moved: "+movedY+"; speed: "+this.vitesse)
    }

}