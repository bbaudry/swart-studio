/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.security.Provider;
import java.util.Random;

public class Winter003 extends PApplet {
  int w = 1000;
  int h = 1000;
  Random alea = new Random();

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);

  }

  @Override
  public void draw() {
    background(210, 90, 90);

    oneIceLayer();
    oneIceLayer();
    save("Winter003.png");
    noLoop();
  }

  private void oneIceLayer() {
    noStroke();
    float i = 0; 
    float j = 0;

    int step = 168; // basic value for width and height of eache quad
    int off = 71; // randomly pick an offset in the [-off,off] range; inv: off<step
    float vera = random(step / 10, step); // width
    float molnar = random(step / 10, step); // height
    while (i < w) {
      while (j < h) {
        float al = random(111, 199);
        fill(0, 0, 100, al);
        vera = random(step / 10, step); 
        molnar = random(step / 10, step); 
        quad(i,j, 
            i + molnar + random(-off, off), j + random(-off, off), 
            i + molnar + random(-off, off), j + vera + random(-off, off), 
            i + random(-off, off), j + vera + random(-off, off));
        j += vera + random(-off, off);
      }
      i += molnar + random(-off, off);
      j = random(-off, off);
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Winter003" };
    Winter003 mySketch = new Winter003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
