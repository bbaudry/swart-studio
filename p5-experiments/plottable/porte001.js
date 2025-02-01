var w, h, cnv, leftmargin, rightmargin, topmargin, bottommargin, actualwidth, actualheight, imgbtn

function setup() {
    w = Math.floor(96 * 110 / 25.4)
    h = Math.floor(96 * 110 / 25.4)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    leftmargin = 15
    rightmargin = w - 16
    actualwidth = rightmargin - leftmargin
    topmargin = 15
    bottommargin = h - 16
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    angleMode(DEGREES);
    imgbtn = createButton("save svg");
    placebtn();
    imgbtn.mouseClicked(savesvg);
}


function savesvg() {
    save("porte001.svg");
}



function placebtn() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    noFill()
    rect(0, 0, w, h)
    stroke(0, 0, 100)
    field()
    noLoop()
}

function field() {
    var cx, cy, rad1, rad2, x1, y1, x2, y2, x3, y3, x4, y4, anggleinc
    cx = w * 0.5
    cy = h * 0.5
    rad1 = 15
    rad2 = actualwidth * 0.5
    anggleinc = 10
    for (var a = 0; a < 360; a += anggleinc) {
        x1 = cx + rad1 * cos(a)
        y1 = cy + rad1 * sin(a)
        x2 = cx + rad2 * cos(a)
        y2 = cy + rad2 * sin(a)
        x3 = cx + rad1 * cos(a + anggleinc)
        y3 = cy + rad1 * sin(a + anggleinc)
        x4 = cx + rad2 * cos(a + anggleinc)
        y4 = cy + rad2 * sin(a + anggleinc)
        quartier(x1, y1, x2, y2, x3, y3, x4, y4, a, a + anggleinc)
    }
}

var xoff = 0.0
var xinc = 0.05

function quartier(x1, y1, x2, y2, x3, y3, x4, y4, a1, a2) {
    var ox, oy, dx, dy, t, maxt
    t = 0.7 * noise(xoff); xoff += xinc
    maxt = random(0.8, 0.99)
    while (t < maxt) {
        ox = (1 - t) * x1 + (t * x2);
        oy = (1 - t) * y1 + (t * y2);
        dx = (1 - t) * x3 + (t * x4);
        dy = (1 - t) * y3 + (t * y4);
        line(ox, oy, dx, dy)
        t += 0.085 * noise(xoff); xoff += xinc
    }
    var cx,cy
    cx=w*0.5
    cy=h*0.5
    if(a1<45 || a1>315){
        var p = intersect(
            cx,cy,
            cx+2*w*cos(a1),cy+2*w*sin(a1),
            w,0,
            w,h
        )
        ellipse(p.x,p.y,5,5)
    }
}


/*function by Paul Bourke
https://paulbourke.net/geometry/pointlineplane/javascript.txt
returns coordinates where two segments [x1, y1, x2, y2] and [x3, y3, x4, y4] intersect*/
function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

    // Check if none of the lines are of length 0
      if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
          return false
      }
  
      denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  
    // Lines are parallel
      if (denominator === 0) {
          return false
      }
  
      let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
      let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
  
    // is the intersection along the segments
      if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
          return false
      }
  
    // Return a object with the x and y coordinates of the intersection
      let x = x1 + ua * (x2 - x1)
      let y = y1 + ua * (y2 - y1)
  
      return {x, y}
  }