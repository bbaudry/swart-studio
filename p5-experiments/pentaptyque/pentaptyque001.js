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
    rect(0,0,w,totalheight)
}