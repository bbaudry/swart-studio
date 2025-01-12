package art.algo;

import processing.core.PApplet;
import java.util.Random;

public class Carresjaunes extends PApplet {
    int w = 1000;
    int h = 1000;
    int st;
    float cx;
    float cy;
    float rad;
    Random rand;
    
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        st=0;
        colorMode(HSB, 360, 100, 100);
        cx=(float) (w*0.5);
        cy=(float) (h*0.5);
        rad=random((float)0.3,(float)0.5)*w;
        colorMode(HSB,360,100,100);
        background(0,0,0);
        rand = new Random();
    }

    @Override
    public void draw() {
        fill(50,100,100);
        noStroke();
        float x,y;
        int size = (int) Math.floor(w*0.4);
        float offsetx, offsety;
        for(int i=0; i< 4;i++){
            
            offsetx=rand.nextInt(-100,100);
            offsety=rand.nextInt(-100,100);
            x=cx+offsetx;
            y=cy+offsety;
            pushMatrix();
            translate(x,y);
            rect(-size/2,-size/2,size,size);
            popMatrix();                
        }
        noLoop();
    }


        public static void main(String[] args) {
            String[] processingArgs = { "Carresjaunes " };
            Carresjaunes mySketch = new Carresjaunes();
            PApplet.runSketch(processingArgs, mySketch);
        }
}
