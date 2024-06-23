function savesvg() {
    save("trottoir001.svg");
}

function savepng() {
    save("trottoir001.png");
}

var font
var fSize = 19
var xoff = 0.0
var inc = 0.005
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir001.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0);
    grid()
    grid()
    textFont(font)
    textSize(fSize)
    coords=showcode(leftmargin,bottommargin+fSize)
    showcredits(coords[0],coords[1])
    noLoop()
}


function grid() {
    var cx = leftmargin + actualwidth * 0.5
    var cy = topmargin + actualheight * 0.5
    var x1, y1, x2, y2, pas, debut, deux
    for (i = 0; i < 17; i++) {
        pas = 90 - (i * 5)
        amplitude = 21 + (i * 17)
        debut=noise(xoff)*360
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
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 001). June 2024]"
    text(c, posx, posy)
}