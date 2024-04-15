var xoff = 0.0
var yoff = 0.0
var yoff2 = 0.0


function savesvg() {
    save("squigglelines001.svg");
}

function savepng() {
    save("squigglelines001.png");
}

var xoff = 0.0
var xinc = 0.001
var y = h * 0.4
var xoff = 0.0
var xinc = 0.1
var yoff = 0.0
var yinc = 0.007

function draw() {
    //background(0, 0, 100)
    stroke(0, 0, 100, 200)
    frames()
    unrond()
    //deslignes()
    //destriangles()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    stroke(0, 100, 100)
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);
}

function unrond(){
    var cx = random(leftmargin+actualwidth*0.2,leftmargin+actualwidth*0.7)
    var cy = random(topmargin+actualheight*0.2,leftmargin+actualwidth*0.7)
    var diam = 0.4*actualwidth
    stroke(50,100,100)
    ellipse(cx,cy,diam,diam)
}
