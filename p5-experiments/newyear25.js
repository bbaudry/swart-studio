function preload() {
    font = loadFont("./fonts/ChunkFive-Regular.otf");
    fileName = "newyear25"
    sourcecode = loadStrings(fileName + '.js');
}

function setup() {
    //getsvg()
    getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0, 0, 100)
    noFill()
    setTypo()
}

var font
var fSize = 129

function draw() {
    //background(0, 0, 100)
    stroke(0, 0, 0)
    noFill()
    //rect(leftmargin, topmargin, actualwidth, actualheight)
/*    push()
    translate(w, 0)
    rotate(radians(90))
    stroke(0, 0, 0)
    rect(topmargin, leftmargin, actualheight, actualwidth)

    fill(0, 0, 0)
    textFont(font)
    textSize(fSize)*/
    //text("11111101001", topmargin, leftmargin + fSize * 2.5)
    let ikeda = digits[Math.floor(random() * 3)]
    let ryoji = ikeda[Math.floor(random() * ikeda.length)]
    let vera = random() * 5
    let molnar = exp(random() * 5)
    let x1 = ryoji.x + molnar * cos(ryoji.alpha)
    let y1 = ryoji.y + molnar * sin(ryoji.alpha)
    ellipse(x1, y1, vera, vera)


    //pop()
    //noLoop()
}

var digits = []
var onedigit, initialPixelDensity
function setTypo() {
    alpha = 10
    initialPixelDensity = 0.42
    fSize = 129
    var y = topmargin + fSize
    onedigit = font.textToPoints('1', leftmargin, y, fSize, {
        sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    digits.push(onedigit)
    onedigit1 = font.textToPoints('1', 100,y, fSize, {
        sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    digits.push(onedigit1)
    onedigit2 = font.textToPoints('1', 200, y, fSize, {
        sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    digits.push(onedigit2)
}
