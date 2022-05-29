/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;

import processing.core.PApplet;

public class Birth003 extends PApplet {
    int w = 1000;
    int h = 1000;
//    int[] palettej = { 250, 310, 10, 70, 130, 190 };
    int[] palettej = { 200, 220, 240, 260, 280 };
    Random rand;
    int rimbaud = 70;
    float poem;
    int force; //to set the saturation of HSB colors
    int ciel;  //to set the brightness of HSB colors
    float ivre = sqrt(rimbaud);
    float x1;
    float y1;
    float x2;
    float y2;
    
    int hu;
    boolean grow;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        //frameRate(1);
        force=100;
        ciel=100;
        noStroke();
        x1=0;
        y1=0;
        grow=true;
        background(palettej[1],force,ciel);
    }

    @Override
    public void draw() {
        if (grow) {
            poem = random(rimbaud);
            x2 = x1 + poem;
            y2 = y1 + poem;
            //bleu();
            paves();
            x1 = x2;
            y1 = y2;
        }   
        if (x1 > 2 * w && y1 > 2 * h) {
            x1 = 0;
            y1 = 0;
            noLoop();//background(palettej[1], force, ciel);
        }
    }

    //draw rectangular shapes in x1,y1,x2,y2
    private void bleu(){
        hu = (int)random(palettej.length);
        fill(palettej[hu],force,ciel);
        quad(0,y1,x1,0,x2,0,0,y2);
    }

    private void perles(){
        float t;
        float x3 = random(x1,x2);
        float y3 = random(y1,y2);
        for(int i=0;i<rimbaud;i++){//draw rimbaud circles on the segment (0,y3),(x3,0)
            // general rule:
            // given 2 points (x1,y1) and (x2,y2) and t in [0,1]; 
            // ((1-t)*x1+t*x2, (1-t)*y1+t*y2) are the coordinates of a point on the segment
            t=random(1);
            float cx = (1-t)*0+(t*x3);
            float cy = (1-t)*y3+(t*0);
            hu = (int)random(palettej.length);
            fill(palettej[hu],force,ciel);
            float rad = random(poem,3*poem);
            ellipse(cx,cy,rad,rad);
        }
    }

    private void paves(){
        float t;
        for(int i=0;i<rimbaud;i++){//draw rimbaud circles on the segment (0,y2),(x2,0)
            // general rule:
            // given 2 points (x1,y1) and (x2,y2) and t in [0,1]; 
            // ((1-t)*x1+t*x2, (1-t)*y1+t*y2) are the coordinates of a point on the segment
            t=random(1);
            float cx1 = (1-t)*0+(t*x2);
            float cy1 = (1-t)*y2+(t*0);
            t=random(1);
            float cx2 = (1-t)*0+(t*x2);
            float cy2 = (1-t)*y2+(t*0);
            hu = (int)random(palettej.length);
            fill(palettej[hu],force,ciel);
            float rad = random(poem);
            if(cx1>cx2){
                quad(cx2,cy2,cx2,cy2-rad,cx1,cy1-rad,cx1,cy1);
            }
            else{
                quad(cx1,cy1,cx1,cy1-rad,cx2,cy2-rad,cx2,cy2);
            }
        }
    }



    public static void main(String[] args) {
        String[] processingArgs = { "Birth003 " };
        Birth003 mySketch = new Birth003();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
