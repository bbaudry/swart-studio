/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class NewYear2 extends PApplet {
    int w = 1000;
    int h = 1000;
    float diam = w/20;
    Random alea;
    
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 70, 100);
        background(230, 100, 80);
        alea = new Random();
    }

    @Override
    public void draw() {
        background(310, 100, 80);
        western();
        noLoop();
        save("NewYear2.png");
    }

    private void western(){
        float hu;
        float al;
        float sat;
        float cx = diam;
        float cy = diam+alea.nextFloat()*diam/2;
        noStroke();
        while (cx < w-diam/2) {
            while (cy<h-diam) {
                //stroke(320,100,100);
                hu=70+alea.nextInt(80);
                al=alea.nextFloat()*250;
                sat=alea.nextFloat()*100;
                fill(hu, sat, 100,al);
                ellipse(cx,cy,diam,diam);
                cy += alea.nextFloat()*diam/2;
            }
            cy = diam+alea.nextFloat()*diam/2;
            cx+=diam;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "NewYear2 " };
        NewYear2 mySketch = new NewYear2();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
