
function hal() {
    var cx, cy, angle1, angle2, angleinc, diam, diaminc, xoff, xinc, magics, rad1, rad2
    cx = leftmargin + actualwidth * 0.5
    cy = topmargin + actualheight  * 0.5
    magics=[]
    xoff = random()*1000; xinc = 0.0001; magics.push({name:"xinc",val:xinc})
    angleinc = Math.floor(random([30,45,60])); magics.push({name:"angleinc",val:angleinc})
    diam = actualwidth * 0.01; diaminc = penwidth*3; magics.push({name:"diaminc",val:diaminc})
    while(diam<w*0.65){
        angle2 = 0
        angle1 = Math.floor(noise(xoff) * angleinc); xoff += xinc
        while (angle1 < 360) {
            angle2 = angle1 + Math.floor(noise(xoff) * angleinc); xoff += xinc
        rad1=diam+Math.abs(cos(radians(angle1))*w*0.3)
        rad2=diam+Math.abs(cos(radians(angle2))*w*0.3)
            arc(cx, cy, rad1, rad2, radians(angle1), radians(angle2))
            angle1 = angle2 + Math.floor(noise(xoff) * angleinc); xoff += xinc
        }
        diam+=diaminc;
    }
    return magics
}
