package art.studio;

import processing.core.PApplet;
import processing.core.PGraphics;

import java.util.Random;
import java.util.ArrayList;

//practice shades
public class Summer004 extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    float xoff = (float) 0.0;
    float grain = (float) 0.09;
    int nbAngles;
    int nbLayers;
    ArrayList<ArrayList<Float[]>> coords;

    float ang = 90;
    boolean grow = true;
    float wid=w/10;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        alea = new Random();
        background(0, 0, 0);
        nbLayers = 84;
        // frameRate(1);
        coords = initCoords();
    }

    @Override
    public void draw() {
            background(42, 42, 42);
            noFill();
            stroke(193, 100, 100);
            for (int i = 0; i < coords.size(); i++) {
                oneLayerCompact(w / 2, h / 2, coords.get(i));
            }
            if (grow) {
                ang += 0.1;
                wid += 0.05;
            } else {
                ang -= 0.1;
                wid -= 0.05;
            }
            if (ang >= 180) {
                grow = false;
            }
            if (ang <= 0) {
                grow = true;
            }
    }

    private void showAngles(ArrayList<Float> angles, ArrayList<ArrayList<Float[]>> coords) {
        float hu = 20;
        float rad_seed = (float) 0.1 * w;
        float rad;
        System.out.println("will draw " + coords.size() + " ellipses");
        for (int j = 0; j < coords.size(); j++) {
            stroke(hu, 100, 100);
            hu += 27;
            for (int i = 0; i < 7; i++) {
                rad = (float) (0.3 * w + rad_seed * noise(xoff));
                xoff += grain;
                float x = w / 2 + rad * cos(radians(angles.get(j)));
                float y = h / 2 + rad * sin(radians(angles.get(j)));
                ellipse(x, y, 17, 17);
            }
        }
    }

    private ArrayList<ArrayList<Float[]>> initCoords() {
        ArrayList<ArrayList<Float[]>> coords = new ArrayList<>();
        float angle, initangle, radius;
        for (int i = 0; i < nbLayers; i++) {
            initangle = alea.nextInt(180);
            angle = initangle;
            ArrayList<Float[]> layer = new ArrayList<>();
            while (angle < 340 + initangle) {
                radius = (float) (0.2 * w + w * 0.3 * noise(xoff));
                xoff += grain;
                angle += 42 + 21 * noise(xoff);
                xoff += grain;
                Float[] vec = { angle, radius };
                layer.add(vec);
            }
            coords.add(layer);
        }
        return (coords);
    }

    private void oneLayerCompact(float cx, float cy, ArrayList<Float[]> angles) {
        float px, py, px1, py1, cpx1, cpy1, cpx2, cpy2, rad;
        Float[] controls;
        beginShape();
        rad = angles.get(0)[1];
        px = cx + rad * cos(radians(angles.get(0)[0]));
        py = cy + rad * sin(radians(angles.get(0)[0]));
        vertex(px, py);
        controls = drawTang(angles.get(0)[0], cx, cy, rad);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (int i = 1; i < angles.size(); i++) {
            rad = angles.get(i)[1];
            px1 = cx + rad * cos(radians(angles.get(i)[0]));
            py1 = cy + rad * sin(radians(angles.get(i)[0]));
            controls = drawTang(angles.get(i)[0], cx, cy, rad);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        controls = drawTang(angles.get(0)[0], cx, cy, rad);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        endShape();
    }

    private Float[] drawTang(float deg, float cx, float cy, float rad) {
        float tx = cx + rad * cos(radians(deg));
        float ty = cy + rad * sin(radians(deg));
        //float wid1 = w / 10;// *alea.nextFloat();
        //float wid2 = w / 10;// *alea.nextFloat();
        // int ang = 90;//+(-11+alea.nextInt(22));
        float dx1 = tx + wid * cos(radians(deg - ang));
        float dy1 = ty + wid * sin(radians(deg - ang));
        float dx2 = tx + wid * cos(radians(deg - ang + 180));
        float dy2 = ty + wid * sin(radians(deg - ang + 180));
        Float[] res = { dx1, dy1, dx2, dy2 };
        return res;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Summer004" };
        Summer004 mySketch = new Summer004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
