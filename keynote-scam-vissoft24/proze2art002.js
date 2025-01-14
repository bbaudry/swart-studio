var w, h
var cnv
var testresults = [];
var index, indexlo, indexhi;
var table;
var testw, testh, nbrows;

function setup() {
  w = windowWidth
  h = windowHeight
  cnv = createCanvas(w, h);
  //centerCanvas();
  colorMode(HSB, 360, 100, 100, 250);
  noFill();
  background(0, 0, 0);
  index = 0;
  indexhi = 0;
  indexlo = 0;
  nbrows = 100;
  testw = w * 0.5
  testh = h / nbrows
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
    ikedaintense()
    index++
  }
  else {
    index = 0
    indexhi = 0
    indexlo = 0
  }
}

var r = 0.1
function ikedaintense() {
  var t, j
    noStroke()
  console.log(indexhi)
  j = 0
  if (indexhi < nbrows - 1) {
    indexhi++
    for (var i = 0; i < indexhi; i++) {
      t = testresults[i]
      if (t.verdict == 1) {
        fill(0, 0, 100)
      }
      else {
        fill(0, 0, 0)
      }
      rect(0, testh * i, testw, testh)
    }
  }
  else {
    for (var i = indexlo; i < indexhi; i++) {
      t = testresults[i]
      if (t.verdict == 1) { stroke(0,0,100);fill(0, 0, 100) }
      else { stroke(0,0,0);fill(0, 0, 0) }
      rect(0, testh * j, testw, testh)
      j++
    }
    indexlo++; indexhi++;
  }
  t = testresults[indexhi]
  if(indexhi>0){
    if(t.test!=testresults[indexhi-1].test){r=0.1}
  }
  stroke(0,0,100)
  if (t.test == 1) { fill(0, 0, 100); r += 0.01 }
  else { fill(0, 0, 0); r += 0.01 }
  rect(testw, h * 0.5 - testh * r, testw, testh * 2 * r)
  noStroke()
}


class TestExec {
  constructor(x, y) {
    this.verdict = x;
    this.test = y;
  }
}  