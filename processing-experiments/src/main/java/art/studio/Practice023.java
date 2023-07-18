package art.studio;

import processing.core.PApplet;
import java.util.Random;


//practice shades
public class Practice023  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx=w/2;
    float cy=h/2;
    float rad = w/3;
    Random alea;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,0,0);
        alea=new Random();
    }

    @Override
    public void draw() {
        background(0,0,0);
        noFill();//fill(40,100,100);
        stroke(40,100,100);
        float px, py, px1, py1, cpx, cpy, cpx1, cpy1, cpx2, cpy2;
        beginShape();
        px=cx+rad*cos(radians(0));
        py=cy+rad*sin(radians(0));
        cpx=px;
        cpy=py+72;
        fill(180,100,100);ellipse(px,py,11,11);noFill();
        vertex(px, py);

        px1=cx+rad*cos(radians(60));
        py1=cy+rad*sin(radians(60));
        //line(px1,py1,px2,py2);
        ellipse(px1,py1,11,11);
        cpx1=px1+42;//alea.nextInt(100);
        cpy1=py1-142;//alea.nextInt(100);
        bezierVertex(cpx, cpy, cpx1, cpy1, px1, py1);

        cpx2=px1-12;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=py1+42;//(float)(0.5*py1+(0.5*cpy1));
        line(cpx1,cpy1,cpx2,cpy2);
        px1=cx+rad*cos(radians(120));
        py1=cy+rad*sin(radians(120));
        ellipse(px1,py1,11,11);
        cpx1=px1+42;//alea.nextInt(100);
        cpy1=py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);

        cpx2=px1-42;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=py1-42;//(float)(0.5*py1+(0.5*cpy1));
        line(cpx1,cpy1,cpx2,cpy2);
        px1=cx+rad*cos(radians(200));
        py1=cy+rad*sin(radians(200));
        ellipse(px1,py1,11,11);
        cpx1=px1-142;//alea.nextInt(100);
        cpy1=py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);

        cpx2=px1+142;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=py1-42;//(float)(0.5*py1+(0.5*cpy1));
        line(cpx1,cpy1,cpx2,cpy2);
        cpx1=px;//alea.nextInt(100);
        cpy1=py-142;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        line(cpx, cpy, cpx1, cpy1);

        endShape();
        noLoop();
    } 

    public static void main(String[] args) {
        String[] processingArgs = { "Practice023" };
        Practice023 mySketch = new Practice023();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
