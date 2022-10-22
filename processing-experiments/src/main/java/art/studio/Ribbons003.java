/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons003 extends PApplet {
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
    background(0, 0, 100);
  }

  @Override
  public void draw() {
    if(frameCount<100){
      ray();
    }
    else{
      save("Ribbons003.png");
      noLoop();
    }
  }

  float x1 = 42;
  float x2 = w-42;
  float y1 = h/2;
  float y2 = h/3;
  float light = 100;

  private void ray(){
    noFill();
    stroke(330,light,100);
    bezier(x1, y1, x1+200, y1-400,x2-200, y2+600, x2, y2);
    y1--;
    y2--;
    light--;
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons003" };
    Ribbons003 mySketch = new Ribbons003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
