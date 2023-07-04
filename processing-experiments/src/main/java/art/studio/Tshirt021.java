/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt021 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    int totalCells;
    int cellsCount;
    float minx,miny,maxx,maxy;
    float cx,cy,radius;
    boolean drawing;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0, 0, 0);
        alea = new Random();
        totalCells = alea.nextInt(7) + 2;
        cellsCount = 0;
        minx = (float)(0.1*w); maxx = (float)(0.9*w);
        miny = (float)(0.1*h); maxy = (float)(0.9*h);
        drawing=false;
    }

    @Override
    public void draw() {
        if(drawing){
            paintCell();
        }
        else{
            if(cellsCount<totalCells){
                cx = randomInWidth();
                cy = randomInHeight();
                radius = 84 + alea.nextFloat()*84;
                drawing=true;
            }
            else{
                noLoop();
                save("tshirt021.png");
            }
        }
    }

    private void paintCell(){
        fill(50,100,100,42+alea.nextFloat()*42);
        noStroke();
        ellipse(cx,cy,radius,radius);
        drawing=false;
        cellsCount++;
    }

    private float randomInWidth(){
        return minx + alea.nextFloat()*maxx;
    }   
    private float randomInHeight(){
        return miny + alea.nextFloat()*maxy;
    }   

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt021" };
        Tshirt021 mySketch = new Tshirt021();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
