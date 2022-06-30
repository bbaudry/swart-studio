/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.prefs.BackingStoreException;

public class SL017 extends PApplet {
    int w = 1000;
    int h = 1000;
    ArrayList<ArrayList<Float>> coords;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        noStroke();
        frameRate(2);
     }

    @Override
    public void draw() {
        background(0,0,0);
        float moon = random((float)0.04, (float)0.06)*w;
        while (moon<w){
            bang(moon,moon);
            moon = moon + random((float)0.04, (float)0.06)*w;
        }
        //noLoop();
    }

    private void bang(float a, float b){
        //origin coordinates of the segment
        float ox=0;
        float oy=b;
        //destination coordinates of the segment
        float dx=a;
        float dy=0;
        float step = dx/80;
        float inc = random(1,2)/step;
        float x1=ox;
        float y1=oy;
        float x2;
        float y2;
        float t=0;
        float i=inc;
        while(y1>dy){
            System.out.println(i);
            t = i * inc;
            x2 = (1 - t) * ox + (t * dx);
            y2 = (1 - t) * oy + (t * dy);
            noStroke();
            fill(50 + (i * 20), 100, 100);
            ellipse(x1, y1, 5, 5);
            ellipse(x2, y2, 5, 5);
            stroke(50 + (i * 20), 100, 100);
            strokeWeight(i);
//            line(x1, y1, x2, y2);
            x1 = x2;
            y1 = y2;
            i=i+random(inc);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL017" };
        SL017 mySketch = new SL017();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
