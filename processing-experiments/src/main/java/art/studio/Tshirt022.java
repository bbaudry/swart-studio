/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.Random;

public class Tshirt022 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    float minx, miny, maxx, maxy;
    float xoff, grain;
    float hu;
    float angletest,inctest;
    int sharestest;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0, 0, 0);
        alea = new Random();
        hu = 140;
        xoff = (float) 0.0;
        grain = (float) 0.1; // control the noise
        sharestest = 5;
        inctest = radians(360/sharestest);
        angletest = inctest;
    }

    @Override
    public void draw() {
        if (frameCount < 63) {
            flower(w/2,h/2,21);
        } else {
            noLoop();
            save("tshirt022.png");
        }
    }

    private void flower(float cx, float cy, int cake) {
        xoff = (float) 0.0;
        noFill();
        float a_inc, radius, angle, t,  py;
        a_inc = radians(360/cake);// (2 * PI) / cake;
        angle =  a_inc;//alea.nextFloat()*PI;
        for (int i = 0; i < cake ; i++) {
            pushMatrix();
            translate(cx, cy);
            radius =  noise(xoff) * (float)(0.8 * w );
            rotate(angle); 
            t = noise(xoff)*(float)(0.5);
            py = (1 - t) * 0 + (t * radius);
            stroke(280+alea.nextInt(60),100,100,42);
            ellipse(0, py, 42+alea.nextFloat()*42, radius/3+alea.nextFloat()*radius/4);
            angle += a_inc;      
            popMatrix();      
            xoff += grain;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt022" };
        Tshirt022 mySketch = new Tshirt022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
