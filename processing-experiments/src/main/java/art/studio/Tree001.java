/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tree001 extends PApplet {
    int w = 2000;
    int h = 1000;
    Random alea;
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        alea=new Random();
        strokeWeight(1);
        background(0,0,0);
    }

    @Override
    public void draw() {
        branch(1,84,w/2,h);
noLoop();
    }

    private void branch(int depth, float length, float x, float y){
        if (depth<11){
        stroke(0,0,100,100);
        float y2 = y-length;
        float x2 = x+random(-142, 142);
        line(x,y,x2,y2);
        int spin = 1 + alea.nextInt(4);
        for (int i = 0; i<spin;i++){
            branch(depth+1,length+random(-17,7),x2,y2);
        }
        }
    }
   
    public static void main(String[] args) {
        String[] processingArgs = { "Tree001" };
        Tree001 mySketch = new Tree001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
