/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class OddJob008 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palette = { 250, 322, 34, 106, 178};
    float x1;
    float y1;
    float x2;
    float y2;
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        background(230, 80, 40);
    }

    @Override
    public void draw() {
        //background(230, 80, 40);
        x1 = random(w/4,w/2);
        y1 = random((float)0.5*h,(float)0.8*h);
        x2 = x1 + random(w / 5);
        boolean john = rand.nextBoolean();
        if (john) {
            y2 = y1 - random((float)0.2)*h;
        } else {
            y2 = y1 + random((float)0.2)*h;
        }
        float sw = random(11, 37);
        strokeWeight(sw);
        strokeCap(SQUARE);
        int c = (int) random(palette.length);
        fill(palette[c], 80, 80);
        noStroke();
        if (john) {
            quad(x1, y1, x2, y2, x2, y1, x1, y1 + (y1 - y2));
        } else {
            quad(x1, y1, x2, y2, x2, y1, x1, y1 + (y2 - y1));
        }
        x1 = x2;
        if (john) {
            y1 = y2;
        } 
        c = (int) random(palette.length);
        fill(palette[c], 80, 80);
        noStroke();
        float rad = random((float)0.3*w,(float)0.4*w);
        ellipse(x1, y1 - rad / 2, rad, rad);

        c = (int) random(palette.length);
        fill(palette[c], 80, 80);
        y1 = y1 - rad;
        x2 = x1 - w / random(7, 11);
        triangle(x1, y1, x2, y1, random(x2, x1), y1 - random(h / random(2, 11)));
        fill(10, 0, 100);
        ellipse(x1, y1, 10, 10);
        //noLoop();
        //save("OddJob08.png");
    }

    public static void main(String[] args) {
        String[] processingArgs = { "OddJob008 " };
        OddJob008 mySketch = new OddJob008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
