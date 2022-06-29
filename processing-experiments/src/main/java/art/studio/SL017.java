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
     }

    @Override
    public void draw() {
        background(0,0,0);
        bang(200,200);
        bang(400,400);
        bang(600,600);
        bang(800,800);
        bang(1000,1000);
//        noLoop();
    }

    private void bang(float a, float b){
        float ox;
        float oy;
        float dx;
        float dy;
        ox=0;
        oy=b;
        dx=a;
        dy=0;
        float step = dx/100;
        float inc = 1/step;
        float x1=ox;
        float y1=oy;
        float x2;
        float y2;
        float t=0;
        float i=inc;
        while(i<step){
            System.out.println(i);
            t = i * inc;
            x2 = (1 - t) * ox + (t * dx);
            y2 = (1 - t) * oy + (t * dy);
            noStroke();
            fill(50 + (i * 20), 100, 100);
            //ellipse(ox, oy, 5, 5);
            //ellipse(dx, dy, 5, 5);
            ellipse(x1, y1, 5, 5);
            ellipse(x2, y2, 5, 5);
            stroke(50 + (i * 20), 0, 100);
            strokeWeight(5*i);
            //line(x1, y1, x2, y2);
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
