var xoff = 0.0
var xinc = 1
var grid = []
var resolution = 8

function hal() {
    grille()
}

function grille() {
    let x, y, stepx, stepy, hauteur
    stepx = Math.floor(actualwidth / 15)
    stepy = Math.floor(actualheight / resolution)
    x = leftmargin
    largeur = Math.floor(random(1, 5)) * stepx
    while (x + largeur < rightmargin) {
        y = topmargin
        hauteur = Math.floor(random(1, 5)) * stepy
        while (y + hauteur < bottommargin) {
            rect(x, y, largeur, hauteur)
            y += hauteur
            hauteur = Math.floor(random(1, 5)) * stepy
        }
        rect(x, y, largeur, bottommargin - y)
        x += largeur
        largeur = Math.floor(random(1, 5)) * stepx
    }
}