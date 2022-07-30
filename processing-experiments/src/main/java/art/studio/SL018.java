/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class SL018 extends PApplet {
  int w = 1000;
  int h = 1000;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    stroke(0,0,100);
    noFill();
    background(0,0,0);
  }

  @Override
  public void draw() {
    
    float x1 = random(w);
    float y1 = random(h);
    float x2 = x1+random(w-x1);
    float y2 = y1+random(h-y1);
    bezier(x1, y1, x1+w/2, y1*2, x2-w/2, y2, x2, y2);
  }
  

   public static void main(String[] args) {
    String[] processingArgs = { "Wright005" };
    SL018 mySketch = new SL018();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
