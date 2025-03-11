//global variable only used here in the orchestrator sketch
var w, h, cnv, font, sections, nbsectionshorizontal, nbsectionsvertical, config
//global variables that can be used in all sketches
var sectionwidth //width of a section
var sectionheight //height of a section
var sectionduration //duration (in frames) for one section animation
var currentsection //object that 

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
    nbsectionshorizontal = 6
    nbsectionsvertical = 3
    sectionwidth = Math.floor(w / nbsectionshorizontal)
    sectionheight = Math.floor(h / nbsectionsvertical)
    initsections()
    sections=shuffle(sections)
    duration=60*2
    textSize(84)
    textFont(font)
    stroke(0,0,100);
}

function initsections() {
    sections = []
    var x1, y1, x2, y2, x3, y3, x4, y4
    for (var i = 0; i < nbsectionshorizontal; i++) {
        for (var j = 0; j < nbsectionsvertical; j++) {
            if (i == 0) {
                y4 = random(sectionheight * 0.1, sectionheight * 0.9)
            }
            else {
                y4 = sections[(i - 1) * nbsectionsvertical + j].y2
            }
            if (j == 0) {
                x1 = random(sectionwidth * 0.1, sectionwidth * 0.9)
            }
            else {
                x1 = sections[i * nbsectionsvertical + (j - 1)].x3
            }
            var s = {
                x: i * sectionwidth,
                y: j * sectionheight,
                x1: x1,
                y1: 0,
                x2: sectionwidth,
                y2: random(sectionheight * 0.1, sectionheight * 0.9),
                x3: random(sectionwidth * 0.1, sectionwidth * 0.9),
                y3: sectionheight,
                x4: 0,
                y4: y4
            }
            sections.push(s)
        }
    }
}

var index = 0
var counter = 0


function draw() {
    var functionName, fn
    if(counter%duration==0){
        currentsection=sections[index]
        functionName = config[index].setup;
        fn = new Function(`return ${functionName}()`);
        fn();   
        index++
    }
    if(counter%duration>0 ){//&& counter<duration
        functionName = config[index-1].draw;
        fn = new Function(`return ${functionName}()`);
        fn();   
    }
   /* if(counter==duration){
        currentsection=sections[index]
        functionName = config[index].setup;
        fn = new Function(`return ${functionName}()`);
        fn();   
        index++
    }
    if(counter>duration && counter<duration*2){
        functionName = config[index-1].draw;
        fn = new Function(`return ${functionName}()`);
        fn()
    }*/
    if(counter==Object.keys(config).length*duration){
        background(0,0,0)
        counter=0
        index=0
    }
    else{
        counter++
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
