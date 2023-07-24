package art.studio;

import processing.core.PApplet;
import processing.core.PGraphics;

import java.util.Random;
import java.util.ArrayList;

//practice shades
public class Summer004 extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    float xoff = (float) 0.0;
    float grain = (float) 0.09;
    float ang = 90;
    boolean grow = true;
    float wid=w/10;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        alea = new Random();
        background(0, 0, 0);
    }

    @Override
    public void draw() {
            background(42, 0, 0);
            noFill();
            stroke(193, 100, 100);
            wave();
             if (grow) {
                ang += 0.1;
                wid += 0.5;
            } else {
                ang -= 0.1;
                wid -= 0.5;
            }
            if (ang >= 180) {
                grow = false;
            }
            if (ang <= 0) {
                grow = true;
            }

    }


    private void wave(){
        float cx,cy, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;

        beginShape();
        cx = 0; cy=(float)0.5*h;
        ellipse(cx, cy, 7, 7);
        vertex(cx, cy);
        controls = drawTang(cx,cy);
        cpx2 = controls[2];
        cpy2 = controls[3];

        cx = (float)0.2*w; cy=(float)0.7*h;
        ellipse(cx, cy, 7, 7);
        controls = drawTang(cx,cy);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx,cy);
        cpx2 = controls[2];
        cpy2 = controls[3];

        cx = (float)0.29*w; cy=(float)0.65*h;
        ellipse(cx, cy, 7, 7);
        controls = drawTang(cx,cy);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx,cy);
        cpx2 = controls[2];
        cpy2 = controls[3];
        
        cx = (float)0.5*w; cy=(float)0.42*h;
        ellipse(cx, cy, 7, 7);
        controls = drawTang(cx,cy);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx,cy);
        cpx2 = controls[2];
        cpy2 = controls[3];
        
        cx = (float)0.65*w; cy=(float)0.35*h;
        ellipse(cx, cy, 7, 7);
        controls = drawTang(cx,cy);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx,cy);
        cpx2 = controls[2];
        cpy2 = controls[3];
        
        cx = (float)0.84*w; cy=(float)0.5*h;
        ellipse(cx, cy, 7, 7);
        controls = drawTang(cx,cy);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx,cy);
        cpx2 = controls[2];
        cpy2 = controls[3];
        
        cx = w; cy=(float)0.66*h;
        ellipse(cx, cy, 7, 7);
        controls = drawTang(cx,cy);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx,cy);
        endShape();
    }

    private Float[] drawTang( float cx, float cy) {
        //float wid1 = w / 10;// *alea.nextFloat();
        //float wid2 = w / 10;// *alea.nextFloat();
        // int ang = 90;//+(-11+alea.nextInt(22));
        float dx1 = cx + wid * cos(radians(ang));
        float dy1 = cy + wid * sin(radians(ang));
        float dx2 = cx + wid * cos(radians(ang + 180));
        float dy2 = cy + wid * sin(radians(ang + 180));
        Float[] res = { dx1, dy1, dx2, dy2 };
        line(dx1,dy1,dx2,dy2);
        return res;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Summer004" };
        Summer004 mySketch = new Summer004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
