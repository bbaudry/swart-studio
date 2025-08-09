function hal() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, xoff, xinc, max
    xoff=0.0
    xinc=0.005
    max=300
    //rect(leftmargin,topmargin,actualwidth,actualheight)
    for (i = 0; i < max; i++) {
        if(i<100){
        ax1 = leftmargin
        ay1 = bottommargin - i * noise(xoff); xoff+=xinc
        ax2 = rightmargin
        ay2 = bottommargin - i * 2.2 * noise(xoff); xoff+=xinc
        px1 = ax1 + actualwidth * 0.25 - i * 2 * noise(xoff); xoff+=xinc
        py1 = ay1 - i * i * 0.05  * noise(xoff); xoff+=xinc
        px2 = ax2 - actualwidth * 0.5 + i * i* 0.007
        py2 = ay2 + i
        beginShape()
        vertex(ax1, ay1)
        bezierVertex(px1, py1, px2, py2, ax2, ay2)
        endShape()
        }
    }
}