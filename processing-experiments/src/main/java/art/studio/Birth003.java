/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;

import processing.core.PApplet;

public class Birth003 extends PApplet {
    int w = 1000;
    int h = 1000;
//    int[] palettej = { 250, 310, 10, 70, 130, 190 };
    int[] palettej = { 220, 250, 280, 310, 340 };
    Random rand;
    int rimbaud = 70;
    float ivre = sqrt(rimbaud);
    float x1;
    float y1;
    float x2;
    float y2;
    int hu;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        //frameRate(1);
        noStroke();
        x1=0;
        y1=0;
        background(palettej[1],80,80);
    }

    @Override
    public void draw() {
        float inc = random(rimbaud);
        x2=x1+inc;
        y2=y1+inc;
        bleu();
        x1=x2;
        y1=y2;
        if (x1>2*w && y1>2*h){x1=0;y1=0;        background(palettej[1],80,80);        }
    }

    //draw rectangular shapes in x1,y1,x2,y2
    private void bleu(){
        strokeWeight(5);
        hu = (int)random(palettej.length);
        stroke(palettej[hu],80,80);
        //line(x1,0,0,y1);
        line(x2,0,0,y2);
        float t;
        for(int i=0;i<7;i++){//draw 7 circles on the segment (0,y2),(x2,0)
            // given 2 points (x1,y1) and (x2,y2) and t in [0,1]; 
            // ((1-t)*x1+t*x2, (1-t)*y1+t*y2) are the coordinates of a point on the segment
            t=random(1);
            float cx = (1-t)*0+(t*x2);
            float cy = (1-t)*y2+(t*0);
            fill(0,0,100);
            noStroke();
            float rad = random(11,33);
            ellipse(cx,cy,rad,rad);
        }
    }



    public static void main(String[] args) {
        String[] processingArgs = { "Birth003 " };
        Birth003 mySketch = new Birth003();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
