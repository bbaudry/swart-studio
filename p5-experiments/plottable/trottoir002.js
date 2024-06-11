function savesvg() {
    save("trottoir002.svg");
}

function savepng() {
    save("trottoir002.png");
}

var font
var fSize = 14
var xoff = 0.0
var inc = 0.03
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir002.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    grid()
    noLoop()
}


function grid() {
    var cx = leftmargin + actualwidth * 0.5
    var cy = topmargin + actualheight * 0.5
    var x1, y1, x2, y2, amplitude1, amplitude2, pas, debut1, debut2
    debut1 = noise(xoff)*360
    for (i = 0; i < 7; i++) {
        amplitude1 = 21 + (i * 19)
        amplitude2 = 21 + ((i+1) * 19)
        pas = 60
        debut2 = noise(xoff)*360
        xoff+=inc
        for(var j=0;j<6;j++){
            var a = debut1+j*pas
            x1 = cx + amplitude1 * cos(radians(a))
            y1 = cy + amplitude1 * sin(radians(a))
            x2 = cx + amplitude1 * cos(radians(a+pas))
            y2 = cy + amplitude1 * sin(radians(a+pas))
            line(x1, y1, x2, y2)
            var deux=debut2+j*pas
            x2 = cx + amplitude2 * cos(radians(deux))
            y2 = cy + amplitude2 * sin(radians(deux))
            line(x1, y1, x2, y2)
        }
        debut1=debut2
    }
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 002). June 2024]"
    text(c, posx, posy)
}