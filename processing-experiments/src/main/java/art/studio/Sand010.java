/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;


public class Sand010 extends PApplet {
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
    background(220, 0, 0);
    fill(0,0,100);
    noStroke();
    cx=w/2;
    cy=h/2;
    rad=w;
    size=w;
    grow=false;
    nbparticles=2;
    ellipse(cx,cy,size,size);
  }

  @Override
  public void draw() {
    background(0,0,0);
    size=w/nbparticles;
    for(int i=0;i<nbparticles*7;i++){
      particle(cx, cy, rad, size);
    }
    if (size>w/800 && !grow){
      if (frameCount%7==0){
        nbparticles+=2;
      }
    }
    else{
      if (size==w/800){
        grow=true;
      }
      if (frameCount%7==0){
        nbparticles-=2;
      }
      if (nbparticles==2){
        grow=false;
      }
    }  
  }

  /*
   * draws a particle at a random location inside a circle centered on (cx,cy) and
   * of radius rad
   */
  private void particle(float cx, float cy, float rad, float size){
    float t=random(2*PI);
    float u=random(rad/4)+random(rad/4);
    float r;
    if (u>rad/4){r=2-u;}
    else {r=u;}
    float x=cx+r*cos(t);
    float y=cy+r*sin(t);
    ellipse(x,y,size,size);
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand010" };
    Sand010 mySketch = new Sand010();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
