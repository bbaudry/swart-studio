/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Sand023 extends PApplet {
  int w = 1800;
  int h = 1000;
  Random alea=new Random();;
  boolean grow = true;
  float[] x_bounds = { (float) 0.33 * w, (float) 0.77 * w };// in this interval, x varies as usual and y varies randomly
  float x_step = 2;// how fast x moves towards the right of the screen, at each step
  int bron = 3;// size of the rect drawn at each step
  float y_vary;
  float sig_x = 0;
  float sig_y = h / 2;



  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(0, 0, 0);
  }

  @Override
  public void draw() {
john_cage();
  }


  private void john_cage() {
            fill(0, 100, 100);
            stroke(0, 100, 100);
            strokeWeight(2);
            float tmp_y;
            y_vary = 13 - alea.nextFloat()*17;
            if (sig_x < w) {
                if (sig_x > x_bounds[0] && sig_x <= x_bounds[1]) {
                    if (alea.nextFloat() < 0.5) { grow = !grow; }
                    tmp_y = sig_y;
                    if (grow) {
                        sig_y -= y_vary;
                    }
                    else {
                        sig_y += y_vary;
                    }
                    line(sig_x, tmp_y, sig_x + x_step, sig_y);
                    fill(180, 100, 100);
                    stroke(180, 100, 100);
                    rect(sig_x + x_step, sig_y, 1, 1);
                    fill(0, 100, 100);
                    stroke(0, 100, 100);
                }
                else {
                    if (sig_x < x_bounds[0] - bron || sig_x > x_bounds[1]) {//while x is not in the area where Y varies draw one rect ahed in blue to mark the position of drawing
                        fill(180, 100, 100);
                        stroke(180, 100, 100);
                        rect(sig_x + bron, sig_y, bron, bron);
                    }
                    fill(0, 100, 100);
                    stroke(0, 100, 100);
                    rect(sig_x, sig_y, bron, bron);
                }
                sig_x += x_step;
            }
            else {
                sig_x = 0;
                sig_y = h / 2 + alea.nextFloat();
            }
        }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand023" };
    Sand023 mySketch = new Sand023();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
