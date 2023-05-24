/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Tshirt001 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    float diameter = (float)0.01 * w;

    int hu;
    boolean grow;

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
        if (diameter<w){
            ellipse(w/2,w/2,diameter,diameter+random(frameCount));
            diameter+=0.001*w+random(1);
        }
        else{
            save("tshirt001.png");
            noLoop();
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt001 " };
        Tshirt001 mySketch = new Tshirt001();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
