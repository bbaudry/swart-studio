package art.studio;

import processing.core.PApplet;


//practice shades
public class Practice019  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float ra;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
      colorMode(HSB,360,100,100);
      background(1,0,100); 
      cx=w/2;
      cy=h/2;
      ra=w;
    }

    @Override
    public void draw() {
        stroke(50,10,100);
        strokeWeight(5);
        noFill();        
        ellipse(cx,cy,ra,ra);
        branch();
        //noLoop();
    } 

    private void branch(){        
      float le = random((float)0.5,1)*ra/2;
      float an = random(2)*PI;
      float x1=cx;
      float y1=cy;
      float x2;
      float y2;
      float laita = random(-70/2,70/2);
      noStroke();
      
      int steps = 69;
      float inc = le/steps;
      for (int i = 1; i <= steps; i++){
          x2 = cx + (i*inc)*cos(an);
          y2 = cy + (i*inc)*sin(an);
          fill(50,random(70,100),100);
          quad(x1+laita,y1+laita,x2+laita,y2+laita,x2+laita*2,y2+laita,x1+laita*2,y1+laita);
          x1 = x2;
          y1 = y2;
      }
      fill(50,random(80,100),random(80,100));
      quad(cx+laita,cy+laita,cx-laita,cy,x1,y1,x1+laita,y1+laita);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice019" };
        Practice019 mySketch = new Practice019();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
