var xoff, xinc,
    xoff=0.0
    xinc=0.005

function hal() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, max, magicy, magicx, cy
    max=Math.floor(actualheight)
    cy=max/2
    magicy=random(1.8,2.2)
    magicx=random(0.0001,0.005)
    //rect(leftmargin,topmargin,actualwidth,actualheight)
    for (i = 0; i < max; i++) {
        ax1 = leftmargin
        ay1 = bottommargin - i * noise(xoff); xoff+=xinc
        ax2 = rightmargin
        ay2 = ay1//bottommargin - i * magicy * noise(xoff); xoff+=xinc
        px1 = ax1 + actualwidth * magicx * i * noise(xoff); xoff+=xinc
        py1 = ay1 - (ay1-cy) * i * 0.005  * noise(xoff); xoff+=xinc
        px2 = ax2 - actualwidth * magicx * i* noise(xoff); xoff+=xinc
        py2 = ay2 
        beginShape()
        vertex(ax1, ay1)
        bezierVertex(px1, py1, px2, py2, ax2, ay2)
        endShape()
        
    }
}