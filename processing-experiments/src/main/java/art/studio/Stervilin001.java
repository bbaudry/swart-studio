/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Stervilin001 extends PApplet {
  int w = 1000;
  int h = 1000;
  int step = 10;
  float x;
  float y;
  float y_offset;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    x=0;
    y=h;
    y_offset=h/10;
    background(230,100,100);
  }

  @Override
  public void draw() {
    stroke(50,100,100);
    line(0,y,w,y);
    y=y-y_offset;
    y_offset=(float)(0.8*y_offset);
  }
  

   public static void main(String[] args) {
    String[] processingArgs = { "Stervilin001" };
    Stervilin001 mySketch = new Stervilin001();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
