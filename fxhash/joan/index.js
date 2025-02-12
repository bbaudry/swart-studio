
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
    background(220, 100, 90)
    sky()
    noLoop()
}

function sky(){
    stars()
    moon()
}

function moon(){
    var cx = leftmargin+random(0.2,0.8)*actualwidth
    var cy = topmargin+random(0.2,0.4)*actualwidth
    noStroke()
    fill(50,100,100)
    ellipse(cx,cy,42,42)
    
    push();
    fill(0,100,100);
    ellipse(150,200,200);
    canvas.getContext("2d").clip();
    fill(255,100,100)
    ellipse(250,200,200);
    pop();
    
    push();
    fill(20,100,100);
    ellipse(250,200,200);
    canvas.getContext("2d").clip();
    fill(200,100,100)
    ellipse(150,200,200);
    pop();
  
}

function stars(){
    var cx,cy,a,x1,y1
    for (var i=0;i<42;i++){
        cx = leftmargin+random(0.2,0.9)*actualwidth
        cy = topmargin+random(0.2,0.4)*actualwidth
        a=0//Math.floor(random(360))
        stroke(30,100,100)
        for (var j=0;j<6;j++){
            x1=cx+11*cos(a)
            y1=cy+11*sin(a)
            line(cx,cy,x1,y1)
            a+=45+random(-11,11)
        }
    }
}