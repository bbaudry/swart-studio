
var w, h
var cnv
var x, y
var xoff, yoff
var step, stepx, stepy

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    //centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    noFill();
    background(0, 0, 0)
    init(left,w*0.25)
    init(right,w*0.75)
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}

var right = []
var left = []
function init(side,cx){
    var sidew, sideh,y
    sidew=w*0.5
    sideh=random(0.01,0.07)*h
    y=sideh*0.5
    while(y<h){
        side.push({x1:cx-sidew*0.5,y1:y-sideh*0.5,
            x2:cx+sidew*0.5,y2:y-sideh*0.5,
            x3:cx+sidew*0.5,y3:y+sideh*0.5,
            x4:cx-sidew*0.5,y4:y+sideh*0.5,
        })
        y+=sideh*0.5
        sideh=random(0.01,0.07)*h
        y+=sideh*0.5
    }   
}

function drawside(side){
    noStroke()
    for(i=0;i<side.length;i++){
        var cur=side[i]
        if(random()<0.5){fill(0,0,0)}
        else{fill(0,0,100)}
        quad(cur.x1,cur.y1,cur.x2,cur.y2,cur.x3,cur.y3,cur.x4,cur.y4)
    }
}

function draw() {
    console.log(left.length)
    background(0, 0, 0)
    //drawside(left)
    //drawside(right)
    //column(w*0.75)
    //noLoop()

   ikeda(w*0.25,h*0.5)
    ikeda(w*0.75,h*0.5)
}



function ikeda(cx,cy){
    var cx,cy,xoff,yoff,ikedawidth,ikedaheight
    xoff=w*0.25
    yoff=h*random(0.001,0.1)
    ikedawidth=2*xoff
    ikedaheight=2*yoff
    fill(0,0,100)
    if(random()<0.1){fill(0,0,0)}
    rect(cx-xoff,cy-yoff,ikedawidth,ikedaheight)
}



function ikeda2(cx, cy, ikedaw,left) {
    let y=cy
    let ryoji=h*0.05
    noStroke()
    if(left){
    while(y<h){
        random()<0.1?fill(0,0,100):fill(0,0,0)
        rect(cx,y,ikedaw,ryoji)
        y+=noise(xoff)*(h*0.001);xoff+=xinc
    }}
    else{
    while(y<h){
        random()<0.4?fill(0,0,100):fill(0,0,0)
        rect(cx,y,ikedaw,ryoji)
        y+=noise(xoff)*(h*0.2);xoff+=xinc
    }}
}