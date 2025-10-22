var xoff,yoff
var noiseres = 0.1
var resolutionx = 7
var resolutiony = 11
var nbx,nby 

function hal() {
    let dice,x1,y1,x2,y2,tinc, hu
    nbx= Math.floor(actualwidth/resolutionx)
    nby = Math.floor(actualheight/resolutiony)
    noStroke()
    xoff=0.0
    yoff=0.0
    stroke(0,0,0)
    for(let j =0;j<nby;j++){
        xoff=0.0
        for(let i =0;i<nbx;i++){
            dice=Math.floor(noise(xoff,yoff)*3)
            switch(dice){
                case 0:
                    tinc=0.1; hu=300
                    break;
                case 1:
                    tinc=0.5; hu=180
                    break;
                case 2:
                    tinc=0.2; hu=30
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
            rectwithlines(leftmargin+i*resolutionx,topmargin+j*resolutiony,resolutionx,resolutiony,tinc,hu)
            xoff+=noiseres
        }
        yoff+=noiseres
    }
}

function rectwithlines(x,y,rx,ry,tinc,hu){
    let x1
    //stroke(hu,100,100)
    //rect(x,y,rx,ry)
    for(let t=0;t<1;t+=tinc){
        x1=lerp(x,x+rx,t)
        line(x1,y,x1,y+ry)
    }
}
