/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Sand011 extends PApplet {
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
    frontHu = 20;
    backHu = frontHu+180;
    background(backHu, 100, 100);
    cx=w/2-20;
    cy=h/2-20;
    grain = 50;
    rad=w;
    frameRate(1);
  }

  @Override
  public void draw() {
    if(frameCount<7){
     ring();
     cx=random(w);
     cy=random(h);
    }
    else{
      noLoop();
    }
  }

  private void ring(){
    float r = rad/2-grain;
    int al = 10;
    int step = 10;
    while (r>0){
      int start = alea.nextInt(77);
      int end = start + 360;
      for (int i = start; i < end; i+=step){
        float x = cx+r*cos(radians(i));
        float y = cy+r*sin(radians(i));
        fill(frontHu,100,100,al);
        noStroke();
        rect(x,y,grain,grain);
      }
      r-=grain;
      al+=10;
      step+=1;
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand011" };
    Sand011 mySketch = new Sand011();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
