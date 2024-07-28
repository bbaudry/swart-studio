var mainhu = 0
var rarehu = 270

function cartepostale(x, y) {
    noFill()
    setmargins(x, y)
    alea = []
    stroke(mainhu, 100, 100)
    grille()
    stroke(rarehu, 100, 100)
    grille()
    rect(x, y, wpostcard, hpostcard)
    signature()
}

var grid = []
var xoff = 0.0
var xinc = 0.1
function grille() {
    grid = []
    var x, y, i, j, stepx, stepy, cx, cy, rad, grain, p1, p2
    grain = 42
    rad = 5
    stepx = floor(actualwidth / grain)
    stepy = floor(actualheight / grain)
    for (i = 0; i < grain; i++) {
        for (j = 0; j < grain; j++) {
            cx = leftmargin + (i * stepx) + noise(xoff) * stepx; alea.push(cx); xoff += xinc
            cy = topmargin + (j * stepy) + noise(xoff) * stepy; alea.push(cy); xoff += xinc
            grid.push(createVector(cx, cy))
            //ellipse(cx, cy, rad, rad)
            cx = x + random(stepx)
            cy = y + random(stepy)
            //ellipse(cx,cy,rad,rad)
        }
    }
    var red = true
    for (i = 0; i < grid.length - 1; i++) {
        //if (i % grain != grain - 1) { line(grid[i].x, grid[i].y, grid[i + 1].x, grid[i + 1].y) }
        if (i < grid.length - grain && i % grain != grain - 1 && random()<0.42) {
            if(random()>0.21){
            quad(grid[i].x, grid[i].y,
                grid[i + grain].x, grid[i + grain].y,
                grid[i + grain + 1].x, grid[i + grain + 1].y,
                grid[i + 1].x, grid[i + 1].y)
            }
            else{
                colorie(grid[i].x, grid[i].y,
                    grid[i + grain].x, grid[i + grain].y,
                    grid[i + grain + 1].x, grid[i + grain + 1].y,
                    grid[i + 1].x, grid[i + 1].y)    
            }
        }
    }
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.42) { stroke(rarehu, 100, 100) }
    for (var t1 = 0; t1 < 1; t1 += 0.25) {
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
    var credits = "al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ vpype ~ juicy ~ gcode ~ " + alea.length + " random numbers)"
    textFont(font)
    textSize(fSize)
    push()
    translate(rightmargin, bottommargin);
    rotate(radians(270))
    showcredits(0, fSize, title, credits)
    pop()
}
