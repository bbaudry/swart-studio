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
    var x1, y1, x2, y2, amplitude, pas, debut
    for (i = 0; i < 17; i++) {
        amplitude = 21 + (i * 19)
        pas = 60
        debut = noise(xoff)*360
        xoff+=inc
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
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 002). June 2024]"
    text(c, posx, posy)
}