/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt023 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea = new Random();
    ArrayList<ArrayList<Float>> coords = new ArrayList<>();;
    float xoffglobal = (float) 0.0;
    float grainglobal = (float) 0.05;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0, 0, 0);
    }

    @Override
    public void draw() {
        if (frameCount < 2) {
            oneEnvelop(7,42);
        } else {
            noLoop();
            save("tshirt023.png");
        }
    }

    private void oneEnvelop(int cake, int layers) {
        noFill();
        stroke(0, 0, 100);
        float angle, radius, angle_inc, cx, cy, x1, x2, y1, y2;
        angle_inc = radians(360 / cake);
        cx = w / 2;
        cy = h / 2;
        ArrayList<ArrayList<Float>> radii = new ArrayList<>();
        for (int i = 0; i < cake; i++) {
            ArrayList<Float> radiiVec = new ArrayList<>();
            for (int j = 0; j < layers; j++) {
                radius = w / 4 + noise(xoffglobal) * w/4;
                xoffglobal += grainglobal;
                radiiVec.add(radius);
            }
            radii.add(radiiVec);
        }
        for (int k = 0; k < layers; k++) {
            angle = angle_inc;
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

    private void setRadii(int cake) {
        float xoff = (float) 0.0;
        float a_inc = radians(360 / cake);
        float grain = (float) 0.1; // control the noise
        float angle = a_inc;
        float radius;
        for (int i = 0; i < cake; i++) {
            ArrayList<Float> vec = new ArrayList<>();
            radius = noise(xoff) * (float) (0.8 * w);
            vec.add(radius);
            xoff += grain;
            vec.add(angle);
            angle += a_inc;
            coords.add(vec);
        }
    }

    private void flower(float cx, float cy, int cake) {
        float xoff = (float) 0.0;
        float grain = (float) 0.1;
        noFill();
        float a_inc, radius, angle, t, py;
        // + alea.nextInt(42); // number of sections in the shape
        a_inc = radians(360 / cake);// (2 * PI) / cake;
        angle = a_inc;// alea.nextFloat()*PI;
        for (int i = 0; i < cake; i++) {
            pushMatrix();
            translate(cx, cy);
            radius = noise(xoff) * (float) (0.8 * w);
            rotate(angle);
            t = noise(xoff) * (float) (0.5);
            py = (1 - t) * 0 + (t * radius);
            stroke(280 + alea.nextInt(60), 100, 100, 42);
            ellipse(0, py, 42 + alea.nextFloat() * 42, radius / 3 + alea.nextFloat() * radius / 4);
            angle += a_inc;
            popMatrix();
            xoff += grain;
        }
    }

    private void oneCell() {
        float xoff = (float) 0.0;
        float grain = (float) 0.1;
        float cx, cy, radius, angle;
        // noStroke();
        // fill(hu,100,100,21);
        // hu+=4;
        noFill();
        stroke(50, 0, 100, 42);
        int cake = 42 + alea.nextInt(42); // number of sections in the shape
        float a_inc = (2 * PI) / cake;
        translate(w / 2, h / 2);
        angle = alea.nextFloat() * PI;
        cx = 0;// w / 2;
        cy = 0;// h / 2;
        radius = noise(xoff) * w / 2;
        xoff += grain;
        float xinit = cx + radius * cos(angle);
        float yinit = cy + radius * sin(angle);
        float ix = xinit;
        float iy = yinit;
        float dx = 0;
        float dy = 0;
        line(cx, cy, ix, iy);
        beginShape();
        curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);
        float t, px, py;
        line(cx, cy, ix, iy);
        rotate(angle);
        t = (float) (0.5);
        px = (1 - t) * cx + (t * ix);
        py = (1 - t) * cy + (t * iy);
        // ellipse(px, py, 42, 42);
        ellipse(0, py, 42, 142);
        t = (float) (0.25);
        px = (1 - t) * cx + (t * ix);
        py = (1 - t) * cy + (t * iy);
        // ellipse(px, py, 42, 42);
        // ellipse(0,py, 42, 142);
        t = (float) (0.75);
        px = (1 - t) * cx + (t * ix);
        py = (1 - t) * cy + (t * iy);
        // ellipse(px, py, 42, 42);
        // ellipse(0,py, 42, 142);

        for (int i = 0; i < cake - 1; i++) {
            angle += a_inc;
            radius = noise(xoff) * w / 2;
            xoff += grain;
            dx = cx + radius * cos(angle);
            dy = cy + radius * sin(angle);
            curveVertex(dx, dy);
            line(cx, cy, dx, dy);
            rotate(angle);
            t = (float) (0.5);
            px = (1 - t) * cx + (t * ix);
            py = (1 - t) * cy + (t * iy);
            // ellipse(px, py, 42, 42);
            ellipse(0, py, 42, 142);
            t = (float) (0.25);
            px = (1 - t) * cx + (t * ix);
            py = (1 - t) * cy + (t * iy);
            // ellipse(px, py, 42, 42);
            // ellipse(0,py, 42, 142);
            t = (float) (0.75);
            px = (1 - t) * cx + (t * ix);
            py = (1 - t) * cy + (t * iy);
            // ellipse(px, py, 42, 42);
            // ellipse(0,py, 42, 142);
            // triangle(cx,cy, ix, iy, dx, dy);
            ix = dx;
            iy = dy;
        }
        curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);
        endShape();
        // triangle(cx,cy, ix, iy, dx, dy);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt023" };
        Tshirt023 mySketch = new Tshirt023();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
