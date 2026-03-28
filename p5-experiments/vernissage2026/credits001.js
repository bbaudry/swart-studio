
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
    resx=4
    resy=3

}


function draw() {
    background(0, 0, 0)
    fill(0,0,100)
    // initgridleft()
    // showgrid()
    // if(resx<111){
    //     resx++;resy++
    // }
    initgridcenter()
    showgrid()
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
    for(let i=-resx-1;i<resx+1;i++){
        for(let j=-resy-1; j<resy+1;j++){
            let pos=createVector(i*stepx,j*stepy)
            grid.push(pos)
        }
    }

    pop()
}



function showgrid(){
    let index1,index2,index3,index4,white
    white=true
    for(let i=0;i<resx;i++){
        for(let j=0; j<resy;j++){
            index1=i*(resy+1)+j
            index2=(i+1)*(resy+1)+j
            index3=(i+1)*(resy+1)+j+1
            index4=i*(resy+1)+j+1
            if(random()<0.5){
                fill(0,0,100)
                stroke(0,0,100)
            }
            else{
                fill(0,0,0)
                stroke(0,0,0)
            }

            quad(grid[index1].x,grid[index1].y,
                grid[index2].x,grid[index2].y,
                grid[index3].x,grid[index3].y,
                grid[index4].x,grid[index4].y)
        }
    }
}