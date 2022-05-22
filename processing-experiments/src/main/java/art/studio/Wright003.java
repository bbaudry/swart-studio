/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Wright003 extends PApplet {
  int w = 42*42;
  int inW = 5*42;
  int maxinW = 35*42;
  int hor=inW;
  
  int h = 42*42;
  int inH = 5*42;
  int maxinH = 35*42;
  int vert=inH;
  
  float x;
  float y;
  int radius=0;
  float choice;
  float orientation;
  float col;
  int count=0;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    frameRate(1);
    colorMode(HSB, 360, 100, 100);
    fill(0, 0, 0);
    noLoop();
  }

  @Override
  public void draw() {
  background(0,0,100);
  while (vert<maxinH){
    while (hor<maxinW){
      x=random(hor,hor+42);
      y=random(vert,vert+42);
      choice=random(42*2);
      shape(x,y);
      count=count+1;
      hor=hor+80;
    }
    hor=inW;
    vert=vert+80;
  }
  save("structure.png");
  }

  void shape(float x, float y){
    fill(67,100,100);
    if (choice<42){//draw rectangle
      rectangle(x,y);
    }
    else if (choice<42*1.1){//draw line
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
    if (orientation<42/3){rect(x,y,random(42*6),random(42),radius);}   
    else {rect(x,y,random(42),random(42*6),radius);} 
    radius=0;
  }
  
  void rectCircle(float x, float y){
    noFill();
    float xStep = random(42*5);
    float yStep = random(42*5);
    rect(x,y,xStep,yStep);
    float xCenter = x+xStep/2;
    float yCenter = y+yStep/2;
    float rad = random(42);
    ellipse(xCenter,yCenter,rad,rad);
    if (random(21)<7){
      line(x,y,x+xStep,y+yStep);
    }
  }
  
  void lin(float x, float y){
    if (choice<63) {line(x,y,x+random(-42*5,42*9),y);}
    else {line(x,y,x,y+random(-42*2,42*5));}
  }
  
  void circ(float x, float y){
    if (choice>80) {fill(230,100,100);}
    float rad = random(42*3);
    ellipse(x,y,rad,rad);
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Wright003" };
    Wright003 mySketch = new Wright003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
