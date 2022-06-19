/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth008 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = { 50, 185, 230, 275, 320 };// 95, 140,
    int lou = 69;
    float hu;
    float cx;
    float cy;
    Random rd;
    ArrayList<Float[]> milkyWay;
    int tr;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rd = new Random();
        cx = 0;
        cy = 0;
        tr = 0;
        milkyWay = new ArrayList<>();
        init();
        background(230, 80, 80);
        fill(0, 100, 100);
        noStroke();
    }

    @Override
    public void draw() {
        if (tr < milkyWay.size() - 1) {
            star(milkyWay.get(tr)[0], milkyWay.get(tr)[1]);
            tr++;
        } else {
            noLoop();
        }
    }

    private void star(float cx, float cy) {
        float rad = w / lou;
        stroke(0, 0, 100);
        int steps = rd.nextInt(lou);
        for (int i = 0; i < steps; i++) {
            float r = random((float) 0.8, (float) 1.4) * rad;
            float ang = random(2 * PI);
            hu = palettef[(int) random(palettef.length)];
            stroke(hu, random(80, 100), random(80, 100));
            fill(hu, random(80, 100), random(80, 100));
            float x = cx + r * cos(ang);
            float y = cy + r * sin(ang);
            ellipse(x, y, 2, 2);
            noFill();
            if (x < cx && y < cy) {
                bezier(cx, cy, cx - 10, cy, x, cy - 10, x, y);
            }
            if (x >= cx && y < cy) {
                bezier(cx, cy, cx + 10, cy, x, cy - 10, x, y);
            }
            if (x >= cx && y >= cy) {
                bezier(cx, cy, cx + 10, cy, x, cy + 10, x, y);
            }
            if (x < cx && y >= cy) {
                bezier(cx, cy, cx - 10, cy, x, cy + 10, x, y);
            }
        }
    }

    private void init() {
        for (int i = 0; i < lou; i++) {
            Float[] coord = new Float[2];
            coord[0] = random(w);
            coord[1] = random(h);
            milkyWay.add(coord);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth008 " };
        Birth008 mySketch = new Birth008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
