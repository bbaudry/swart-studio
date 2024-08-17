function savesvg() {
    save("etemontreal001.svg");
}

function savepng() {
    save("etemontreal001.png");
}

var font
var fSize = 14
var alea = []
var lesBlocs = []

function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('etemontreal004-core.js');
}

function draw() {
    background(0, 0, 100)
    strokeWeight(1.4)
    noFill()
    var midh = (h-(2*hpostcard))/2
    var midw = (w-(3*wpostcard))/3
     stroke(0,50,50)
    rect(midw, midh, wpostcard, hpostcard)
    rect(midw + wpostcard, midh, wpostcard, hpostcard)
    rect(midw + 2*wpostcard, midh, wpostcard, hpostcard)
    rect(midw, midh + hpostcard, wpostcard, hpostcard)
    rect(midw + wpostcard, midh + hpostcard, wpostcard, hpostcard)
    rect(midw + 2*wpostcard, midh + hpostcard, wpostcard, hpostcard)
     
    stroke(0,0,0);
    cartepostale(midw, midh)
    cartepostale(midw + wpostcard, midh)
    cartepostale(midw + wpostcard*2, midh)
    cartepostale(midw, midh + hpostcard)
    cartepostale(midw + wpostcard, midh + hpostcard)
    cartepostale(midw + wpostcard*2, midh + hpostcard)
     
    /*codeetadresse(midw, midh, destinataires[0])
    codeetadresse(midw + wpostcard, midh, destinataires[1])
     codeetadresse(midw, midh + hpostcard, destinataires[2])
    codeetadresse(midw + wpostcard, midh + hpostcard, destinataires[3])
     */noLoop()
}

function colorie(x1, y1, x2, y2, x3, y3, x4, y4) {
    var ox, oy, dx, dy
    push()
    var red = random(); alea.push(red)
    if (red < 0.42) { stroke(0, 100, 100) }
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    for (var t1 = 0; t1 < 1; t1 += 0.05) {
        ox = (1 - t1) * x1 + (t1 * x2)
        oy = (1 - t1) * y1 + (t1 * y2)
        dx = (1 - t1) * x4 + (t1 * x3)
        dy = (1 - t1) * y4 + (t1 * y3)
        line(ox, oy, dx, dy)
    }
    pop()
}

function signature() {
    var title = "~ été à montréal #4  ~"
    var credits = "al.my.re :: August 2024 (p5.js ~ CamBam Stick ~ vpype ~ juicy ~ gcode ~ " + alea.length + " random numbers)"
    textFont(font)
    textSize(fSize)
    push()
    translate(rightmargin, bottommargin);
    rotate(radians(270))
    showcredits(0, fSize, title, credits)
    pop()
}


function codeetadresse(x, y, adresse) {
    setmargins(x, y)
    codeagauche()
    adresseadrtoite(adresse)

}

var destinataires = [
    { noms: ["martin monperrus"], adresse: "Virebergsvägen 15", ville: "16930 Solna", pays: "SUEDE" },
    { noms: ["gaspard d'assignies","elvira periac"], adresse: "43 boulevard de l'estuaire", ville: "44200 Nantes", pays: "FRANCE" },
    { noms: ["jacques baudry", "françoise burel"], adresse: "15 rue des verdaudais", ville: "35690 Acigné", pays: "FRANCE" },
    { noms: ["erik natanael gustafsson"], adresse: "orions bälte 38", ville: "136 76 Brandbergen", pays: "SUEDE" },
    { noms: ["marie-cécile mocellin", "corentin lemonnier"], adresse: "13 rue glacière", ville: "75013 Paris", pays: "FRANCE" },
    { noms: ["anne-gaelle renoullin", "antoine ballouhey"], adresse: "", ville: "", pays: "FRANCE" },
    { noms: ["peter geijerman", "olga geijerman"], adresse: "Grev Turegatan 10C", ville: "114 46 Stockholm", pays: "SUEDE" },
    { noms: ["sandrine baudry"], adresse: "8 rue Mollkirch", ville: "67200 Strasbourg", pays: "FRANCE" },
    { noms: ["dept. informatique et",'recherche opérationelle'], adresse: "pavillon andré-aisenstadt", ville: "Montréal (Qc), H3C 3J7", pays: "CANADA" },
]


function adresseadrtoite(adresse) {
    var adresse, posx, posy

    fSize = 22
    textFont(font)
    textSize(fSize)
    posx = actualheight * 0.55
    posy = actualwidth * 0.42
    push()
    translate(leftmargin, bottommargin);
    rotate(radians(270))
    for (i = 0; i < adresse.noms.length; i++) {
        text(adresse.noms[i], posx, posy)
        posy += 1.5 * fSize
    }
    text(adresse.adresse, posx, posy)
    posy += 1.5 * fSize
    text(adresse.ville, posx, posy)
    posy += 1.5 * fSize
    text(adresse.pays, posx, posy)
    pop()
}


function codeagauche() {
    var allcode, c, tw, posx, posy
    posx = 0
    posy = 3 * fSize
    allcode = ''
    fSize = 13
    for (var i = 0; i < sourcecode.length; i++) {
        var token = sourcecode[i]
        if (token.toString().startsWith("function")) { allcode += "$" }
        var notab = token.toString().replace(/\s/g, '').split('\r\n')[0]
        allcode += notab
    }
    textFont(font)
    textSize(fSize)
    push()
    translate(leftmargin, bottommargin);
    rotate(radians(270))
    for (let i = 0; i < allcode.length; i++) {
        c = allcode.charAt(i)

        tw = textWidth(c)
        if (posx + tw > actualheight * 0.5 || c == "$") {
            posx = 0
            posy += fSize + 1
        }
        if (c != "$") { text(c, posx, posy) }
        else {text("", posx, posy)}
        posx += tw
    }
    posx = 0
    posy += 2 * fSize + 1
    pop()
}
