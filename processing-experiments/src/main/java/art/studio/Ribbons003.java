/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons003 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 3000;// 1920;
  int h = 3000;// 1080;
  Random alea = new Random();

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(100, 100, 100);
  }


  float x1 = 0;
  float x2 = w;
  float y1 = h/2;
  float y2 = h/3;
  float light = 100;
  float hu = random(230,330);
  float xoff = random(200,400);
  float yoff = random(500,700);
  boolean up = alea.nextBoolean();



  @Override
  public void draw() {
    if(frameCount%100<99){
      ray(hu, xoff, yoff,up);
    }
    else{
      light=100;
      y1=random(h);
      if(alea.nextBoolean()){y2=y1+random(h-y1);}
      else{y2=y1-random(y1);}
      hu = random(230,330);
      xoff = random(200,400);
      yoff = random(500,700);
      up = alea.nextBoolean();
    }
    if(frameCount==4099){
      save("Ribbons003.png");
      noLoop();
    }
  }

  private void ray(float hu,float xoff,float yoff, boolean up){
    noFill();
    strokeWeight(5);
    stroke(hu,light,100);
    if(up){
      bezier(x1, y1, x1+xoff, y1-yoff,x2-xoff, y2+yoff, x2, y2);}
    else{
      bezier(x1, y1, x1+xoff, y1+yoff,x2-xoff, y2-yoff, x2, y2);}
    y1-=5;
    y2-=5;
    light--;
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons003" };
    Ribbons003 mySketch = new Ribbons003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
