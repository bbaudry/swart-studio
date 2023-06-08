/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt006 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    Random alea;
    float x1,y1,x2,y2,x3,y3;
    float min, max;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        background(0,0,0);   
        noFill();
        stroke(0,0,100);
        alea = new Random();
        x1=(float)(0.1*w);
        x2=(float)(0.5*w);
        x3=(float)(0.9*w);
        y1=(float)(0.8*h);
        y2=(float)(0.2*h);
        y3=(float)(0.8*h);
        min=-7;max=7;
    }

    @Override
    public void draw() {
        if(alea.nextInt(168)<2){stroke(330,100,100);}
        else{stroke(0,0,100);}
        if(frameCount<168){
        triangle(x1,y1,x2,y2,x3,y3);
        x1+=random(min,max);
        x2+=random(min,max);
        x3+=random(min,max);
        y1+=random(min,max);
        y2+=random(min,max);
        y3+=random(min,max);
        }
        else{
            noLoop();;
            save("tshirt006.png");
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt006" };
        Tshirt006 mySketch = new Tshirt006();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
