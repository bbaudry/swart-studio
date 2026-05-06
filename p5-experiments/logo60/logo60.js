
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font, slider
var fSize = 17
var artname = "logo60"

function preload() {
    font = loadFont("./1CamBam_Stick_4.ttf");
}
function setup() {
    w = 800
    h = 800
    // cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    // cnv = createCanvas(w, h).mousePressed(savepng);
    // getpng()
    getsvg()
    setslider()
    generatebutton()
    centerCanvas();
    angleMode(DEGREES)
    leftmargin = 20
    rightmargin = w - leftmargin
    topmargin = 20
    bottommargin = h - leftmargin
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
}

function setslider(){
    slider = createSlider(0, 124, 42);
    slider.changed(() => {
        console.log("Final Value:", slider.value());
        hal()
    });
    label = createSpan("Value: color randomness");
    var x = (windowWidth - w) / 2 - 200;
    var y = h * 0.6
    slider.position(x, y)
}
function generatebutton() {
    genbtn = createButton("generate new");
    var x = (windowWidth - w) / 2 - 200;
    var y = h * 0.5
    genbtn.position(x, y)
    genbtn.mouseClicked(hal);
}
function getsvg() {
    cnv = createCanvas(w, h, SVG);
    imgbtn = createButton("save svg");
    var x = (windowWidth - w) / 2 - 200;
    var y = h * 0.4
    imgbtn.position(x, y)
    imgbtn.mouseClicked(savesvg);
}
function getpng() {
    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    var x = (windowWidth - w) / 2 - 100;
    var y = h * 0.4
    imgbtn.position(x, y)
    imgbtn.mouseClicked(savepng);
}


function savesvg() {
    save(artname + ".svg");
}

function savepng() {
    save(artname + ".png");
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    noFill()
    textFont(font)
    textSize(fSize)
    stroke(300, 100, 100)
    //rect(Math.floor(96*0.5),Math.floor(96*0.5),visiblew,visibleh)
    hal()
    noLoop()
}