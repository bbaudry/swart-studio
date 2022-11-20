/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import processing.core.PFont;
import java.util.ArrayList;
import java.util.Iterator;

public class Sand021 extends PApplet {
  int w =  1920;
  int h =  1080;
  float vera, molnar; // x and y coordinates for shapes
  Random alea;
  ArrayList<Float> pads;
  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea = new Random();
    colorMode(HSB, 360, 100, 100);
    background(0, 0, 0);
    initPads();
  }
  
  private void initPads(){
    pads=new ArrayList<>();
    float p = 0;
    while (p<w) {
      float bowie = alea.nextFloat()*w/5;
      pads.add(bowie); 
      p+=bowie;
    }
  }

  @Override
  public void draw() {
    row();
  }

  private void row(){
    float snow = 0;
    float white = h/7;
    Iterator<Float> keith = pads.iterator();
    System.out.println("draw "+pads.size()+" pads");
    while(keith.hasNext()){
      float p = keith.next();
      stroke(0,0,0);
      fill(33,80,80);
      rect(snow,white,p,42);
      snow+=p;
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand021" };
    Sand021 mySketch = new Sand021();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
