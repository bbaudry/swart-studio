package art.studio;

import processing.core.PApplet;

public class Banner002 extends PApplet {
    int w = 999;
    int h = 333;
    float x1;
    float y1;
    float x2;
    float y2;
    int iterations;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        x1=random(5,w-5);
        y1=random(5,h-5);
        iterations=0;
        strokeWeight(1);
        background(0,0,0);
    }

    @Override
    public void draw() {
        x2=random(5,w-5);
        y2=random(5,h-5);
        fill(0,0,100);
        stroke(0,0,100);
        ellipse(x1,y1,10,10);
        ellipse(x2,y2,10,10);
        line(x1,y1,x2,y2);
        x1=x2;
        y1=y2;
        if(iterations==657){noLoop();save("B002.png");}
        iterations++;
    }

   
    public static void main(String[] args) {
        String[] processingArgs = { "Banner001" };
        Banner002 mySketch = new Banner002();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
