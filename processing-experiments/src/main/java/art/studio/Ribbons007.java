/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons007 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  float rad = 21;
  float xorig = 100;
  float yorig = 100;

  Random alea = new Random();

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(0, 0, 0);
    noFill();
  }

  @Override
  public void draw() {
    ribbon();
    if(alea.nextBoolean()){xorig+=alea.nextFloat();}
    else{yorig+=alea.nextFloat();}
  }

  private void ribbon(){
    float cx1,cy1;
    float cx2,cy2;
    cx1 = xorig + alea.nextInt(100); cy1 = yorig + alea.nextInt(100);
    cx2 = xorig + alea.nextInt(100); cy2 = yorig + alea.nextInt(100);
    double d = Math.sqrt((cx1 - cx2) * (cx1 - cx2) + (cy1 - cy2) * (cy1 - cy2));
    if(d<rad+rad){stroke(0,0,100, 100); line(cx1,cy1,cx2,cy2);}
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons007" };
    Ribbons007 mySketch = new Ribbons007();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
