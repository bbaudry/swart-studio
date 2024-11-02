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
    for(var i=0;i<1;i++){
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
        oneptyque(0,0,actualwidth,actualheight,0)
        pop()
    }
}

function oneptyque(x1,y1,x2,y2,d){
    if(d<4){
        d++
        var cx=random(0.1*actualwidth,0.9*actualwidth)
        var cy=random(0.1*actualheight,0.9*actualheight)
        triangle(x1,y1,x1,y2,cx,cy);oneptyque(x1,y1,cx,y2,d);
        triangle(x1,y1,x2,y1,cx,cy);oneptyque(x1,y1,x2,cy,d);
        triangle(x2,y1,x2,y2,cx,cy);oneptyque(cx,y1,x2,y2,d);
        triangle(x2,y2,x1,y2,cx,cy);oneptyque(x1,cy,x2,y2,d);
    }
}