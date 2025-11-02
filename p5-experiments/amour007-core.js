let xoff, xinc
xoff = 0.0
xinc = 0.001

function hal() {
    grid(0, 2, leftmargin, topmargin, actualwidth, actualheight)
}

function grid(level, minoffset, originx, originy, levelw, levelh) {
    let xres, yres, stepx, stepy, x, y, offset
    xres = Math.floor(random(2, 6)); stepx = Math.floor(levelw / xres)
    yres = Math.floor(random(4, 7)); stepy = Math.floor(levelh / yres)
    x = originx
    offset = Math.floor(random(minoffset, 7))
    for (let i = 0; i < xres; i++) {
        y = originy
        for (let j = 0; j < yres; j++) {
            rect(x + offset, y + offset, stepx - 2 * offset, stepy - 2 * offset, offset)
            if (level < 2) {
                if (random() < 0.5) {
                    let l = level + 1; console.log(l)
                    grid(l, offset, x + offset, y + offset, stepx - 2 * offset, stepy - 2 * offset)
                }
                else {
                    hatch(x + offset, y + offset, stepx - 2 * offset, stepy - 2 * offset, offset)
                }
            }
            y += stepy
        }
        x += stepx
    }
}

function hatch(left, top, hatchw, hatchh, off) {
    let ox1,oy1,ox2,oy2,dx1,dy1,dx2,dy2,x1,y1,x2,y2
    if(random()<0.5){
        ox1=left;oy1=top;ox2=left+hatchw;oy2=top
        dx1=left+hatchw;dy1=top;dx2=left+hatchw;dy2=top+hatchh
    }
    else{
        ox1=left+hatchw;oy1=top;ox2=left+hatchw;oy2=top+hatchh
        dx1=left+hatchw;dy1=top+hatchh;dx2=left;dy2=top+hatchh
    }
    for(let t=0;t<=1;t+=0.05){
        x1=lerp(ox2,ox1,t);y1=lerp(oy2,oy1,t)
        x2=lerp(dx1,dx2,t);y2=lerp(dy1,dy2,t)
        line(x1,y1,x2,y2)
    }

//    rect(left, top, hatchw , hatchh , off)
}