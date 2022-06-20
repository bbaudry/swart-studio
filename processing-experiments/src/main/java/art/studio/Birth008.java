/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth008 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = { 50,  230, 320 };// 95, 140, 185, 275
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
        if (tr < milkyWay.size()) {
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
            float r = random((float)0.5, (float)2) * rad;
            float ang = random(2 * PI);
            hu = palettef[(int) random(palettef.length)];
            stroke(hu, random(80, 100), random(80, 100));
            strokeWeight(random(1,2));
            fill(hu, random(80, 100), random(80, 100));
            float x = cx + r * cos(ang);
            float y = cy + r * sin(ang);
            ellipse(x, y, 2, 2);
            noFill();
            int offset=lou;
            if (x < cx && y < cy) {
                bezier(cx, cy, cx - offset, cy, x, cy - offset, x, y);
            }
            if (x >= cx && y < cy) {
                bezier(cx, cy, cx + offset, cy, x, cy - offset, x, y);
            }
            if (x >= cx && y >= cy) {
                bezier(cx, cy, cx + offset, cy, x, cy + offset, x, y);
            }
            if (x < cx && y >= cy) {
                bezier(cx, cy, cx - offset, cy, x, cy + offset, x, y);
            }
        }
    }

    private void init() {
        for (int i = 0; i < lou; i++) {
            Float[] coord = new Float[2];
            coord[0] = random((float)0.05,(float)0.95)*w;
            coord[1] = random((float)0.05,(float)0.95)*h;
            milkyWay.add(coord);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth008 " };
        Birth008 mySketch = new Birth008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
