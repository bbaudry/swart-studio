
var w, h
var cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
    //noLoop()
}
 
function centerCanvas() {
    var x = (windowWidth - 800) / 2;
    var y = (windowHeight - 800) / 2;
    cnv.position(x, y);
}

var balles=[]
var offset=90
function ajoute_une_balle(){
    balles.push({
        cx:random(offset,w-offset),
        cy:random(offset),
        vitesse:random(3,7),
        diam:Math.floor(random(50,90)),
        down:true,
        hu:Math.floor(random(0,230))
    })
}

function ajoute_balles(nombre){
    for(var b=1;b<=nombre;b++){
        ajoute_une_balle()
    }
}

function draw() {
    if(frameCount==1){ajoute_balles(42)}
    background(0, 0, 0, 42)
    sol()
    plafond()
    avance_balles()
}

function avance_balles(){
    for(var i=0;i<balles.length;i++){
        var balle=balles[i]
        if(balle.down){balle.cy+=balle.vitesse}
        else{balle.cy-=balle.vitesse}
        rebondi(balle)
        fill(balle.hu,100,100,84);noStroke()
        ellipse(balle.cx,balle.cy,balle.diam,balle.diam)    
    }
}

function rebondi(balle){
    if (balle.cy+balle.diam/2>h && balle.down){
        balle.down=false
    }
    if (balle.cy-balle.diam/2<0 && !balle.down){
        balle.down=true
    }
}

function sol(){
    stroke(50,100,100)
    line(0,h,w,h)
    noStroke()
}

function plafond(){
    stroke(330,100,100)
    line(0,0,w,0)
    noStroke()
}