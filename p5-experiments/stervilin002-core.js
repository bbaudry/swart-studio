var xoff=0.0
var xinc=0.005

function kerou() {
    let x1, y1, ax1, ay1, ax2, ay2, x2, y2, magics, iter, direction
    magics=[]
    iter = 100
    magics.push({name:"xinc",val:xinc}); magics.push({name:"iterations",val:iter})
    y1 = h * 0.3; magics.push({name:"y1 init",val:y1})
    direction=random([-1,1]); magics.push({name:"direction",val:direction})
    for (let i = 0; i < iter; i++) {
        beginShape()
        x1 = leftmargin
        y1 = (random() < 0.01) ? h * 0.05 : y1+3
        vertex(x1, y1)
        ax1 = leftmargin + actualwidth * noise(xoff); xoff += xinc
        ay1 = y1 + actualheight * 0.1 * direction
        ax2 = leftmargin + actualwidth * (0.3 * noise(xoff)); xoff += xinc
        ay2 = y1 - actualheight * noise(xoff) * direction; xoff += xinc
        x2 = rightmargin
        y2 = y1
        bezierVertex(ax1, ay1, ax2, ay2, x2, y2)
        endShape()
    }
    return magics
}