
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

var hues=[30,50,90,230,330]
function draw() {
    background(300, 20, 90)
    sky()
    noLoop()
}

function sky(){
    light()
}

function light(){
    var x1,y1,x2,y2,x3,y3,x4,y4,minx,maxx,hu
    x1=leftmargin+0.1*actualwidth
    y1=topmargin
    x2=x1+random(0.1,0.2)*actualwidth
    y2=y1
    minx=leftmargin
    maxx=leftmargin
    while(y1<bottommargin){
        x3=x2+random(-0.03,0.03)*actualwidth
        y3=y1+random(0.1,0.2)*actualwidth
        x4=x1+random(-0.03,0.03)*actualwidth
        y4=y3
        hu=hues[Math.floor(random(hues.length))]
        fill(hu,100,100)
        quad(x1,y1,x2,y2,x3,y3,x4,y4)
        y1=y4
        y2=y3
        x1=x4
        x2=x3
    }
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

