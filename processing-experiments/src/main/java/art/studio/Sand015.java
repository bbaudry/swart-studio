/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;
import java.util.ArrayList;
import processing.core.PFont;

public class Sand015 extends PApplet {
  /* This piece assumes a square canvas */
  int w = 3000;// 1920;
  int h = 3000;// 1080;
  int txtw = 100;
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
  PFont f;
  int fontSize;
  int knob_index;
  int knob_index_max;
  int knob_print_offset;
  int knob_y;
  
  @Override
  public void settings() {
    size(w+txtw, h);
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
    fontSize=17;
    f = createFont("FreeMono", fontSize, true);
    knob_index=0;
    knob_print_offset=3;
    knob_index_max=(int)(h/(fontSize+knob_print_offset));
    knob_y=h;
    textFont(f);
    noStroke();
    ring();
    //frameRate(7);
  }

  @Override
  public void draw() {
    fill(0,0,0);
    noStroke();
    rect(w, 0, txtw, h);
    save("Sand015.png");
    System.out.println("drew "+s+" shapes");
    noLoop();
    /*if(knob_index<knobs.size()){
      print_knobs();
    }
    else{
      save("Sand014.png");
      System.out.println("drew "+s+" shapes");
      noLoop();
    }*/
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

  private void print_knobs(){
    
    if (knob_index<knob_index_max){
      for (int i=1;i<knob_index;i++){
        if(knobs.get(i).getrand()){fill(100,100,100);}
        else{fill(280,100,100);}
        text(knobs.get(i).getValueN(), w+knob_print_offset, i*(fontSize+knob_print_offset));
      }
      knob_index++;
    }
    else{
      System.out.println(knob_index);
      for (int i=knob_index-knob_index_max;i<=knob_index;i++){
        if(knobs.get(i).getrand()){fill(100,100,100);}
        else{fill(280,100,100);}
        text(knobs.get(i).getValueN(), w+knob_print_offset, h-((knob_index-i)*(fontSize+knob_print_offset)));
      }
      knob_index++;
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
    String[] processingArgs = { "Sand015" };
    Sand015 mySketch = new Sand015();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
