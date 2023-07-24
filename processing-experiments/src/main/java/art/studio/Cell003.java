/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/

/* Inspiration: https://st3.depositphotos.com/9626848/14321/i/1600/depositphotos_143218721-stock-photo-life-under-the-microscope-of.jpg */
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;
import java.util.ArrayList;

public class Cell003 extends PApplet {
    int ratio = 1;
    int wi = 1000 * ratio;
    int he = 1000 * ratio;
    float w;
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
            w = (float)(0.8*wi);// (0.3 * wi + alea.nextFloat() * 0.2 * wi);
            oneCell(9, 42, (float) (0.5 * wi), (float) (0.5 * he));
        } else {
            noLoop();
            save("cell002.png");
        }
    }

    private void oneCell(int cake, int layers, float cx, float cy) {
        ArrayList<ArrayList<Float[]>> angles = initCoords(layers);

        core(cx, cy);
        petals(angles, cx, cy);
        oneEnvelop(cx, cy, angles);
    }


    private ArrayList<ArrayList<Float[]>> initCoords(int nbLayers){
        ArrayList<ArrayList<Float[]>> coords=new ArrayList<>();
        float angle,radius;
        for (int i=0;i<nbLayers;i++){
            angle=0;
            ArrayList<Float[]> layer=new ArrayList<>();
            while(angle<360){
                radius=(float)(0.3*w+w*0.2*noise(xoffglobal));
                xoffglobal+=grainglobal;
                angle+=21+21*noise(xoffglobal);
                xoffglobal+=grainglobal;
                Float[] vec={angle,radius};
                layer.add(vec);
            }
            coords.add(layer);
        System.out.println(layer.size());
        }
        return(coords);
    }

    private void oneEnvelop(float cx, float cy, ArrayList<ArrayList<Float[]>> angles){
        for (int i=0; i<angles.size(); i++){
            oneLayerCompact(cx, cy, angles.get(i));
        }
    }

    private void oneLayerCompact(float cx, float cy, ArrayList<Float[]> angles){
        float px, py, px1, py1, cpx1, cpy1, cpx2, cpy2,rad;
        Float[] controls;
        beginShape();
        rad=angles.get(0)[1];
        px=cx+rad*cos(radians(angles.get(0)[0]));
        py=cy+rad*sin(radians(angles.get(0)[0]));
        vertex(px, py);
        controls = drawTang(angles.get(0)[0],cx,cy,rad);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (int i=1; i<angles.size(); i++){
            rad=angles.get(i)[1];
            px1 = cx + rad * cos(radians(angles.get(i)[0]));
            py1 = cy + rad * sin(radians(angles.get(i)[0]));
            controls = drawTang(angles.get(i)[0],cx,cy,rad);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        controls=drawTang(angles.get(0)[0],cx,cy,rad);
        cpx1=controls[0];
        cpy1=controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        endShape();
    }


    private Float[] drawTang(float deg, float cx, float cy, float rad){
        float tx = cx+rad*cos(radians(deg));
        float ty = cy+rad*sin(radians(deg));
        float wid = 68;
        int ang = 90+42;//alea.nextInt(10);
        float dx1 = tx+wid*cos(radians(deg-ang));
        float dy1 = ty+wid*sin(radians(deg-ang));
        float dx2 = tx+wid*cos(radians(deg-ang+180));
        float dy2 = ty+wid*sin(radians(deg-ang+180));
        Float[] res = {dx1,dy1, dx2, dy2};
        return res;
    }

/* 
    private void oneEnvelop(ArrayList<ArrayList<Float>> angles, int layers, ArrayList<ArrayList<Float>> radii, float cx, float cy) {
        noFill();
        float angle, radius, angle_inc, px, py, px1, py1, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        for (int k = 0; k < layers; k++) {
            changeStrokeColor();
            strokeWeight(1);
            beginShape();
            radius = w/2;
            px = cx + radius * cos(radians(angles.get(k).get(0)));
            py = cy + radius * sin(radians(angles.get(k).get(0)));
            vertex(px, py);
            controls = drawTang(angles.get(k).get(0), cx, cy, radius);
            cpx2 = controls[2];
            cpy2 = controls[3];
            for (int i = 1; i < angles.size(); i++) {
                radius = w/2;//radii.get(i).get(k);
                xoffglobal += grainglobal;
                px1 = cx + radius * cos(radians(angles.get(k).get(i)));
                py1 = cy + radius * sin(radians(angles.get(k).get(i)));
                controls = drawTang(angles.get(k).get(i), cx, cy, radius);
                cpx1 = controls[0];
                cpy1 = controls[1];
                bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
                cpx2 = controls[2];
                cpy2 = controls[3];
            }
        controls = drawTang(0, cx, cy, radius);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        endShape();
        }
    }
*/
    private void changeStrokeColor() {
        stroke(25 + alea.nextFloat() * 30, 100, 100);
    }

    private void petals(ArrayList<ArrayList<Float[]>> angles, float cx, float cy) {
        noFill();
        float angle, radius, py, t;
        for (int k = 0; k < angles.size() / 2; k++) {
            for (int i = 0; i < angles.get(k).size(); i++) {
                if (alea.nextFloat() < 0.8) {
                    pushMatrix();
                    translate(cx, cy);
                    angle = angles.get(k).get(i)[0];
                    radius = angles.get(k).get(i)[1];
                    rotate(angle + radians(-4 + alea.nextFloat() * 8));
                    t = (float) (0.6);
                    py = (1 - t) * 0 + (t * radius);
                    // strokeWeight(1 + alea.nextFloat() * 2);
                    changeStrokeColor();
                    ellipse(0, py, radius / 4 + alea.nextFloat() * radius / 9,
                    radius / 3 + alea.nextFloat() * radius / 4);
                    popMatrix();
                }
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

    private void core(float cx, float cy) {
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
        String[] processingArgs = { "Cell003" };
        Cell003 mySketch = new Cell003();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
