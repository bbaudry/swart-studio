/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.nio.ReadOnlyBufferException;

import processing.core.PApplet;

public class Tshirt002 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    int resolution = 4;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,0,0);   
        noFill();
        stroke(0,0,100);
    }

    @Override
    public void draw() {
        if(frameCount == 3){
            layer((float)0,(float)0,(float)w,(float)y,4);
            resolution = resolution*resolution;

        }
        else{
            save("tshirt001.png");
            noLoop();
        }
    }

    private void layer(float x, float y, float wid, float hei, int resolution){
        if (resolution>random(1)*w){
            float newwid = (float)0.5*wid;
            float newhei = (float)0.5*hei;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt002 " };
        Tshirt002 mySketch = new Tshirt002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
