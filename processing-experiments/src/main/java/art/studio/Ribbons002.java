/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;
import java.util.ArrayList;
import processing.core.PFont;

public class Ribbons002 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  Random alea = new Random();
  ArrayList<Float[]> circles;
  int epochs;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    circles=new ArrayList<>();
    background(0, 0, 0);
  }

  @Override
  public void draw() {
    if(frameCount<9){
      star();
    }
    else{
      noLoop();
    }
  }

  private void star(){
    stroke(0, 0, 100);
    noFill();
    float art=(float)0.7*w-random(w/2);
    float john = w/2 + random(-w/20,w/20);
    float baldessari = h/2 + random(-h/20,h/20);
    ellipse(john,baldessari,art, art);
    float open = random(2*PI);
    Float[] one = {john, baldessari, art, open};
    circles.add(one);
    float x = john + art/2 * cos(open);
    float y = baldessari + art/2 * sin(open);
    wave(x,y);    
  }

  private void wave(float x1, float y1){
    float x4,y4;
    if (x1<w/2){x4=x1+random(w/2);} else {x4=x1-random(w/2);} 
    if (y1<h/2){y4=y1+random(h/2);} else {y4=y1-random(h/2);} 
    float x2,x3,y2,y3;
    if (x1<x4){
      x2=x1+random(x4-x1);
      x3=x2+random(x4-x2);
      if (y1<y4){//x1<x4 and y1<y4
        y2=-100;
        y3=h;
      }
      else{//x1<x4 and yh;1>y4
        y2=h;
        y3=-100;
      }
    }
    else{
      x2=x1-random(x1-x4);
      x3=x2-random(x2-x4);
      if (y1<y4){//x1>x4 and y1<y4
        y2=-100;
        y3=h;
      }
      else{//x1>x4 and y1>y4
        y2=h;
        y3=-100;
      }
    }
    bezier(x1,y1,x2,y2,x3,y3,x4,y4);

  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons002" };
    Ribbons002 mySketch = new Ribbons002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
