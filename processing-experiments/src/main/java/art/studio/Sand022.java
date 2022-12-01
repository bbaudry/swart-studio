/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Sand022 extends PApplet {
  int w =  1000;
  int h =  1000;
  int saturday;//number of columns
  int night;//number of rows
  Random alea;
  float vera, molnar;
  ArrayList<Float> pads;
  float grain;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea = new Random();
    colorMode(HSB, 360, 100, 100);
    saturday=3;
    night=30;
    background(0, 0, 0);
    //frameRate(17);
   // noLoop();
  }

  
  @Override
  public void draw() {
    background(0, 0, 0);
    float memphis=w/saturday;
    int fun=Math.round(h/night); 
    int off=frameCount%(2*fun);System.out.println(off);
    for (int i=0;i<saturday;i++){
      column(i*memphis,off);
    }
  }

  private void column(float x,int off){
    fill(0,0,100);
    float is=w/saturday;
    int fun=Math.round(h/night); 
      for (int j=-fun;j<night;j+=2){
        rect(x,(j*fun)+off,is,fun);
      }
  }

  

  public static void main(String[] args) {
    String[] processingArgs = { "Sand022" };
    Sand022 mySketch = new Sand022();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
