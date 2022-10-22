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
  int epochs;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(0, 0, 0);
    //frameRate(1);
  }

  @Override
  public void draw() {
    if(frameCount<142){
      star();
    }
    else{
      noLoop();
    }
  }

  private void star(){
    stroke(0, 0, 100);
    noFill();
    float art=(float)0.7*w-random(w/2); //diameter
    float john = w/2 + random(-w/20,w/20); //center x
    float baldessari = h/2 + random(-h/20,h/20); //center y
    ellipse(john,baldessari,art, art);
    wave(john, baldessari, art/2);    
  }

  private void wave(float cx, float cy, float rad){
    float ryoji = random(2*PI);
    float john = cx + rad * cos(ryoji);
    float baldessari = cy + rad * sin(ryoji);
    stroke(330,100,100);
    float ikeda = ryoji + random(PI);
    float more = rad + random(122);
    float vera = cx + more * cos(ikeda);
    float molnar = cy + more * sin(ikeda);
    arc(cx,cy,more*2, more*2, ryoji,ikeda);
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons002" };
    Ribbons002 mySketch = new Ribbons002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
