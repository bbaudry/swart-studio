/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt010 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0,0,100);noFill();
        alea = new Random();
        
    }

    @Override
    public void draw() {
        if(frameCount<7){
            pattern();
        }
        else{
            noLoop();
            save("tshirt010.png");
        }
    }

    private void pattern(){
        float x0=w/20+alea.nextFloat()*w/10;
        float x1=x0+alea.nextFloat()*w/10;
        float x2=w/2+alea.nextFloat()*w/7;
        float x3=x2+alea.nextFloat()*w/7;
        for(int i=0;i<21;i++){
        beginShape();
        curveVertex(0,0);
        curveVertex(x0,h/13);
        curveVertex(x1,h/3);
        curveVertex(x2,2*h/3);
        curveVertex(x3,h-42);
        curveVertex(w,h);
        endShape();
        x0+=7;x1+=17;x2+=9;x3-=3;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt010" };
        Tshirt010 mySketch = new Tshirt010();
        PApplet.runSketch(processingArgs, mySketch);
    }
}