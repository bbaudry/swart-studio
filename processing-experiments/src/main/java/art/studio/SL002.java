package art.studio;

import processing.core.PApplet;

public class SL002  extends PApplet {
    int w = 1000;
    int h = 1000;
    float x;
    float y;
    float hu;
    float sa;
    float br;
    float tr;
    float we;
    float john;
    float baldessari;
    float not;
    float boring;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(4);
        not=random(310); //knob
        boring=not+random(30,50); //knob
        colorMode(HSB,360,100,100);
        background(0,0,0); //knob
    }

    @Override
    public void draw() {
        spiral3(PI); //knob = PI
    }

    // draws ellipses along a spiral. The spiral goes clocwise and is composed of 6 complete circle
    // the spiral is centered on the center of the canvas
    // the width of the spiral is determined by the rotate argument, should be in the [0,2*PI] range
    // on top of the spiral draw lines
    // hu for ellipses is chosen randomly in a fixed range of values. the range is selected randomly in setup
    public void spiral3(float rotate) {
        john=w/2;
        baldessari=h/2;
        float step = (float) (2 * Math.PI / 300);
        for (float angle = 0; angle < 2 * Math.PI * 6; angle += step) {
            float x = john + cos(angle+rotate) * (15 * angle);
            float y = baldessari + sin(angle+rotate) * (15 * angle);
            noStroke();
            hu=random(not,boring); //knob
            sa=random(100); //knob
            br=random(20); //knob
            tr=random(20); //knob
            fill(hu,sa,br,tr);
            ellipse(x, y, random(51,91), random(51,91));
        }
        for (int i=0; i<71; i++){
            hu=random(not,boring); //knob
            tr=random(20); //knob
            we=random(7,17); //knob
            strokeWeight(we);
            stroke(hu,100,100,tr);
            y=random(h); //knob8
            line(0,y,w,y);
        }
        
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL002" };
        SL002 mySketch = new SL002();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
