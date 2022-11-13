/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;
import java.util.ArrayList;
import processing.core.PFont;

public class Sand016 extends PApplet {
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
  int s;
  ArrayList<Knob> knobs;
  PFont f;
  int fontSize;
  int knob_index;
  int knob_index_max;
  int knob_print_offset;
  int knob_y;
  
  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea=new Random();
    colorMode(HSB, 360, 100, 100);
    background(0,0,0);
    grain = 42;
    noStroke();
    fill(50,100,100);
    frameRate(11);
  }

  @Override
  public void draw() {
    background(0,0,0);
    float x=0;
    float y=0;
    while (x<w){
      while (y<h){
        shape(x,y);
        y+=grain;
      }  
      y=0;
      x+=grain;
    }
  }

  
  private void shape(float x, float y){
    int chance = alea.nextInt(42);
    if (chance<9){
      rect(x,y,grain,grain); s++;
    }
    else{
      if (chance<15){
        ellipse(x+grain/2,y+grain/2,grain,grain); s++;
      }
      else{
        if (chance<22){
          triangle(x, y, x+grain, y, x+grain/3, y+grain); s++;
        }
        else{
          if (chance<28){
            triangle(x+grain, y, x+grain, y+grain, x, y+grain); s++;
          }
          else{
            if (chance<34){
              ellipse(x+grain/4,y+grain/4,grain/2,grain/2);
              ellipse(x+3*grain/4,y+3*grain/4,grain/2,grain/2);
              rect(x+grain/2, y, grain/2, grain/2);
              rect(x, y+grain/2, grain/2, grain/2); s++;
            }
            else{
              if(chance<41){
                ellipse(x+3*grain/4,y+grain/4,grain/2,grain/2);
                ellipse(x+grain/4,y+3*grain/4,grain/2,grain/2);
                rect(x, y, grain/2, grain/2);
                rect(x+grain/2, y+grain/2, grain/2, grain/2); s++;
              }
            }
          }
        }
      }
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand016" };
    Sand016 mySketch = new Sand016();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
