//yellow, orange, pink, purple, blue, green
color[] palette = {#FFBE0B,#FB5607,#FF006E,#8338EC,#3A86FF,#38B000};
int w = 840;
int h = 840;
int step = 0;
int maxSteps = 42*4;
int variation = 10;
int radius=0;
float shape;
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
  while (step<maxSteps){
    fill(#000000);
    shape=random(42*2);
    float x = random(42*2,w-42*2);
    float y = random(42*2,h-42*2); 
    if (shape<42){
      //draw rectangle
      if (shape<42/10){radius=4;}
      if (shape<42-16.8){noFill();}
      orientation=random(42);
      if (orientation<42/3){rect(x,y,random(42*5),random(42),radius);}   
      else {rect(x,y,random(42),random(42*5),radius);} 
      radius=0;
    }
    else if (shape<42*1.8){
      //draw line
      if (shape<37.8) {line(x,y,x+random(42*6),y);}
      else {line(x,y,x,y+random(42*4));}
    }
    else{
      //draw circle
      if (shape>80) {fill(#FFBE0B);}
      circle(x,y,random(42*2));
    }
    step++;
  }
  //System.out.println("done!");
  //step=0;
  save("test1.png");
}
