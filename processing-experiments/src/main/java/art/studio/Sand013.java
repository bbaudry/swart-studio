/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Sand013 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  boolean grow;
  float backHu;
  float frontHu;
  Random alea;
  
  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea=new Random();
    colorMode(HSB, 360, 100, 100);
    backHu = 160;
    fill(340,100,100);
    noStroke();
  }

  @Override
  public void draw() {
    background(backHu, 100, 100);
    float x1 = alea.nextFloat()*w/2;
    float y1 = alea.nextFloat()*h/2;
    float x2 = w/2+alea.nextFloat()*w/2;
    float y2 = alea.nextFloat()*h/2;
    float x3 = alea.nextFloat()*w/2;
    float y3 = h/2+alea.nextFloat()*h/2;
    triangle(x1, y1, x2, y2, x3, y3);
  }

  

  public static void main(String[] args) {
    String[] processingArgs = { "Sand013" };
    Sand013 mySketch = new Sand013();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
