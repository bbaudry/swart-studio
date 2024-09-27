var w, h
var cnv
var testresults = [];
var index, indexlo, indexhi;
var table;
var testw, testh, nbrows;
var osc;
const now = Tone.now();
function setup() {
  w = windowWidth
  h = windowHeight
  cnv = createCanvas(w, h);
  //centerCanvas();
  colorMode(HSB, 360, 100, 100, 250);
  noFill();
  background(0, 0, 0);
  index = 0;
  nbrows = 100;
  testw = w * 0.5
  testh = h / nbrows
  osc = new Tone.Oscillator().toDestination();
  //frameRate(10)
}

function centerCanvas() {
  var x = (windowWidth - w) / 2;
  var y = (windowHeight - h) / 2;
  cnv.position(x, y);
}


function preload() {
  table = loadTable('./test-results-new.csv', 'header', loadData);
}

// Convert saved Bubble data into Bubble Objects
function loadData(table) {
  let tableRows = table.getRows();
  for (let row of tableRows) {
    // Get verdict, test
    let x = row.getNum('result');
    let y = row.getNum('test');

    // Put object in array
    testresults.push(new TestExec(x, y));

  }
}


function draw() {
  background(0, 0, 0)
  if (index < testresults.length) {
    ikeda(index)
    index++
  }
  else {
    index = 0
  }
}

var r = 1
function ikeda(index) {
  translate(w * 0.5, h * 0.5)
  var t = testresults[index]
  noStroke()
  if (t.verdict == 1) { 
    fill(0, 0, 100) 
    let freq = 220 + random() * 220
    osc = new Tone.Oscillator().toDestination();
  }
  else { fill(0, 0, 0) }
  rect(-testw, -testh, testw, testh * 2)
  if (index > 0) {
    if (t.test != testresults[index - 1].test) { r = 1 }
  }
  if (t.test == 1) { fill(0, 0, 100); r += 0.01 }
  else { fill(0, 0, 0); r += 0.01 }
  stroke(0, 0, 100)
  rect(0, -testh * r, testw, testh * 2 * r)
  noStroke()
}


class TestExec {
  constructor(x, y) {
    this.verdict = x;
    this.test = y;
  }
}  