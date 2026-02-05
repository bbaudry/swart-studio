var xoff = 0.0
var xinc = 1
var grid = []
function hal() {
    initgrid()
}

function initgrid(){
    let gridwidth = Math.floor(actualwidth-(actualwidth%3))
    let gridheight = Math.floor(actualheight-(actualheight%3))
    stroke(30,100,100)
    noFill()
    console.log("w: "+gridwidth+"; h: "+gridheight)
    splittile(leftmargin,topmargin,gridwidth,gridheight,0)
}

function splittile(x,y,localw,localh,d){
    if(d<4){
        if(random()<0.9){
            d++
            let ratio=Math.floor(random(1,3))
            let horizontal=random()<0.5
            if(horizontal){
                let newh=ratio*localh/3
                console.log("d: "+d+"; w: "+localw+"; h: "+localh+"; newh: "+newh+"; ratio: "+ratio)
                splittile(x,y,w,newh,d)
                splittile(x,y+newh,w,localh-newh,d)
            }
            else{
                let neww=ratio*localw/3
                console.log("d: "+d+"; w: "+localw+"; h: "+localh+"; neww: "+neww+"; ratio: "+ratio)
                splittile(x,y,neww,h,d)
                splittile(x+neww,y,localw-neww,h,d)
            }
        }
        else{
            rect(x,y,localw,localh)
        }
    }
        else{
            rect(x,y,localw,localh)
        }
}