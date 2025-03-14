package art.studio;

import processing.core.PApplet;

import java.util.Random;
import java.util.ArrayList;

//practice shades
public class Summer008 extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    float xoff = (float) 0.0;
    float grain = (float) 0.09;
    float ang = 180;
    boolean grow = true;
    boolean bend = true;
    boolean fold = true;
    boolean secondPhase = false;
    boolean closing = false;
    int startSecond = 0;
    int startClosing = 0;
    int nbVertices = 63;
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
        background(0, 0, 0);
        setVertices();
        noFill();
        stroke(0, 0, 100);

    }

    private void setVertices() {
        vertices = new ArrayList<>();
        for (int i = 1; i < nbVertices; i++) {
            float speed = (float) (i * 0.03);
            ArrayList<Float[]> v = new ArrayList<>();
            Float[] one = { (float) 0, (float) 0.5 * h, speed, (float) 180, (float) 0.125 * w, (float) 0.125 * w };
            v.add(one);
            Float[] two = { (float) 0.25 * w, (float) 0.5 * h, speed, (float) 180, (float) 0.125 * w,
                    (float) 0.125 * w };
            v.add(two);
            Float[] three = { (float) 0.75 * w, (float) 0.5 * h, speed, (float) 180, (float) 0.125 * w,
                    (float) 0.125 * w };
            v.add(three);
            Float[] four = { (float) w, (float) 0.5 * h, speed, (float) 180, (float) 0.125 * w, (float) 0.125 * w };
            v.add(four);
            vertices.add(v);
        }
    }

    @Override
    public void draw() {
        if (vertices.get(vertices.size() - 1).get(1)[1] > 0 && grow) {
            background(0, 0, 0);
            wave();
            updateVerticesUp();
        } else {
            grow = false;
            if (vertices.get(vertices.size() - 1).get(1)[4] > -(float) 0.25 * w && bend) {
                background(0, 0, 0);
                wave();
                updateVerticesCenter();
            } else {
                bend = false;
                if (vertices.get(vertices.size() - 1).get(1)[1] < (float) 0.5 * h && fold) {
                    background(0, 0, 0);
                    wave();
                    updateVerticesCenter();
                    updateVerticesDown();
                } else {
                    fold = false;
                    if (!secondPhase) {
                        secondPhase = true;
                        startSecond = frameCount;
                    }
                    if (secondPhase && frameCount - startSecond < 168) {
                        updateVerticesUp();
                    }
                    if (secondPhase && frameCount - startSecond < startSecond + 168) {
                        background(0, 0, 0);
                        wave();
                        spinVertices();
                    } else {
                        if (!closing) {
                            closing = true;
                            startClosing = frameCount;
                        }
                    }
                }
            }

        }
        if (closing) {
            background(0, 0, 0);
            wave();
            trimVertices();
            spinVertices();

        }
        if (vertices.isEmpty()) {
            background(0, 0, 0);
            noLoop();
        }
    }

    private void updateVerticesUp() {
        for (int i = 0; i < vertices.size(); i++) {
            vertices.get(i).get(1)[1] -= vertices.get(i).get(1)[2];
            vertices.get(i).get(2)[1] += vertices.get(i).get(2)[2];
        }
    }

    private void updateVerticesDown() {
        for (int i = 0; i < vertices.size(); i++) {
            vertices.get(i).get(1)[1] += vertices.get(i).get(1)[2];
            vertices.get(i).get(2)[1] -= vertices.get(i).get(2)[2];
        }
    }

    private void updateVerticesCenter() {
        for (int i = 0; i < vertices.size(); i++) {
            vertices.get(i).get(1)[4] -= vertices.get(i).get(1)[2];
            vertices.get(i).get(1)[5] += vertices.get(i).get(1)[2];
            vertices.get(i).get(2)[4] += vertices.get(i).get(2)[2];
            vertices.get(i).get(2)[5] -= vertices.get(i).get(2)[2];
        }
    }

    private void spinVertices() {
        for (int i = 0; i < vertices.size(); i++) {
            vertices.get(i).get(1)[3] -= vertices.get(i).get(1)[2];
            // vertices.get(i).get(1)[5] += vertices.get(i).get(1)[2];
            vertices.get(i).get(2)[3] += vertices.get(i).get(2)[2];
            // vertices.get(i).get(2)[5] -= vertices.get(i).get(2)[2];
        }
    }

    private void trimVertices() {
        int i = alea.nextInt(vertices.size());
        vertices.remove(i);
    }

    private void wave() {

        float cx, cy, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        for (int i = 0; i < vertices.size(); i++) {
            beginShape();
            cx = vertices.get(i).get(0)[0];
            cy = vertices.get(i).get(0)[1];
            vertex(cx, cy);
            controls = drawTang(cx, cy, vertices.get(i).get(0)[3], vertices.get(i).get(0)[4],
                    vertices.get(i).get(0)[5]);
            cpx2 = controls[2];
            cpy2 = controls[3];
            for (int j = 1; j < vertices.get(i).size(); j++) {
                cx = vertices.get(i).get(j)[0];
                cy = vertices.get(i).get(j)[1];
                controls = drawTang(cx, cy, vertices.get(i).get(j)[3], vertices.get(i).get(j)[4],
                        vertices.get(i).get(j)[5]);
                cpx1 = controls[0];
                cpy1 = controls[1];
                bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
                cpx2 = controls[2];
                cpy2 = controls[3];
            }
            endShape();
        }
    }

    private Float[] drawTang(float cx, float cy, float angle, float radleft, float radright) {
        ang = angle;
        wid = w / 8;
        float dx1 = cx + radleft * cos(radians(ang));
        float dy1 = cy + radleft * sin(radians(ang));
        float dx2 = cx + radright * cos(radians(ang + 180));
        float dy2 = cy + radright * sin(radians(ang + 180));
        Float[] res = { dx1, dy1, dx2, dy2 };
        return res;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Summer008" };
        Summer008 mySketch = new Summer008();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
