package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class OddJob001  extends PApplet{
/* nice colors         fill(310,80,62);         fill(240,80,62); */


    int h = 1000;
    int w = 1000;
    int[] palette = {5,45,340,240,200}; //80,90
    boolean c;
    Random rd = new Random();


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(45,25,80);
    }

    @Override
    public void draw() {
        int ind = (int)(random(palette.length));
        if (rd.nextBoolean()){
            stroke(palette[ind],80,90);
            strokeCap(SQUARE);
            strokeWeight(random(41,111));
            line(random(0,w/2), random(0,h), random(w/2,w), random(0,h));
            noStroke();
        }
        else{
            fill(palette[ind],80,90);
            float radius = random(h/10, 3*h/10);
            ellipse(random(0,w), random(0,h), radius, radius);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "OddJob001"};
        OddJob001 mySketch = new OddJob001();
        PApplet.runSketch(processingArgs, mySketch);
    }

    
}
