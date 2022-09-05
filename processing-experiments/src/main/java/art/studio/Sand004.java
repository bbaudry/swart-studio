/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;

public class Sand004 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  int steps = 10;
  int hu;
  float sat;
  float bri;
  int kid;
  int sa = 100;
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
    hu = 190;
    background(hu-180, 100, 100);
    float s = w / 2;
    Float[] no = { (float) 0, s, s, (float) 0, 2 * s, s, s, 2 * s };
    baldessari.add(no);
    kid = 0;
    noStroke();
  }

  @Override
  public void draw() {
    if (kid < baldessari.size()&&frameCount<4242) {
      Float[] eyeball = baldessari.get(kid);
      prep(eyeball);
      kid++;
    }
    else{
      save("Sand004.png");
    }
  }

  private void prep(Float[] tomwaits) {
    float t = (float) 0.5;
    float x1, y1, x2, y2, x3, y3, x4, y4, px, py;
    x1 = tomwaits[0];
    y1 = tomwaits[1];
    x2 = tomwaits[2];
    y2 = tomwaits[3];
    x3 = tomwaits[4];
    y3 = tomwaits[5];
    x4 = tomwaits[6];
    y4 = tomwaits[7];
    float side;
    if (x2>x1){
    side = x2 - x1;}
    else{
      side=x1-x2;
    }
    if (side > 1) {
      if (alea.nextInt(42)<7) {
        sat = random(25,99);
        bri = random(39,96);
        fill(hu, sat, bri);
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
      } else {
        px = (1 - t) * x1 + (t * x2);
        py = (1 - t) * y1 + (t * y2);
        if (px > x1) {
          if (py < y1) {
            x3 = px + (px - x1);
            x4 = px;
            y4 = y1 + (y1 - py);
            y3 = y1;
          } else {
            x4 = x1 - (px - x1);
            x3 = x1;
            y3 = py + (py - y1);
            y4 = py;
          }
        } else {
          if (py > y1) {
            x3 = px - (x1 - px);
            x4 = px;
            y4 = y1 - (py - y1);
            y3 = y1;
          } else {
            x4 = x1 + (x1 - px);
            x3 = x1;
            y3 = py - (y1 - py);
            y4 = py;
          }
        }
        Float[] silver = { x1, y1, px, py, x3, y3, x4, y4 };
        baldessari.add(silver);
        x1 = tomwaits[2];
        y1 = tomwaits[3];
        x2 = tomwaits[4];
        y2 = tomwaits[5];
        px = (1 - t) * x1 + (t * x2);
        py = (1 - t) * y1 + (t * y2);
        if (px > x1) {
          if (py < y1) {
            x3 = px + (px - x1);
            x4 = px;
            y4 = y1 + (y1 - py);
            y3 = y1;
          } else {
            x4 = x1 - (px - x1);
            x3 = x1;
            y3 = py + (py - y1);
            y4 = py;
          }
        } else {
          if (py > y1) {
            x3 = px - (x1 - px);
            x4 = px;
            y4 = y1 - (py - y1);
            y3 = y1;
          } else {
            x4 = x1 + (x1 - px);
            x3 = x1;
            y3 = py - (y1 - py);
            y4 = py;
          }
        }
        Float[] gilded = { x1, y1, px, py, x3, y3, x4, y4 };
        baldessari.add(gilded);
        x1 = tomwaits[4];
        y1 = tomwaits[5];
        x2 = tomwaits[6];
        y2 = tomwaits[7];
        px = (1 - t) * x1 + (t * x2);
        py = (1 - t) * y1 + (t * y2);
        if (px > x1) {
          if (py < y1) {
            x3 = px + (px - x1);
            x4 = px;
            y4 = y1 + (y1 - py);
            y3 = y1;
          } else {
            x4 = x1 - (px - x1);
            x3 = x1;
            y3 = py + (py - y1);
            y4 = py;
          }
        } else {
          if (py > y1) {
            x3 = px - (x1 - px);
            x4 = px;
            y4 = y1 - (py - y1);
            y3 = y1;
          } else {
            x4 = x1 + (x1 - px);
            x3 = x1;
            y3 = py - (y1 - py);
            y4 = py;
          }
        }
        Float[] ruby = { x1, y1, px, py, x3, y3, x4, y4 };
        baldessari.add(ruby);
        x1 = tomwaits[6];
        y1 = tomwaits[7];
        x2 = tomwaits[0];
        y2 = tomwaits[1];
        px = (1 - t) * x1 + (t * x2);
        py = (1 - t) * y1 + (t * y2);
        if (px > x1) {
          if (py < y1) {
            x3 = px + (px - x1);
            x4 = px;
            y4 = y1 + (y1 - py);
            y3 = y1;
          } else {
            x4 = x1 - (px - x1);
            x3 = x1;
            y3 = py + (py - y1);
            y4 = py;
          }
        } else {
          if (py > y1) {
            x3 = px - (x1 - px);
            x4 = px;
            y4 = y1 - (py - y1);
            y3 = y1;
          } else {
            x4 = x1 + (x1 - px);
            x3 = x1;
            y3 = py - (y1 - py);
            y4 = py;
          }
        }
        Float[] oak = { x1, y1, px, py, x3, y3, x4, y4 };
        baldessari.add(oak);
      }
    }
    else{
      quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }
  }

  /*
   * Method receives an array that consists of coordinates (john[0],john[1]), and
   * a width john[2]
   * Flip a coin:
   * - if true, draw a square at coordinates, which sides are of size 'width'
   * - if false, split width into 2, save the coordinates of the four squares and
   * store them into the array experience
   */
  private void dig(Float[] john, ArrayList<Float[]> experience) {
    noStroke();
    if (alea.nextBoolean()) {
      sa = alea.nextInt(100);
      fill(hu, sa, 100);
      float s = john[2];
      rect(john[0], john[1], s, s);
    } else {
      if (alea.nextBoolean()) {
        // split the square into four
        // add the four coordinates into the experience array
        float s = john[2] / 2;
        if (s > 1) {
          Float[] no = { john[0], john[1], s };
          Float[] more = { john[0] + s, john[1], s };
          Float[] boring = { john[0], john[1] + s, s };
          Float[] code = { john[0] + s, john[1] + s, s };
          experience.add(no);
          experience.add(more);
          experience.add(boring);
          experience.add(code);
        }
      } else {
        float s = john[2] / 3;
        if (s > 1) {
          Float[] no = { john[0], john[1], s };
          Float[] more = { john[0] + s, john[1], s };
          Float[] more_more = { john[0] + 2 * s, john[1], s };
          Float[] boring = { john[0], john[1] + s, s };
          Float[] boring_more = { john[0] + s, john[1] + s, s };
          Float[] boring_more_more = { john[0] + 2 * s, john[1] + s, s };
          Float[] code = { john[0], john[1] + 2 * s, s };
          Float[] code_more = { john[0] + s, john[1] + 2 * s, s };
          Float[] code_more_more = { john[0] + 2 * s, john[1] + 2 * s, s };
          experience.add(no);
          experience.add(more);
          experience.add(more_more);
          experience.add(boring);
          experience.add(boring_more);
          experience.add(boring_more_more);
          experience.add(code);
          experience.add(code_more);
          experience.add(code_more_more);
        }

      }
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand004" };
    Sand004 mySketch = new Sand004();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
