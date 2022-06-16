/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth007 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = {40, 60, 80, 100 };
    int lou = 69;
    float hu;
    float cx;
    float cy;
    Random rd;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rd = new Random();
        cx = w/2;
        cy = h/2;
        background(0,10,80);
        fill(0,100,100);
        noStroke();
        ellipse(cx,cy,w,w);
    }

    @Override
    public void draw() {
        marianne();
    }


    private void marianne(){
        noFill();
        strokeWeight(random((float)0.1,(float)0.2)*lou);
        strokeCap(SQUARE);
        float santorin = w;
        float angle1 = random(0,2*PI); 
        float rangle = random((float)0.2,(float)0.4)*PI;
        float angle2 = angle1 + rangle;
        hu = palettef[rd.nextInt(palettef.length - 1)];
        float s = random(100);
        stroke(hu, s, 100);
        float suzanne = random(1);
        arc(cx, cy, santorin*suzanne, santorin*suzanne, angle1, angle2);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth007 " };
        Birth007 mySketch = new Birth007();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
