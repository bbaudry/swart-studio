var xoff=0.0
var xinc=0.001

function kerou() {
    let x1, y1, ax1, ay1, ax2, ay2, x2, y2, magics, iter
    magics=[]
    iter = 100
    magics.push({name:"xinc",val:xinc})
    magics.push({name:"iterations",val:iter})
    y1 = h * 0.3 
    for (let i = 0; i < 100; i++) {
        beginShape()
        x1 = leftmargin
        if (random() < 0.01) { y1 += h * 0.05 }
        else { y1+=2 }
        vertex(x1, y1)
        ax1 = leftmargin + actualwidth * noise(xoff); xoff += xinc
        ay1 = y1+cos(radians(i))//actualheight*0.1
        ax2 = leftmargin + actualwidth * (0.3 * noise(xoff)); xoff += xinc
        ay2 = y1-actualheight*(cos(radians(i))); xoff += xinc //noise(xoff)*1.2
        x2 = rightmargin
        y2 = y1
        bezierVertex(ax1, ay1, ax2, ay2, x2, y2)
        endShape()
    }
    return magics
}