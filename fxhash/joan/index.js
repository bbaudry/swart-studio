
var w, h, cnv, leftmargin, rightmargin, topmargin, bottommargin, actualwidth, actualheight 



function setup() {
    w=690
    h=690
    createCanvas(w, h)
    leftmargin = Math.floor(w*0.01)
    rightmargin = Math.floor(w*0.99)
    actualwidth = rightmargin - leftmargin
    topmargin = Math.floor(w*0.01)
    bottommargin = Math.floor(w*0.99)
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
}


function draw() {
    background(300, 20, 90)
    sky()
    noLoop()
}

function sky(){
    moons()
}

function moons(){
    var cx = leftmargin+random(0.2,0.8)*actualwidth
    var cy = topmargin+random(0.2,0.4)*actualwidth
    noStroke()
    
    push();
    fill(220,40,100);
    ellipse(150,200,200);
    canvas.getContext("2d").clip();
    fill(300, 20, 90)
    ellipse(50,200,250);
    pop();
    
    push();
    fill(20,100,100);
    ellipse(250,200,200);
    canvas.getContext("2d").clip();
    fill(200,100,100)
    ellipse(150,200,200);
    pop();
  
}

