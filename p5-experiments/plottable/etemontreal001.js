function savesvg() {
    save("etemontreal005.svg");
}

function savepng() {
    save("etemontreal005.png");
}

var font
var fSize = 12
var alea = []
var mainhu = 30
var rarehu = 180
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('etemontreal001-core.js');
}

function draw() {
    background(0, 0, 100)
    /*     cartepostale(globalmargin, globalmargin)
        cartepostale(globalmargin + wpostcard, globalmargin)
        cartepostale(globalmargin, globalmargin + hpostcard)
        cartepostale(globalmargin + wpostcard, globalmargin + hpostcard)
     */
    codeetadresse(globalmargin, globalmargin, destinataires[0])
    codeetadresse(globalmargin + wpostcard, globalmargin, destinataires[1])
    codeetadresse(globalmargin, globalmargin + hpostcard, destinataires[2])
    codeetadresse(globalmargin + wpostcard, globalmargin + hpostcard, destinataires[3])
    noLoop()
}

function codeetadresse(x, y, adresse) {
    stroke(0, 0, 0)
    setmargins(x, y)
    rect(x, y, wpostcard, hpostcard)
    codeagauche()
    adresseadrtoite(adresse)

}

var destinataires = [
    { noms: ["jacques baudry", "françoise burel"], adresse: "15 rue des vedaudais", ville: "35690 Acigné", pays: "FRANCE" },
    { noms: ["martin monperrus"], adresse: "Virebergsvägen 15", ville: "16930 Solna", pays: "SUEDE" },
    { noms: ["marie-cécile mocellin","corentin lemonnier"], adresse: "13 rue glacière", ville: "75013 Paris", pays: "FRANCE" },
    { noms: ["erik natanael gustafsson"], adresse: "orions bälte 38", ville: "136 76 Brandbergen", pays: "SUEDE" },
]

function adresseadrtoite(adresse) {
    var adresse, posx, posy

    fSize = 21
    textFont(font)
    textSize(fSize)
    posx = actualheight * 0.55
    posy = actualwidth * 0.42
    push()
    translate(leftmargin, bottommargin);
    rotate(radians(270))
    for(i=0;i<adresse.noms.length;i++){
        text(adresse.noms[i], posx, posy)
        posy+=1.5*fSize
    }
    text(adresse.adresse, posx, posy)
    posy+=1.5*fSize
    text(adresse.ville, posx, posy)
    posy+=1.5*fSize
    text(adresse.pays, posx, posy)
    pop()
}


function codeagauche() {
    var allcode, c, tw, posx, posy
    posx = 0
    posy = 3 * fSize
    allcode = ''
    fSize = 11
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
        else (text(""), posx, posy)
        posx += tw
    }
    posx = 0
    posy += 2 * fSize + 1
    pop()
}
