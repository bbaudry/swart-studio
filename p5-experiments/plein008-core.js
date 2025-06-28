
function hal() {
    var cx, cy, angle1, angle2, angleinc, diam, diaminc, xoff, xinc
    stroke(0, 0, 0)
    noFill()
    cx = leftmargin + actualwidth * 0.5
    cy = topmargin + actualheight  * 0.5
    xoff = 0.0; xinc = 0.0001
    angleinc = 60
    diam = actualwidth * 0.01; diaminc = actualwidth * 0.003
    while(diam<w*0.9){
        angle2 = 0
        angle1 = Math.floor(noise(xoff) * angleinc); xoff += xinc
        while (angle2 < 360) {
            angle2 = angle1 + Math.floor(noise(xoff) * angleinc); xoff += xinc
            arc(cx, cy, diam, diam, radians(angle1), radians(angle2))
            angle1 = angle2 + Math.floor(noise(xoff) * angleinc); xoff += xinc
        }
        diam+=diaminc;
}}
