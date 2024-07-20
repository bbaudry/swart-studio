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
    stroke(0, 100, 100)
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
    var xoff,yoff,i,j
    xoff=floor(actualwidth*0.01)
    //quad(leftmargin,topmargin,rightmargin,topmargin,rightmargin,bottommargin,leftmargin,bottommargin)
    i=leftmargin
    while(i<rightmargin-xoff){
        j=topmargin
        yoff=floor(actualheight*0.001)
        while(j<bottommargin-yoff){
            var black=random()
            alea.push(black)
            if(black<0.42){
                colorie(i,j,xoff,yoff)
            }
            else{
                var bound=random()
                if(bound<0.51){
                    line(i,j,i,j+yoff)
                }
                else{
                    line(i+xoff,j,i,j+yoff)
                }
            }
            yoff++
            j+=yoff
        }
        xoff++
        i+=xoff
    }
}

function colorie(x,y,largeur,hauteur){
    for(var vera = 0;vera<largeur;vera+=1){
        line(x+vera,y,x+vera,y+hauteur)
    }
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
