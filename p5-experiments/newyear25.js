function preload() {
    font = loadFont("./fonts/FreeMono.otf");//ChunkFive-Regular, CNCHero-TallandHandsome-Regular
    titlefont = loadFont("./fonts/1CAMBam_Stick_9.ttf");
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
    var y1, y2
    y1 = Math.floor(random(topmargin + actualheight * 0.21, topmargin + actualheight * 0.42))
    y2 = Math.floor(random(topmargin + actualheight * 0.49, topmargin + actualheight * 0.87))
    horizoneast = { y1: y1, y2: y2 }
    y1 = Math.floor(random(topmargin + actualheight * 0.21, topmargin + actualheight * 0.42))
    y2 = Math.floor(random(topmargin + actualheight * 0.49, topmargin + actualheight * 0.87))
    horizonwest = { y1: y1, y2: y2 }
}

var font, titlefont
var fSize = 284
var horizonwest, horizoneast
function draw() {
    stroke(0, 0, 0)
    noFill()
    var year = []
    var points, diam
    points = font.textToPoints('111', leftmargin + actualwidth * 0.27, topmargin + actualheight * 0.33, fSize, { sampleFactor: 0.05 });
    year.push(points)
    points = font.textToPoints('111', leftmargin + actualwidth * 0.27, topmargin + actualheight * 0.49, fSize, { sampleFactor: 0.05 });
    year.push(points)
    points = font.textToPoints('010', leftmargin + actualwidth * 0.27, topmargin + actualheight * 0.66, fSize, { sampleFactor: 0.05 });
    year.push(points)
    points = font.textToPoints('01', leftmargin + actualwidth * 0.34, topmargin + actualheight * 0.82, fSize, { sampleFactor: 0.05 });
    year.push(points)
    for (var i = 0; i < 168; i++) {
        bris(year)
    }
    textFont(titlefont)
    textSize(17)
    fill(0, 0, 0)
    credit = "al.my.re"
    text(credit, rightmargin - textWidth(credit), bottommargin)
    noLoop()
}

var xoff = 0.0
var xinc = 0.05

function bris(year) {
    var x1, y1, x2, y2, x3, y3, x4, y4, t, sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4
    if (random() < 0.5) {
        x1 = leftmargin
        y1 = topmargin
        x2 = rightmargin
        y2 = horizoneast.y1
        x3 = rightmargin
        y3 = horizoneast.y2
        x4 = leftmargin
        y4 = bottommargin * 0.95
    }
    else {
        x1 = leftmargin
        y1 = horizonwest.y1
        x2 = rightmargin
        y2 = topmargin
        x3 = rightmargin
        y3 = bottommargin * 0.95
        x4 = leftmargin
        y4 = horizonwest.y2
    }
    t = noise(xoff); xoff += xinc
    sx1 = (1 - t) * x1 + (t * x4);
    sy1 = (1 - t) * y1 + (t * y4);
    sx2 = (1 - t) * x2 + (t * x3);
    sy2 = (1 - t) * y2 + (t * y3);
    t += noise(xoff) * 0.07; xoff += xinc//random(0.01, 0.07)
    sx3 = (1 - t) * x2 + (t * x3);
    sy3 = (1 - t) * y2 + (t * y3);
    sx4 = (1 - t) * x1 + (t * x4);
    sy4 = (1 - t) * y1 + (t * y4);
    quad(sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4)
    var vera, molnar, carre
    for (var kyoto = 0; kyoto < 25; kyoto++) {
        vera = Math.floor(random(year.length))
        molnar = Math.floor(noise(xoff) * year[vera].length); xoff += xinc
        carre = Math.floor(random(7 + noise(xoff) * 42)); xoff += xinc
        rect(year[vera][molnar].x, year[vera][molnar].y, carre, carre)
    }
    /*
        for (var i=0;i<year.length;i++) {
            for (let p of year[i]) {
                diam = Math.floor(random(7, 21))
                if(random()<0.5){
                    rect(p.x, p.y, diam, diam)
                    console.log("rect")
                }
            }
        }
    */
}