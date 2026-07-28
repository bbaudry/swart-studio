function hal() {
    fill(0,0,100)
    ellipse(x,y,45,45)
    line(w*0.5,topmargin,x,y)
    x=0.5*w+42-noise(xoff)*84;xoff+=xinc
//    y+=0.5-yoff;yoff+=yinc

}

