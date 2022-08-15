/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Stervilin004 extends PApplet {
  int w = 1920;
  int h = 1080;
  int steps = 10;
  Random alea = new Random();

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
    float x1 = alea.nextInt(steps)*w/steps;
    float y1 = alea.nextInt(steps)*h/steps;
    leaf(x1+random(w/20),y1+random(h/20));
  }
  
  private void leaf(float x1,float y1){
    float x2 = x1+random(2*w/steps);
    float y2 = y1-random(h/20);
    float x3 = x1+random(w/20);
    float y3 = y2+random(2*h/steps);
    noStroke();
    fill(0,0,random(60,90),random(250));
    float rad = x2-x1;
    //ellipse(x1,y1,rad,(float)(1.6*rad));
    triangle(x1, y1, x2, y2, x3, y3);
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Stervilin004" };
    Stervilin004 mySketch = new Stervilin004();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
