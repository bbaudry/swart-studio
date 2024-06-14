function savesvg() {
    save("trottoir002.svg");
}

function savepng() {
    save("trottoir002.png");
}

var font
var fSize = 14
var xoff = 0.0
var inc = 0.1
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir002.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    initgrid()
    drawgrid()
    noLoop()
}

var grid=[]
var nbpashorizon = 11
var nbpasvertical = 11
var pashorizon = Math.floor(actualwidth/nbpashorizon)
var pasvertical = Math.floor(actualwidth/nbpasvertical)
function initgrid() {
    var x,y,x1,y1,x2,y2,x3,y3,x4,y4
    for(i=0;i<nbpashorizon;i++){
        x=leftmargin+i*pashorizon+random(i*2)
        for(j=0;j<nbpasvertical;j++){
            y=topmargin+j*pasvertical+random(j*2)
            grid.push({x:x,y:y})
        }
        grid.push({x:x,y:bottommargin})
    }
}

function drawgrid() {
    var x,y,x1,y1,x2,y2,x3,y3,x4,y4,index
    index=0
    for(i=0;i<nbpashorizon;i++){
        for(j=0;j<nbpasvertical;j++){
            ellipse(grid[index].x,grid[index].y,5,5)
            index++
        }
    }

}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 002). June 2024]"
    text(c, posx, posy)
}