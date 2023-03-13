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
    colorMode(HSB,360,100,100);
    background(210,90,90);

  }

  @Override
  public void draw() {
    noStroke();
fill(0, 0, 100, 151);
rect(100, 100, 142, 184);
quad(100, 100, 222, 10, 189, 444, 42, 333);
noLoop();
  }


  public static void main(String[] args) {
    String[] processingArgs = { "Winter003" };
    Winter003 mySketch = new Winter003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
