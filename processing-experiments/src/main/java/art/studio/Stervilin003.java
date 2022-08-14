/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Stervilin003 extends PApplet {
  int w = 1000;
  int h = 1000;
  int steps = 10;


  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    frameRate(5);
  }

  @Override
  public void draw() {
    background(230,10,100);
    float x1=0;// = random(w/200);
    float y1=0;// = random(h/200);
    for (int i=0;i<steps;i++){
      for (int j=0;j<steps;j++){
        leaf(x1+random(w/20),y1+random(h/20));
        y1=y1+h/steps;
      }
      x1=x1+w/steps;
      y1=0;
    }
    
  }
  
  private void leaf(float x1,float y1){
    float x2 = x1+random(2*w/steps);
    float y2 = y1-random(h/20);
    float x3 = x1+random(w/20);
    float y3 = y2+random(2*h/steps);
    noStroke();
    fill(0,0,random(60,90));
    triangle(x1, y1, x2, y2, x3, y3);
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Stervilin003" };
    Stervilin003 mySketch = new Stervilin003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
