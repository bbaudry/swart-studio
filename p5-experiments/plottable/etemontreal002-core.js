var mainhu = 270
var rarehu = 90

function cartepostale(x, y) {
    noFill()
    setmargins(x, y)
    stroke(mainhu, 100, 100)
    alea = []
    grille()
    rect(x, y, wpostcard, hpostcard)
    signature()
}

var grid=[]
var xoff=0.0
var xinc=0.1
function grille(){
    var x,y,stepx,stepy,cx,cy,rad,grain,p1,p2
    grain=11
    rad=5
    stepx = floor(actualwidth/grain)
    stepy = floor(actualheight/grain)
    for(x=leftmargin;x<grain*stepx;x+=stepx){
        for(y=topmargin;y<grain*stepy;y+=stepy){
            stroke(mainhu,100,100)
            cx=x+noise(xoff)*stepx;alea.push(cx);xoff+=xinc
            cy=y+noise(xoff)*stepy;alea.push(cy);xoff+=xinc
            grid.push(createVector(cx,cy))
            ellipse(cx,cy,rad,rad)
            stroke(rarehu,100,100)
            cx=x+random(stepx)
            cy=y+random(stepy)
            //ellipse(cx,cy,rad,rad)
        }
    }
    rad=3
    for(i=0;i<grid.length;i++){
        p1=grid[i]
        p2=grid[floor(random(grid.length))]
        //ellipse(p1.x,p1.y,rad,rad)
        //line(p1.x,p1.y,p2.x,p2.y)
    }
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.42) { stroke(rarehu, 100, 100) }
    for (var t1 = 0; t1 < 1; t1 += 0.05) {
        ox = (1 - t1) * x1 + (t1 * x2)
        oy = (1 - t1) * y1 + (t1 * y2)
        dx = (1 - t1) * x4 + (t1 * x3)
        dy = (1 - t1) * y4 + (t1 * y3)
        line(ox, oy, dx, dy)
    }
    pop()
}


function signature() {
    var title = "~ été à montréal #2  ~"
    var credits =  "al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ vpype ~ juicy ~ gcode ~ " + alea.length + " random numbers)"
    textFont(font)
    textSize(fSize)
    push()
    translate(rightmargin, bottommargin);
    rotate(radians(270))
    showcredits(0, fSize, title, credits)
    pop()
}
