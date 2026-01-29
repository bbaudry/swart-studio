var xoff = 0.0
var xinc = 0.001

function hal() {
    let ax1, ay1, px1, py1, px2, py2, ax2, ay2, rayon, hinc
    rayon=4; hinc=0.05
    for (let t = 0; t < 290; t+=1) {
        ax1 = leftmargin; ay1 = lerp(bottommargin, topmargin, hinc)-t
        ax2 = rightmargin; ay2 = lerp(bottommargin, topmargin, hinc)-t
        px1 = lerp(ax1,ax2,0.25)
        py1 = lerp(ay1,ay2,0.25)+rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        px2 = lerp(ax1,ax2,0.75)
        py2 = lerp(ay1,ay2,0.75)-rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)

        ax1 = leftmargin; ay1 = lerp(topmargin, bottommargin, hinc)+t
        ax2 = rightmargin; ay2 = lerp(topmargin, bottommargin, hinc)+t
        px1 = lerp(ax1,ax2,0.25)
        py1 = lerp(ay1,ay2,0.25)+rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        px2 = lerp(ax1,ax2,0.75)
        py2 = lerp(ay1,ay2,0.75)-rayon*sin(radians(rayon*noise(xoff)));xoff+=xinc 
        bezier(ax1, ay1, px1, py1, px2, py2, ax2, ay2)
        rayon+=4.2
    }
}