
function hal() {
    var cx, cy, angle1, angle2, angleinc, diam, diaminc, maxdiam, xoff, xinc, magics
    magics=[]
    cx = leftmargin + actualwidth * random(0.3,0.42); magics.push({name:"cx",val:cx})
    cy = topmargin + actualheight  * random(0.3,0.42); magics.push({name:"cy",val:cy})
    xoff = random()*1000; xinc = 0.001; magics.push({name:"xinc",val:xinc})
    angleinc = 60; magics.push({name:"angleinc",val:angleinc})
    diam = actualwidth * 0.01; diaminc = actualwidth * 0.01; magics.push({name:"diaminc",val:diaminc})
    maxdiam = (cx>cy) ? cy*0.9 : cx*0.9
    while(diam<maxdiam){
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
