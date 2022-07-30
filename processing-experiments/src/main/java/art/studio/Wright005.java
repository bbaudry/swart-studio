/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Wright005 extends PApplet {
  int w = 1000;
  int h = 1000;
  int step = 10;
  float x;
  float y;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    x=0;
    y=0;
    background(0,0,0);
  }

  @Override
  public void draw() {
    stroke(0,0,100);
    strokeWeight(random(5,7));
    noFill();
    chicago();
      if (x+w/step < w){
        x=x+w/step;
      }
      else{
        if (y+h/step < h){
          y=y+h/step;
          x=0;
        }
        else{
          save("Wright005.png");
          exit();
        }
      }
  }

  private void chicago(){
    int john = (int) random(4);
      switch (john) {
        case 0: 
          rect(x,y,random(w/step),random(h/step)); 
          break;
        case 1: 
          if(random(42)<7){fill(50,100,100);noStroke();System.out.println("ellipse 50");}
          else{fill(0,0,100);noStroke();System.out.println("ellipse 0");}
          noStroke();
          float rad = w/10;
          float cx = x+(w/10)/2;
          float cy = y+(h/10)/2;
          ellipse(cx,cy,rad,rad);System.out.println("draw ellipse");
          break;
        case 2:
          float x_off=random(w/step);
          line(x+x_off,y+random(-h/step,h/step),x+x_off,random(h));
          break;
        case 3:
          float y_off=random(w/step);
          line(x+random(-w/step,w/step),y+y_off,random((w)),y+y_off);
          break;
      }
  }
  

   public static void main(String[] args) {
    String[] processingArgs = { "Wright005" };
    Wright005 mySketch = new Wright005();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
