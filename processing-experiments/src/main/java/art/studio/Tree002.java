/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Tree002 extends PApplet {
    int w = 1800;
    int h = 1000;
    Random alea;
    ArrayList<ArrayList<Float>> branches; 
    int branch_index = 0;
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        alea=new Random();
        branches = new ArrayList<>();
        strokeWeight(1);
        background(0,0,0);
    }

    @Override
    public void draw() {
        if (frameCount<42){
            trunkCurve();
        }
        else{
            if (branch_index < branches.size()){
                branchcurve(1,random(42, 84),branches.get(branch_index).get(0),branches.get(branch_index).get(1));
                branch_index++;
            }
        }
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
        curveVertex(ix+random(-11,11), h-93);
        curveVertex(ix+random(-11,11), h-145);
        curveVertex(dx, h-200); // the last point of curve
        curveVertex(dx, h-200); // is also the last control point
        endShape();
        ArrayList<Float> coord = new ArrayList<>();
        coord.add(dx);
        coord.add((float)h-200);
        branches.add(coord);
    }


    private void branchcurve(int depth, float length, float x, float y){
        
        float ix = x;
        float dx = ix+random(-111,111);
        float dy = y-length;
        beginShape();
        curveVertex(x, y); // the first control point
        curveVertex(x, y); // is also the start point of curve
        curveVertex(ix+random(-21,21), (float)(y-0.2*length));
        curveVertex(ix+random(-11,11), (float)(y-0.6*length));
        curveVertex(ix+random(-11,11), (float)(y-0.8*length));
        curveVertex(dx, dy); // the last point of curve
        curveVertex(dx, dy); // is also the last control point
        endShape();
    }

    private void branch(int depth, float length, float x, float y){
        if (depth<11){
        if (alea.nextFloat()<0.8){stroke(100,100,100);}
        else {stroke(320,50,100);}
        strokeWeight(2);
        float y2 = y-length;
        float x2 = x+random(-142, 142);
        line(x,y,x2,y2);
        int spin = alea.nextInt(2)+1;
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
