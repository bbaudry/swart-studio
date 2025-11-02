let xoff, xinc
xoff = 0.0
xinc = 0.001

function hal() {
    grid(0,leftmargin,topmargin,actualwidth,actualheight)
}

function grid(level, originx, originy, levelw, levelh){
    let xres,yres,stepx,stepy,x,y,offset
    xres=Math.floor(random(3,7));stepx=Math.floor(levelw/xres)
    yres=Math.floor(random(3,7));stepy=Math.floor(levelh/yres)
    x=originx
    offset=Math.floor(random(2,5))
    for(let i=0;i<xres;i++){
        y=originy
        for(let j=0;j<yres;j++){
            rect(x+offset,y+offset,stepx-2*offset,stepy-2*offset,offset*3)
            if(level<2){
                if(random()<0.5){
                    let l = level+1;console.log(l)
                    grid(l, x, y, stepx,stepy)
                }
            }
            y+=stepy
        }
        x+=stepx
    }
}