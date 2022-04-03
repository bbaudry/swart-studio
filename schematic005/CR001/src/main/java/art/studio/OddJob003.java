package art.studio;

import processing.core.PApplet;
import java.util.Random;



public class OddJob003 extends PApplet{
    int w = 1000;
    int h = 1000;
    int[] palette = {20,140,260};
    float x1;
    float y1;
    float x2;
    float y2;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(230,80,40);
    }

    @Override
    public void draw() {
        x1 = random(w/2);
        y1 = random(h/2);
        x2 = random(w/2);
        y2 = random(h/2);
        strokeWeight(random(11,37));
        strokeCap(SQUARE);
        int c = (int)random(palette.length);
        stroke(palette[c],80,80);
        line(x1,y1,x1+x2,y1+y2);
        c = (int)random(palette.length);
        fill(palette[c],80,80);
        noStroke();
        float rad = random(w/10,3*w/10);
        x1=x1+x2;
        y1=y1+y2;
        ellipse(x1+rad/2,y1+rad/2,rad,rad);
        fill(10,0,100);
        ellipse(x1+rad/2,y1+rad/2,20,20);
        noLoop();
    }


    public static void main(String[] args) {
        String[] processingArgs = { "OddJob003"};
        OddJob003 mySketch = new OddJob003();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
