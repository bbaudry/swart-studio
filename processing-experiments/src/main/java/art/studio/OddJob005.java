/* Metadata {"endless":true, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

//practice drawing parts of circles circles
public class OddJob005 extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float x1;
    float y1;
    float x2;
    float y2;
    float x3;
    float y3;
    float john;
    float baldessari;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(0, 0, 0);
        cx = random(w / 4, 3 * w / 4);
        cy = random(3 * h / 4, h);
        john = random((float) (0.6 * w), (float) (0.8 * w));
        baldessari = random((float) (0.6 * h), (float) (0.8 * h));
    }

    @Override
    public void draw() {
        int steps = (int) random(5, 11);
        iteration(steps);
        // noLoop();
    }

    public void iteration(int steps) {
        x1 = 0;
        y1 = cy;
        for (int i = 0; i < steps; i++) {
            y2 = y1 - cy / steps;
            x2 = x1 + cx / steps;
            float c = random(120);
            fill(c, 80, 80);
            quad(x1, y1, x2, y2, x2 + 77 - (i + 1) * 20, y2, x1 + 77 - i * 20, y1);
            x1 = x2;
            y1 = y2;
        }
        x1 = cx;
        y1 = 0;
        for (int i = 0; i < steps; i++) {
            x2 = x1 + 42 * i * cos(0);
            y2 = y1 + 42 * i * sin(0);
            x3 = x1 + 42 * i * cos(PI / 3);
            y3 = y2 + 42 * i * sin(PI / 3);
            float c = random(120);
            stroke(c, 80, 80);
            strokeWeight(7);
            line(x2, y2, x3, y3);
        }
        float b = random(0, 10);
        float not = 42 * random(11);
        float boring = 42 * random(11);
        noStroke();
        fill(0, 0, b);
        ellipse(john, baldessari, not, boring);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "OddJob 005" };
        OddJob005 mySketch = new OddJob005();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
