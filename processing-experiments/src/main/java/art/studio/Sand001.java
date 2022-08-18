/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Sand001 extends PApplet {
  int w = 1000;//1920;
  int h = 1000;//1080;
  int steps = 10;
  Random alea = new Random();
  float x;
  float y;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    x=0;
    y=0;
    background(220,100,35);
  }

  @Override
  public void draw() {
    if (x<w){
      float wi = random(11);
      float he = random(11);
      rect(x+random(-2,2),y+random(-2,2),wi,he);
      x=x+wi;
    }
    else{
      if (y<h){
        x=0;
        y=y+random(7,19);
      }
      else{
        exit();
      }
    }
  }
  

   public static void main(String[] args) {
    String[] processingArgs = { "Sand001" };
    Sand001 mySketch = new Sand001();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
