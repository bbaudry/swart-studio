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
        init();
        noLoop();
    }

    private void init(){
        float moon = random((float)0.04, (float)0.06)*w;
        while (moon<w){
            bang(0,moon,moon,0, 1);
            bang(w-moon,h,w,h-moon,2);
            bang(moon,h,0,h-moon,3);
            bang(w,moon,w-moon,0,4);
            moon = moon + random((float)0.04, (float)0.06)*w;
        }

    }

    private void bang(float ox, float oy, float dx, float dy, int knob){
        float step=100; 
        switch (knob){
            case 1 : step = dx/80; break;
            case 2 : step = (w-ox)/80; break;
            case 3 : step = ox/80; break;
            case 4 : step = (w-dx)/80; break;
        }
        float inc = random(1,2)/step;
        float x1=ox;
        float x2;
        float y2;
        float y1=oy;
        float t=0;
        float i=inc;
        while(y1>dy){
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
