package art.studio;

import processing.core.PApplet;

public class Practice003  extends PApplet {
    int w = 1000;
    int h = 1000;
    float move = 1;
    float r = random(256);
    float g = random(256);
    float b = random(256);
    float cChange = 2;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        //frameRate(1);
        background(255,255,255);
        //noLoop();
    }

    @Override
    public void draw() {
        move = move + (float) (2 * Math.PI / 250);
        spiral3(move);        
        if (move>(float) (4 * Math.PI)){noLoop();save("spiral.png");}
    }

    // simple function that draws points along a spiral, 6 circles, clocwise, changing color randomly
    public void spiral3(float rotate) {
        float step = (float) (2 * Math.PI / 300);
        System.out.println("rotate: "+rotate+"r : "+r+" g :"+g+" b "+b);
        for (float angle = 0; angle < 2 * Math.PI * 6; angle += step) {
            float x = width / 2 + cos(angle+rotate) * (15 * angle);
            float y = height / 2 + sin(angle+rotate) * (15 * angle);
            r += random(-cChange, cChange);
            r = constrain(r, 0, 256);
    
            g += random(-cChange, cChange);
            g = constrain(g, 0, 256);
    
            b += random(-cChange, cChange);
            b = constrain(b, 0, 256);
            noStroke();
            fill(r,g,b);
              //  noStroke();
            //fill(123, 244, 89);
            ellipse(x, y, 1, 1);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 001" };
        Practice003 mySketch = new Practice003();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
