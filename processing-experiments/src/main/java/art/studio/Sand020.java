/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import processing.core.PFont;

public class Sand020 extends PApplet {
  int w =  1920;
  int h =  1080;
  float vera, molnar; // x and y coordinates for shapes
  int grain; // size of sand grain
  Random alea;
  int fSize=17;
  PFont f;
  //John Baldessari, Casey Raes, Ryoji Ikeda, Vera Molnar, Sol LeWitt, Visakh Menon, Jean-Michel Basquiat, rethread, Bob Holmes, Pope/Green/Fuller, Bradford Paley, Marcel Schwittlick
  String[] art_pieces = {"pure beauty","ultraconcentrated","data.anatomy","interruptions", "modular cubes", "signal 12A", "dustheads","cyber|glow","uncuttable","web stalker","code profiles","buffer overflow"};

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
    vera = 0;
    molnar = 0;
    noFill();
    f = createFont("FreeMono", fSize, true);
    textFont(f);
  }

  @Override
  public void draw() {
    shape(vera, molnar);
    if(vera<w){vera+=grain;}
    else{
      vera=0;
      if (molnar<h){
        molnar+=grain;
      }
      else{
        molnar=0;
      }
    }
  }


  private void shape(float x, float y) {
    fill(230, 100, 100, 5);
    int chance = alea.nextInt(42);
    x = x + (float) (0.05 * grain);
    y = y + (float) (0.05 * grain);
    float localGrain = (float) (0.95 * grain);
    if (alea.nextInt(168) < 1) {
      stroke(0, 100, 100, 150);
    } else {
      stroke(0, 0, 100, 50);
    }
    if (chance < 1) {
      rect(x, y, localGrain, localGrain);
    } else {
      if (chance < 3) {
        ellipse(x + localGrain / 2, y + localGrain / 2, localGrain, localGrain);
      } else {
        if (chance < 9) {
          triangle(x, y, x + localGrain, y, x + localGrain / 3, y + localGrain);
        } else {
          if (chance < 15) {
            triangle(x + grain, y, x + localGrain, y + localGrain, x, y + localGrain);
          } else {
            if (chance < 20) {
              circle_hor(x, y);
            } else {
              if (chance < 21) {
                circle_vert(x, y);
              } else {
                if (chance < 34) {
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
    String[] processingArgs = { "Sand020" };
    Sand020 mySketch = new Sand020();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
