function savesvg() {
    save("trottoir001.svg");
}

function savepng() {
    save("trottoir001.png");
}

var font
var fSize = 14
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir001.js');
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
    var x1, y1, x2, y2, pas
    for (i = 0; i < 17; i++){
            pas = 90-(i*4)
            amplitude = 21+(i*17)
            for (var a = 0; a < 360; a += pas) {
            x1 = cx + amplitude * cos(radians(a))
            y1 = cy + amplitude * sin(radians(a))
            x2 = cx + amplitude * cos(radians(a + pas))
            y2 = cy + amplitude * sin(radians(a + pas))
            line(x1, y1, x2, y2)
        }
    }
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 001). June 2024]"
    text(c, posx, posy)
}