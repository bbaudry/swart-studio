let w,h
var rightmargin , leftmargin , topmargin , bottommargin, actualwidth , actualheight 
var cnv, imgbtn

function setup(){
    w=297
    //A3
    w=96*297/25.4//=1122.5
    h=96*420/25.4//=1587.4
    rightmargin=w*0.98
    leftmargin=w*0.02
    topmargin=h*0.02
    bottommargin=h*0.98
    actualwidth=rightmargin-leftmargin
    actualheight=bottommargin-topmargin
    getsvg()
    //getpng()
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
}

function getsvg() {
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    centerCanvas()
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
}

function getpng() {
    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    centerCanvas()
    placebtn();
    imgbtn.mouseClicked(savepng);
}



function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0//(windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}


function savesvg() {
    save("cartes.svg");
}

function savepng() {
    save("cartes.png");
}

function preload() {
    font = loadFont("../p5-experiments/fonts/1CamBam_Stick_4.ttf");
}

let resx,resy
let cellside

function draw(){
    background(0,0,100)
    stroke(0,0,0)
    resx=3
    resy=4  
    cellside=96*90/25.4
    drawgrid()
    noLoop()
}

function drawgrid(){
    let x,y
    noFill()
    for(let i=0;i<resx;i++){
        for(let j=0;j<resy;j++){
            console.log(x+" "+y)
            x=leftmargin+i*cellside
            y=topmargin+j*cellside
            rect(x,y,cellside,cellside)
        }
    }

}