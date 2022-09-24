/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

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
  float interval;
  float x;
  float y;
  
  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea=new Random();
    colorMode(HSB, 360, 100, 100, 250);
    backHu = 130;
    interval = 20;
    x = 0;
    y = 0;
    fill(310,100,100,200);
    noStroke();
    background(backHu, 100, 100);
  }

  @Override
  public void draw() {
    if (x<=w - interval){
      tri();
      x+=interval;
    }
    else{
      x=0;
      if (y<=h - interval){
        y+=interval/3;
      }
      else{
        save("Sand013.png");
        noLoop();
      }
    }
  }

  private void tri(){
    float x1 = x+alea.nextFloat()*interval/2;
    float y1 = y+alea.nextFloat()*interval/2;
    float x2 = x+interval/2+alea.nextFloat()*interval/2;
    float y2 = y+alea.nextFloat()*interval/2;
    float x3 = x+alea.nextFloat()*interval;
    float y3 = y+interval/2+alea.nextFloat()*interval/2;
    triangle(x1, y1, x2, y2, x3, y3);
    x1 = x1+alea.nextFloat()*interval/2;
    y1 = y1+alea.nextFloat()*interval/2;
    x2 = x2+interval/2;
    y2 = y+alea.nextFloat()*interval/2;
    x3 = x1+alea.nextFloat()*interval;
    y3 = y2+interval/2+alea.nextFloat()*interval/2;
    triangle(x1, y1, x2, y2, x3, y3);
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand013" };
    Sand013 mySketch = new Sand013();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
