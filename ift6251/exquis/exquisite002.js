//global variable only used here in the orchestrator sketch
var w, h, cnv, font, sections, nbsectionshorizontal, nbsectionsvertical, config
//global variables that can be used in all sketches
var O_sectionwidth //width of a section
var O_sectionheight //height of a section
var O_sectionduration //duration (in frames) for one section animation
var O_currentsection //object that has data for the section that is currently drawing
var O_counter = 0 //global frame counter


function preload() {
    font = loadFont("./FreeMono.otf");
    config = loadJSON('./exquisite.json');
}

function setup() {
    w = Math.floor(windowWidth * 0.95)
    h = Math.floor(w / 5.48)
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    nbsectionshorizontal = 3
    nbsectionsvertical = 3
    O_sectionwidth = Math.floor(w / nbsectionshorizontal)
    O_sectionheight = Math.floor(h / nbsectionsvertical)
    initsections()
    sections = shuffle(sections)
    O_sectionduration = 60 * 2
    textSize(84)
    textFont(font)
    stroke(0, 0, 100);
}

function initsections() {
    sections = []
    var x1, y1, x2, y2, x3, y3, x4, y4
    for (var i = 0; i < nbsectionshorizontal; i++) {
        for (var j = 0; j < nbsectionsvertical; j++) {
            if (i == 0) {
                y4 = random(O_sectionheight * 0.1, O_sectionheight * 0.9)
            }
            else {
                y4 = sections[(i - 1) * nbsectionsvertical + j].y2
            }
            if (j == 0) {
                x1 = random(O_sectionwidth * 0.1, O_sectionwidth * 0.9)
            }
            else {
                x1 = sections[i * nbsectionsvertical + (j - 1)].x3
            }
            var s = {
                x: i * O_sectionwidth,
                y: j * O_sectionheight,
                x1: x1,
                y1: 0,
                x2: O_sectionwidth,
                y2: random(O_sectionheight * 0.1, O_sectionheight * 0.9),
                x3: random(O_sectionwidth * 0.1, O_sectionwidth * 0.9),
                y3: O_sectionheight,
                x4: 0,
                y4: y4
            }
            sections.push(s)
        }
    }
}

var index = 0


function draw() {
    var functionName, fn
    if (O_counter == Object.keys(config).length * O_sectionduration) {
        //background(0, 0, 0)
        noLoop()
        O_counter = 0
        index = 0
    }
    else {
        if (O_counter % O_sectionduration == 0) {
            O_currentsection = sections[index]
            functionName = config[index].setup;
            fn = new Function(`return ${functionName}()`);
            fn();
            index++
        }
        if (O_counter % O_sectionduration > 0) {
            functionName = config[index - 1].draw;
            fn = new Function(`return ${functionName}()`);
            fn();
        }
        O_counter++
    }
}


function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}
