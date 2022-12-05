/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Sand022 extends PApplet {
  int w =  1800;
  int h =  1000;
  int saturday;//number of columns
  int night;//number of rows
  int vera, molnar; // paddings on the x and y axes
  Random alea;
  ArrayList<Float> pads;
  float grain;
  float wave; //duration of a cycle
  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea = new Random();
    colorMode(HSB, 360, 100, 100);
    saturday=11;
    night=77;
    vera=Math.round(w/saturday); 
    molnar=Math.round(h/night); 
    background(0, 0, 0);
    wave=400;
  }

  
  @Override
  public void draw() {
    background(0, 0, 0);
    if(frameCount%wave<0.7*wave){
      if(frameCount%wave<0.2*wave){saturday=1;}
      else {
        if(frameCount%wave<0.4*wave){saturday=7;}
        else{saturday=11;}
      }
      vera=Math.round(w/saturday); 
      int off=frameCount%molnar;
      boolean up=true;
      for (int i=0;i<saturday;i++){
        column(i*vera,off,up);
        up=!up;
      }
    }
    else{
      if(alea.nextInt(42)<1){
      if(alea.nextBoolean()){
        fill(0,0,100);
        ellipse(w/2,h/2,300,300);
      }
      else{
        fill(0,0,100);
        rect(w/2-200,h/2-100,400,200);
      }
      }
    }
  }

  private void column(int x,int off,boolean down){
    if(alea.nextInt(42)<1){fill(330,100,100);}
    else{fill(0,0,100,150);}
    if(down){
      for (int j=-molnar;j<h;j+=2){
        float gold = alea.nextFloat();
        rect(x,(j*molnar*gold)+off,vera,molnar*gold);
      }
    }
    else{
      for (int j=h+molnar;j>0;j-=2){
        float gold = alea.nextFloat();
        rect(x,(j*molnar*gold)-off,vera,molnar*gold);
      }
    }
  }

  

  public static void main(String[] args) {
    String[] processingArgs = { "Sand022" };
    Sand022 mySketch = new Sand022();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
