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
      float le = random((float)0.7,1)*ra/2;
      float an = random(2)*PI;
      float x1 = cx + le*cos(an);
      float y1 = cy + le*sin(an);
      noStroke();
      fill(50,100,100);
      quad(cx+10,cy+10,x1+10,y1+10,x1+20,y1+10,cx+20,cy+10);
      fill(50,random(80,100),random(80,100));
      quad(cx+10,cy+10,cx-10,cy,x1,y1,x1+10,y1+10);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice019" };
        Practice019 mySketch = new Practice019();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
