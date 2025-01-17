
var w, h
var cnv

function setup() {
    w = 800
    h = 800
    cnv = createCanvas(w, h);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
    balle = new Balle()
    //noLoop()
}

function centerCanvas() {
    var x = (windowWidth - 800) / 2;
    var y = (windowHeight - 800) / 2;
    cnv.position(x, y);
}

var balles = []
var offset = 90
var balle

function draw() {
    background(0, 0, 0)
    if (frameCount == 1) { ajouter_des_balles(11) }
    for (var i = 0; i < balles.length; i++) {
        balle = balles[i]
        balle.dessine()
        balle.bouge()
        balle.rebondi()
    }
    sol()
    plafond()
}













function sol() {
    stroke(330, 100, 100)
    line(0, h, w, h)
    strokeWeight(7)
    noStroke()
}

function plafond() {
    stroke(180, 100, 100)
    line(0, 0, w, 0)
    noStroke()
}

function ajouter_des_balles(nombre) {
    for (var b = 1; b <= nombre; b++) {
        balles.push(new Balle())
    }
}

    

