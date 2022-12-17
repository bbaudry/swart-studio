/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Winter001 extends PApplet {
  int w = 1000;
  int h = 1000;
  Random alea = new Random();
  int tracks;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    background(0,0,100);
    tracks = alea.nextInt(17)+7;
    for (int i = 0; i<tracks; i++){
      track();
    }

  }

  @Override
  public void draw() {
    noLoop();
  }

  private void track(){
    float that, is, a, ray, alp;
    that = w/2-40+alea.nextInt(80);
    is = h/3;
    a = alea.nextInt(w);
    ray = h-alea.nextInt(h/10);
    alp=50;
    boolean right = alea.nextBoolean();
    for (int i=0; i<25; i++){
      stroke(230,70,70,alp);
      line(that, is, a, ray);
      alp-=2;
      if(right){that++; a++;}
      else{that--; a--;}
    } 
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Winter001" };
    Winter001 mySketch = new Winter001();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
