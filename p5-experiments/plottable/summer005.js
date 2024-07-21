function savesvg() {
    save("summer005.svg");
}

function savepng() {
    save("summer005.png");
}

var font
var fSize = 12
var alea = []
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('summer005.js');
}

function draw() {
    background(0, 0, 100)
    drawpostcard(globalmargin, globalmargin)
    drawpostcard(globalmargin+wpostcard, globalmargin)
    drawpostcard(globalmargin, globalmargin+hpostcard)
    drawpostcard(globalmargin+wpostcard, globalmargin+hpostcard)
    noLoop()
}

function drawpostcard(x, y) {
    noFill()
    setmargins(x, y)
    onepiece()
    rect(x, y, wpostcard, hpostcard)
    sign()
}
function onepiece(){
    alea = []
    punch()
}

function punch(){
    stroke(0, 0, 0)
    var xoff,yoff,i,j,yinc
    yinc=1+random()
    xoff=floor(actualwidth*0.01)
    i=leftmargin
    while(i<rightmargin-xoff){
        j=bottommargin
        yoff=floor(actualheight*0.001)
        while(j>topmargin-yoff){
            var black=random(); alea.push(black)
            if(black<0.21){
                colorie(i,j,i+xoff,j,i+xoff,j+yoff,i,j+yoff)
            }
            else{
                var bound=random(); alea.push(bound)
                if(bound<0.42){
                    line(i,j,i,j+yoff)
                }
                else{
                    line(i+xoff,j,i,j+yoff)
                }
                if(bound<0.1){
                    console.log("losange")
                    colorie(i,j,i+xoff,j,i,j+yoff,i-xoff,j+yoff)
                }
            }
            yoff++;
            j-=yoff
        }
        xoff++
        i+=xoff
    }
}

var offset=0.0
var xinc=0.01
function punch2(){
    stroke(0, 0, 0)
    var xoff,yoff,i,j,plein
    xoff=floor(actualwidth*0.01)
    i=leftmargin
    while(i<rightmargin-xoff){
        j=bottommargin
        yoff=noise(offset)*11;offset+=xinc; alea.push(yoff)
        while(j>topmargin-yoff){
            plein=random();alea.push(plein)
            if(plein<0.11){
                colorie(i,j,i+xoff,j,i+xoff,j+yoff,i,j+yoff)
            }
            else{
                var bound=random(); alea.push(bound)
                if(bound>0.42){
                    line(i,j,i,j+yoff)
                }
                else{
                    line(i+xoff,j,i,j+yoff)
                }
            }
            j-=yoff
            yoff=noise(offset)*11;offset+=xinc; alea.push(yoff)
        }
        xoff++
        i+=xoff
    }
}


function colorie(x1,y1, x2,y2,x3,y3,x4,y4){
    var ox,oy,dx,dy
    push()
    var red = random(); alea.push(red)
    if(red<0.1){stroke(0,100,100)}
    for(var t1 = 0;t1<1;t1+=0.01){
        ox = (1 - t1) * x1 + (t1 * x2)
        oy = (1 - t1) * y1 + (t1 * y2)
        dx = (1 - t1) * x4 + (t1 * x3)
        dy = (1 - t1) * y4 + (t1 * y3)
        line(ox,oy,dx,dy)
    }
    pop()
}


function sign(){
    var title="[summer005]"
    var credits="al.my.re :: July 2024 (p5.js ~ CamBam Stick ~ gcode ~ juicy ~ " + alea.length + " random numbers)"
    textFont(font)
    textSize(fSize)
    push()
    translate(rightmargin,bottommargin); 
    rotate(radians(270))
    showcredits(0,fSize, title, credits)
    pop()
}
