
var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font, seeds, xoff, xinc
var fSize = 11
var collection_of_works
var index_collection

function preload() {
    artworks = loadJSON("./Artworks.json")
    font = loadFont("./FreeMono.otf");
}
function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h)
    leftmargin = Math.floor(w * 0.03)
    rightmargin = Math.floor(w * 0.97)
    topmargin = Math.floor(h * 0.03)
    bottommargin = Math.floor(h * 0.96)
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    collection_of_works = getArtData()
    xoff = 0.0
    xinc = 0.01
    index_collection = 0
    //frameRate(2)
}


function getArtData(){
    let works_per_year = new Map()
    let date, pieces
    for(let i in artworks){
        date=artworks[i].Date
        if (works_per_year.has(date)){
            pieces=works_per_year.get(date)
            pieces.push(artworks[i].Title)
            works_per_year.set(date,pieces)
        }
        else{
            works_per_year.set(date,[artworks[i].Title])
        }
    }
    let array = Array.from(works_per_year, ([name, value]) => ({ name, value }));
    return array
}

function draw() {
    background(0, 0, 0)
    hal()
    index_collection<collection_of_works.length-1?index_collection++:index_collection=0
    noFill()
    stroke(0,0,100)
    textFont(font)
    textSize(fSize)
    //noLoop()
}
