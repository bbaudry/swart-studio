/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class OddJob006 extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float stepx;
    float stepy;
    float div;
    int inc;
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
        div=20; //knob
        inc=5; //knob
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
            else{cx=1;cy=1;noLoop();save("OddJob006.png");}
        }
    }

    public void shape (float x, float y){
        int john = (int) random(6);
        switch (john) {
            case 1:
                vlines(x,y);
                break;
            case 2:
                hlines(x,y);
                break;
            case 3:
                arcs1(x,y);
                break;
            case 4:
                arcs2(x,y);
                break;
            case 5:
                arcs3(x,y);
            break;
            case 0:
                arcs4(x,y);
            break;
        }
    }

    public void vlines(float x, float y){
        stroke(230, 80, 40);
        fill(230, 80, 40);
        rect(x,y,stepx+3,stepy+3);        
        stroke(0,0,100);
        strokeWeight(2);
        float step=stepx/inc;
        for(int i=0; i<inc; i++){
            line(x,y,x,y+stepy);
            x=x+step;
        }
    }

    public void hlines(float x, float y){
        stroke(230, 80, 40);
        fill(230, 80, 40);
        rect(x,y,stepx+3,stepy+3);         
        stroke(0,0,100);
        strokeWeight(2);
        float step=stepx/inc;
        for(int i=0; i<inc; i++){
            line(x,y,x+stepx,y);
            y=y+step;
        }
    }

    public void arcs1(float x, float y){
        stroke(230, 80, 40);
        fill(230, 80, 40);
        rect(x,y,stepx+3,stepy+3);       
        stroke(0,0,100);
        strokeWeight(2);
        noFill();
        for(int i=1; i<=inc; i++){
            arc(x, y, i*(2*stepx/inc), i*(2*stepy/inc), 0, PI/2);
        }

    }

    public void arcs2(float x, float y){
        stroke(230, 80, 40);
        fill(230, 80, 40);
        rect(x,y,stepx+3,stepy+3);       
        stroke(0,0,100);
        strokeWeight(2);
        noFill();
        for(int i=1; i<=inc; i++){
            arc(x+stepx, y, i*(2*stepx/inc), i*(2*stepy/inc), PI/2,PI);
        }
    }

    public void arcs3(float x, float y){
        stroke(230, 80, 40);
        fill(230, 80, 40);
        rect(x,y,stepx+3,stepy+3);       
        stroke(0,0,100);
        strokeWeight(2);
        noFill();
        for(int i=1; i<=inc; i++){
            arc(x+stepx, y+stepy, i*(2*stepx/inc), i*(2*stepy/inc), PI, 3*PI/2);
        }
    }

    public void arcs4(float x, float y){
        stroke(230, 80, 40);
        fill(230, 80, 40);
        rect(x,y,stepx+3,stepy+3);       
        stroke(0,0,100);
        strokeWeight(2);
        noFill();
        for(int i=1; i<=inc; i++){
            arc(x, y+stepy, i*(2*stepx/inc), i*(2*stepy/inc), 3*PI/2,2*PI);
        }
    }


    public static void main(String[] args) {
        String[] processingArgs = { "OddJob 006" };
        OddJob006 mySketch = new OddJob006();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
