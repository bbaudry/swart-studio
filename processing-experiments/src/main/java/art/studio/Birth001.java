/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Birth001 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettej = { 250, 310, 10, 70, 130, 190 };
    int[] palettef = { 330, 30, 90, 150, 210, 270 };
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        frameRate(1);
        background(0, 0, 0);
    }

    @Override
    public void draw() {
        float x;
        float y;
        float x_inc = w/palettej.length;
        float y_inc = h/2;
        stroke(0,0,100);
        strokeWeight(7);
        y=0;
            for (int i=0; i<palettej.length; i++){
                x=i*x_inc;
                if (random(5)<1){
                    fill(palettej[i],80,100);
                }
                else{
                    fill(0,0,0);        
                }
                rect(x,y,x_inc,y_inc);
            }
            y=y_inc;
            for (int i=0; i<palettef.length; i++){
                x=i*x_inc;
                if (random(5)<1){
                    fill(palettef[i],80,100);
                }
                else{
                    fill(0,0,0);
                }
                rect(x,y,x_inc,y_inc);
            }
        //noLoop();
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth001 " };
        Birth001 mySketch = new Birth001();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
