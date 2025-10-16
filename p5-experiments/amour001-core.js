var xoff,yoff
var noiseres = 0.01
var resolution = 5
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
            console.log(hu)
            switch(hu){
                case 0:
                    break;
                case 1:
                    x1=leftmargin+i*resolution
                    x2=leftmargin+i*resolution+resolution
                    y1=topmargin+j*resolution+resolution*0.5
                    line(x1,y1,x2,y1)
                    break;
                case 2:
                    x1=leftmargin+i*resolution+resolution*0.5
                    y1=topmargin+j*resolution
                    y2=topmargin+j*resolution+resolution
                    line(x1,y1,x1,y2)
                    break;
                case 3:
                    x1=leftmargin+i*resolution+resolution*0.5
                    y1=topmargin+j*resolution
                    y2=topmargin+j*resolution+resolution
                    line(x1,y1,x1,y2)
                    x1=leftmargin+i*resolution
                    x2=leftmargin+i*resolution+resolution
                    y1=topmargin+j*resolution+resolution*0.5
                    line(x1,y1,x2,y1)
                    break;
                case 4:
                    x1=leftmargin+i*resolution
                    x2=leftmargin+i*resolution+resolution
                    y1=topmargin+j*resolution
                    y2=topmargin+j*resolution+resolution
                    line(x1,y1,x2,y2)
                    break;
                case 5:
                    break;
                case 6:
                    break;
                
            }
            xoff+=noiseres
        }
        yoff+=noiseres
    }
}
