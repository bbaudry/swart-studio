function savesvg() {
    save("trottoir002.svg");
}

function savepng() {
    save("trottoir002.png");
}

var font
var fSize = 14
var xoff = 0.0
var inc = 0.2
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('trottoir002.js');
}

function draw() {
    background(0, 0, 100)
    stroke(0, 0, 0)
    inc = random(0.42,1.42)
    //initgrid()
    //drawgrid()
    test2()
    noLoop()
}

var grid=[]
var nbpashorizon = 11
var nbpasvertical = 11
var pashorizon = Math.floor(actualwidth/nbpashorizon)
var pasvertical = Math.floor(actualwidth/nbpasvertical)
function initgrid() {
    var x,y,x1,y1,x2,y2,x3,y3,x4,y4
    for(i=0;i<nbpashorizon;i++){
        x=leftmargin+i*pashorizon+random(i*2)
        for(j=0;j<nbpasvertical;j++){
            y=topmargin+j*pasvertical+random(j*2)
            grid.push({x:x,y:y})
        }
        grid.push({x:x,y:bottommargin})
    }
}

function drawgrid() {
    var x,y,x1,y1,x2,y2,x3,y3,x4,y4,index
    index=0
    for(i=0;i<nbpashorizon;i++){
        for(j=0;j<nbpasvertical;j++){
            ellipse(grid[index].x,grid[index].y,5,5)
            index++
        }
    }

}

function test(){
    var x=w*0.5
    var i=0
    var y = topmargin+actualheight*0.5
    while(x>leftmargin){
        x-=Math.exp(i)
        line(x,topmargin,x,bottommargin)
        ellipse(x,y,5,5)
        i+=inc
    }
    x=w*0.5;i=0
    while(x<rightmargin){
        x+=Math.exp(i)
        ellipse(x,y,5,5)
        line(x,topmargin,x,bottommargin)
        i+=inc
    }
    x=w*0.5;i=0
    while(y<bottommargin){
        y+=Math.exp(i)
        ellipse(x,y,5,5)
        line(leftmargin,y,rightmargin,y)
        i+=inc
    }
    y=topmargin+actualheight*0.5;i=0
    while(y>topmargin){
        y-=Math.exp(i)
        ellipse(x,y,5,5)
        line(leftmargin,y,rightmargin,y)
        i+=inc
    }
}

function test2(){
    translate(leftmargin+actualwidth*0.5,topmargin+actualheight*0.5)
    var a,b
    a=0
    for(i=0;i<actualwidth*0.5;i+=Math.exp(a)){
        b=0
        for(j=0;j<actualheight*0.5;j+=Math.exp(b)){
            ellipse(i,j,3,3)
            b+=inc
        }
        b=0
        for(j=0;j>-actualheight*0.5;j-=Math.exp(b)){
            ellipse(i,j,3,3)
            b+=inc
        }
        a+=inc
    }
    a=0
    for(i=0;i>-actualwidth*0.5;i-=Math.exp(a)){
        b=0
        for(j=0;j<actualheight*0.5;j+=Math.exp(b)){
            ellipse(i,j,3,3)
            b+=inc
        }
        b=0
        for(j=0;j>-actualheight*0.5;j-=Math.exp(b)){
            ellipse(i,j,3,3)
            b+=inc
        }
        a+=inc
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [trottoir 002). June 2024]"
    text(c, posx, posy)
}