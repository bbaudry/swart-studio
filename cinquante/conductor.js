// Global variable only used here in the orchestrator sketch
var w,h,cnv,police
var score,nbmovements
var currentmovement,currentduration
var counter
var index

async function setup() {
  // Load the font and the configuration file
  police = await loadFont("./FreeMono.otf");
  w = Math.floor(windowWidth);
  h = Math.floor(windowHeight)//O_widthexquis / 1.82);
  cnv = createCanvas(w, h);
  // init frame counter
  counter = 0
  // init indew for current movement
  index = 0
  score = await loadJSON("./score.json");

  // Get the number of artworks
  nbmovements = Object.keys(score).length;


  // Center the canvas
  let x = (windowWidth - w) / 2;
  let y = (windowHeight - h) / 2;
  cnv.position(x, y);
  colorMode(HSB, 360, 100, 100, 250);


  // Initialize drawing parameters
  textSize(42);
  textFont(police);
  stroke(0, 0, 100);


  // Initialize the movements
  initallworks()
}

async function initallworks(){
  // Initialize the artworks
  let promises = [];
  for (let i = 0; i < nbmovements; i++) {
    // Initialize all sketches
    let artCode = score[i].movement;
    let promise = window[artCode]["init"]();
    promises.push(promise);
  }
  await Promise.all(promises);
}

function draw() {
  currentduration=score[0].duration
   drawcorpse()
}


function drawcorpse(){
  // Check if we completed a movement
  if (counter % currentduration == 0 && index==nbmovements) {
    index=0
    // background(0,0,0)
    // fill(330,100,100),noStroke()
    // ellipse(w*0.5,h*0.5,100,100)
    // noLoop()
  }
  if (counter % currentduration == 0 && index < nbmovements) {
    console.log(counter)
    background(0,0,0)
    let artCode = score[index].movement;
    window[artCode]["init"]();
    currentduration=score[index].duration;
    index++;
  }

  // Draw the current section
  if (counter % currentduration > 0) {
    let artCode = score[index - 1].movement;
    window[artCode]["draw"]();
  }
  counter++;
}