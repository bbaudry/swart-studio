/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons005 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  float cx = w/2;
  float cy = h/2;
  /* four circles: 
  - inner and outer circle on which we put the end of each ribbon; their radius are radin and radout
  - 2 other circles, between the inner and outer: we use them to position the control points to draw the ribbon with a bezier curve; their radius are ct_radin and ct_radout*/
  float radin = w/20;
  float radout = w/2;
  float ct_radin = w/10;
  float ct_radout = 9*w/20;
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
    noFill();
    stroke(0,100,100);
    float angle = random(2)*PI;
    ribbon(angle);
    noFill();
    stroke(0,0,100);
/*     if(frameCount==662){
      save("Ribbons005.png");
      exit();
    }*/
  }

  public void ribbon(float angle){
    strokeWeight(alea.nextFloat()+(float)0.2);
    float control_angle=angle-PI*alea.nextFloat();
    float x1 = cx + radin*cos(angle);
    float y1 = cy + radin*sin(angle);
    float x4 = cx + radout*cos(angle);
    float y4 = cy + radout*sin(angle);
    float x2 = cx + ct_radin*cos(control_angle);
    float y2 = cy + ct_radin*sin(control_angle);
    float x3 = cx + ct_radout*cos(control_angle);
    float y3;
    boolean belzile = alea.nextBoolean();
    if (belzile){y3 = x2;}
    else{y3 = cy + ct_radout*sin(control_angle);}
    
    fill(180,100,100);
    //ellipse(x1,y1,5,5);
    //ellipse(x4,y4,25,25);
    if (belzile) {fill(50,100,100);}
    else{fill(330,100,100);}
    //ellipse(x2,y2,5,5);
    //ellipse(x3,y3,25,25);
    noFill();
    stroke(230,100*alea.nextFloat(),100*alea.nextFloat());
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons005" };
    Ribbons005 mySketch = new Ribbons005();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
