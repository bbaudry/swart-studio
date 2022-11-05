/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons004 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  float px1=500; float py1=100;
  float x1=400;  float y1=300;
  float px2 = 300; float py2 = 500;
  float x2=220;  float y2=620;
  float px3 = 75; float py3 = 340;
  boolean right;
  Random alea = new Random();

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(180, 100, 100);
    noFill();
  }

  @Override
  public void draw() {
    //background(180, 100, 100);
    noFill();
    stroke(0,100,100);
    strokeWeight(4);
    if(frameCount%42<21){right=true;}
    else{right=false;}
    wave();
    //noLoop();
    if(frameCount==4099){
      save("Ribbons004.png");
      noLoop();
    }
  }

  public void wave(){
    beginShape();
vertex(30, 70); // first point
bezierVertex(25, 25, px1, py1, x1, y1);//bezierVertex(25, 25, 100, 50, 50, 100);
bezierVertex(px2, py2, px3, py3, x2, y2);//bezierVertex(20, 130, 75, 140, 120, 120);
endShape();
if(right){x2+=21;px1+=7;x1+=7;px2+=7;y2--;}else{x2-=21;px1-=7;x1-=7;px2-=7;y2++;}

  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons004" };
    Ribbons004 mySketch = new Ribbons004();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
