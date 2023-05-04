/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tree001 extends PApplet {
    int w = 1800;
    int h = 1000;
    Random alea;
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        alea=new Random();
        strokeWeight(1);
        background(0,0,0);
        frameRate(1);
    }

    @Override
    public void draw() {
        if(frameCount<42){
            background(0,0,0,42);
            float rx = random((float)0.4*w, (float)0.6*w);
            branch(1,84,rx,h);
        }
        else{
            save("Tree002.png");
            noLoop();
        }
    }

    private void branch(int depth, float length, float x, float y){
        if (depth<11){
        stroke(100,100,100,80);
        float y2 = y-length;
        float x2 = x+random(-142, 142);
        line(x,y,x2,y2);
        int spin = alea.nextInt(3)+1;
        for (int i = 0; i<spin;i++){
            branch(depth+1,length+random(-17,9),x2,y2);
        }
        }
    }
   
    public static void main(String[] args) {
        String[] processingArgs = { "Tree001" };
        Tree001 mySketch = new Tree001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
