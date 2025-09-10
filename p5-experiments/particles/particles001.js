
var w, h
var cnv
var walkers, nbwalkers

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(windowHeight, windowHeight);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    background(0, 0, 0)
    nbwalkers=111
    initwalkers()
}

function initwalkers() {
    walkers = []
    for (let i = 0; i < nbwalkers; i++) {
        let walker = new Walker(random(300,500), random(300,500))
        walkers.push(walker)
    }

}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    for (let i = 0; i < nbwalkers; i++) {
        walkers[i].update()
        walkers[i].show()
    }
}

