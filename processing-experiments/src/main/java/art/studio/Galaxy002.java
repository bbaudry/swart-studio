/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Galaxy002 extends PApplet {
    //Galaxy 04 resolution:720 × 1600
    int w = 720;
    int h = 1600;
    Random alea;
    int wcell = w/10;
    int hcell = h/10;

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
            if (alea.nextBoolean()){
                sliders(i);
            }
            else{
                knobs(i);
            }
            i+=hcell;
        }
    }

    private void sliders(int hindex){
        int j=wcell;
        while (j<w-wcell){
            noStroke();
            float x = (float)0.42*wcell;
            rect(j+x,hindex,(float)0.16*wcell,hcell,5);
            float y = alea.nextFloat()*(hcell-(float)0.08*hcell);
            rect(j+10,hindex+y,wcell-20,(float)0.08*hcell,9);
            j+=wcell;
        }
    }

    private void knobs(int hindex){
        float w4 = wcell/4;
        float h8 = hcell/8;
        int j=wcell;
        while (j<w-wcell){
            for (float x=w4; x<wcell; x+=w4*2){
                for (float y=h8; y < hcell; y+=h8*2){
                    ellipse(j+x, hindex+y, (float)1.5*w4, (float)1.5*w4);
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

    public static void main(String[] args) {
        String[] processingArgs = {"Galaxy002"};
        Galaxy002 mySketch = new Galaxy002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
