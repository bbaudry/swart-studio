//yellow, orange, pink, purple, blue, green
color[] palette = {#FFBE0B,#FB5607,#FF006E,#8338EC,#3A86FF,#38B000};

int w = 840;
int inW = 5*42;
int maxinW = 15*42;
int hor=inW;

int h = 882;
int inH = 5*42;
int maxinH = 15*42;
int vert=inH;

float x;
float y;
int radius=0;
float choice;
float orientation;
float col;
int count=0;

void settings(){
  size(w,h);
}

void setup() {
  frameRate(1);
  fill(#000000);
  noLoop();
}


void draw() {
  background(#FFFFFF);
  while (vert<maxinH){
    while (hor<maxinW){
      x=random(hor,hor+42);
      y=random(vert,vert+42);
      choice=random(42*2);
      shape(x,y);
      count=count+1;
      hor=hor+21;
    }
    hor=inW;
    vert=vert+21;
  }
  System.out.println("done! drew "+count+" shapes");
  save("structure.png");
}

void shape(float x, float y){
  col = random(3);
  fill(palette[int(col)]);
  if (choice<42){//draw rectangle
     rectangle(x,y);
  }
  else if (choice<42*1.2){//draw line
    lin(x,y);
  }
  else if (choice<42*1.7){
    rectCircle(x,y);
  }
  else{//draw circle
    circ(x,y);
  }
}

void rectangle(float x, float y){
  if (choice<42/10){radius=4;}
  if (choice<42-16.8){noFill();}
  orientation=random(42);
  if (orientation<42/3){rect(x,y,random(42*4),random(42/4),radius);}   
  else {rect(x,y,random(42/4),random(42*4),radius);} 
  radius=0;
}

void rectCircle(float x, float y){
  noFill();
  float xStep = random(42*4);
  float yStep = random(42);
  rect(x,y,xStep,yStep);
  float xCenter = x+xStep/2;
  float yCenter = y+yStep/2;
  circle(xCenter,yCenter,random(42/2));
  if (random(21)<7){
    line(x,y,xStep,yStep);
  }
}

void lin(float x, float y){
  if (choice<63) {line(x,y,x+random(-42*2,42*4),y);}
  else {line(x,y,x,y+random(-21,42*3));}
}

void circ(float x, float y){
  if (choice>80) {fill(#8338EC);}
  circle(x,y,random(42*1.5));
}
