package art.studio;

import processing.core.PApplet;
// a glitchy / buggy version of SL013
public class SL013Glitch extends PApplet {
    int w = 1800;
    int h = 1000;
    float cx;
    float cy;
    float le;
    float ra;
    float dx;
    float dy;
    float an;
    int baldessari;
    int john;
    boolean boring;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        cx = random(w / 4, 3 * w / 4);
        cy = random(h / 4, 3 * h / 4);
        ra = w / 99;
        if (cx < w / 2) {
            le = w - cx;
        } else {
            le = cx;
        }
        baldessari = 7;// number of rays at each step
        john = 0;// initial number of steps
        boring = true;// initially the circle will grow
        background(0, 0, 0);
    }

    @Override
    public void draw() {
        fill(40, 100, 100);
        ellipse(cx, cy, ra, ra);
        if (random(2) < 1) {
            stroke(40, 100, 100);
            fill(40, 100, 100);
        } else {
            stroke(40, 0, 0);
            fill(40, 100, 0);
        }
        for (int i = 0; i < baldessari; i++) {
            an = random(2 * PI);
            dx = cx + le * cos(an);
            dy = cy + le * 3 * sin(an);
            line(cx, cy, dx, dy);
            section(an, an + PI / 10);
        }
        //the glitch is here. in fact it's a bug: at some point ra becomes negative.
        //this was not my intention, i wanted ra to grow for some, then decrease, then grow again, etc.
        //correct version is in SL013.java
        //but here, there is a glitch, probably because the ellipse function tolerate negative values as radius, turning it in a positive value
        //meanwhile, the section method uses ra in a random selection, and there, it is negative
        if(john<1111){ra++;}
        else{ra--;}
        john++;
    }

    // a1 and a2 are angles in the range [0,2*PI]
    private void section(float a1, float a2) {
        // on a segment of length le, sr designates a random point where we will start
        // the segment, tr is the final point
        // for sr we pick a value below le to have a bit of slack to pick tr
        float sr = random(ra, le / 2);
        float tr = random(sr, le);
        float x1 = cx + sr * cos(a1);
        float y1 = cy + sr * sin(a1);
        float x2 = cx + tr * cos(a1);
        float y2 = cy + tr * sin(a1);
        float x3 = cx + sr * cos(a2);
        float y3 = cy + sr * sin(a2);
        float x4 = cx + tr * cos(a2);
        float y4 = cy + tr * sin(a2);
        quad(x1, y1, x2, y2, x4, y4, x3, y3);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL013Glitch" };
        SL013Glitch mySketch = new SL013Glitch();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
