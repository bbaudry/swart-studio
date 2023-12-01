var invites
var creditsCounter

function preload() {
    invites = loadStrings('guests.txt');
    bowie=loadFont("../fonts/ChunkFive-Regular.otf");
}

function setupcredits(){
    textFont(bowie)
    textSize(168)
    creditsCounter=0
}

function drawcredits(){
    dec2credits()
    creditsCounter++
}

function dec2credits(){
    if (creditsCounter%4==0 ){
        background(0,0,0)
        fill(1,0,100);
        var friend = Math.floor(random(invites.length))
        console.log("friend :"+invites[friend])
        text(invites[friend], w/2-32*4, h/2);
    }
}
