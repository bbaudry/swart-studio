let seuil=0.42*2
let maxdepth=8
function hal() {
    dig(0,leftmargin,topmargin,actualwidth,actualheight)
}

function dig(depth,x,y,large,haut){
    noStroke()
    random()<0.5?fill(0,0,0):fill(0,0,100)
    rect(x,y,large,haut)
    if(depth<maxdepth){
        let d=depth+1
        let rl=noise(xoff);xoff+=xinc;//random()
        let rh=noise(xoff);xoff+=xinc;//random()
        if(random()<seuil){
            dig(d,x,y,large*rl,haut*rh);dig(d,x+large*rl,y,large*(1-rl),haut*rh)
        }
        if(random()<seuil){
            dig(d,x+large*rl,y+haut*rh,large*(1-rl),haut*(1-rh));dig(d,x,y+haut*rh,large*rl,haut*(1-rh))
        }
    }
}

