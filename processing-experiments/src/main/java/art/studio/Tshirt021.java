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
    float xoff,grain;
    float hu;

    float cx,cy,radius,angle;
    int nbsections,section;
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
        totalCells = alea.nextInt(5) + 5;
        cellsCount = 0;
        hu=140;
        xoff = (float)0.0;
        grain = (float)0.1;
        minx = (float)(0.12*w); maxx = (float)(0.76*w);
        miny = (float)(0.12*h); maxy = (float)(0.76*h);
        drawing=false;
    }

    @Override
    public void draw() {
        if(frameCount<42){
            //paintCell();
            //testB();
            oneCell();//noLoop();
        }
            else{
                noLoop();
                save("tshirt021.png");
        }
    }

    private void oneCell(){
        noFill();
        noStroke();
        //stroke(50,0,100,84);
        int cake = 42+alea.nextInt(42); 
        angle = 0;
        float a_inc = (2*PI)/cake;
        cx=w/2;cy=h/2;
        radius = noise(xoff)*w/2; xoff+=grain;
        float xinit = cx+radius*cos(angle);
        float yinit = cy+radius*sin(angle);
        float ix=xinit;
        float iy = yinit;
        float dx=0;
        float dy=0;
        fill(hu,100,100,21);
        hu+=4;
        beginShape();
        curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);
        for (int i=0;i<cake-1;i++){
            angle+=a_inc;
            radius = noise(xoff)*w/2; xoff+=grain;
            dx = cx + radius*cos(angle);
            dy = cy + radius*sin(angle);
            curveVertex(dx, dy);
//            line(ix,iy,dx,dy);
//            triangle(cx,cy, ix, iy, dx, dy);
            ix=dx;
            iy=dy;
        }
        //curveVertex(dx, dy);
                curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);

        endShape();
//        line(ix,iy,xinit,yinit);
//        triangle(cx,cy, ix, iy, dx, dy);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt021" };
        Tshirt021 mySketch = new Tshirt021();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
