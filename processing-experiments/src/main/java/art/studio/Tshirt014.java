/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt014 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1200 * ratio;
    Random alea;
    boolean dark = true;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        if (dark){
            background(0,0,0);
        }
        else{
            background(0,0,100);
        }        
        fill(0, 0, 100, 7);// noFill();
        alea = new Random();
    }

    @Override
    public void draw() {
        if (frameCount < 84) {
            ray();
        } else {
            noLoop();
            save("tshirt12.png");
        }
    }

    private void ray() {
        float angle1 = 2*PI*alea.nextFloat();
        float angle2 = angle1 + alea.nextFloat() * PI / 10;
        float cx=(float)(0.5*w);
        float cy=(float)(0.5*h);
        float rad1 = alea.nextFloat()*w/2;
        float rad2 = rad1 + alea.nextFloat();
        noFill();
        stroke(0,0,100);
        strokeWeight(5);
        float px1 = cx + rad1 * cos(angle1);
        float py1 = cy + rad1 * sin(angle1);
        float px2 = cx + rad2 * cos(angle1);
        float py2 = cy + rad2 * sin(angle1);
        float px3 = cx + rad1 * cos(angle2);
        float py3 = cy + rad1 * sin(angle2);
        float px4 = cx + rad2 * cos(angle2);
        float py4 = cy + rad2 * sin(angle2);
        line(px1,py1,px2,py2);
        line(px3,py3,px4,py4);

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt014" };
        Tshirt014 mySketch = new Tshirt014();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
