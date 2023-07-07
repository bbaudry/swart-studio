/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt022 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    float minx,miny,maxx,maxy;
    float xoff,grain;
    float hu;

    

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
        hu=140;
        xoff = (float)0.0; grain = (float)0.1; //control the noise
    }

    @Override
    public void draw() {
        if(frameCount<4){
            oneCell();
        }
        else{
            noLoop();
            save("tshirt022.png");
        }
    }

    private void oneCell(){
        float cx,cy,radius,angle;
//        noStroke();
//        fill(hu,100,100,21);
//        hu+=4;
        noFill();
        stroke(50,0,100,84);
        strokeWeight(3);
        int cake = 42+alea.nextInt(42); // number of sections in the shape
        float a_inc = (2*PI)/cake;
        angle = 0;
        cx=w/2;cy=h/2;
        radius = noise(xoff)*w/2; xoff+=grain;
        float xinit = cx+radius*cos(angle);
        float yinit = cy+radius*sin(angle);
        float ix=xinit;
        float iy = yinit;
        float dx=0;
        float dy=0;
        //line(cx,cy,ix,iy);
        beginShape();
        curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);
        for (int i=0;i<cake-1;i++){
            angle+=a_inc;
            radius = noise(xoff)*w/2; xoff+=grain;
            dx = cx + radius*cos(angle);
            dy = cy + radius*sin(angle);
            curveVertex(dx, dy);
            //line(cx,cy,dx,dy);
            //triangle(cx,cy, ix, iy, dx, dy);
            ix=dx;
            iy=dy;
        }
        curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);
        endShape();
        //triangle(cx,cy, ix, iy, dx, dy);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt022" };
        Tshirt022 mySketch = new Tshirt022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
