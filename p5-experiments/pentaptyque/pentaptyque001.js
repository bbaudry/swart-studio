function savesvg() {
    save("pentaptyque001.svg");
}

function savepng() {
    save("pentaptyque001.png");
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    maxcount = random(39, 45)
}

function draw(){
    drawmask()
    for(var i=0;i<3;i++){
        drawart()
    }
    noLoop()
}

function drawmask(){
    rect(0,0,totalwidth,totalheight)
    for(var i=0; i<5; i++){
        rect(padding,(i+1)*padding+i*h,w,h)
        rect(padding+leftmargin,(i+1)*padding+i*h+topmargin,actualwidth,actualheight)
    }
}

function drawart(){
    for(var i=0; i<5; i++){
        push()
        translate(padding+leftmargin,(i+1)*padding+i*h+topmargin)
        oneptyque()
        pop()
    }
}

function oneptyque(){
    var cx=random(0.1*actualwidth,0.9*actualwidth)
    var cy=random(0.1*actualheight,0.9*actualheight)
    triangle(0,0,cx,cy,0,actualheight)
    triangle(0,0,actualwidth,0,cx,cy)
    triangle(actualwidth,0,actualwidth,actualheight,cx,cy)
    triangle(actualwidth,actualheight,0,actualheight,cx,cy)
}