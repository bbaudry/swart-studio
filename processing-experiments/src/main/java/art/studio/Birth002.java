/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Birth002 extends PApplet {
    int w = 1000;
    int h = 1000;
//    int[] palettej = { 250, 310, 10, 70, 130, 190 };
    int[] palettej = { 250, 340, 70 };
    Random rand;
    int rimbaud = 70;
    float ivre = sqrt(rimbaud);
    float x;
    float y;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        frameRate(1);
        noStroke();
    }

    @Override
    public void draw() {
        background(palettej[0], 80, 40);
         for (float i=w/ivre; i<w; i=i+w/(rimbaud*2)){
            x=i+random(ivre);
            for (float j=0; j<h; j=j+h/(rimbaud*2)){
                y=j+random(ivre);
                q();
            }
        }
        noLoop();
    }

    private void q(){
        float x2=x+random((float)0.5,(float)0.9)*w/(rimbaud*2);
        float y2=y-random((float)0.5,(float)0.9)*h/(rimbaud*2);
        int hu = (int)random(palettej.length);
        if (random(5)<4){
            fill(palettej[hu],80,80);
        }
        else{
            fill(0,0,0);        
        }
        rotate(radians((float)0.005));
        rect(x,y,x2-x,y-y2);
        //quad(x,y,x,y2,x2,y2,x2,y);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth002 " };
        Birth002 mySketch = new Birth002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
