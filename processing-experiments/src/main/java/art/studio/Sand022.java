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
  int wave; //duration of a cycle
  float eyeball;
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
    wave=alea.nextInt(200)+42;
    eyeball=alea.nextFloat();
  }

  
  @Override
  public void draw() {
    background(0, 0, 0);
    if(frameCount%wave<eyeball*wave){
      saturday = alea.nextInt(7)+1;
      mules(saturday);
    }
    else{
      behind();
    }
    if(frameCount%wave==0){
      wave=alea.nextInt(200)+42;
      eyeball=alea.nextFloat();  
    }
  }

  private void mules(int good_lord){
    vera=Math.round(w/good_lord); 
    int off=frameCount%molnar;
    boolean up=true;
    for (int i=0;i<good_lord;i++){
      column(i*vera,off,up);
      up=!up;
    }
  }

  private void behind(){
    if(alea.nextInt(42)<2){
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
