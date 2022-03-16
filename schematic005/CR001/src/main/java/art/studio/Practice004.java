package art.studio;

import processing.core.PApplet;

public class Practice004  extends PApplet {
    int w = 1000;
    int h = 1000;
    float move = 1;
    float r = random(256);
    float g = random(256);
    float b = random(256);
    float cChange = 2;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        //frameRate(1);
        background(255,255,255);
        //noLoop();
    }

    @Override
    public void draw() {
        strokeWeight(6);
        for(int i=0; i<37; i++){
            float cx = random(w/10,9*w/10);
            float cy = random(h/10,9*h/10);
            float radius = random(11,42);
            broken_circle(cx, cy, radius);
        }
        noLoop();
    }

    // draws lines around a center
    // x=h+r*cosθ; y=k+r*sinθ ; r is the radius of the circle; h,k are the coordinates of the center.
    public void broken_circle(float x, float y, float radius) {
        stroke(0);
        float ori_x = x + radius;
        float ori_y = y;
        float dest_x;
        float dest_y;
        float rotate=0;
        float angle=0;
        float twopi = (float)(2*Math.PI);
        while (rotate<twopi){
            angle = random((float)(2*Math.PI / 51),(float)(2*Math.PI / 5));
            if (rotate + angle>=twopi){
                angle=twopi-rotate; 
                System.out.println("end circle");
            }
            dest_x = x + radius*cos(angle+rotate);
            dest_y = y + radius*sin(angle+rotate);
            line(ori_x, ori_y, dest_x, dest_y);
            ori_x = dest_x;
            ori_y = dest_y;
            rotate = rotate+angle;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 001" };
        Practice004 mySketch = new Practice004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
