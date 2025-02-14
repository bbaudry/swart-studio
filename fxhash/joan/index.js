
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
    noStroke()
}

var hues=[30,90,230]
function draw() {
    background(230, 100, 70)
    sky()
    noLoop()
}

function sky(){
    light()
}

xoff=$fx.rand()
xinc=$fx.rand()*0.5
stepx=0.05
stepy=0.01+$fx.rand()*0.3

function light(){
    var x1,y1,x2,y2,x3,y3,x4,y4,cx,minx,maxx,hu
    minx=leftmargin
    maxx=leftmargin
    for(var i=0;i<10;i++){
        cx=leftmargin+(i*(stepx*1.4)+stepx)*actualwidth
        y1=topmargin
        y2=y1
        x1=cx-noise(xoff)*stepx*actualwidth; xoff+=xinc
        x2=cx+noise(xoff)*stepx*actualwidth; xoff+=xinc
        while(y1<bottommargin){
        x3=cx+noise(xoff)*stepx*actualwidth; xoff+=xinc
        y3=y1+noise(xoff)*stepy*actualheight; xoff+=xinc
        if(y3>=bottommargin){y3=bottommargin}
        x4=cx-noise(xoff)*stepx*actualwidth; xoff+=xinc
        y4=y3
        hu=hues[Math.floor(random(hues.length))]
        fill(random([30,120,210,300]),random([0,100,100]),random([0,100,100]))
        quad(x1,y1,x2,y2,x3,y3,x4,y4)
        y1=y4
        y2=y3
        x1=x4
        x2=x3
    }}
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

