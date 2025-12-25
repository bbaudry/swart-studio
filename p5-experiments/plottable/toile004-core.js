let xoff, xinc, yoff, yinc, innerradii, outerradii
xoff = 0.0; yoff = 0.0
xinc = 0.001; yinc = 0.6

function hal() {
    push()
    translate(leftmargin+actualwidth*0.5,topmargin+actualheight*0.5)
    //ellipse(0,0,42,42)
    helice()
    pop()
}

function helice(){
    let rotateangle, diameter, cx, cy, rayon
        rayon=0.5*actualwidth*(1 - 2*noise(xoff)); xoff+=xinc
        diameter = actualwidth*0.3*noise(xoff); xoff+=xinc
        rotateangle =360*(1 - 2*noise(xoff)); xoff+=xinc
    for(let i=0;i<533;i++){
        console.log("rayon: "+rayon+"; angle: "+rotateangle+"; width: "+actualwidth)
        cx=rayon*cos(rotateangle)
        cy=rayon*sin(rotateangle)
        ellipse(cx,cy,diameter,diameter)
//        ellipse(cx,cy,3,3)
        rayon=0.5*actualwidth*(1 - 2*noise(xoff)); xoff+=xinc
        diameter = actualwidth*0.5*noise(xoff); xoff+=xinc
        rotateangle =720*(1 - 2*noise(xoff)); xoff+=xinc
    }
}


