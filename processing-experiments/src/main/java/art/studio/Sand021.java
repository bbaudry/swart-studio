/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;
import java.util.Iterator;

public class Sand021 extends PApplet {
  int w =  1920;
  int h =  1080;
  float vera, molnar; // x and y coordinates for shapes
  float tx;
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
    tx=0;
    grain = w/111;
    background(0, 0, 0);
  }
  
  @Override
  public void draw() {
    int bowie;
    for(int molnar=0;molnar<7; molnar++){
      bowie = alea.nextInt(41)+1;
      System.out.println("draw "+bowie+" sculptures");
      david(bowie);
    }
    if(frameCount%57==0){
      background(0, 0, 0);
    }
  }

  private void david (int bowie){
    fill(0,0,100); stroke(0,0,100);
    float x = alea.nextFloat()*w;
    float y = alea.nextFloat()*h;
    for(int i = 0; i<bowie; i++){
      float john = alea.nextFloat()*10;
      float baldessari = alea.nextFloat()*10;
      rect(x,y,john,baldessari);
      if(alea.nextBoolean()){x+=john;}
      else{y+=baldessari;}
    }
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
