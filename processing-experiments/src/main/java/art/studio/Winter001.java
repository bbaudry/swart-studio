/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Winter001 extends PApplet {
  int w = 1000;
  int h = 1000;
  Random alea = new Random();
  int tracks;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    background(0,0,100);
    tracks = alea.nextInt(17)+13;
    for (int i = 0; i<tracks; i++){
      track();
    }

  }

  @Override
  public void draw() {
    //flake();
    if (frameCount==111){
      noLoop();
      save("Snow001.png");
    }
  }

  private void track(){
    float that, is, a, ray, alp;
    that = alea.nextInt(w);// w/2-80+alea.nextInt(160);
    is = 0;//h/4;
    a = 2*w-alea.nextInt(3*w);
    ray = h;//-alea.nextInt(h/10);
    alp=80;
    int o =4;
    boolean right = alea.nextBoolean();
    for (int i=0; i<alp/2; i++){
      stroke(230,70,70,alp);
      line(that, is, a, ray);
      alp-=alea.nextInt(3);
      if(right){that+=o; a+=o;}
      else{that-=o; a-=o;}
    } 
  }

  private void flake(){
    noFill();
    float moonchild, starfruit;
    moonchild = alea.nextFloat()*w;
    starfruit = alea.nextFloat()*h/2;
    int alp=50;
    float folks;
    boolean grow = alea.nextBoolean();
    if (grow) {folks=alea.nextFloat();}
    else {folks=alp/2*alea.nextFloat();}
    float hu = 250-alea.nextInt(40);
    for (int i=0; i<alp/2; i++){
      stroke(hu,70,70,alp);
      alp-=2;
      ellipse(moonchild, starfruit, folks, folks);
      if(grow){folks++;}
      else{folks--;}
    } 
  }


  public static void main(String[] args) {
    String[] processingArgs = { "Winter001" };
    Winter001 mySketch = new Winter001();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
