package art.studio;

import processing.core.PApplet;

//practice drawing horizontal chords in circles
public class Practice005  extends PApplet {
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
        float cx;
        float cy;
        float radius;
        for (int i=0; i<11; i++){
            radius = random(42, 111);;
            cx = random(w / 10, 9 * w / 10);
            cy = random(h / 10, 9 * h / 10);
            stroke(0);
            ellipse(cx, cy, radius*2, radius*2);
            h_ray(cx, cy, radius);
        }
        noLoop();
    }

    // x=h+r*cosθ; y=k+r*sinθ ; r is the radius of the circle; h,k are the coordinates of the center.
    public void h_ray(float x, float y, float radius) {
        ellipse(x, y, 10, 10); //draw the center of the circle
        noStroke();
        float angle = random((float)(Math.PI/2),(float)(3*Math.PI/2)); //random angle on the left half of the circle
        float sx1 = x + radius*cos(angle);
        float sy1 = y + radius*sin(angle);
        fill(42,242,84);
        ellipse(sx1, sy1, 10, 10);
        float angle_sym = (float)(2*3*Math.PI/2-angle);//angle to get the symmetric on the right half of the circle
        float sx2 = x + radius*cos(angle_sym);
        float sy2 = y + radius*sin(angle_sym);
        fill(242,42,84);
        ellipse(sx2, sy2, 10, 10);
        stroke(0);
        line(sx1, sy1, sx2, sy2);//draw the horizontal ray
        noFill();
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 001" };
        Practice005 mySketch = new Practice005();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
