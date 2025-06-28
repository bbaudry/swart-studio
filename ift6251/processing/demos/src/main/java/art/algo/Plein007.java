package art.algo;

import processing.core.PApplet;
import java.util.Random;

public class Plein007 extends PApplet {
    int w, h;
    int leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth;
    int resolution;
    double penwidth;
    int st;
    float cx;
    float cy;
    float rad;
    Random rand;

    @Override
    public void settings() {
        w = (int) Math.floor(8.5 * 96);
        h = (int) Math.floor(11 * 96);
        size(w, h);
    }

    @Override
    public void setup() {
        leftmargin = (int) Math.floor(w * 0.05);
        rightmargin = (int) Math.floor(w * 0.95);
        topmargin = (int) Math.floor(h * 0.05);
        bottommargin = (int) Math.floor(h * 0.75);
        actualwidth = rightmargin - leftmargin;
        actualheight = bottommargin - topmargin;
        colorMode(HSB, 360, 100, 100, 250);
        strokeWeight(3);
        penwidth = 0.04 * 96; // 0.04 inch is 1 mm, the width of stabilo 68/32
        rand=new Random();
        int[] resolutions = new int[] { 3,5,7 };
        int randomIndex = rand.nextInt(resolutions.length);
        resolution = resolutions[randomIndex];
    }

    @Override
    public void draw() {
        background(0, 0, 100);
        noFill();
        stroke(0, 100, 100);
        vera();
        noLoop();
    }

    public void vera() {
        double step = Math.floor(actualwidth / resolution);
        for (int i = 0; i < resolution; i++) {
            double x = leftmargin + i * step;
            for (int j = 0; j < resolution; j++) {
                double y = topmargin + j * step;
                tiltquad(x, y, step);
            }
        }
    }

    public void tiltquad(double x, double y, double step) {
        double off = 0.2;
        double inc = penwidth + off;
        double horizon = 0.0;
        double desordre = (rand.nextDouble() * (3.6 + 3.6)) - 3.6; // random number in range (-3.6, 3.6)

        pushMatrix();
        translate((float) x, (float) y);
        rotate(radians((float) desordre));
        for (int i = 0; i < step; i += inc) {
            line(0, (float) horizon, (float) step, (float) horizon);
            horizon += inc;
        }
        popMatrix();
    }

    public static void main(String[] args) {
        String[] processingArgs = { "desordre " };
        Plein007 mySketch = new Plein007();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
