/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/

/* Inspiration: https://st3.depositphotos.com/9626848/14321/i/1600/depositphotos_143218721-stock-photo-life-under-the-microscope-of.jpg */
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Cell001 extends PApplet {
    int ratio = 3;
    int wi = 1000 * ratio;
    int he = 1000 * ratio;
    int w;
    Random alea = new Random();
    float xoffglobal = (float) 0.0;
    float grainglobal = (float) 0.05;

    @Override
    public void settings() {
        size(wi, he);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0, 0, 0);
        // frameRate(1);
    }

    @Override
    public void draw() {
        if (frameCount < 2) {
            noFill();
            stroke(185 + alea.nextFloat() * 10, 100, 100, 84);
            background(0, 0, 0);
            w = wi;
            oneCell(11, 84, wi / 2, he / 2);
        } else {
            noLoop();
            save("cell001.png");
        }
    }

    private void oneCell(int cake, int layers, float cx, float cy) {
        ArrayList<ArrayList<Float>> radii = setRadii(cake, layers);
        core(cake, layers, radii, cx, cy);
        petals(cake, layers, radii, cx, cy);
        oneEnvelop(cake, layers, radii, cx, cy);
    }

    private void oneEnvelop(int cake, int layers, ArrayList<ArrayList<Float>> radii, float cx, float cy) {
        noFill();
        float angle, radius, angle_inc, x1, x2, y1, y2;
        angle_inc = radians(360 / cake);
        for (int k = 0; k < layers; k++) {
            angle = angle_inc;
            changeStrokeColor();
            strokeWeight(1);
            beginShape();
            radius = radii.get(0).get(k);
            x2 = cx + radius * cos(angle);
            y2 = cy + radius * sin(angle);
            curveVertex(x2, y2);
            curveVertex(x2, y2);
            for (int i = 1; i < cake; i++) {
                angle += angle_inc;
                radius = radii.get(i).get(k);
                xoffglobal += grainglobal;
                x1 = cx + radius * cos(angle);
                y1 = cy + radius * sin(angle);
                curveVertex(x1, y1);
            }
            curveVertex(x2, y2);
            curveVertex(x2, y2);
            endShape();
        }
    }

    private void changeStrokeColor() {
        stroke(25 + alea.nextFloat() * 30, 100, 100);
    }

    private void petals(int cake, int layers, ArrayList<ArrayList<Float>> radii, float cx, float cy) {
        noFill();
        float angle, radius, py, t, angle_inc;
        angle_inc = radians(360 / cake);
        angle = angle_inc;
        for (int k = 0; k < layers / 2; k++) {
            angle = angle_inc / 2;
            for (int i = 0; i < cake; i++) {
                pushMatrix();
                translate(cx, cy);
                radius = radii.get(i).get(k);
                rotate(angle + radians(-4 + alea.nextFloat() * 8));
                t = (float) (0.6);
                py = (1 - t) * 0 + (t * radius);
                //strokeWeight(1 + alea.nextFloat() * 2);
                changeStrokeColor();
                ellipse(0, py, radius / 4 + alea.nextFloat() * radius / 9, radius / 3 + alea.nextFloat() * radius / 4);
                angle += angle_inc;
                popMatrix();
            }
        }
    }

    private ArrayList<ArrayList<Float>> setRadii(int cake, int layers) {
        ArrayList<ArrayList<Float>> radii = new ArrayList<>();
        float radius;
        for (int i = 0; i < cake; i++) {
            ArrayList<Float> radiiVec = new ArrayList<>();
            for (int j = 0; j < layers; j++) {
                radius = w / 4 + noise(xoffglobal) * w / 4;
                xoffglobal += grainglobal;
                radiiVec.add(radius);
            }
            radii.add(radiiVec);
        }
        return radii;
    }

    private void core(int cake, int layers, ArrayList<ArrayList<Float>> radii, float cx, float cy) {
        changeStrokeColor();
        noFill();
        float s = w / 80; // diameter for each particle
        int rings = 11; // controls the number of rings that are drawn
        int density = 30; // 60 is the most regular distribution, lower is more dense
        ellipse(cx, cy, s, s);
        float dx, dy, t;
        for (int k = 1; k < rings; k++) {
            t = s * k;// distance from center (cy,cy)
            for (int i = 0; i < 360; i += density / k) {
                dx = cx + (t + alea.nextFloat() * w / 100) * cos(radians(i + alea.nextFloat() * s));
                dy = cy + (t + alea.nextFloat() * w / 100) * sin(radians(i + alea.nextFloat() * s));
                changeStrokeColor();
                ellipse(dx, dy, s + alea.nextFloat() * s / 2, s + alea.nextFloat() * s / 2);
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Cell001" };
        Cell001 mySketch = new Cell001();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
