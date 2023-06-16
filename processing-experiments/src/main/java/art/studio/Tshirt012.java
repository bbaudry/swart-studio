/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt012 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1200 * ratio;
    Random alea;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0,0,100); fill(0,0,100,7);// noFill();
        alea = new Random();
    }

    @Override
    public void draw() {
        if(frameCount<999){
        stroke(0,0,100);
        float cx=(float)(0.84*w)+alea.nextFloat()*11;
        float cy=(float)(0.21*w)+alea.nextFloat()*11;
        float angle = alea.nextFloat()*(2*PI);
        float l = alea.nextFloat()*h;
        float dx=cx+l*cos(angle);
        float dy=cy+l*sin(angle);
        
        line(cx,cy,dx,dy);
        }
        else{
            noLoop();
            save("tshirt12.png");
        }
    }


    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt012" };
        Tshirt012 mySketch = new Tshirt012();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
