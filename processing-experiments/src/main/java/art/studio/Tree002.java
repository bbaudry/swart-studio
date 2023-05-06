/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tree002 extends PApplet {
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
        trunkCurve();
    }

    private void trunkCurve(){
        noFill();
        strokeWeight(2);
        stroke(100,100,100);
        float ox = w/2+random(-42,42);
        float ix = w/2;
        float dx = ix+random(-11,11);
        beginShape();
        curveVertex(ox, h); // the first control point
        curveVertex(ox, h); // is also the start point of curve
        curveVertex(ix+random(-21,21), h-42);
        curveVertex(ix+random(-11,11), h-63);
        curveVertex(ix+random(-11,11), h-105);
        curveVertex(dx, h-150); // the last point of curve
        curveVertex(dx, h-150); // is also the last control point
        endShape();
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
        String[] processingArgs = { "Tree002" };
        Tree002 mySketch = new Tree002();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
