/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt007 extends PApplet {
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
    }

    @Override
    public void draw() {

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt007" };
        Tshirt007 mySketch = new Tshirt007();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
