/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Sand012 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  float cx;
  float cy;
  float rad;
  float size;
  int nbparticles;
  int grain; // size of sand grain
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
    background(0,0,0);
    grain = 70;
    cx=w/2-grain/2;
    cy=h/2-grain/2;
    rad=w;
    frameRate(1);
  }

  @Override
  public void draw() {
    ring();
    save("Sand012.png");
    noLoop();
  }

  private void ring(){
    float r = rad/2-grain;
    int al = 50;
    int step = 9;
    int start = 0;
    int scope = 360;
    int end = start + scope;
    while (r>0){
      for (int i = start; i < end; i+=step){
        fill(50,100,100,al);
        float x = cx+r*cos(radians(i));
        float y = cy+r*sin(radians(i));
        noStroke();
        rect(x,y,grain,grain);
      }
      r-=grain;
      al+=20;
      step+=1;
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand012" };
    Sand012 mySketch = new Sand012();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
