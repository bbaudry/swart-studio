/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt015 extends PApplet {
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
        if (frameCount <= 42) {
            ray();
        } else {
            noLoop();
            save("tshirt015.png");
        }
    }

    private void ray() {
        float angle1 = 2*PI*alea.nextFloat();
        float angle2 = angle1 + alea.nextFloat() * PI;
        float cx=(float)(0.5*w);
        float cy=(float)(0.5*h);
        float rad1 = alea.nextFloat()*(float)(0.1*w);//alea.nextFloat()*w/3;
        float rad2 = rad1 + alea.nextFloat()*(float)(0.45*w);
        float px1 = cx + rad1 * cos(angle1);
        float py1 = cy + rad1 * sin(angle1);
        float px2 = cx + rad2 * cos(angle1);
        float py2 = cy + rad2 * sin(angle1);
        float px3 = cx + rad1 * cos(angle2);
        float py3 = cy + rad1 * sin(angle2);
        float px4 = cx + rad2 * cos(angle2);
        float py4 = cy + rad2 * sin(angle2);
        noFill();
        int r = alea.nextInt(2)+1;
        stroke(hues.get(r),100,100,42);
        strokeWeight(2);
        line(px1,py1,px2,py2);
        line(px3,py3,px4,py4);
        arc(cx,cy,rad1*2,rad1*2,angle1,angle2);
        arc(cx,cy,rad2*2,rad2*2,angle1,angle2);
        for(int i=0;i<84;i++){
            float angle3 = angle1 + alea.nextFloat() * (angle2 - angle1);
            float angle4 = angle1 + alea.nextFloat() * (angle2 - angle1);
            float px5 = cx + rad1 * cos(angle3);
            float py5 = cy + rad1 * sin(angle3);
            float px6 = cx + rad2 * cos(angle3);
            float py6 = cy + rad2 * sin(angle3);
            line(px5, py5, px6, py6);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt015" };
        Tshirt015 mySketch = new Tshirt015();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
