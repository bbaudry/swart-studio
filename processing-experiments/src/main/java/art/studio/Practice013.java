package art.studio;

import processing.core.PApplet;

//practice circle with glow
public class Practice013  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx = w/2;
    float cy = h/2;
    float ra;

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
        ra = (float)0.9*w;
        background(0,0,0);
        for(int i=0; i<70; i++){
            //stroke(0,0,0);
            noStroke();
            strokeWeight(2);
            fill(1,0,100,25);
            ra=ra-5;
            ellipse(cx,cy,ra,ra);
        }
        
    } 

    public static void main(String[] args) {
        String[] processingArgs = { "Practice012 011" };
        Practice013 mySketch = new Practice013();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
