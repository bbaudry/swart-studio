
var w, h
var cnv
var sourcecode
var font
var res=42
var xoff=0.0
var xinc=0.0001
var textx,textspeed,texty,fSize,begin,end,nbindex,count

function preload() {
    font = loadFont("../fonts/FreeMono.otf");
    sourcecode = loadStrings('credits001.js');
}
function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h)
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 250);
    resx=21
    resy=21
    count=0
    initgridcenter()
    texty=-1
    textspeed=1
    fSize=21
    nbindex=Math.floor(h/fSize)+2
    begin=0
    end=nbindex
}

function draw() {
    background(0, 0, 0)
    fill(0,0,100)
    // if(random()<0.01){
    //     showgrid()
    //     updategridcenter()
    // }
    // if(random()<0.01){
    //     fill(0,100,100); noStroke()
    //     rect(w*0.5-21,0,42,h)
    // }
    updategridcenterikeda()
    showcode()
    count++
    noLoop()
}

let grid,resx,resy

function initgridleft(){
    grid=[]
    let stepx=Math.floor(w/resx)
    let stepy=Math.floor(h/resy)
    for(let i=0;i<resx+1;i++){
        for(let j=0; j<resy+1;j++){
            let pos=createVector(i*stepx,j*stepy)
            grid.push(pos)
        }
    }
}

function initgridcenter(){
    grid=[]
    push()
    translate(w*0.5,h*0.5)
    let stepx=Math.floor(w*0.5/resx)
    let stepy=Math.floor(h*0.5/resy)
    for(let i=-resx;i<resx+1;i++){
        for(let j=-resy; j<resy+1;j++){
            let pos=createVector(i*stepx,j*stepy)
            grid.push(pos)
        }
    }
    pop()
}

function updategridcenterikeda(){
    grid=[]
    let x,y,stepx,stepy,stepinc
    stepinc=42
    noStroke()
    push()
    translate(w*0.5,h*0.5)
    x=-w*0.5
    y=-h*0.5
    stepx=0
    stepy=0
    while(x<w*0.5-stepx){
        stepx=Math.abs(Math.floor(random(0.05,0.1)*x)+4)
        while(y<h*0.5-stepy){
            random()<Math.abs(x/w*0.5)?fill(0,0,100):fill(0,0,0)
            stepy=Math.abs(Math.floor(random(0.1,0.2)*y)+4)
            quad(x,y,x+stepx,y,x+stepx,y+stepy,x,y+stepy)
            y+=stepy   
        }
        x+=stepx
        y=-h*0.5
    }
    pop()
}

function updategridcenter(){
    let index
    push()
    translate(w*0.5,h*0.5)
    for(let i=1;i<resx*2;i++){
        for(let j=0; j<resy*2+1;j++){
            index=i*(resy*2+1)+j
            if(grid[index].x<0){
                grid[index].x=grid[index].x-100/grid[index].x
            }
            if(grid[index].x>0){
                grid[index].x=grid[index].x-100/grid[index].x
            }
        }
    }
    pop()
}


function showgrid(){
    let index1,index2,index3,index4,white
    frameCount%2==0?white=true:white=false
    push()
    translate(w*0.5,h*0.5)
    for(let i=0;i<resx*2;i++){
            white=!white
        for(let j=0; j<resy*2;j++){
            index1=i*(resy*2+1)+j
            index2=(i+1)*(resy*2+1)+j
            index3=(i+1)*(resy*2+1)+j+1
            index4=i*(resy*2+1)+j+1
            if(white){
                fill(0,0,100)
                stroke(0,0,0)
            }
            else{
                fill(0,0,0)
                stroke(0,0,100)
            }
            white=!white
            console.log("x: "+grid[index1].x+"; y: "+grid[index1].y+"; i: "+i+"; j: "+j+"; index: "+index1)
            quad(grid[index1].x,grid[index1].y,
                grid[index2].x,grid[index2].y,
                grid[index3].x,grid[index3].y,
                grid[index4].x,grid[index4].y)
            // ellipse(grid[index1].x,grid[index1].y,11,11)
            // ellipse(grid[index2].x,grid[index2].y,11,11)
            // ellipse(grid[index3].x,grid[index3].y,11,11)
            // ellipse(grid[index4].x,grid[index4].y,11,11)
        }
    }
    pop()
}

function mousePressed() {
    noLoop()
}
function showcode(){
    stroke(0,0,100)
    noFill()
    textFont(font)
    textSize(fSize)
    writecode(0,texty,begin,end)
    // if still showing one line of code
    if(texty%fSize==0){
        begin++
        end++
        texty=-1
    }
    else{
        texty-=2
    }
    // if we have reached the end of the code, then start over
    if(begin==sourcecode.length){
        begin=0
        end=nbindex
    }
}

function writecode(posx, posy, begin, end) {
    var x, y, loc,center
    x = posx
    y = posy
    random()<0.99?center=true:center=false
    for (let b=begin;b<end;b++) {
        loc=sourcecode[b]
        center?x=w*0.5-textWidth(loc)*0.5:x=0
        for(c in loc){
        //     loc[c]==' '?fill(0,100,100):text(loc[c],x, y)
        //     rect(x,y-fSize*0.8,fSize,fSize)
        //     noFill()
        //     x+=fSize
        }
        text(loc,x, y)
        y += fSize
    }
}