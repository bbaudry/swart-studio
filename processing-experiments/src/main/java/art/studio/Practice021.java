package art.studio;

import processing.core.PApplet;


//practice shades
public class Practice021  extends PApplet {
    int w = 1800;
    int h = 1000;
    float x1;
    float y1;
    float x2;
    float y2;
    float px;
    float py;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,0,0);
        x1=0;
        x2=21;
        y1=500;
        y2=y1+random(-13, 13);
        px=-10;
        py=-10;
    }

    @Override
    public void draw() {
        //background(0,0,0);
//straight_with_marker();
straight_with_bumps();
//        noLoop();
    } 

    private void straight_with_bumps(){
        stroke(0,0,100);
        strokeWeight(2);
        line(x1,y1,x2,y2);
        line(px,py,x1,y1);
        float t=(float)0.3;//random(1);
        px = (1 - t) * x1 + (t * x2);
        py = (1 - t) * y1 + (t * y2);    
        stroke(180,100,100);
        line(px,py,x2,y2);
        x1=x2;
        x2+=21;
        y1=y2;
        y2=y1+random(-42, 42);
        if(x1>w){x1=0;x2=21;y1=500;y2=y1+random(-13, 13);};
    }
    
    private void straight_with_marker(){
        y1=777;
        y2=777;
        stroke(0,0,100);
        line(x1,y1,x2,y2);
        line(px,py,x1,y1);
        float t=(float)0.8;//random(1);
        px = (1 - t) * x1 + (t * x2);
        py = (1 - t) * y1 + (t * y2);    
        stroke(0,100,100);
        line(px,py,x2,y2);
        x1=x2;
        x2+=42;
        if(x1>w){x1=0;x2=42;}

    }


    public static void main(String[] args) {
        String[] processingArgs = { "Practice021" };
        Practice021 mySketch = new Practice021();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
