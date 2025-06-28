
function hal() {
    var cx, cy, angle1, angle2, angleinc, diam, diaminc, xoff, xinc, magics
    stroke(0, 0, 0)
    noFill()
    cx = leftmargin + actualwidth * 0.5
    cy = topmargin + actualheight  * 0.5
    magics=[]
    xoff = 0.0; xinc = 0.0001; magics.push({name:"xinc",val:xinc})
    angleinc = 11; magics.push({name:"angleinc",val:angleinc})
    diam = actualwidth * 0.01; diaminc = actualwidth * 0.003; magics.push({name:"diaminc",val:diaminc})
    while(diam<w*0.9){
        angle2 = 0
        angle1 = Math.floor(noise(xoff) * angleinc); xoff += xinc
        while (angle2 < 360) {
            angle2 = angle1 + Math.floor(noise(xoff) * angleinc); xoff += xinc
            arc(cx, cy, diam, diam, radians(angle1), radians(angle2))
            angle1 = angle2 + Math.floor(noise(xoff) * angleinc); xoff += xinc
        }
        diam+=diaminc;}
    return magics
}
