var xoff = 0.0
var xinc = 1
var grid = []
var resolution = 5

function hal() {
    grille()    
}

function grille(){
    let x,y,stepx,stepy,hauteur
    stepx=Math.floor(actualwidth/resolution)
    stepy=Math.floor(actualheight/resolution)
    for(let i=0;i<resolution;i++){
        x=leftmargin+i*stepx
        y=topmargin
            hauteur=Math.floor(random(1,3))*stepy
        while(y+hauteur<bottommargin){
            rect(x,y,stepx,hauteur)
            y+=hauteur
            hauteur=Math.floor(random(1,3))*stepy
        }
            rect(x,y,stepx,bottommargin-y)
    }
}