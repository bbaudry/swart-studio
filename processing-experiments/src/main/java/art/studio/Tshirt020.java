/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt020 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    float x1, y1, x2, y2, x3, y3;
    float block_width;
    float block_height;
    int inc = 72;
    int[] palette = { 50, 50 + inc, 50 + 2 * inc, 50 + 3 * inc, 50 + 4 * inc };

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0, 0, 0);
        alea = new Random();
        stroke(0, 0, 100);
        fill(0, 0, 100);
    }

    @Override
    public void draw() {
        bass();
        noLoop();
        save("tshirt020.png");
    }

    private void bass() {
        float cx = (float) (0.2 * w);
        float cy = (float) (0.6 * h);
        float rad1 = (float) (0.2 * h);
        float rad2 = (float) (0.4 * h);
        float angle1 = PI + PI / 3;
        float x1 = cx + rad1 * cos(angle1);
        float x2 = cx + rad2 * cos(angle1);
        float x3 = cx + rad1 * cos(2 * PI + PI / 5);
        float x4 = x3;
        float x5 = x1 + (rad2 - rad1) * cos(PI + PI / 2);
        float y1 = cy + rad1 * sin(angle1);
        float y2 = cy + rad2 * sin(angle1);
        float y3 = cy + rad1 * sin(2 * PI + PI / 5);
        float y4 = cy + rad2 * sin(2 * PI + PI / 5);
        float y5 = y1 + (rad2 - rad1) * sin(PI + PI / 2);
        noStroke();
        fill(330, 100, 100);
        ellipse(cx, cy, 21, 21);
        fill(190, 100, 100);
        ellipse(x2, y2, 21, 21);
        ellipse(x3, y3, 21, 21);
        ellipse(x4, y4, 21, 21);
        noFill();
        stroke(190, 100, 100);
        arc(cx, cy, rad1 * 2, rad1 * 2, angle1, 2 * PI + PI / 5);
        arc(cx, cy, rad2 * 2, rad2 * 2, angle1, 2 * PI + PI / 5);

        int hu = 50;
        stroke(hu, 100, 100);
        fill(hu, 100, 100);
        hu+=2;
        ellipse(x5, y5, 5, 5);
//        ellipse(x1, y1, 21, 21);
//        line(x1, y1, x5, y5);
        for (int i = 0; i < 126; i++) {
            angle1 += PI /84;
            x1 = cx + rad1 * cos(angle1);
            x5 = x1 + (rad2 - rad1) * cos(PI + PI / 2);
            y1 = cy + rad1 * sin(angle1);
            y5 = y1 + (rad2 - rad1) * sin(PI + PI / 2);
            stroke(hu, 100, 100);
            fill(hu, 100, 100);
            hu+=2;
            ellipse(x5, y5, 5, 5);
//            ellipse(x1, y1, 21, 21);
//            line(x1, y1, x5, y5);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt020" };
        Tshirt020 mySketch = new Tshirt020();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
