package art.studio;

import processing.core.PApplet;

//practice circle with glow
public class Practice014  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx = w/2;
    float cy = h/2;
    int iter;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(1,0,0);
        iter = 0;
    }

    @Override
    public void draw() {
        //background(1,0,0);
        fill(0,0,100);
        translate(w/2,h/2);
        rotate(radians(iter));
        rect(w/10, h/10, w/10, h/10);
        iter++;
    //noLoop();
    } 

    public static void main(String[] args) {
        String[] processingArgs = { "Practice014" };
        Practice014 mySketch = new Practice014();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
