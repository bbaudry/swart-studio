function savesvg() {
    save("plein001.svg");
}

function savepng() {
    save("plein001.png");
}

var font
var fSize = 13
var grid = []
var resolution = 9

function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('plein001.js');
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    rect(0, 0, w, h)
    rect(leftmargin,topmargin,actualwidth,actualheight)
    initgrid()
    showgrid()
    textFont(font)
    textSize(fSize)
    coords=showcode(leftmargin,bottommargin+fSize)
    showcredits(coords[0],coords[1])
    noLoop()
}

function initgrid(){
    var cellwidth=Math.floor(actualwidth/resolution)
    var cellheight=Math.floor(actualheight/resolution)
    var x,y,xoff,yoff;
    for(var i=0;i<resolution+1;i++){
        x=leftmargin+i*cellwidth
        if(i>0&&i<resolution+1){x+=random(-10,10)}
        y=0
        yoff=random(-10,10)
        for(var j=0;j<resolution+1;j++){
            y=topmargin+j*cellheight
            if(j>0&&j<resolution+1){y+=yoff}
            grid.push({x:x,y:y})
        }
    }
}

function showgrid(){
    for(var i=0;i<resolution;i++){
        for(var j=0;j<resolution;j++){
            quad(
                grid[i*(resolution+1)+j].x,grid[i*(resolution+1)+j].y,
                grid[(i+1)*(resolution+1)+j].x,grid[(i+1)*(resolution+1)+j].y,
                grid[(i+1)*(resolution+1)+j+1].x,grid[(i+1)*(resolution+1)+j+1].y,
                grid[i*(resolution+1)+j+1].x,grid[i*(resolution+1)+j+1].y,
            )
        }
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [plein 001). March 2025]"
    text(c, posx, posy)
}