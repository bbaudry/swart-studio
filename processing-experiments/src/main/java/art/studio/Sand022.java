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
  int vera, molnar; // paddings on the x and y axes
  Random alea;
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
    vera=Math.round(w/saturday); 
    molnar=Math.round(h/night); 
    background(0, 0, 0);
  }

  
  @Override
  public void draw() {
    background(0, 0, 0);
    int off=frameCount%(2*molnar);
    for (int i=0;i<saturday;i++){
      column(i*vera,off);
    }
  }

  private void column(int x,int off){
    fill(0,0,100);
      for (int j=-molnar;j<night;j+=2){
        rect(x,(j*molnar)+off,vera,molnar);
      }
  }

  

  public static void main(String[] args) {
    String[] processingArgs = { "Sand022" };
    Sand022 mySketch = new Sand022();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
