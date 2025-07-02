
function hal() {
    var cx, cy, angle1, angle2, angleinc, diam, diaminc, xoff, xinc, magics
    cx = leftmargin + actualwidth * 0.5
    cy = topmargin + actualheight  * 0.5
    magics=[]
    xoff = random()*1000; xinc = 0.0001; magics.push({name:"xinc",val:xinc})
    angleinc = Math.floor(random([30,45,60])); magics.push({name:"angleinc",val:angleinc})
    diam = actualwidth * 0.01; diaminc = actualwidth * 0.005; magics.push({name:"diaminc",val:diaminc})
    while(diam<w*0.9){
        angle2 = 0
        angle1 = Math.floor(noise(xoff) * angleinc); xoff += xinc
        while (angle1 < 360) {
            angle2 = angle1 + Math.floor(noise(xoff) * angleinc); xoff += xinc
            arc(cx, cy, diam, diam, radians(angle1), radians(angle2))
            angle1 = angle2 + Math.floor(noise(xoff) * angleinc); xoff += xinc
        }
        diam+=diaminc;}
    return magics
}
