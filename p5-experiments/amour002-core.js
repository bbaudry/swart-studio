var xoff,yoff
var noiseres = 0.05
var resolution = 27
var nbx,nby 

function hal() {
    let hu,x1,y1,x2,y2,tinc
    nbx= Math.floor(actualwidth/resolution)
    nby = Math.floor(actualheight/resolution)
    noStroke()
    xoff=0.0
    yoff=0.0
    stroke(0,0,0)
    for(let j =0;j<nby;j++){
        xoff=0.0
        for(let i =0;i<nbx;i++){
            hu=Math.floor(noise(xoff,yoff)*5)
            switch(hu){
                case 0:
                    tinc=0.01
                    break;
                case 1:
                    tinc=0.04
                    break;
                case 2:
                    tinc=0.1
                    break;
                case 3:
                    tinc=0.2
                    break;
                case 4:
                    tinc=0.5
                    break;
                case 5:
                    break;
                case 6:
                    break;
                
            }
            rectwithlines(leftmargin+i*resolution,topmargin+j*resolution,resolution,tinc)
            xoff+=noiseres
        }
        yoff+=noiseres
    }
}

function rectwithlines(x,y,r,tinc){
    let x1
//    rect(x,y,r,r)
    for(let t=0;t<1;t+=tinc){
        x1=lerp(x,x+r,t)
        line(x1,y,x1,y+r)
    }
}
