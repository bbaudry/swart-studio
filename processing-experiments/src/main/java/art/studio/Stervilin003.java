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
    background(230,10,100);
  }

  @Override
  public void draw() {

  }
  

   public static void main(String[] args) {
    String[] processingArgs = { "Stervilin003" };
    Stervilin003 mySketch = new Stervilin003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
