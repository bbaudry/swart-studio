/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Winter001 extends PApplet {
  int w = 1800;
  int h = 1000;
  int saturday;// number of columns
  int night;// number of rows
  int vera, molnar; // paddings on the x and y axes
  Random alea;
  ArrayList<Float> pads;
  float grain;
  int wave; // wave + peace + eyeball is the duration of a cycle
  int peace;
  int eyeball;
  int tide;
  int c;
  float xray;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {

  }

  @Override
  public void draw() {

  }

  public static void main(String[] args) {
    String[] processingArgs = { "Winter001" };
    Winter001 mySketch = new Winter001();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
