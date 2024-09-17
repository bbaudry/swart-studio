var w, h
var cnv
var x, y
var testresults= [];
var iter;
var table;

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    //centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    noFill();
    background(0, 0, 0);
    iter=0;
    frameRate(10)
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}


function preload() {
    table = loadTable('./fakeproze.csv', 'header', loadData);
  }
  
  // Convert saved Bubble data into Bubble Objects
  function loadData(table) {
    let tableRows = table.getRows();
    for (let row of tableRows) {
      // Get verdict, test
      let x = row.getNum('passfail');
      let y = row.getNum('testcase');
  
      // Put object in array
      testresults.push(new TestExec(x, y));
      
    }
  }


function draw() {
    background(0, 0, 0)
    console.log(testresults.length)
    if(iter<testresults.length){
        ikeda(iter)
        iter++
    }
    else{
        noLoop()
    }
}



function ikeda(index) {
    var t = testresults[index]
    noStroke()
    console.log(t.verdict)
    if(t.verdict==1){fill(0,0,100)}
    else{fill(0,0,0)}
    rect(0,0,300,300)
}

class TestExec {
    constructor(x, y) {
      this.verdict = x;
      this.test = y;
    }
}  