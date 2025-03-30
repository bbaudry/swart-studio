function savesvg() {
    save("plein001.svg");
}

function savepng() {
    save("plein001.png");
}

var font
var fSize = 13
function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('plein001.js');
}

function showgrid() {
    for (var i = 0; i < gridresolution; i++) {
        for (var j = 0; j < gridresolution; j++) {
            quad(
                grid[i * (gridresolution + 1) + j].x, grid[i * (gridresolution + 1) + j].y,
                grid[(i + 1) * (gridresolution + 1) + j].x, grid[(i + 1) * (gridresolution + 1) + j].y,
                grid[(i + 1) * (gridresolution + 1) + j + 1].x, grid[(i + 1) * (gridresolution + 1) + j + 1].y,
                grid[i * (gridresolution + 1) + j + 1].x, grid[i * (gridresolution + 1) + j + 1].y,
            )
        }
    }
}

function showcredits(posx, posy) {
    var c = "al.my.re :: p5.js :: CamBam Stick :: noise :: vpype [plein 001). March 2025]"
    text(c, posx, posy)
}