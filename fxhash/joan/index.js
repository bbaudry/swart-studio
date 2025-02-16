
var w, h, cnv, leftmargin, rightmargin, topmargin, bottommargin, actualwidth, actualheight



function setup() {
    w = 690
    h = 690
    createCanvas(w, h)
    leftmargin = Math.floor(w * 0.01)
    rightmargin = Math.floor(w * 0.99)
    actualwidth = rightmargin - leftmargin
    topmargin = Math.floor(w * 0.01)
    bottommargin = Math.floor(w * 0.99)
    actualheight = bottommargin - topmargin
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(1)
}

var hues = [30, 90, 230]
function draw() {
    background(0, 0, 0)
    sky()
    noLoop()
}

function sky() {
    light()
}

var xoff = $fx.rand()
var xinc = $fx.rand() * 0.5
var stepx = 0.5//0.05
var stepy = 0.01 + $fx.rand() * 0.3
var hu,humin,humax,huup,hudiff
humin=50
humax=180
hu=humin
huup=true
hudiff=0.5
function light() {
    var x1, y1, x2, y2, x3, y3, x4, y4, cx, minx, maxx
    minx = leftmargin
    maxx = leftmargin
    for (var i = 0; i < 1; i++) {
        cx = leftmargin + (i * (stepx * 2) + stepx) * actualwidth
        y1 = topmargin
        y2 = y1
        x1 = cx - noise(xoff) * stepx * actualwidth; xoff += xinc
        x2 = cx + noise(xoff) * stepx * actualwidth; xoff += xinc
        hu=humin
        while (y1 < bottommargin) {
            x3 = cx + noise(xoff) * stepx * actualwidth; xoff += xinc
            y3 = y1 + noise(xoff) * stepy * actualheight; xoff += xinc
            if (y3 >= bottommargin) { y3 = bottommargin }
            x4 = cx - noise(xoff) * stepx * actualwidth; xoff += xinc
            y4 = y3
            //fill(random([30, 120, 210, 300]), random([0, 100, 100]), random([0, 100, 100]))
            grad(x1, y1, x2, y2, x3, y3, x4, y4)
            y1 = y4
            y2 = y3
            x1 = x4
            x2 = x3
        }
    }
}

//hypothesis: y1=y2 and y4=y3 and y4>y1
function grad(x1, y1, x2, y2, x3, y3, x4, y4){
    var diffy=y4-y1
    var ox,oy,dx,dy,inct
    inct=1/diffy
    oy=y1+1
    dy=y2+1
    for(var t=0;t<1;t+=inct){
        ox = (1 - t) * x1 + (t * x4);
        dx = (1 - t) * x2 + (t * x3);
        stroke(hu,100,100)
        line(ox,oy,dx,dy)
        oy++
        dy++
        updatehu()
    }
}

function updatehu(){
    if(huup && hu<humax){
        hu+=hudiff
    }
    else{
        huup=false
        hu-=hudiff
    }
    if(!huup && hu>humin){
        hu-=hudiff
    }
    else{
        huup=true
        hu+=hudiff
        //hudiff=random(0.1,1)
    }
}

function moons() {
    var cx = leftmargin + random(0.2, 0.8) * actualwidth
    var cy = topmargin + random(0.2, 0.4) * actualwidth
    noStroke()

    push();
    fill(220, 40, 100);
    ellipse(150, 200, 200);
    canvas.getContext("2d").clip();
    fill(300, 20, 90)
    ellipse(50, 200, 250);
    pop();

    push();
    fill(20, 100, 100);
    ellipse(250, 200, 200);
    canvas.getContext("2d").clip();
    fill(200, 100, 100)
    ellipse(150, 200, 200);
    pop();

}

