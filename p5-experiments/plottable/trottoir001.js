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
    var x1, y1, x2, y2, pas, debut, deux
    for (i = 0; i < 17; i++) {
        pas = 90 - (i * 4)
        amplitude = 21 + (i * 17)
        debut=random(360)
        for (var a = debut; a < debut+360; a += pas) {
            x1 = cx + amplitude * cos(radians(a))
            y1 = cy + amplitude * sin(radians(a))
            if(a+pas>debut+360){deux=debut}else{deux=a+pas}
            x2 = cx + amplitude * cos(radians(deux))
            y2 = cy + amplitude * sin(radians(deux))
            line(x1, y1, x2, y2)
        }
    }
}


function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 001). June 2024]"
    text(c, posx, posy)
}