
var w, h
var cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
    balle=new Balle(600)
    //noLoop()
}
 
function centerCanvas() {
    var x = (windowWidth - 800) / 2;
    var y = (windowHeight - 800) / 2;
    cnv.position(x, y);
}

var balles=[]
var offset=90
//var balle

function draw() {
    background(0, 0, 0)
    if(frameCount==1){ajouter_des_balles(3)}
    for(var i=0;i<balles.length;i++){
        var balle=balles[i]
    balle.bouge()
    balle.dessine()
    balle.rebondi()
    }
    sol()
    plafond()
}

function sol(){
    stroke(330,100,100)
    line(0,h,w,h)
    noStroke()
}

function plafond(){
    stroke(180,100,100)
    line(0,0,w,0)
    noStroke()
}

function ajouter_des_balles(nombre){
    for(var b=1;b<=nombre;b++){
        console.log("one more "+nombre)
        balles.push(new Balle())
    }
}



function avance_balles(){
    for(var i=0;i<balles.length;i++){
        var balle=balles[i]
        balle.bouge()
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

















function ajouter_une_balle(){
    balles.push({
        cx:random(offset,w-offset),
        cy:random(offset),
        vitesse:random(3,7),
        diam:Math.floor(random(50,90)),
        down:true,
        hu:Math.floor(random(0,230))
    })
}