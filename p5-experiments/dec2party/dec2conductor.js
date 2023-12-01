var w, h 
var cnv
var party

function setup(){
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
}

/*TODO: 
translate Sand020.java, Sand022.java, SL013,SL014,SL015
translate Ribbons003.java (possible conclusion)
create one conclusion piece with credits
*/

/*
dancingwithbezier 1600 frames
dakflowers2 7000 frames
*/

var durationDancingWithBezier = 1600
var durationDarkFlowers2 = 7000
var durationNeonFLower = 2400
var durationCredits = 4000
function draw(){
    if(frameCount==1){setupcredits()}
    if(frameCount>1&&frameCount<4000){drawcredits()}
/*    if(frameCount==1){setupdancingwithbezier()}
    if(frameCount>1&&frameCount<1600){drawdancingwithbezier()}
    if(frameCount==1600){setupdarkflowers2()}
    if(frameCount>1600&&frameCount<8600){drawdarkflowers2()}
    if(frameCount==8600){setupneonflower()}
    if(frameCount>8600&&frameCount<11000){drawneonflower()}*/
}


function windowResized() {
    w = document.documentElement.clientWidth;//width of window that is available for drawing
    h = document.documentElement.clientHeight;//width of window that is available for drawing
    resizeCanvas(w, h);
}
