
function hal() {
    var cx, cy, angle1, angle2, angleinc, diam, diaminc, maxdiam, xoff, xinc, magics
    magics=[]
    cx = leftmargin + actualwidth * 0.5//random(0.42,0.58); 
    magics.push({name:"cx",val:cx})
    cy = topmargin + actualheight  * 0.5//random(0.42,0.58); 
    magics.push({name:"cy",val:cy})
    xoff = random()*1000; xinc = 0.001; magics.push({name:"xinc",val:xinc})
    angleinc = Math.floor(random([30,45,60])); magics.push({name:"angleinc",val:angleinc})
    diam = actualwidth * 0.01; diaminc = actualwidth * 0.01; magics.push({name:"diaminc",val:diaminc})
    maxdiam = (cx>cy) ? cy*1.8 : cx*1.8
    while(diam<maxdiam){
        angle2 = 0
        angle1 = Math.floor(noise(xoff) * angleinc); xoff += xinc
        while (angle1 < 360) {
            angle2 = angle1 + Math.floor(noise(xoff) * angleinc); xoff += xinc
            stroke(50,100,100)
            arc(cx, cy, diam, diam, radians(angle1), radians(angle2))
            angle1 = angle2 + Math.floor(noise(xoff) * angleinc); xoff += xinc
            stroke(300,80,100)
            arc(cx, cy, diam, diam, radians(angle2), radians(angle1))
        }
        diam+=diaminc;}
    return magics
}
