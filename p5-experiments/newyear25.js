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
var fSize = 233

function draw() {
    stroke(0, 0, 0)
    noFill()
    var year = []
    var points, diam
    points = font.textToPoints('111', leftmargin+actualwidth*0.27, topmargin + actualheight*0.33, fSize, { sampleFactor: 0.05 });
    year.push(points)
    points = font.textToPoints('111', leftmargin+actualwidth*0.27, topmargin + actualheight*0.49, fSize, { sampleFactor: 0.05 });
    year.push(points)
    points = font.textToPoints('010', leftmargin+actualwidth*0.27, topmargin + actualheight*0.66, fSize, { sampleFactor: 0.05 });
    year.push(points)
    points = font.textToPoints('01', leftmargin+actualwidth*0.34, topmargin + actualheight*0.82, fSize, { sampleFactor: 0.05 });
    year.push(points)
    for (var i = 0; i < 2025; i++) {
        bris(year)
    }
/*    for (var i=0;i<year.length;i++) {
        for (let p of year[i]) {
            diam = Math.floor(random(7, 21))
            rect(p.x, p.y, diam, diam);
        }
    }*/
    noLoop()
}

function bris(year) {
    var x1, y1, x2, y2, x3, y3, x4, y4, t, sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4
    if (random() < 0.5) {
        x1 = leftmargin
        y1 = topmargin
        x2 = rightmargin
        y2 = Math.floor(random(topmargin + actualheight * 0.21, topmargin + actualheight * 0.42))
        x3 = rightmargin
        y3 = Math.floor(random(topmargin + actualheight * 0.49, topmargin + actualheight * 0.87))
        x4 = leftmargin
        y4 = bottommargin * 0.95
    }
    else {
        x1 = leftmargin
        y1 = Math.floor(random(topmargin + actualheight * 0.21, topmargin + actualheight * 0.42))
        x2 = rightmargin
        y2 = topmargin
        x3 = rightmargin
        y3 = bottommargin * 0.95
        x4 = leftmargin
        y4 = Math.floor(random(topmargin + actualheight * 0.49, topmargin + actualheight * 0.87))
    }
    t = random()
    sx1 = (1 - t) * x1 + (t * x4);
    sy1 = (1 - t) * y1 + (t * y4);
    sx2 = (1 - t) * x2 + (t * x3);
    sy2 = (1 - t) * y2 + (t * y3);
    t += random(0.01, 0.07)
    sx3 = (1 - t) * x2 + (t * x3);
    sy3 = (1 - t) * y2 + (t * y3);
    sx4 = (1 - t) * x1 + (t * x4);
    sy4 = (1 - t) * y1 + (t * y4);
    quad(sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4)
    var vera = Math.floor(random(year.length))
    var molnar = Math.floor(random(year[vera].length))
    var diam = Math.floor(random(7, 21))
    rect(year[vera][molnar].x, year[vera][molnar].y, diam, diam)
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