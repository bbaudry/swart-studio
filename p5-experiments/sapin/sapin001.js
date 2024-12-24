function savesvg() {
    save("sapin001.svg");
}

function savepng() {
    save("sapin001.png");
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
}

function draw() {
    stroke(0, 0, 0)
    fill(0,0,100)
    drawframe()
    //drawart()
    noLoop()
}

function drawart(){

}