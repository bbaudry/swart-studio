var w, h 
var cnv


function setup(){
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);

}

function draw(){
    if(frameCount==1){setupdancingwithbezier()}
    if(frameCount<100){drawdancingwithbezier()}
    if(frameCount==100){setupveraone()}
    if(frameCount>=100&&frameCount<200){drawveraone()}    
}