/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons007 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  float rad = 21;
  float xorig1 = w/2;
  float yorig1 = h/2;
  float xorig2 = w/2;
  float yorig2 = h/2;


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
    ribbon(xorig1,yorig1,true);
    ribbon(xorig2,yorig2,false);
    int dice = alea.nextInt(6);
    float t;
    switch(dice){
      case 0:xorig1+=alea.nextFloat();
      break;
      case 1:xorig2-=alea.nextFloat();
      break;
      case 2:yorig1+=alea.nextFloat();
      break;
      case 3:yorig2-=alea.nextFloat();
      break;
      case 4:
      if(alea.nextInt(42)<1){
        t=random(1);
        xorig1 = (1 - t) * w/2 + (t * w);
        yorig1 = (1 - t) * h/2 + (t * 0);
        xorig2=xorig1;
        yorig2=yorig1;}
      break;
      case 5:
      if(alea.nextInt(242)<1){
        t=random(1);
        xorig1 = (1 - t) * 0 + (t * w/2);
        yorig1 = (1 - t) * h + (t * h/2);
        xorig2=xorig1;
        yorig2=yorig1;}

      break;
    }
  }

  private void ribbon(float x, float y, boolean up){
    float cx1,cy1;
    float cx2,cy2;
    //randomly select two points that are centers of circles
    if (up){
      cx1 = x + alea.nextInt(100); cy1 = y + alea.nextInt(100);
      cx2 = x + alea.nextInt(100); cy2 = y + alea.nextInt(100);
    }
    else{
      cx1 = x - alea.nextInt(100); cy1 = y - alea.nextInt(100);
      cx2 = x - alea.nextInt(100); cy2 = y - alea.nextInt(100);
    }
    /* https://www.geeksforgeeks.org/check-two-given-circles-touch-intersect/
     * determine if the circles intersect; if they do, draw a line between the centers
    */
    double d = Math.sqrt((cx1 - cx2) * (cx1 - cx2) + (cy1 - cy2) * (cy1 - cy2));
    if(d<rad+rad){
      if(alea.nextInt(242)<1){stroke(0,100,100);}
      line(cx1,cy1,cx2,cy2);
      float cx =  (float)(0.5 * cx1 + 0.5 * cx2);
      float cy =  (float)(0.5 * cy1 + 0.5 * cy2);
      stroke(0,0,100, 100); 
      ellipse(cx,cy,rad,rad);
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons007" };
    Ribbons007 mySketch = new Ribbons007();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
