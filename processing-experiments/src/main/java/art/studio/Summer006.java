package art.studio;

import processing.core.PApplet;
import processing.core.PGraphics;

import java.util.Random;
import java.util.ArrayList;

//practice shades
public class Summer006 extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    float xoff = (float) 0.0;
    float grain = (float) 0.09;
    float ang = 90;
    boolean grow = true;
    float wid = w / 10;
    ArrayList<ArrayList<Float[]>> vertices;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        alea = new Random();
        background(0, 0, 100);
        setVertices();
    }

    private void setVertices() {
        vertices = new ArrayList<>();
        for (int j = 0; j < 9; j++) {
            ArrayList<Float[]> v = new ArrayList<>();
            Float[] one = { (float) 0, (float) 0.9 * h - j * h / 10 };
            v.add(one);
            Float[] two = { (float) 0.33*w, (float) 0.9 * h - j * h / 10 };
            v.add(two);
            Float[] three = { (float) 0.66*w, (float) 0.9 * h - j * h / 10 };
            v.add(three);
            Float[] four = { (float) w, (float) 0.9 * h - j * h / 10 };
            v.add(four);
            vertices.add(v);
        }
    }

    /* vary by: changing the alpha, the ang and wid increments, the max value in the condition */
    @Override
    public void draw() {
            noFill();
            stroke(334, 0, 0, 8);
            wave();
                ang += 0.21;
                wid += 0.84;
            if (ang >= 290) {
            noLoop();
            save("summer006.png");
            exit();
        }
    }

    private void wave() {
        float cx, cy, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        for (int i = 0; i < vertices.size(); i++) {
            beginShape();
            cx = vertices.get(i).get(0)[0];
            cy = vertices.get(i).get(0)[1];
            vertex(cx, cy);
            controls = drawTang(cx, cy);
            cpx2 = controls[2];
            cpy2 = controls[3];
            for (int j = 1; j < vertices.get(i).size(); j++) {
                cx = vertices.get(i).get(j)[0];
                cy = vertices.get(i).get(j)[1];
                controls = drawTang(cx, cy);
                cpx1 = controls[0];
                cpy1 = controls[1];
                bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
                cpx2 = controls[2];
                cpy2 = controls[3];
            }
            endShape();
        }
    }

    private Float[] drawTang(float cx, float cy) {
        float dx1 = cx + wid * cos(radians(ang));
        float dy1 = cy + wid * sin(radians(ang));
        float dx2 = cx + wid * cos(radians(ang + 180));
        float dy2 = cy + wid * sin(radians(ang + 180));
        Float[] res = { dx1, dy1, dx2, dy2 };
        return res;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Summer006" };
        Summer006 mySketch = new Summer006();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
