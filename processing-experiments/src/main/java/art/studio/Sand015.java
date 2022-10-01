/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;
import java.util.ArrayList;
import processing.core.PFont;

public class Sand015 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  Random alea = new Random();
  float x1;float y1;
  float x2;float y2;
  float x3=770;float y3=770; 
  float x4=970; float y4=490;



  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(0,0,100);
    x1=random(5,18);
    y1=random(444,499);
    x4=random(888,999);
    y4=y1+random(17,29);
    x2=x1+random(444,555);//x1+random(37,77);
    y2=y1-random(188,255);
    x3=x4-random(333,377);//x4-random(7,17);
    y3=y4+random(444,777);

    noFill();
  }

  @Override
  public void draw() {
    if (frameCount < 1111){
    stroke(0,0,0);
    if (x2>x1){x2-=1;}
    if (x3<x4){x3+=1;}
    y2-=1;
    y3+=1;
    wave(x2,y2,x3,y3);
    }
  }

  private void wave (float x2, float y2, float x3, float y3){
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand015" };
    Sand015 mySketch = new Sand015();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
