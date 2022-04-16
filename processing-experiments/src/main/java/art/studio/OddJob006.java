package art.studio;

import processing.core.PApplet;
import java.util.Random;

//strips that cross the canvas
//random width, random number of sections
public class OddJob006 extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float stepx;
    float stepy;
    float div;
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        //frameRate(1);
        cx=1;
        cy=1;
        div=10;
        stepx=w/div;
        stepy=h/div;
        background(230, 80, 40);
    }

    @Override
    public void draw() {
        shape(cx,cy);
        if(cx<w){cx=cx+stepx;}
        else{
            if(cy<h){cx=1;cy=cy+stepy;}
            else{cx=1;cy=1;}
        }
    }

    public void shape (float x, float y){
        int john = (int) random(8);
        switch (john) {
            case 1:
                vlines(x,y);
                break;
            case 2:
                hlines(x,y);
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 0:
                break;
        }
    }

    public void vlines(float x, float y){
        noStroke();
        fill(230, 80, 40);
        rect(x,y,stepx,stepy);        
        stroke(0,0,100);
        strokeWeight(4);
        int inc=5;
        float step=stepx/inc;
        for(int i=0; i<inc; i++){
            line(x,y,x,y+stepy);
            x=x+step;
        }
    }

    public void hlines(float x, float y){
        noStroke();
        fill(230, 80, 40);
        rect(x,y,stepx,stepy);        
        stroke(0,0,100);
        strokeWeight(4);
        int inc=5;
        float step=stepx/inc;
        for(int i=0; i<inc; i++){
            line(x,y,x+stepx,y);
            y=y+step;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "OddJob 006" };
        OddJob006 mySketch = new OddJob006();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
