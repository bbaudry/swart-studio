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
  int grain; // size of sand grain
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
    grain = 100;
    stroke(0,0,100,50);
    noFill();
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
    x=x-(float)(0.05*grain);
    y=y-(float)(0.05*grain);
    float localGrain = (float)(0.95*grain); 
    if (chance<9){
      rect(x,y,localGrain,localGrain); 
    }
    else{
      if (chance<15){
        ellipse(x+localGrain/2,y+localGrain/2,localGrain,localGrain); 
      }
      else{
        if (chance<22){
          triangle(x, y, x+localGrain, y, x+localGrain/3, y+localGrain); 
        }
        else{
          if (chance<28){
            triangle(x+grain, y, x+localGrain, y+localGrain, x, y+localGrain); 
          }
          else{
            if (chance<34){
              ellipse(x+localGrain/4,y+localGrain/4,localGrain/2,localGrain/2);
              ellipse(x+3*localGrain/4,y+3*localGrain/4,localGrain/2,localGrain/2);
              rect(x+localGrain/2, y, localGrain/2, localGrain/2);
              rect(x, y+localGrain/2, localGrain/2, localGrain/2); 
            }
            else{
              if(chance<41){
                ellipse(x+3*localGrain/4,y+localGrain/4,localGrain/2,localGrain/2);
                ellipse(x+localGrain/4,y+3*grain/4,localGrain/2,localGrain/2);
                rect(x, y, localGrain/2, localGrain/2);
                rect(x+localGrain/2, y+localGrain/2, localGrain/2, localGrain/2); 
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
