/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt016 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1200 * ratio;
    Random alea;
    ArrayList<Integer> hues;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0,0,0);
        alea = new Random();
        hues = new ArrayList<>();
        hues.add(60); hues.add(180); hues.add(300);
        fill(hues.get(0),100,100);
        ellipse(w/2, h/2, w,w);
    }

    @Override
    public void draw() {
        if (frameCount <= 4200) {
            ray();
        } else {
            noLoop();
            save("tshirt016.png");
        }
    }

    private void ray() {
        float angle1 = 2*PI*alea.nextFloat();
        float angle2 = angle1 + alea.nextFloat() * PI;
        float cx=(float)(0.5*w);
        float cy=(float)(0.5*h);
        float rad1 = alea.nextFloat()*(float)(0.1*w);//alea.nextFloat()*w/3;
        float rad2 = rad1 + alea.nextFloat()*(float)(0.4*w);
        float px1 = cx + rad1 * cos(angle1);
        float py1 = cy + rad1 * sin(angle1);
        float px2 = cx + rad2 * cos(angle1);
        float py2 = cy + rad2 * sin(angle1);
        float px3 = cx + rad1 * cos(angle2);
        float py3 = cy + rad1 * sin(angle2);
        float px4 = cx + rad2 * cos(angle2);
        float py4 = cy + rad2 * sin(angle2);
        int r = alea.nextInt(2)+1;
        noStroke();
        fill(hues.get(r),100,100,42);
        strokeWeight(2);
        float rad = (float)(0.01*w)+alea.nextFloat()*(float)(0.01*w);
        ellipse(px1,py1,rad,rad);
        ellipse(px2,py2,rad,rad);
        ellipse(px3,py3,rad,rad);
        ellipse(px4,py4,rad,rad);
        noFill();
        stroke(hues.get(r),100,100,42);
        beginShape();
        curveVertex(cx,cy);
        curveVertex(px3,py3);
        curveVertex(px2,py2);
        curveVertex(py1,px1);
        curveVertex(py2,px3);
        curveVertex(px4,py4);
        endShape();

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt016" };
        Tshirt016 mySketch = new Tshirt016();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
