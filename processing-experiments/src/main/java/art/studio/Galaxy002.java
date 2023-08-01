/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Galaxy002 extends PApplet {
    //Galaxy 04 resolution:720 × 1600
    int w = 720;
    int h = 1600;
    Random alea;
    int ratio=10;
    int wcell = w/ratio;
    int hcell = h/ratio;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(230,100,50);
        noStroke();
        alea = new Random();
    }

    @Override
    public void draw() {
        noStroke();
        fill(0,0,0);

        grid();
        noLoop();
        save("galaxy002.png");
    }

    private void grid() {
        int i=hcell;
        while(i<h-hcell){
            int a = alea.nextInt(3);
            int amount = 1+ alea.nextInt(ratio-1);

            switch(a){
            case 0:
                sliders(i,wcell,amount*wcell);
                plug(i,amount*wcell,w-wcell);
                break;
            case 1:
                plug(i,wcell,amount*wcell);
                knob(i,amount*wcell,w-wcell);
                break;
            case 2:
                knob(i,wcell,amount*wcell);
                sliders(i,amount*wcell,w-wcell);
                break;
            }
            i+=hcell;
        }
    }

    private void sliders(int hindex,int wstart, int wend){
        int j=wstart;
        while (j<wend){
            noStroke();
            float x = (float)0.42*wcell;
            rect(j+x,hindex,(float)0.18*wcell,hcell,5);
            float y = alea.nextFloat()*(hcell-(float)0.08*hcell);
            rect(j+10,hindex+y,wcell-20,(float)0.08*hcell,9);
            j+=wcell;
        }
    }

    private void plug(int hindex,int wstart, int wend){
        float w4 = wcell/4;
        float h8 = hcell/6;
        int j=wstart;
        while (j<wend){
            for (float x=w4; x<wcell; x+=w4*2){
                for (float y=h8; y < hcell; y+=h8*2){
                    ellipse(j+x, hindex+y, (float)1.7*w4, (float)1.7*w4);
                    pushStyle();
                    noStroke();
                    fill(230,100,50);
                    ellipse(j+x, hindex+y, (float)0.5*w4, (float)0.5*w4);
                    popStyle();
                }
            }
            j+=wcell;
        }
    }

    private void knob(int hindex,int wstart, int wend){
        float w4 = wcell/4;
        float h8 = hcell/6;
        int j=wstart;
        while (j<wend){
            for (float x=w4; x<wcell; x+=w4*2){
                for (float y=h8; y < hcell; y+=h8*2){
                    float cx = j+x;
                    float cy = hindex+y;
                    ellipse(cx,cy, (float)1.4*w4, (float)1.4*w4);
                    int ang = alea.nextInt(360);
                    float rad = (float)1.1*w4;
                    float dx = cx + rad*cos(radians(ang));
                    float dy = cy + rad*sin(radians(ang));
                    pushStyle();
                    strokeWeight(7);
                    stroke(0,0,0);
                    line(cx,cy,dx,dy);
                    popStyle();
                }
            }
            j+=wcell;
        }

    }

    public static void main(String[] args) {
        String[] processingArgs = {"Galaxy002"};
        Galaxy002 mySketch = new Galaxy002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
