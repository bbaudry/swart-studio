/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Sand006 extends PApplet {
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
    hu = 230;
    background(300, 100, 75);
    float s = random((float)0.2, (float)0.5)*w;
    Float[] no = { (float) 0, s, s, (float) 0, (float)w, 2*s, 2*s, (float)h };
    baldessari.add(no);
    kid = 0;
    noStroke();
  }

  @Override
  public void draw() {
    if (kid < baldessari.size()&&frameCount<5555) {
      Float[] eyeball = baldessari.get(kid);
      prep(eyeball);
      kid++;
    }
    else{
      save("Sand006.png");
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
        sat = random(77,99);
        bri = random(39,76);
        if (alea.nextBoolean()){stroke(0,0,0);strokeWeight(random(1));}
        else {noStroke();}
        fill(hu, sat, bri);
        float off = random(side/11);
        quad(x1, y1, x2, y2, x3+off, y3+off, x4+off, y4+off);
      } 
      else {
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

  public static void main(String[] args) {
    String[] processingArgs = { "Sand006" };
    Sand006 mySketch = new Sand006();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
