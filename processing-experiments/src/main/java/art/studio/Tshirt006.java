/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt006 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    Random alea;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        background(0,0,0);   
        noFill();
        stroke(0,0,100);
        alea = new Random();
    }

    @Override
    public void draw() {
        float x1=random(w/3);
        float x2=x1+random(w/3);
        float x3=x2+random(w/3);
        float y1=h-random(h/7);
        float y2=random(h/7);
        float y3=h-random(h/7);
        triangle(x1,y1,x2,y2,x3,y3);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt006" };
        Tshirt006 mySketch = new Tshirt006();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
