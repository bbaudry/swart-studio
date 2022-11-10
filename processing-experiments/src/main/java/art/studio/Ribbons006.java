/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons006 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  float cx = w/2;
  float cy = h/2;
  /* four circles: 
  - inner and outer circle on which we put the end of each ribbon; their radius are radin and radout
  - 2 other circles, between the inner and outer: we use them to position the control points to draw the ribbon with a bezier curve; their radius are ct_radin and ct_radout
  the values of the 4 radii are defined later and passed as parameter to the ribbon
  */
  //float radin;
  //float radout;
  //float ct_radin;
  //float ct_radout;
  float angle;
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
    float angle = random(2)*PI;
    float radin, radout, ct_radin, ct_radout;
    radin = w/20;
    radout = w/2;
    ct_radin = w/10;
    ct_radout = 9*w/40;
    ribbon(w/2,h/2,angle,true, radin, radout, ct_radin, ct_radout);
    noFill();
    stroke(0,0,100);
     if(frameCount==1111){
      save("Ribbons006.png");
      exit();
    }
  }

  public void ribbon(float cx, float cy, float angle, boolean back, float radin, float radout, float ct_radin, float ct_radout){
    noFill();
    strokeWeight(alea.nextFloat());
    stroke(230,0,100*alea.nextFloat());
    float control_angle;   
    if (alea.nextBoolean()){control_angle=angle-PI*alea.nextFloat();}
    else{control_angle=angle+PI*alea.nextFloat();}
    float x1 = cx + radin*cos(angle);
    float y1 = cy + radin*sin(angle);
    float x4 = cx + radout*cos(angle);
    float y4 = cy + radout*sin(angle);
    float x2 = cx + ct_radin*cos(control_angle);
    float y2 = cy + ct_radin*sin(control_angle);
    float x3 = cx + ct_radout*cos(control_angle);
    float y3 = cy + ct_radout*sin(control_angle);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4); 
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons006" };
    Ribbons006 mySketch = new Ribbons006();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
