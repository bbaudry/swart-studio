/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth010 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = { 50,  230 };
    int lou = 69;
    float hu;
    float cx;
    float cy;
    float ra;
    int iter;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        cx=w/2;
        cy=h/2;
        ra=w;
        iter=0;
        background(0,0,100);
    }

    @Override
    public void draw() {
        if(iter<lou*lou){
            branch();
            iter++;
        }
        else{
            save("gift010.png");
            noLoop();
        }
    }

    private void branch(){
        float le = random(1/lou,1)*ra/2;
        float an = random(2)*PI;
        float x1=cx;
        float y1=cy;
        float x2;
        float y2;
        float laita = random(-lou/2,lou/2);
        noStroke();
        hu=random(palettef[0],palettef[1]);
        int steps = lou*2;
        float inc = le/steps;
        for (int i = 1; i <= steps; i++){
            x2 = cx + (i*inc)*cos(an);
            y2 = cy + (i*inc)*sin(an);
            fill(hu,100,random(80,100));
            quad(x1+laita,y1+laita,x2+laita,y2+laita,x2+laita*2,y2+laita,x1+laita*2,y1+laita);
            fill(hu,random(lou,100),100);
            quad(x1+laita,y1+laita,x1-laita,y1,x2-laita,y2,x2+laita,y2+laita);
            x1 = x2;
            y1 = y2;
        }
      }

    public static void main(String[] args) {
        String[] processingArgs = {"Birth010"};
        Birth010 mySketch = new Birth010();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
