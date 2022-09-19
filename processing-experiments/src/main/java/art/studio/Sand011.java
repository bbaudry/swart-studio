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
    cx=(float)0.2*w;
    cy=(float)0.2*h;
    grain = 22;
    rad=w/2;
    frameRate(1);
  }

  @Override
  public void draw() {
    ring();

    if (cx<w-(float)0.2*w){
      cx+=(float)0.2*w;
    }
    else{
      cx=(float)0.2*w;
      if (cy<h-(float)0.2*w){
        cy+=(float)0.2*h;
      }
      else{
        save("Sand011.png");
        noLoop();
      }
    }
  }

  private void ring(){
    float r = rad/2-grain;
    int al = 10;
    int step = 9;
    int start = alea.nextInt(360);
    int scope = 180+alea.nextInt(180);
    int end = start + scope;
    while (r>0){
      for (int i = start; i < end; i+=step){
        fill(frontHu,100,100,al);
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
    String[] processingArgs = { "Sand011" };
    Sand011 mySketch = new Sand011();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
