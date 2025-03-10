/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/

/* Inspiration: https://st3.depositphotos.com/9626848/14321/i/1600/depositphotos_143218721-stock-photo-life-under-the-microscope-of.jpg */
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt023 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea = new Random();
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
        frameRate(1);
    }

    @Override
    public void draw() {
        if (frameCount < 12) {
            noFill();
            stroke(185+alea.nextFloat()*10,100,100,84);
            background(0,0,0);
            oneCell(11,84, w/2, h/2);
        } else {
            noLoop();
            save("tshirt023.png");
        }
    }

    private void oneCell(int cake, int layers, float cx, float cy){
        ArrayList<ArrayList<Float>> radii = setRadii(cake,layers);
        oneEnvelop(cake, layers, radii, cx,cy);
        petals(cake, layers, radii, cx, cy);
    }


    private void oneEnvelop(int cake, int layers, ArrayList<ArrayList<Float>> radii, float cx, float cy) {
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

    private void changeStrokeColor(){
            stroke(185+alea.nextFloat()*30,100,100,84);
    }


    private void petals(int cake, int layers, ArrayList<ArrayList<Float>> radii, float cx, float cy) {
        float angle, radius, py,t, angle_inc;
        angle_inc = radians(360 / cake);
        angle=angle_inc;
        for (int k = 0; k < layers/2; k++) {
            angle = angle_inc;
            for (int i = 0; i < cake; i++) {
            pushMatrix();
            translate(cx, cy);
            radius = radii.get(i).get(k);
            rotate(angle+radians(-4+alea.nextFloat()*8));
            t = (float) (0.6);
            py = (1 - t) * 0 + (t * radius);
            strokeWeight(1+alea.nextFloat()*2);
            changeStrokeColor();
            ellipse(0, py, radius / 4 + alea.nextFloat() * radius / 9, radius / 3 + alea.nextFloat() * radius / 4);
            angle += angle_inc;
            popMatrix();            }
        }
    }

    private ArrayList<ArrayList<Float>> setRadii(int cake, int layers) {
        ArrayList<ArrayList<Float>> radii = new ArrayList<>();
        float radius;
        for (int i = 0; i < cake; i++) {
            ArrayList<Float> radiiVec = new ArrayList<>();
            for (int j = 0; j < layers; j++) {
                radius = w / 4 + noise(xoffglobal) * w/4;
                xoffglobal += grainglobal;
                radiiVec.add(radius);
            }
            radii.add(radiiVec);
        }
        return radii;
    }


    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt023" };
        Tshirt023 mySketch = new Tshirt023();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
