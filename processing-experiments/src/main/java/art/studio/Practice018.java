package art.studio;

import processing.core.PApplet;
import processing.core.PFont;


//remix https://github.com/castor-software/rethread/issues/32#issuecomment-698963198
public class Practice018  extends PApplet {
    int w = 800;
    int h = 1200;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(1,0,0); 

    }

    @Override
    public void draw() {
        fill(0,0,100);
        noStroke();
        
        for(int i = 0; i < h; i++) {
          float x = (float)0.5;
          float r = (float)(2.4 + (i*0.00165));
          
          for(int j = 0; j < 0.8*w; j++) {
            x = chaos(x, r);
            rect(x * w, i, 1, 1);
          }
        }
        noLoop();
    } 

    private float chaos(float x, float r) {
        return r * x * (1-x);
      }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice018" };
        Practice018 mySketch = new Practice018();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
