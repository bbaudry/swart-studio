/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Sand017 extends PApplet {
  /* This piece assumes a square canvas */
  int w =  1920;
  int h =  1080;
  float cx;
  float cy;
  float john, baldessari;
  float pure;
  float rad;
  int grain; // size of sand grain
  Random alea;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea = new Random();
    colorMode(HSB, 360, 100, 100);
    background(0, 0, 0);
    grain = 100;
    john = w / 2;
    baldessari = alea.nextFloat() * 42;
    pure = 91;
    noFill();
    frameRate(11);
  }

  @Override
  public void draw() {
    if (frameCount % 42 == 0) {
      background(0, 0, 0);
    }
    if (frameCount % 42 > 1) {
      organ();
      float x = 0;
      float y = 0;
      while (x < w) {
        while (y < h) {
          shape(x, y);
          y += grain;
        }
        y = 0;
        x += grain;
      }
    }
    if (frameCount % 42 == 17) {
      String xavi = "Sand017" + frameCount + ".png";
      save(xavi);
    }
  }

  private void organ() {
    float beauty;
    fill(180, 0, 0,150);noStroke();
    for (int vera = 0; vera < 2; vera++) {
      beauty = alea.nextFloat()*7; // random choice of the height of the rect
      
      rect(john, baldessari, pure, beauty);
      if (alea.nextBoolean()) {// flip a coin to increase or decrease the width of the rect 
        pure += alea.nextInt(7);
      } else {
        pure -= alea.nextInt(7);
      }
      if (baldessari > h - 17) { // if y coordinate hits the bottom of the frame, reset; else increase
        baldessari = alea.nextFloat() * 17;
      } else {
        baldessari += beauty;
      }
      if (john > w + 42 || john < w - 42) { // if x coordinate out of the frame, reset; else update
        john = alea.nextFloat() * (w/2);
      } else {
        if (alea.nextBoolean()) { // flip coin to decide if x increases or decreases
          john += alea.nextInt(22);
        } else {
          john -= alea.nextInt(22);
        }
        }
    }
  }

  private void shape(float x, float y) {
    fill(0, 100, 100, 12);
    int chance = alea.nextInt(42);
    x = x + (float) (0.05 * grain);
    y = y + (float) (0.05 * grain);
    float localGrain = (float) (0.95 * grain);
    if (alea.nextInt(168) < 1) {
      stroke(230, 100, 100, 150);
    } else {
      stroke(0, 0, 100, 50);
    }
    if (chance < 9) {
      rect(x, y, localGrain, localGrain);
    } else {
      if (chance < 15) {
        ellipse(x + localGrain / 2, y + localGrain / 2, localGrain, localGrain);
      } else {
        if (chance < 22) {
          triangle(x, y, x + localGrain, y, x + localGrain / 3, y + localGrain);
        } else {
          if (chance < 28) {
            triangle(x + grain, y, x + localGrain, y + localGrain, x, y + localGrain);
          } else {
            if (chance < 30) {
              circle_hor(x, y);
            } else {
              if (chance < 34) {
                circle_vert(x, y);
              } else {
                if (chance < 38) {
                  circle_dots(x, y);
                } else {
                  broken_ray(x, y);
                }
              }
            }
          }
        }
      }
    }
  }

  private void circle_vert(float x, float y) {
    float localGrain = (float) (0.95 * grain);
    ellipse(x + localGrain / 2, y + localGrain / 2, localGrain, localGrain);
    line(x + localGrain / 2, y, x + localGrain / 2, y + localGrain);
  }

  private void circle_hor(float x, float y) {
    float localGrain = (float) (0.95 * grain);
    ellipse(x + localGrain / 2, y + localGrain / 2, localGrain, localGrain);
    line(x, y + localGrain / 2, x + localGrain, y + localGrain / 2);
  }

  private void circle_dots(float x, float y) {
    float localGrain = (float) (0.95 * grain);
    ellipse(x + localGrain / 2, y + localGrain / 2, localGrain, localGrain);
    for (int i = 0; i < 10; i++) {
      particle(x + localGrain / 2, y + localGrain / 2, localGrain, 5);
    }
  }

  /*
   * draws a particle at a random location inside a circle centered on (cx,cy) and
   * of radius rad
   */
  private void particle(float cx, float cy, float rad, float size) {
    float t = 2 * PI * alea.nextFloat();
    float u = random(rad / 4) + random(rad / 4);
    float r;
    if (u > rad / 4) {
      r = 2 - u;
    } else {
      r = u;
    }
    float x = cx + r * cos(t);
    float y = cy + r * sin(t);
    ellipse(x, y, size, size);
  }

  private void broken_ray(float x, float y) {
    float localGrain = (float) (0.95 * grain);
    rect(x, y, localGrain, localGrain);
    x = x + alea.nextFloat() * (localGrain / 2);
    float off = alea.nextFloat() * (localGrain / 2);
    float height = y + localGrain;
    fill(0, 0, 100, 50);
    int ystep = alea.nextInt(4) + 1;
    while (y < height) {
      rect(x, y, off, localGrain / ystep);
      x -= off / 2;
      off = alea.nextFloat() * (localGrain / 2);
      y += localGrain / ystep;
    }
    noFill();
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand017" };
    Sand017 mySketch = new Sand017();
    PApplet.runSketch(processingArgs, mySketch);
  }

}