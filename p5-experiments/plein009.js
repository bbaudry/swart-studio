
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var resolution, sourcecode
var font
var fSize = 11

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
        sourcecode = loadStrings('plein008-core.js');
}
function setup() {
    w = Math.floor(8.5 * 96)
    h = Math.floor(11 * 96)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);;
    centerCanvas();
    leftmargin = Math.floor(w * 0.05)
    rightmargin = Math.floor(w * 0.95)
    topmargin = Math.floor(h * 0.05)
    bottommargin = Math.floor(h * 0.7)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(3);
    penwidth = 0.04 * 96 // 0.04 inch is 1 mm, the width of stabilo 68/32
    resolution = Math.floor(random([3, 5, 7]))
}

function savesvg() {
    save("plein008.svg");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    //    clemence()
    noFill()
    stroke(0,0,0)
    let magicnumbers=hal()
    let magie="Magic numbers :: "+magicnumbers[0].name+": "+magicnumbers[0].val+"; "+magicnumbers[1].name+": "+magicnumbers[1].val+"; "+magicnumbers[2].name+": "+magicnumbers[2].val+"; "+magicnumbers[3].name+": "+magicnumbers[3].val+"; "+magicnumbers[4].name+": "+magicnumbers[4].val
    magicnumbers=hal()
    magie+='\n'+"Magic numbers :: "+magicnumbers[0].name+": "+magicnumbers[0].val+"; "+magicnumbers[1].name+": "+magicnumbers[1].val+"; "+magicnumbers[2].name+": "+magicnumbers[2].val+"; "+magicnumbers[3].name+": "+magicnumbers[3].val+"; "+magicnumbers[4].name+": "+magicnumbers[4].val
    magie+='\n'+"beautiful noise [almyre::2025]"
    stroke(0, 0, 0); strokeWeight(1)
    let c = showcodeall(leftmargin * 4.2, bottommargin + fSize)
    text(magie, c[0], c[1] + fSize)

    noLoop()
}


function showcodeall(posx, posy) {
    var x, y
    x = posx
    y = posy
    textFont(font)
    textSize(fSize)
    for (b in sourcecode) {
        text(sourcecode[b], x, y)
        y += fSize
    }
    return ([x, y])
}

function clemence() {
    fill(330, 50, 100)
    noStroke()
    let x, y, rayon
    rayon = w * 0.3
    x = w * 0.5
    y = topmargin + rayon
    arc(x, y, rayon * 2, rayon * 2, PI, 2 * PI)

    fill(50, 80, 100)
    x -= rayon
    y += h * 0.1
    rect(x, y, rayon, rayon)
}