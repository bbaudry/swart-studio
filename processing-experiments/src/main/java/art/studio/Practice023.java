package art.studio;

import processing.core.PApplet;
import java.util.Random;



//practice shades
public class Practice023  extends PApplet {
    int w = 1000;
    int h = 1000;
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
        noFill();
        float rad;
        stroke(55,100,100);
        rad = (float)(w*0.3);
        //oneLayerCompact(36, rad);
        stroke(95,100,100);
        rad = (float)(w*0.25);
        //oneLayerCompact(16, rad);
        stroke(185,100,100); strokeWeight(2);
        rad = (float)(w*0.1);
        oneLayerCompact(4, w/2, h/2, rad);
        //noLoop();
    }

    private void oneLayerCompact(int nbRays, float cx, float cy, float rad){
        int angle = 360/nbRays;
        float px, py, px1, py1, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        beginShape();
        px=cx+rad*cos(radians(0));
        py=cy+rad*sin(radians(0));
        vertex(px, py);
        controls = drawTang(0,cx,cy,rad);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (int i=1; i<=nbRays; i++){
            px1 = cx + rad * cos(radians(angle*i));
            py1 = cy + rad * sin(radians(angle*i));
            controls = drawTang(angle*i,cx,cy,rad);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        controls=drawTang(0,cx,cy,rad);
        cpx1=controls[0];
        cpy1=controls[1];
        //bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        endShape();
    }

    private Float[] drawTang(float deg, float cx, float cy, float rad){
        float tx = cx+rad*cos(radians(deg));
        float ty = cy+rad*sin(radians(deg));
        int wid = 4+frameCount;
        int ang = 90-frameCount;//alea.nextInt(10);
        float dx1 = tx+wid*cos(radians(deg-ang));
        float dy1 = ty+wid*sin(radians(deg-ang));
        float dx2 = tx+wid*cos(radians(deg-ang+180));
        float dy2 = ty+wid*sin(radians(deg-ang+180));
//        line(dx1,dy1,dx2,dy2);
        Float[] res = {dx1,dy1, dx2, dy2};
        return res;
    }




    private void oneLayer(float cx, float cy,float rad){
        float px, py, px1, py1, cpx, cpy, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        beginShape();
        px=cx+rad*cos(radians(0));
        py=cy+rad*sin(radians(0));
        drawRay(0,cx,cy,rad);
        cpx=px;
        cpy=py+72;
        fill(180,100,100);ellipse(px,py,11,11);noFill();
        vertex(px, py);

        px1=cx+rad*cos(radians(60));
        py1=cy+rad*sin(radians(60));
        drawRay(60,cx,cy,rad);controls=drawTang(60,cx,cy,rad);
        ellipse(px1,py1,11,11);
        cpx1=controls[0];//px1+42;//alea.nextInt(100);
        cpy1=controls[1];//py1-142;//alea.nextInt(100);
        bezierVertex(cpx, cpy, cpx1, cpy1, px1, py1);
        cpx2=controls[2];//px1-12;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=controls[3];//py1+42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        px1=cx+rad*cos(radians(120));
        py1=cy+rad*sin(radians(120));
        drawRay(120,cx,cy,rad);controls=drawTang(120,cx,cy,rad);
        ellipse(px1,py1,11,11);
        cpx1=controls[0];//px1+42;//alea.nextInt(100);
        cpy1=controls[1];//py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
        cpx2=controls[2];//px1-42;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=controls[3];//py1-42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        px1=cx+rad*cos(radians(190));
        py1=cy+rad*sin(radians(190));
        drawRay(190,cx,cy,rad);controls=drawTang(190,cx,cy,rad);
        fill(0,100,100);ellipse(px1,py1,11,11);noFill();
        cpx1=controls[0];//px1+42;//alea.nextInt(100);
        cpy1=controls[1];//py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
        cpx2=controls[2];//px1-42;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=controls[3];//py1-42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        px1=cx+rad*cos(radians(250));
        py1=cy+rad*sin(radians(250));
        drawRay(250,cx,cy,rad);controls=drawTang(250,cx,cy,rad);
        ellipse(px1,py1,11,11);
        cpx1=controls[0];//px1-142;//alea.nextInt(100);
        cpy1=controls[1];//py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
        cpx2=controls[2];//px1+142;//(float)(0.5*px1+(0.5*cpx1));
        cpy2=controls[3];//py1-42;//(float)(0.5*py1+(0.5*cpy1));
        drawControls(cpx1,cpy1,cpx2,cpy2);

        controls=drawTang(0,cx,cy,rad);
        cpx1=controls[0];//px1-142;//alea.nextInt(100);
        cpy1=controls[1];//py1+42;//alea.nextInt(100);
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);

        endShape();

    }

    private void drawRay(int deg, float cx, float cy,float rad){
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


    public static void main(String[] args) {
        String[] processingArgs = { "Practice023" };
        Practice023 mySketch = new Practice023();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
