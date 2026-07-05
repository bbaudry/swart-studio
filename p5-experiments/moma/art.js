
let palettes = [
    [30, 220],
    [330, 180],
    [220, 30],
    [180, 30],
    [180, 0],
    [150, 330]
]
let palette_index

function hal() {
    //wholecollection()
    oneyear()
}

function oneyear(){
    let i = Math.floor(random(collection_of_works.length))
    let works = collection_of_works[i].value
    let xoff = 0
    let xinc = 0.01
    let x,y,workheight,workwidth,yoff
    x=leftmargin
    workwidth = (actualwidth - (works.length-1)) / (works.length)
    for(let i in works){
        yoff=actualheight * 0.5 * noise(xoff);xoff+=xinc
        y = topmargin + actualheight *0.5 - yoff
        workheight = yoff*2
        console.log("y: "+y+"; work height"+workheight)
        fill(0,0,100)
        rect(x,y,workwidth,workheight)
        x+=workwidth+1
    }
}

function wholecollection(){
    let y = topmargin
    let workheight = 1.5
    for (let i in collection_of_works) {
        let works = collection_of_works[i].value
        let x=leftmargin
        let workwidth = (actualwidth - (works.length-1)) / (works.length)
        for (let i=0; i< works.length; i++){
            fill(300,100,100)
            rect(x,y,workwidth,workheight)
            x+=workwidth+1
        }
        y+=workheight+1
    }

}
