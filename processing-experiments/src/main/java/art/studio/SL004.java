package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class SL004 extends PApplet {
    int w = 1000;
    int h = 1000;
    int x;
    int y;
    int len;
    int wid;
    float hu;
    float not;
    float boring;
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        rand = new Random();
        fill(0,0,0);
        noStroke();
        rect(0,0,w,h);
        hu=random(360);
    }

    @Override
    public void draw() {
        x=rand.nextInt(w);
        y=rand.nextInt(h);
        if (!(x>=400 & x<600 & y>=400 & y<600)&!(x>=11 & x<111 & y>=777 & y<888)){
            not=random(10);
            boring=random(90,100);
            fill(hu,not,boring);
            rect(x,y,random(1,5),random(1,5));
        }
    }

    public void noisyFill(int x, int y, int len, int wid){

    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL004" };
        SL004 mySketch = new SL004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
