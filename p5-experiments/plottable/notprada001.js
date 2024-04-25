function savesvg() {
    save("squigglelines001.svg");
}

function savepng() {
    save("notprada001.png");
}

var font
function preload() {
    font = loadFont("../fonts/1CamBam_Stick_8.ttf");
}


function draw() {
    background(0,0,100)
//    frames()
    stroke(0,0,0)
    destriangles(deslignes(unrond()))
    showknobs()
    noLoop()
}

function frames() {
    rect(0, 0, w, h);
    stroke(0, 100, 100)
    strokeWeight(0.8)
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);
}

knobs=[]
function saveknob(name, value){
    knobs.push({name:name,value:value})
}

function showknobs(){
    textFont(font)
    var fSize = 8
    textSize(fSize)
    text(knobs[0].name, leftmargin, topmargin+actualheight)
    text(knobs[0].value, leftmargin, topmargin+actualheight)
}
function unrond() {
    var cx = random(leftmargin + actualwidth * 0.2, leftmargin + actualwidth * 0.7); saveknob("cx",cx)
    var cy = random(topmargin + actualheight * 0.2, leftmargin + actualwidth * 0.7)
    var diam = 0.21 * actualwidth
    var density = 2 //the largest the least dense
    for (var i = diam; i > 0; i -= density) {
        ellipse(cx, cy, i, i)
    }
    return ([cx, cy, diam])
}


function deslignes(coords) {
    var cx = coords[0]
    var cy = coords[1]
    var diam = coords[2]
    var ix, iy, x1, y1, x2, y2, angle
    angle = random(180)
    uneligne(cx,cy,diam*0.5,diam*1.2,diam*1.5,angle,angle-90,angle+90,11)
    angle += random(90)
    uneligne(cx,cy,diam*0.8,diam*0.8,diam*1.1,angle,angle-42,angle+90,7)
    angle = random(360)
    uneligne(cx,cy,diam*0.8,diam*0.8,diam*1.7,angle,angle-21,angle+172,7)
    return (coords)
}
// draws a line in the vicinity of a circle centered in cx,cy. 
// distance and angle are used to get 3 points: one reference and two others around this reference
function uneligne(cx,cy,distanceaucentre1,distanceaucentre2,distanceaucentre3,angle1,angle2,angle3,epaisseur){
    var ix, iy, x,y,x1, y1, x2, y2
    for (i = 0; i < epaisseur; i+=0.5) {
        ix = cx + (i + distanceaucentre1) * cos(radians(angle1))
        iy = cy + (i + distanceaucentre1) * sin(radians(angle1))
        x = ix + (i + distanceaucentre2) * cos(radians(angle2)); x1=constrain(x,leftmargin,rightmargin)
        y = iy + (i + distanceaucentre2) * sin(radians(angle2)); y1=constrain(y,topmargin,bottommargin)
        x = ix + (i + distanceaucentre3) * cos(radians(angle3)); x2=constrain(x,leftmargin,rightmargin)
        y = iy + (i + distanceaucentre3) * sin(radians(angle3)); y2=constrain(y,topmargin,bottommargin)
        line(x1, y1, x2, y2)
    }
}

function destriangles(coords){
    var cx = coords[0]
    var cy = coords[1]
    var diam = coords[2]
    var milieux = leftmargin + actualwidth * 0.5
    var milieuy = topmargin + actualheight * 0.5
    var x1 = milieux + (milieux - cx)
    var y1 = milieuy + (milieuy - cy)
    var angle=random(360)
    var rad=actualwidth*0.17
    while(rad>1){
        triangle(x1+rad*cos(radians(angle)),y1+rad*sin(radians(angle)),x1+rad*cos(radians(angle+120)),y1+rad*sin(radians(angle+120)),x1+rad*cos(radians(angle+240)),y1+rad*sin(radians(angle+240)))
        rad-=3
        angle+=1
    }
}