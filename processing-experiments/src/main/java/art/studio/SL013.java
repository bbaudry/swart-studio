package art.studio;

import processing.core.PApplet;

public class SL013 extends PApplet {
    int w = 1800;
    int h = 1000;
    float cx;
    float cy;
    float ra;
    float dx;
    float dy;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        cx=random(w/4,3*w/4);
        cy=random(h/4,3*h/4);
        ra=w/42;
        background(0,0,0);
    }

    @Override
    public void draw() {
        fill(40,100,100);
        ellipse(cx,cy,ra,ra);
        float an=random(PI);
        dx=cx+cx*cos(an);
        dy=cy+cx*3*sin(an);
        if(random(2)<1){stroke(40,100,100);}
        else{stroke(40,0,0);}
        line(cx,cy,dx,dy);
    }


   
    public static void main(String[] args) {
        String[] processingArgs = { "SL013" };
        SL013 mySketch = new SL013();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
