// Global variable only used here in the orchestrator sketch
var w,h,cnv,police
var score,nbparts,currentpart
var counter
async function setup() {
  // Load the font and the configuration file
  police = await loadFont("./FreeMono.otf");
  w = Math.floor(windowWidth);
  h = Math.floor(windowHeight)//O_widthexquis / 1.82);
  cnv = createCanvas(w, h);
  counter = 0
  score = await loadJSON("./score.json");

  // Get the number of artworks
  nbparts = Object.keys(score).length;


  // Center the canvas
  let x = (windowWidth - w) / 2;
  let y = (windowHeight - h) / 2;
  cnv.position(x, y);
  colorMode(HSB, 360, 100, 100, 250);


  // Initialize drawing parameters
  textSize(42);
  textFont(police);
  stroke(0, 0, 100);


  // Initialize the mouvements
  initallworks()
}

async function initallworks(){
  // Initialize the artworks
  let promises = [];
  for (let i = 0; i < nbparts; i++) {
    // Initialize all sketches
    let artCode = score[i].mouvement;
    let promise = window[artCode]["init"]();
    promises.push(promise);
  }
  await Promise.all(promises);
}

function draw() {
   drawcorpse()
   if(index>0){console.log(frameRate()+" "+score[index-1].art_code)}
}

let index = 0;

function drawcorpse(){

  // Check if we need to initialize a new section
  if (counter % 42 == 0 && index < nbparts) {
    let artCode = score[index].mouvement;
    console.log("drawing "+score[index].art_code)
    window[artCode]["init"]();
    index++;
  }

  // Draw the current section
  if (counter % 42 > 0) {
    let artCode = score[index - 1].mouvement;
    window[artCode]["draw"]();
  }
  counter++;
}