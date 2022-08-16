/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class HamburgHbF extends PApplet {
  int w = 1920;
  int h = 1080;
  int steps = 10;
  Random alea = new Random();
  int unit = w/34;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    frameRate(1);
    background(220,100,35);
  }

  @Override
  public void draw() {
    background(220,100,35);
    row();
  }
  
  private void row(){
    float y = random(h-unit);
    if (alea.nextBoolean()){
      noStroke();
      fill(0,0,100);
    }
    else{stroke(0,0,100);noFill();}
    rect(0,y,4*unit,unit);//time
    if (alea.nextBoolean()){
      noStroke();
      fill(0,0,100);
    }
    else{stroke(0,0,100);noFill();}
    rect(5*unit,y,4*unit,unit);//number
    if (alea.nextBoolean()){
      noStroke();
      fill(0,0,100);
    }
    else{stroke(0,0,100);noFill();}
    rect(10*unit,y,8*unit,unit);//stations
    if (alea.nextBoolean()){
      noStroke();
      fill(0,0,100);
    }
    else{stroke(0,0,100);noFill();}
    rect(19*unit,y,5*unit,unit);//destination
    if (alea.nextBoolean()){
      noStroke();
      fill(0,0,100);
    }
    else{stroke(0,0,100);noFill();}
    rect(25*unit,y,3*unit,unit);//track
    if (alea.nextInt(42)<2){
      if (alea.nextBoolean()){
        noStroke();
        fill(0,0,100);
      }
      else{stroke(0,0,100);noFill();}
      rect(29*unit,y,5*unit,unit);//message (optional)
    }
  }

   public static void main(String[] args) {
    String[] processingArgs = { "HamburgHbF" };
    HamburgHbF mySketch = new HamburgHbF();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
