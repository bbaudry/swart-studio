var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution 

function hal() {
    background(0,0,0)
//    resolution = Math.floor(random(9,17))
//    vera()
    test()
}



function test(){
    let res=11
    let x,y,pad,stepx,stepy,cx,cy,tx,ty
    stepx=Math.floor(actualwidth/res)
    stepy=stepx
    pad=7
    cx=Math.floor(w*0.5)
    cy=Math.floor(w*0.5)
    stroke(0,100,100)
    fill(0,100,100)
    ellipse(cx,cy,11,11)
    noFill()
    stroke(0,0,100)
    for(let i=0;i<res;i++){
        for(let j=0;j<res;j++){
            x=leftmargin+stepx*i
            y=topmargin+stepy*j
            push()
            tx=x+stepx*0.5
            ty=y+stepy*0.5
            translate(tx,ty)
            let angle = acos((tx-cx)/dist(tx,ty,cx,cy)); console.log(angle)
            //translate(x,y)
            rotate(angle)
            // quad(
            //     x+pad,y+pad,
            //     x+stepx-pad,y+pad,
            //     x+stepx-pad,y+stepy-pad,
            //     x+pad,y+stepy-pad
            // )
            quad(
                -stepx*0.5+pad,-stepy*0.5+pad,
                stepx*0.5-pad,-stepy*0.5+pad,
                stepx*0.5-pad,stepy*0.5-pad,
                -stepx*0.5+pad,stepy*0.5-pad
            )
            pop()
        }
    }
}


/*
* assumes a rectangle canvas in portrait orientation (width < height)
* it selects a point (cx,cy) in the canvas
* then draws a grid, which cells shapes depend on the distance of each cell's corner to (cx,cy)
* these distorted cells create an optical illusion that circles emerge from the grid
* this design is inspired by the work of Victor Vasarely
*/
function vera() {
    var x, y, step, othercolor, maxothercolor, cx, cy, i, maxi, j, maxj, maxdist, m, amp, angle
    // m and amp are two hyperparameters of the algorithm 
    // m determines if the cells grow (neg. value) or decreases (pos. value) when the cell is close to (cx,cy)
    // amp determines the amount of distorsion of each cell
    m = Math.floor(random(1,17)); amp = Math.floor(random(21,67)) //dense in the center
    //m=17;amp=19 //dense towards the edge
    maxi = resolution
    maxj = resolution +3
    othercolor = 0
    maxothercolor = 3
    step = Math.floor(actualwidth / resolution)
    cx = leftmargin + actualwidth * 0.5// random(0.4,0.8)
    cy = topmargin + (step * maxj) * 0.5//random(0.4,0.8)
    maxdist = dist(0, 0, cx, cy)
    for (i = 0; i < maxi; i++) {
        x = leftmargin + i * step
        for (j = 0; j < maxj; j++) {
            y = topmargin + j * step
            maxangle = 360
            // (x,y) is the upper left corner of the cell
            // a, b, c, d are angles computed according to the distance of each corner to (cx,cy)
            a = map(dist(x, y, cx, cy), 0, maxdist, 0, maxangle)
            b = map(dist(x + step, y, cx, cy), 0, maxdist, 0, maxangle)
            c = map(dist(x + step, y + step, cx, cy), 0, maxdist, 0, maxangle)
            d = map(dist(x, y + step, cx, cy), 0, maxdist, 0, maxangle)
            angle=acos((Math.abs(x-cx))/dist(x, y, cx, cy)); console.log(angle)
            pada = m - amp * sin(a)
            padb = m - amp * sin(b)
            padc = m - amp * sin(c)
            padd = m - amp * sin(d)
            random()<0.01?stroke(0,100,100):stroke(0,0,100)
            drawcell(x + pada, y + pada, x + step - padb, y + padb, x + step - padc, y + step - padc, x + padd, y + step - padd, angle)        }
    }
}


// this function fills the cell with vertical lines
function drawcell(x1, y1, x2, y2, x3, y3, x4, y4, angle) {
    let xo,yo,xd,yd,t,tinc
    t=0
    tinc=0.03
    push()
    //rotate(angle)
    while(t<1){
        xo=lerp(x1,x4,t)
        yo=lerp(y1,y4,t)
        xd=lerp(x3,x4,t)
        yd=lerp(y3,y4,t)
        line(xo,yo,xd,yd)
        t+=tinc
    }
    pop()
}