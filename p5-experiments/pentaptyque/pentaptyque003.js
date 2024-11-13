function savesvg() {
    save("pentaptyque001.svg");
}

function savepng() {
    save("pentaptyque001.png");
}

function setup() {
    getsvg()
    //getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    noFill()
    initfield()
    maxcount = random(39, 45)
    yoff = 0.0

}

var res = 13 //knob: density of the field
//knob: speed to navigate noise. smallest, smoother angle changes
var steplength = 2*res//knob: length of each curve 
var strw = 2 //knob: weight of each curve
var field = []
var nbcols = Math.floor(actualwidth / res) + 1
var nbrows = Math.floor(actualheight / res) + 1
var xoff, yoff


function initfield(noiseres) {
    let angle, row
    field = []
    for (let y = 0; y < nbrows; y++) {
        row = []
        yoff += noiseres
        xoff = 0.0;
        for (let x = 0; x < nbcols; x++) {
            xoff += noiseres
            let ikeda = noise(xoff, yoff)
            angle = map(ikeda, 0.0, 1.0, 0, PI)
            row.push(angle)
            //console.log(xoff+" "+yoff+" "+angle)
        }
        field.push(row)
    }
}


function draw(){
    //drawmask()
    drawart()
    noLoop()
}

function drawmask(){
    rect(0,0,totalwidth,totalheight)
    for(var i=0; i<5; i++){
        rect(padding,(i+1)*padding+i*h,w,h)
        rect(padding+leftmargin,(i+1)*padding+i*h+topmargin,actualwidth,actualheight)
    }
}

function drawart(){
    var noiseres=0.09
    for(var i=0; i<5; i++){
        initfield(noiseres)
        push()
        translate(padding+leftmargin,(i+1)*padding+i*h+topmargin)
        onetyp()
        //drawcurveinfield(Math.floor(nbrows/2),3, 11)
        pop()
        noiseres+=0.1
    }
}

function onetyp(){
    var a,r,x1,y1,x2,y2
    for (let y = 0; y < nbrows; y++) {
        for (let x = 0; x < nbcols; x++) {
            a = field[y][x]
            r = res*2
            push()
            //rect((x*res),(y*res),4*r,4*r)
            x1=x*res
            y1=y*res
            x2=x1+r*cos(a)
            y2=y1+r*sin(a)
            quad(x1,y1,x2,y1,x2,y2,x1,y2)
            //line(x1,y1,x2,y2)
            pop()
        }
    }
}

function drawcurveinfield(row, col, len) {
    strokeWeight(strw)
    stroke(0, 100, 100, 42)
    noFill()
    beginShape()
    x1 = col * res
    y1 = row * res
    console.log("row: " + row + "; col: " + col + "; x1: "+x1+" ; y1: "+y1+"; nbrow: " + nbrows + "; nbcols: " + nbcols)
    curveVertex(x1, y1)
    curveVertex(x1, y1)
    for (let i = 0; i < len; i++) {
        console.log(i+"; row: " + row + "; col: " + col + "; x1: "+x1+" ; y1: "+y1)
        angle = field[row][col]
        x2 = x1 + steplength * cos(angle)
        y2 = y1 + steplength * sin(angle)
        curveVertex(x2, y2)
        if (x2 > w || x2<0) { i = len }
        if (y2 > h || y2<0) { i = len }
        col = Math.floor(x2 / res)//if(x2==0){col=0}else{}
        row = Math.floor(y2 / res)//if(y2==0){row=0}else{}
        x1 = x2
        y1 = y2
    }
    curveVertex(x2, y2)
    curveVertex(x2, y2)
    endShape()
}