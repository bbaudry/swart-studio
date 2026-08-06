let seuil=0.42*2
let maxdepth=4
function hal() {
    dig(0,leftmargin,topmargin,actualwidth,actualheight)
}

function dig(depth,x,y,large,haut){
    noFill()
    stroke(0,0,100)
    rect(x,y,large,haut)
    if(depth<maxdepth){
        let d=depth+1
        if(random()<seuil){dig(d,x,y,large*0.5,haut*0.5);dig(d,x+large*0.5,y,large*0.5,haut*0.5)}
        if(random()<seuil){dig(d,x+large*0.5,y+haut*0.5,large*0.5,haut*0.5);dig(d,x,y+haut*0.5,large*0.5,haut*0.5)}
    }
}

