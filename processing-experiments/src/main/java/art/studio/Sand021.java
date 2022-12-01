/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;
import java.util.Iterator;

public class Sand021 extends PApplet {
  int w =  1000;
  int h =  1000;
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
    grain = w/111;
    vera = alea.nextFloat()*w;
    molnar = alea.nextFloat()*h;
    background(0, 0, 0);
//    frameRate(1);
  }

  
  @Override
  public void draw() {
    int bowie;
    if(alea.nextFloat()<0.06){
      background(0, 0, 0);
      int snark=alea.nextInt(frameCount%42+1);
      for(int belzile=0;belzile<snark;belzile++){
        vera = alea.nextFloat()*w;
        molnar = alea.nextFloat()*h;
        bowie = alea.nextInt(41)+1;
        david(bowie);
      }
      if(alea.nextInt(42)<2){flash();}
      particles();
    }
  }

  private void flash(){
    float gen = random(w);
    float art = random(h);
    float is = random(w-gen);
    float cool = random(h-art);
    noStroke();
    fill(300,100,100);
    rect(gen,art,is,cool);
  }

  private void david (int bowie){
    fill(0,0,100); stroke(0,0,100);
    for(int i = 0; i<bowie; i++){
      if(alea.nextFloat()<0.1){fill(230,100,100); stroke(230,100,100);}
      else{fill(0,0,100); stroke(0,0,100);}
      float john = alea.nextFloat()*2*grain;
      float baldessari = alea.nextFloat()*grain/2;
      rect(vera,molnar,john,baldessari);
      if(alea.nextBoolean()){vera+=random(-10,10);
      }
      else{molnar+=baldessari;}
    }
  }

  private void particles(){
    float cx,cy;
    float rad;
    float konst = random(2000,5000);
    for(int i=0;i<konst;i++){
      cx=random(w);
      cy=random(h);
      rad=random(1);
      ellipse(cx,cy,rad,rad);
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand021" };
    Sand021 mySketch = new Sand021();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
