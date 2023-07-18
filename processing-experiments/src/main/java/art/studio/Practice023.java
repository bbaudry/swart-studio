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
        drawRay(0);
        cpx=px;
        cpy=py+72;
        fill(180,100,100);ellipse(px,py,11,11);noFill();
        vertex(px, py);

        px1=cx+rad*cos(radians(60));
        py1=cy+rad*sin(radians(60));
        drawRay(60);drawTang(60);
        ellipse(px1,py1,11,11);
        cpx1=px1+42;//alea.nextInt(100);
        cpy1=py1-142;//alea.nextInt(100);
        bezierVertex(cpx, cpy, cpx1, cpy1, px1, py1);
        cpx2=px1-12;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=py1+42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        px1=cx+rad*cos(radians(120));
        py1=cy+rad*sin(radians(120));
        drawRay(120);drawTang(120);
        ellipse(px1,py1,11,11);
        cpx1=px1+42;//alea.nextInt(100);
        cpy1=py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
        cpx2=px1-42;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=py1-42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        px1=cx+rad*cos(radians(150));
        py1=cy+rad*sin(radians(150));
        drawRay(150);drawTang(150);
        fill(0,100,100);ellipse(px1,py1,11,11);noFill();
        cpx1=px1+42;//alea.nextInt(100);
        cpy1=py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
        cpx2=px1-42;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=py1-42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        px1=cx+rad*cos(radians(200));
        py1=cy+rad*sin(radians(200));
        drawRay(200);drawTang(200);
        ellipse(px1,py1,11,11);
        cpx1=px1-142;//alea.nextInt(100);
        cpy1=py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
        cpx2=px1+142;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=py1-42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        cpx1=px;//alea.nextInt(100);
        cpy1=py-142;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        line(cpx, cpy, cpx1, cpy1);

        endShape();
        noLoop();
    } 

    private void drawRay(int deg){
        stroke(90,100,100);
        strokeWeight(2);
        float x = cx+rad*cos(radians(deg));
        float y = cy+rad*sin(radians(deg));
        line(cx,cy,x,y);
        strokeWeight(1);
    }

    private void drawControls(float cpx1,float cpy1,float cpx2,float cpy2){
        stroke(180,100,100);
        line(cpx1,cpy1,cpx2,cpy2);
        strokeWeight(1);
    }

    private Float[] drawTang(int deg){
        float tx = cx+rad*cos(radians(deg));
        float ty = cy+rad*sin(radians(deg));
        int rad = 200;
        int ang = 120;
        float dx1 = tx+rad*cos(radians(deg-ang));
        float dy1 = ty+rad*sin(radians(deg-ang));
        float dx2 = tx+rad*cos(radians(deg-ang+180));
        float dy2 = ty+rad*sin(radians(deg-ang+180));
        stroke(330,100,100);
        ellipse(dx1,dy1,5,5);
        line(dx1,dy1,dx2,dy2);
        Float[] res = {dx1,dy1, dx2, dy2};
        return res;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice023" };
        Practice023 mySketch = new Practice023();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
