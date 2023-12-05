class Balle {
    constructor() {
        this.cx = random(offset,w-offset)
        this.cy = 50//offset//random(offset)
        this.vitesse = random(9, 10)
        this.diam = Math.floor(random(21, 84))
        this.down = true
        this.hu = Math.floor(random(30, 230))
    }



    bouge() {  
        if(this.down){
        this.cy+=this.vitesse}
        if(!this.down){
            this.cy-=this.vitesse}
    
    } 

    dessine() {
        fill(this.hu,100,100)
        noStroke()
        ellipse(this.cx,this.cy,this.diam,this.diam)
        
    }

    rebondi(){
        if(this.cy>h-this.diam/2){this.down=false
            this.hu = Math.floor(random(50, 280))
            
        }
        if(this.cy<this.diam/2){this.down=true
            this.hu = Math.floor(random(50, 280))
            
        }
     }

    joue(){

    
    }

}