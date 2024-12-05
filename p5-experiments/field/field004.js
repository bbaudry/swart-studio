function preload() {
    font = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('field003.js');
}

var font
var fSize = 15

function savesvg() {
    save("field003.svg");
}

function savepng() {
    save("field003.png");
}

function setup() {
    //getsvg()
    getpng()
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0,0,0)
    noFill()
}

var nbcells = 5 //knob: density of the field
//knob: speed to navigate noise. smallest, smoother angle changes
var yoff, field


function initgrid(noiseres) {
    let x1, y1, x2, y2, x3, y3, x4, y4, off
    field = []
    yoff = 0.0
    off=3
    x1 = leftmargin
    x4 = leftmargin
    for (let x = 0; x < nbcells; x++) {
        yoff += noiseres
        y1=topmargin
        y2=topmargin
        x2=x1+(actualwidth-(nbcells-1)*off)/nbcells
        x3=x4+(actualwidth-(nbcells-1)*off)/nbcells
        for (let y = 0; y < nbcells-1; y++) {
            y3=y2+(actualheight/nbcells)+(17-noise(yoff)*34); yoff+=noiseres
            y4=y1+(actualheight/nbcells)+(17-noise(yoff)*34); yoff+=noiseres
            field.push({x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,x4:x4,y4:y4})
            y1=y4+off
            y2=y3+off
        }
        y3=bottommargin
        y4=bottommargin
        field.push({x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,x4:x4,y4:y4})
        x1=x2+off
        x4=x3+off
    }
}

function draw() {
    drawframe()
    initgrid(0.1)
    drawart()
    fill(0, 0, 100); stroke(0, 0, 100)
    showcredits(leftmargin, bottommargin * 1.06, "al.my.re :: p5.js :: CamBam Stick [field 003). November 2024]")
    noLoop()
}

function drawart() {
    for(i=0;i<field.length;i++){
        var s=field[i]
        stroke(0,100,100)
        //quad(s.x1,s.y1,s.x2,s.y2,s.x3,s.y3,s.x4,s.y4)
        eye(s)
    }
}

function eye(s){
    var  x1, y1, x2, y2, x3, y3, x4, y4, t, ox, oy, dx, dy, alea
    alea=random()
    if(alea<0.2){
        x1=s.x1;y1=s.y1;x2=s.x2;y2=s.y2;x3=s.x3;y3=s.y3;
    }
    else{
        if(alea<0.4){
            x1=s.x3;y1=s.y3;x2=s.x4;y2=s.y4;x3=s.x1;y3=s.y1;
        }
        else{
            if(alea<0.6){
                x1=s.x4;y1=s.y4;x2=s.x1;y2=s.y1;x3=s.x2;y3=s.y2;
            }
            else{
                x1=s.x2;y1=s.y2;x2=s.x3;y2=s.y3;x3=s.x4;y3=s.y4;
            }
        }
    }
    x4=s.x4;y4=s.y4
    for(t=0;t<1;t+=0.1){
        ox = (1 - t) * x1 + (t * x2);
        oy = (1 - t) * y1 + (t * y2);
        dx = (1 - t) * x2 + (t * x3);
        dy = (1 - t) * y2 + (t * y3);  
        line(ox,oy,dx,dy)  
    }

}
