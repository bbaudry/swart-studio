var xoff,yoff
var noiseres = 0.01
var resolution = 5
var nbx,nby 

function hal() {
    let hu
    nbx= Math.floor(actualwidth/resolution)
    nby = Math.floor(actualheight/resolution)
    noStroke()
    xoff=0.0
    yoff=0.0
    for(let j =0;j<nby;j++){
        xoff=0.0
        for(let i =0;i<nbx;i++){
            hu=Math.floor(noise(xoff,yoff)*7)*36
            fill(hu,100,100)
            rect(leftmargin+i*resolution,topmargin+j*resolution,resolution,resolution)
            xoff+=noiseres
        }
        yoff+=noiseres
    }
}
