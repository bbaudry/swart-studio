var xoff,yoff
var noiseres = 0.05
var resolution = 7
var nbx,nby 

function hal() {
    let hu,x1,y1,x2,y2
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
                    stroke(0,100,100)
                    break;
                case 1:
                    stroke(200,100,100)
                    break;
                case 2:
                    stroke(300,100,100)
                    break;
                case 3:
                    stroke(100,100,100)
                    break;
                case 4:
                    stroke(42,100,100)
                    break;
                case 5:
                    break;
                case 6:
                    break;
                
            }
            rectwithlines(leftmargin+i*resolution,topmargin+j*resolution,resolution)
            xoff+=noiseres
        }
        yoff+=noiseres
    }
}

function rectwithlines(x,y,r){
    let x1
    rect(x,y,r,r)
    for(let t=0;t<1;t+=0.1){
        x1=lerp(x,x+r,t)
        line(x1,y,x1,y+r)
    }
}
