//yellow, orange, pink, purple, blue, green
//yellow, orange, pink, purple, blue, green
//color[] palette = {#FFBE0B,#FB5607,#FF006E,#8338EC,#3A86FF,#38B000};
//yellow, orange, pink, purple, blue
//color[] palette = {#FFBE0B,#FB5607,#FF006E,#8338EC,#3A86FF};
//white,black
//color[] palette = {#FFFFFF,#000000};
//green,black
color[] palette = {#38B000,#000000};

int w = 42*20;
int h = 42*20;
int step = 42*2;
int colors = palette.length;


void settings(){
  size(w,h);
}

void setup() {
  frameRate(0.5);
  noStroke();
  //noLoop();
}


void draw() {
  background(#FFFFFF);
  int x=0;
  int y=0;
  while (y<=h){
    while (x<w){
      fill(palette[(int)random(colors)]);
      rect(x,y,x+step,y+step);
      fill(#000000);
      x=x+step; 
      fill(palette[(int)random(colors)]);
      quad(x, y, x+step, y-step, x+step, y, x, y+step);
      fill(#000000);
      x=x+step;
    }
    x=0;
    y=y+step;
  }
  save("pavement.png");
}
