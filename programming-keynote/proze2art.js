var w, h
var cnv
var testresults= [];
var index;
var table;
var testw,testh;

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    //centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    noFill();
    background(0, 0, 0);
    index=0;
    testw=w*0.5
    testh=h*0.1
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
    translate(w*0.5,h*0.5)
    if(index<testresults.length){
        ikeda(index)
        index++
    }
    else{
        index=0
    }
}

var r=0.1
function ikeda(index) {
    var t = testresults[index]
    noStroke()
    if(t.verdict==1){fill(0,0,100)}
    else{fill(0,0,0)}
    rect(-testw,-testh*0.5,testw,testh)
    if(t.test==1){fill(0,0,100);r+=0.01}
    else{fill(0,0,0);r=0.1}
    rect(0,-testh*r,testw,testh*2*r)
}

class TestExec {
    constructor(x, y) {
      this.verdict = x;
      this.test = y;
    }
}  