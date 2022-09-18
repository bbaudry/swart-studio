/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

public class Sand011 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  float cx;
  float cy;
  float rad;
  float size;
  int nbparticles;
  boolean grow;
  
  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(220, 100, 100);
    cx=w/2-20;
    cy=h/2-20;
    rad=w;
  }

  @Override
  public void draw() {
     ring();
     noLoop();
  }

  private void ring(){
    float r = rad/2-50;
    int al = 80;
    int step = 9;
    while (r>0){
      for (int i = 0; i < 360; i+=step){
        float x = cx+r*cos(radians(i));
        float y = cy+r*sin(radians(i));
        fill(220,50,100,al);
        noStroke();
        rect(x,y,47,47);
      }
      r-=50;
      al+=60;
      step+=1;
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand011" };
    Sand011 mySketch = new Sand011();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
