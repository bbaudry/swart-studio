/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.security.Provider;
import java.util.Random;

public class Winter002 extends PApplet {
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
    tracks=alea.nextInt(122)+42;
    poll();
    road();

  }

  @Override
  public void draw() {
    if (frameCount<tracks){
      sky();
    }
    else{
      save("Winter002.png");
      noLoop();
    }
  }

  private void sky(){
    int john = h/5+alea.nextInt(h/4);
    int baldessari = h/5+alea.nextInt(h/4);
    int alp = 30;
    for (int i=0; i<30; i++){
      stroke(50,40,70,alp);
      line(0,john,w,baldessari);
      alp-=2;
      john++;
      baldessari++;
    }
  }

  private void poll(){
    float f = alea.nextInt(w);
    float g = h/2+alea.nextInt(h/7);
    stroke(0,0,0,100);
    line(f, g, f, g-78);
    stroke(0,0,50,70);
    line(f, g, f+100, g-28);
  }

  private void road(){
    float g = h/2+alea.nextInt(h/2);
    float f = h/2+alea.nextInt(h/2);
    stroke(0,0,50,50);
    int west=37;
    float far=7/west;
    for(int i=0;i<west;i++){
      line(0, g, w, f);
      line(0, g+i, w, f+far);
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Winter002" };
    Winter002 mySketch = new Winter002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
