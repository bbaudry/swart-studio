/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Random;

public class SL017 extends PApplet {
    int w = 1920;
    int h = 1080;
    float john = w / 211;
    float baldessari = w / 42;
    int street;
    int block;
    ArrayList<ArrayList<Float[]>> coords;
    int[] cyberHue = { 190, 320 };
    int[] cyberSat = { 80, 100 };
    int[] cyberBri = { 80, 100 };
    float hu;
    boolean huInc;
    Random alea;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        noStroke();
        coords = new ArrayList<>();
        init();
        noFill();
        alea = new Random();
        street = 0;
        block = 0;
        hu = cyberHue[0];
        huInc = true;
        background(0, 0, 0);
    }

    @Override
    public void draw() {
        if (frameCount < 4096) {
            street = alea.nextInt(coords.size());
            block = alea.nextInt(coords.get(street).size() - 1);
            Float[] rick = coords.get(street).get(block);
            Float[] roll = coords.get(street).get(block + 1);
            float eps = random(john, baldessari);
            if (hu < cyberHue[1] && huInc) {
                hu = hu + (float) 0.1;
            } else {
                huInc = false;
            }
            if (hu > cyberHue[0] && !huInc) {
                hu = hu - (float) 0.1;
            } else {
                huInc = true;
            }
            buildFuzz(rick[0], rick[1], roll[0], roll[1], eps);
        }
        else{
            save("SL017#002.png");
            noLoop();
        }
    }

    private void buildFuzz(float x1, float y1, float x2, float y2, float eps) {
        int steps = 15;
        float inc = eps / steps;
        float fugee;
        noStroke();
        if (x1 < x2) {
            for (int i = 1; i <= steps; i++) {
                fill(hu, 100, 100, 25);
                fugee = i * inc;
                quad(x1 + fugee, y1 + fugee, x1 - fugee, y1 - fugee, x2 - fugee, y2 - fugee, x2 + fugee, y2 + fugee);
            }
        } else {
            for (int i = 1; i <= steps; i++) {
                fill(hu, 100, 100, 25);
                fugee = i * inc;
                quad(x1 - fugee, y1 + fugee, x1 + fugee, y1 - fugee, x2 + fugee, y2 - fugee, x2 - fugee, y2 + fugee);
            }
        }
    }

    private void init() {
        float moon = random((float) 0.008, (float) 0.02) * w;
        while (moon < w) {
            bang(0, moon, moon, 0, 1);
            bang(w - moon, h, w, h - moon, 2);
            bang(moon, h, 0, h - moon, 3);
            bang(w, moon, w - moon, 0, 4);
            moon = moon + random((float) 0.04, (float) 0.06) * w;
        }
    }

    private void bang(float ox, float oy, float dx, float dy, int knob) {
        ArrayList<Float[]> avenue = new ArrayList<>();
        float step = 100; // default value, changed in the following switch
        int den = w / 50;
        switch (knob) {
            case 1:
                step = dx / den;
                break;
            case 2:
                step = (w - ox) / den;
                break;
            case 3:
                step = ox / den;
                break;
            case 4:
                step = (w - dx) / den;
                break;
        }
        float inc = 4 / step;// random(1,3)/step;
        float x1 = ox;
        float x2;
        float y2;
        float y1 = oy;
        Float[] origin = { x1, y1 };
        avenue.add(origin);
        float t = 0;
        float i = inc;
        while (y1 > dy) {
            t = i * inc;
            x2 = (1 - t) * ox + (t * dx);
            y2 = (1 - t) * oy + (t * dy);
            Float[] destination = { x2, y2 };
            avenue.add(destination);
            x1 = x2;
            y1 = y2;
            i = i + random(1, 4) * inc;
        }
        coords.add(avenue);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL017" };
        SL017 mySketch = new SL017();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
