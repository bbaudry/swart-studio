
function cartepostale(x, y) {
    setmargins(x, y)
    vera()
    signature()
}

function vera(){
    var cx = leftmargin + actualwidth*random(0.42,0.57)
    var cy = topmargin + actualheight*random(0.42,0.57)
    var a = random(360)
    ellipse(cx,cy,42,42)
    var x = cx+21*cos(a)
    var y = cy+21*sin(a)
    ellipse(x,y,12,12)
}