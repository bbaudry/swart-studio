
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 17
var res=42
var xoff=0.0
var xinc=0.0001

function preload() {
    font = loadFont("../fonts/1CamBam_Stick_4.ttf");
}
function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h)
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 250);
    resx=6
    resy=42
    initgridcenter()
    
}

function draw() {
    background(0, 0, 0)
    fill(0,0,100)
    showgrid()
    updategridcenter()
//    noLoop()
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
