package art.studio;

import processing.core.PApplet;

public class Practice001  extends PApplet {
    int w = 1000;
    int h = 1000;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        //frameRate(1);
        background(0);
        //noLoop();
    }

    @Override
    public void draw() {
        spiral1();
    }

    // simple function that draws points along a spiral, 3 circles, counter clockwise
    public void spiral1() {
        float step = (float) (2 * Math.PI / 100);
        for (float angle = 0; angle > -(2 * Math.PI * 4); angle -= step) {
            float x = width / 2 + cos(angle) * (20 * angle);
            float y = height / 2 + sin(angle) * (20 * angle);
            noStroke();
            fill(235, 188, 102);
            ellipse(x, y, 5, 5);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 001" };
        Practice001 mySketch = new Practice001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
