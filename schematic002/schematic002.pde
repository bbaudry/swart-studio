//yellow, orange, pink, purple, blue, green
color[] palette = {#FFBE0B,#FB5607,#FF006E,#8338EC,#3A86FF,#38B000};
int w = 840;
int h = 840;
int step = 0;
int maxSteps = 42*10;
float x;
float y;
int radius=0;
float choice;
float orientation;

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
  while(step<maxSteps){ 
    x=random(42*3,w-42*3);
    y=random(42,h-42*3);
    shape(x,y);
  }
  System.out.println("done!");
  step=0;
  save("structure.png");
}

void shape(float x, float y){
  choice=random(42*2);
     fill(#000000);
 if (choice<42){
    //draw rectangle
    if (choice<42/10){radius=4;}
    if (choice<42-16.8){noFill();}
    orientation=random(42);
    if (orientation<42/3){rect(x,y,random(42*4),random(42/4),radius);}   
    else {rect(x,y,random(42/4),random(42*4),radius);} 
    radius=0;
  }
  else if (choice<42*1.8){
    //draw line
    if (choice<37.8) {line(x,y,x+random(42*6),y);}
    else {line(x,y,x,y+random(42*4));}
  }
  else{
    //draw circle
    if (choice>80) {fill(#38B000);}
    circle(x,y,random(42*2));
  }
  step++;
}
