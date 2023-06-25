/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt017 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1200 * ratio;
    Random alea;
    float x1,y1,x2,y2;
    
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0,0,100);
        stroke(0,0,0);
        alea = new Random();
        x1=alea.nextFloat()*w;
        y1=alea.nextFloat()*h;
    }

    @Override
    public void draw() {
        if (frameCount <= 42) {
            ray();
        } else {
            noLoop();
            save("tshirt017.png");
        }
    }

    private void ray(){
        x2=alea.nextFloat()*w;
        y2=alea.nextFloat()*h;

        strokeWeight(alea.nextFloat()*7);
        if(alea.nextFloat()<0.2){
            fill(0,0,0);
            float r = alea.nextFloat()*210;
            ellipse(x1,y1,r,r);
        }
        line(x1,y1,x2,y2);
        if(alea.nextFloat()<0.3){
            x2=alea.nextFloat()*w;
            y2=alea.nextFloat()*h;
            line(x1,y1,x2,y2);
        }
        if(alea.nextFloat()<0.3){
            float x3=alea.nextFloat()*w;
            float y3=alea.nextFloat()*h;
            noFill();
            triangle(x1,y1,x2,y2,x3,y3);
        }

        x1=x2;
        y1=y2;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt017" };
        Tshirt017 mySketch = new Tshirt017();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
