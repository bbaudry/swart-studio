package art.studio;

import processing.core.PApplet;

//practice drawing parts of circles circles
public class Practice011  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float init_r;
    float rate_r;
    float radius;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        cx=w/2;
        cy=h/2;
        init_r=w/10;
        rate_r=0.05f;
        radius=init_r;
    }

    @Override
    public void draw() {
        background(0,0,0);
        ellipse(cx,cy,radius,radius);
        if(radius>0.9*w){rate_r=-rate_r;}
        if(radius<init_r){rate_r=-rate_r;}
        radius=radius+rate_r;
    } 

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 011" };
        Practice011 mySketch = new Practice011();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
