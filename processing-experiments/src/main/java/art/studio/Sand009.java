/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;


public class Sand009 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  int kid;
  Random alea = new Random();
  float x;
  float y;
  ArrayList<Float[]> baldessari = new ArrayList<>();

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(220, 0, 0);
    //stroke(0,0,100);
    //noFill();
    Float[] no = { (float)w/2, (float)h/2, (float)w, (float)0};
    baldessari.add(no);
    kid = 0;
  }

  @Override
  public void draw() {
    if (kid<baldessari.size()){
      explore(baldessari.get(kid));
      kid++;
    }
    else{
      System.out.println("done");
      save("Sand009.png");
      noLoop();
    }
  }

  private void explore(Float[] tomwaits){
    float cx = tomwaits[0];
    float cy = tomwaits[1];
    float rad = tomwaits[2];
    float depth = tomwaits[3];
    if (alea.nextInt(42) < 35 && depth < 8) {
      float off = random((float)0.53,(float)0.57);
      float newrad = rad/2;
      float newdepth = depth +1;
      Float[] slussen = { cx - newrad / 2, cy - off*newrad, newrad, newdepth };
      Float[] lilljeholmen = { cx + newrad*off, cy - newrad / 2, newrad, newdepth };
      Float[] kth = { cx - newrad / 2, cy + off*newrad, newrad, newdepth };
      Float[] ekensberg = { cx + newrad*off, cy +newrad / 2, newrad, newdepth };
      baldessari.add(slussen);
      baldessari.add(lilljeholmen);
      baldessari.add(kth);
      baldessari.add(ekensberg);
    }
    else {
      noStroke();
      fill(0,0,100,random(80,150));
      if (alea.nextInt(42) < 37){
      oneshape(cx,cy,rad);
      }
    }
  }

  private void oneshape(float cx, float cy, float rad){
    if (alea.nextBoolean()){
      ellipse(cx,cy,rad,rad);
    }
    else{
      float off=rad/2;
      quad(cx-off,cy-off,cx+off,cy-off,cx+off,cy+off,cx-off,cy+off);
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand009" };
    Sand009 mySketch = new Sand009();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
