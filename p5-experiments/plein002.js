
var w, h, boites
var cnv

function setup() {
    w = windowHeight
    h = windowHeight
    cnv = createCanvas(windowHeight, windowHeight);
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    init()
}

function init(){
    boites=[]
    var n=7
    var y1,y2,y3,y4
    y1=0
    y2=0
    while(y1<h-h/n && y2<h-h/n){
        y3=y2+random()*h/n
        y4=y1+random()*h/n
        boites.push(new Boite(0,y1,w,y2,w,y3,0,y4,random([30,120,210,300]),random([0,100]),random([0,100])))
        y1=y4
        y2=y3
    }
    boites.push(new Boite(0,y1,w,y2,w,h,0,h,random(60,180),100,100))
}

function centerCanvas() {
    var x = (windowWidth - windowHeight) / 2;
    var y = (windowHeight - windowHeight) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 0)
    noStroke()
    for(i in boites){
        boites[i].dessine()
    }
    
//    noLoop()
}


class Boite {
    constructor(x1,y1,x2,y2,x3,y3,x4,y4,h,s,b) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.x3 = x3
        this.y3 = y3
        this.x4 = x4
        this.y4 = y4
        this.hu = h
        this.sa = s
        this.br = b
    }

    deforme() {  

    } 

    dessine() {
        stroke(this.hu,this.sa,this.br)
        fill(this.hu,this.sa,this.br)
        quad(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4)
    }

}