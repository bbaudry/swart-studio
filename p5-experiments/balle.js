class Balle {
    constructor(x) {
        this.cx = random(offset, w - offset)
        this.cy = 0//random(offset)
        this.vitesse = 1//random(3, 7)
        this.diam = 150//Math.floor(random(50, 290))
        this.down = true
        this.hu = 50//Math.floor(random(0, 230))
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
        
        if(this.cy>h-this.diam/2 && this.down){this.down=false;console.log("hi at "+this.cy+"; h is "+h)}
        if(this.cy<0 && !this.down){this.down=true;console.log("bye at "+this.cy+"; h is "+h)}
    }

}