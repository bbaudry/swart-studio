/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Stervilin003 extends PApplet {
  int w = 1000;
  int h = 1000;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    frameRate(17);
  }

  @Override
  public void draw() {
    background(230,10,100);
    float x1 = random(w/200);
    float y1 = random(h/200);
    leaf(x1,y1);
  }
  
  private void leaf(float x1,float y1){
    float x2 = x1+random(w/10);
    float y2 = y1-random(y1);
    float x3 = x1+random(x1);
    float y3 = y2+random(h/10);
    noStroke();
    fill(0,0,random(40,80));
    triangle(x1, y1, x2, y2, x3, y3);
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Stervilin003" };
    Stervilin003 mySketch = new Stervilin003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
