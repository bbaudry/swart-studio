/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt018 extends PApplet {
    int ratio = 1;
    int w = 1200 * ratio;
    int h = 1500 * ratio;
    Random alea;
    float x1,y1,x2,y2;
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
        background(0,0,100);
        stroke(0,0,0);
        alea = new Random();
        x1=0;y1=0;
        block_height=alea.nextFloat()*h/21;
                block_width=alea.nextFloat()*w/5;
    }

    @Override
    public void draw() {
        if (x1 < w) {
            if (y1<h){
                ray();
            }
            else{
                y1=0;
                x1+=block_width;
                block_width=alea.nextFloat()*w/5;
                if(x1+block_width>w){block_width=w-x1;}
            }
        } else {
            noLoop();
            save("tshirt018.png");
        }
    }

    private void ray(){
        int c = alea.nextInt(palette.length);
        stroke(0,0,100);strokeWeight(4);
        fill(palette[c],100,100);
        rect(x1,y1,block_width,block_height,alea.nextFloat()*84);
        y1+=block_height;
        block_height=alea.nextFloat()*h/20;
        if(y1+block_height>w){block_height=h-y1;}
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt018" };
        Tshirt018 mySketch = new Tshirt018();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
