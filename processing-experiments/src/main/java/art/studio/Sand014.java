/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;
import java.util.ArrayList;
public class Sand014 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 3000;// 1920;
  int h = 3000;// 1080;
  float cx;
  float cy;
  float rad;
  float size;
  int nbparticles;
  int grain; // size of sand grain
  boolean grow;
  float backHu;
  float frontHu;
  Random alea;
  int s;
  ArrayList<Knob> knobs;
  
  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    alea=new Random();
    knobs = new ArrayList<>();
    colorMode(HSB, 360, 100, 100);
    background(0,0,0);
    grain = 10;
    cx=w/2-grain/2;
    cy=h/2-grain/2;
    rad=w;
    s=0;
    noStroke();
    frameRate(1);
  }

  @Override
  public void draw() {
    ring();
    save("Sand014.png");
    System.out.println("drew "+s+" shapes");
    noLoop();
  }

  private void ring(){
    float r = rad/2-grain; knobs.add(new Knob(r, false));
    int al = 10; knobs.add(new Knob((float)al, false));
    int step = 1;
    int start = 0;
    int scope = 360;
    int end = start + scope;
    while (r>30){
      for (int i = start; i < end; i+=step){
        fill(50,100,100,al); knobs.add(new Knob((float)al, false));
        float x = cx+r*cos(radians(i)); knobs.add(new Knob(x, false));
        float y = cy+r*sin(radians(i)); knobs.add(new Knob(y, false));
        shape(x,y);
      }
      r-=grain; knobs.add(new Knob(r, false));
      al+=5;
      //step+=1;
    }
  }

  private void shape(float x, float y){
    int chance = alea.nextInt(42); knobs.add(new Knob((float)chance, true));
    if (chance<9){
      rect(x,y,grain,grain); s++;
    }
    else{
      if (chance<15){
        ellipse(x+grain/2,y+grain/2,grain,grain); s++;
      }
      else{
        if (chance<22){
          triangle(x, y, x+grain, y, x+grain/3, y+grain); s++;
        }
        else{
          if (chance<28){
            triangle(x+grain, y, x+grain, y+grain, x, y+grain); s++;
          }
          else{
            if (chance<34){
              ellipse(x+grain/4,y+grain/4,grain/2,grain/2);
              ellipse(x+3*grain/4,y+3*grain/4,grain/2,grain/2);
              rect(x+grain/2, y, grain/2, grain/2);
              rect(x, y+grain/2, grain/2, grain/2); s++;
            }
            else{
              if(chance<41){
                ellipse(x+3*grain/4,y+grain/4,grain/2,grain/2);
                ellipse(x+grain/4,y+3*grain/4,grain/2,grain/2);
                rect(x, y, grain/2, grain/2);
                rect(x+grain/2, y+grain/2, grain/2, grain/2); s++;
              }
            }
          }
        }
      }
    }
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Sand014" };
    Sand014 mySketch = new Sand014();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
