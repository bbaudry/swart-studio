var bowie
var w,h,cnv

function preload(){
    bowie=loadFont("../fonts/ChunkFive-Regular.otf");
}

function setup() {
    w = windowHeight
    h = windowHeight*0.5
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
    noLoop()
}
 
function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0;
    cnv.position(x, y);
}

function draw(){
    
    head()
    carre()    
    noLoop()
}

function head(){
    textFont(bowie)
    textSize(142)
    noStroke()
    fill(0,0,100)
    text("art",w*0.5-textWidth("art")*0.5,0.25*h)
    text("génératif",w*0.5-textWidth("génératif")*0.5,0.93*h)
}

function carre(){
    console.log("sq")
    var left = 0.35*w
    var top = 0.3*h
    var largeur = 0.28*w
    var hauteur = 0.3*h 
    //fill(0,0,100);rect(left,top,largeur,hauteur)
    var stepw = Math.floor(random(11,13))
    var steph = Math.floor(random(7,11))
    var smallw = largeur/stepw
    var smallh = hauteur/steph
    for(let x=left;x<left+largeur-smallw;x+=smallw){
        for(let y=top;y<top+hauteur;y+=smallh){
            if(random()<0.5){fill(0,0,0);stroke(0,0,0)}
            else{fill(0,0,100);stroke(0,0,100)}
            rect(x,y,smallw,smallh)
        }
    }
}