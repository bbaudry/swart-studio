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
    float x = john + art/2 * cos(open);
    float y = baldessari + art/2 * sin(open);
    noStroke();
    fill(320,100,100);
    ellipse(x,y,10,10);
    Float[] one = {john, baldessari, art, open};
    circles.add(one);
  }

  private void wave(float x1, float y1){
    float x4,y4;
    
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons002" };
    Ribbons002 mySketch = new Ribbons002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
