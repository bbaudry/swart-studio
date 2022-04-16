package art.studio;

import processing.core.PApplet;

public class Wright004 extends PApplet {
  int w = 42*20;
  int h = 42*20;
  int step = 21;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    noStroke();
    frameRate(2);
  }

  @Override
  public void draw() {
    background(0,0,100);
    float c;
    int x=0;
    int y=0;
    while (y<=h){
      while (x<w){
        c=random(360);
        fill(c,80,80);
        rect(x,y,x+step,y+step);
        fill(0,0,0);
        x=x+step;
        c=random(360);
        fill(c,80,80);
        quad(x, y, x+step, y-step, x+step, y, x, y+step);
        fill(0,0,0);
        x=x+step;
      }
      x=0;
      y=y+step;
    }
    save("Wright004-still-pavement.png");
  }
  

   public static void main(String[] args) {
    String[] processingArgs = { "Wright004" };
    Wright004 mySketch = new Wright004();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
