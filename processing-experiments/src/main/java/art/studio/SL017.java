/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;


public class SL017 extends PApplet {
    int w = 1000;
    int h = 1000;

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
    
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL017" };
        SL017 mySketch = new SL017();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
