/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Ribbons001 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 1000;// 1920;
  int h = 1000;// 1080;
  Random alea = new Random();
  float x1;
  float y1;
  float x2;
  float y2, inity2;
  float x3;
  float y3, inity3;
  float x4;
  float y4;
  float off;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB, 360, 100, 100);
    background(0, 0, 100);
    x1 = random(5, 18);
    y1 = random(444, 499);
    x4 = random(888, 999);
    y4 = y1 + random(17, 29);

    x2 = x1 + random(444, 555);
    y2 = y1 - random(188, 255);
    inity2 = y2;
    x3 = x4 - random(333, 377);
    inity3 = y3;
    y3 = y4 + random(444, 777);
    off = 19;
    stroke(0, 0, 0);
    noFill();
  }

  @Override
  public void draw() {
    if (frameCount < 888) {
      if (alea.nextInt(117) < 2) {//prob 2/117 to have a yellow line
        stroke(50, 80, 90);
      } else {
        stroke(0, 0, 0);
      }
      if (alea.nextInt(42) < 38) {
        regularWave();
      } else {
        specialWave();
      }
    }
    else{
      save("Ribbons001.png");
      exit();
    }
  }

  private void regularWave() {

    if (x2 > x1 && alea.nextBoolean()) {
      x2 -= off;
    } else {
      x2 += off;
    }
    if (x3 < x4 && alea.nextBoolean()) {
      x3 += off;
    } else {
      x3 -= off;
    }
    if (alea.nextBoolean()) {
      y2 -= off;
    } else {
      y2 += off;
    }
    if (alea.nextBoolean()) {
      y3 += off;
    } else {
      y3 -= off;
    }
    wave(x2, y2, x3, y3);
  }

  private void specialWave() {
    int yoff = 2+alea.nextInt(9);
    x2 = random(x1, w / 2);
    int c = alea.nextInt(4);
    switch (c) {
      case 0:
        y2 = inity2 * yoff;
        y3 = inity3 * yoff;
        break;
      case 1:
        y2 = inity2 / yoff;
        y3 = inity3 * yoff;
        break;
      case 2:
        y2 = inity2 * yoff;
        y3 = inity3 / yoff;
        break;
      case 3:
        y2 = inity2 / yoff;
        y3 = inity3 / yoff;
        break;
    }
    wave(x2, y2, x3, y3);
  }

  private void wave(float x2, float y2, float x3, float y3) {
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Ribbons001" };
    Ribbons001 mySketch = new Ribbons001();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
