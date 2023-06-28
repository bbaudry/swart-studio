/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt019 extends PApplet {
    int ratio = 1;
    int w = 1200 * ratio;
    int h = 1500 * ratio;
    Random alea;
    float x1,y1,x2,y2,x3,y3;
    float block_width;
    float block_height;
    int inc = 72;
    int[] palette = {50,50+inc,50+2*inc,50+3*inc,50+4*inc};
    
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0,0,0);
        stroke(0,0,0);
        alea = new Random();
        stroke(0,0,100);
        fill(0,0,100);
    }

    @Override
    public void draw() {
        tri1();
        shock();
        tri2();        
        noLoop();
        save("tshirt019.png");
    }

    private void tri1(){
        x1=alea.nextFloat()*w/21;
        x2=x1+alea.nextFloat()*w/2;
        x3=x2-alea.nextFloat()*w/21;
        y1=alea.nextFloat()*w/21;
        y2=y1+alea.nextFloat()*w/11;
        y3=y2+alea.nextFloat()*w/2;
        triangle(x1, y1, x2, y2, x3, y3);
    }
    private void shock(){
        float t=random(1);
    x1 = (1 - t) * x2 + (t * x3);
    y1 = (1 - t) * y2 + (t * y3);
        ellipse(x1,y1, 7, 7);
    }
    private void tri2(){
        x2 = x1 + alea.nextFloat()*w/11;
        x3 = x1 + w/2;
        y2 = y1 - alea.nextFloat()*w/11;
        y3 = y1 + h/2;
        triangle(x1, y1, x2, y2, x3, y3);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt019" };
        Tshirt019 mySketch = new Tshirt019();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
