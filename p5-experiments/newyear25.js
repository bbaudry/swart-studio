function preload() {
    font = loadFont("./fonts/FreeMono.otf");//ChunkFive-Regular, CNCHero-TallandHandsome-Regular
    fileName = "newyear25"
    sourcecode = loadStrings(fileName + '.js');
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0, 0, 100)
    noFill()
}

var font
var fSize = 129

function draw() {
    stroke(0, 0, 0)
    noFill()
    bris()
    bris()
    bris()
    let points = font.textToPoints('111111', leftmargin, topmargin + fSize, fSize, { sampleFactor: 0.05 });
    let points2 = font.textToPoints('01001', leftmargin, topmargin + 2 * fSize, fSize, { sampleFactor: 0.05 });
    var diam
    for (let p of points) {
        diam = Math.floor(random(1, 11))
        rect(p.x, p.y, diam, diam);
    }
    for (let p of points2) {
        diam = Math.floor(random(1, 11))
        rect(p.x, p.y, diam, diam);
    }
    noLoop()
}

function bris(){
    var x1,y1,x2,y2,x3,y3,x4,y4
    x1=leftmargin
    y1=topmargin
    x2=rightmargin
    y2 = Math.floor(random(topmargin+actualheight*0.07,topmargin+actualheight*0.42))
    x3 = rightmargin
    y3 = Math.floor(random(topmargin+actualheight*0.49,topmargin+actualheight*0.99))
    x4 = leftmargin
    y4 = bottommargin

    quad(x1,y1,x2,y2,x3,y3,x4,y4)
}