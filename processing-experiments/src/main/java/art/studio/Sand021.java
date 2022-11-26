/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;
import java.util.Iterator;

public class Sand021 extends PApplet {
  int w =  1920;
  int h =  1080;
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
//    vera += alea.nextFloat()*42;
  //  molnar += alea.nextFloat()*42;
    if(alea.nextFloat()<0.01){
      background(0, 0, 0);
      int snark=alea.nextInt(12);
      for(int belzile=0;belzile<snark;belzile++){
        vera = alea.nextFloat()*w;
        molnar = alea.nextFloat()*h;
        bowie = alea.nextInt(41)+1;
        System.out.println("draw "+bowie+" sculptures");
        david(bowie);
      }
    }
  }

  private void david (int bowie){
    fill(0,0,100); stroke(0,0,100);
    for(int i = 0; i<bowie; i++){
      float john = alea.nextFloat()*2*grain;
      float baldessari = alea.nextFloat()*grain/2;
      rect(vera,molnar,john,baldessari);
      if(alea.nextBoolean()){vera+=random(-10,10);
      }
      else{molnar+=baldessari;}
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand021" };
    Sand021 mySketch = new Sand021();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
