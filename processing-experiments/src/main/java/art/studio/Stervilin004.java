/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Stervilin004 extends PApplet {
  int w = 1920;
  int h = 1080;
  int steps = 10;
  Random alea = new Random();
  float x1;
  float y1;
  float x2;
  float y2;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    frameRate(1);
  }

  @Override
  public void draw() {
    background(230,10,100);
    if (frameCount%2==1){
    x1 = alea.nextInt(steps)*w/steps;
    y1 = alea.nextInt(steps)*h/steps;
    leaf(x1+random(w/20),y1+random(h/20));
    }
    else{
        fill(0,100,100);
        noStroke();
        ellipse(x1,y2,10,10);  
        ellipse(x2,y1,10,10);      
    }
  }
  
  private void leaf(float x1,float y1){
    x2 = x1+random(2*w/steps);
    y2 = y1-random(h/20);
    float x3 = x1+random(w/20);
    float y3 = y2+random(2*h/steps);
    noStroke();
    fill(0,0,random(60,90),random(250));
    float rad = (x2-x1)/2;
    if (alea.nextBoolean()) {ellipse(x1,y1,rad,(float)(1.6*rad));}
    else {ellipse(x1,y1,(float)(1.6*rad),rad);}
    //triangle(x1, y1, x2, y2, x3, y3);
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Stervilin004" };
    Stervilin004 mySketch = new Stervilin004();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
