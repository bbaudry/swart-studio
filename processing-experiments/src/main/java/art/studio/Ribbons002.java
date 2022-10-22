/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons002 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  Random alea = new Random();

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
      save("Ribbons002.png");
      noLoop();
    }
  }

  private void star(){
    float art=(float)0.7*w-random(w/2); //diameter
    float john = w/2 + random(-w/20,w/20); //center x
    float baldessari = h/2 + random(-h/20,h/20); //center y
    noFill();
    float hayes=100;
    for (float beauty=art; beauty>1 && hayes>0; beauty--){
      stroke(0, 0, hayes);
      ellipse(john,baldessari,beauty, beauty);
      hayes--;
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons002" };
    Ribbons002 mySketch = new Ribbons002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
