package art.algo;

import processing.core.PApplet;
import java.util.Random;

public class Plein007 extends PApplet {
    int w, h;
    int leftmargin,rightmargin,topmargin,bottommargin,actualheight,actualwidth;
    int resolution;
    double penwidth;
    int st;
    float cx;
    float cy;
    float rad;
    Random rand;
    
    @Override
    public void settings() {
            w = (int) Math.floor(8.5 * 96);
    h = (int) Math.floor(11 * 96);
        size(w, h);
    }

    @Override
    public void setup() {
    leftmargin = (int) Math.floor(w * 0.05);
    rightmargin = (int) Math.floor(w * 0.95);
    topmargin = (int) Math.floor(h * 0.05);
    bottommargin = (int) Math.floor(h * 0.75);
    actualwidth = rightmargin - leftmargin;
    actualheight = bottommargin - topmargin;
    colorMode(HSB, 360, 100, 100, 250);
    strokeWeight(3);
    penwidth = 0.04 * 96; // 0.04 inch is 1 mm, the width of stabilo 68/32
    resolution = Math.floor(random([3,5,7]));

        st=0;
        colorMode(HSB, 360, 100, 100);
        cx=(float) (w*0.5);
        cy=(float) (h*0.5);
        rad=random((float)0.3,(float)0.5)*w;
        colorMode(HSB,360,100,100);
        background(0,0,0);
        rand = new Random();
    }

    @Override
    public void draw() {
        fill(50,100,100);
        noStroke();
        float x,y;
        int size = (int) Math.floor(w*0.4);
        float offsetx, offsety;
        for(int i=0; i< 4;i++){
            
            offsetx=rand.nextInt(-100,100);
            offsety=rand.nextInt(-100,100);
            x=cx+offsetx;
            y=cy+offsety;
            pushMatrix();
            translate(x,y);
            rect(-size/2,-size/2,size,size);
            popMatrix();                
        }
        noLoop();
    }


        public static void main(String[] args) {
            String[] processingArgs = { "Carresjaunes " };
            Carresjaunes mySketch = new Carresjaunes();
            PApplet.runSketch(processingArgs, mySketch);
        }
}
