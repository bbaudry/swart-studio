var w, h 
var cnv
var party

function setup(){
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
}


function draw(){
    if(frameCount==1){setupdarkflowers()}
    drawdarkflowers()
    /*if(frameCount==1){party=1}
    if(frameCount>1&&frameCount<1000){party=2}
    if(frameCount==1000){party=3}
    if(frameCount>1000&&frameCount<2000){party=4}    
    paint()*/
}
function paint(){
    switch(party){
        case 1: setupdancingwithbezier()
            break;
        case 2: drawdancingwithbezier()
            break;
        case 3: setupveraone()
            break;
        case 4: drawveraone()
            break;
    }
}
function windowResized() {
    w = document.documentElement.clientWidth;//width of window that is available for drawing
    h = document.documentElement.clientHeight;//width of window that is available for drawing
    resizeCanvas(w, h);
}
