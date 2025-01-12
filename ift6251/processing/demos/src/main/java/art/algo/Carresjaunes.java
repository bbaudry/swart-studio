package art.algo;

import processing.core.PApplet;

public class Carresjaunes extends PApplet {
    int w = 1000;
    int h = 1000;
    int st;
    float cx;
    float cy;
    float rad;
    float x1;
    float x2;
    float y1;
    float y2;

    int hu;
    boolean grow;

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
    }

    @Override
    public void draw() {
        fill(50,100,100);
        float x,y;
        float offsetx, offsety;
        for(int i=0; i< 42;i++){
            offsetx=random(-100,100);
            offsety=random(-100,100);
            x=cx+offsetx;
            y=cy+offsety;
            pushMatrix();
            translate(x,y);
            rect(-(float)(w*0.3),-(float)(h*0.3),(float)(w*0.6),(float)(h*0.6));
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
