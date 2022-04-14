package art.studio;

import processing.core.PApplet;

public class SL002  extends PApplet {
    int w = 1000;
    int h = 1000;
    float hu;
    float sa;
    float br;
    float john;
    float baldessari;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
    }

    @Override
    public void draw() {
        background(0,0,0);
        spiral3(84);
    }

    // simple function that draws points along a spiral, 6 circles, clocwise, changing color randomly
    public void spiral3(float rotate) {
        john=random((float)0.4*w,(float)0.6*w);
        baldessari=random((float)0.4*h,(float)0.6*h);
        float step = (float) (2 * Math.PI / 300);
        for (float angle = 0; angle < 2 * Math.PI * 6; angle += step) {
            float x = john + cos(angle+rotate) * (15 * angle);
            float y = baldessari + sin(angle+rotate) * (15 * angle);
            noStroke();
            hu=random(360);
            sa=random(100);
            br=random(100);
            fill(hu,sa,br);
              //  noStroke();
            //fill(123, 244, 89);
            ellipse(x, y, 42, 42);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL002" };
        SL002 mySketch = new SL002();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
