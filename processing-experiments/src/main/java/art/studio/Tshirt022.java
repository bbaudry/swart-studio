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
    float minx, miny, maxx, maxy;
    float xoff, grain;
    float hu;
    float angletest,inctest;
    int sharestest;

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
        hu = 140;
        xoff = (float) 0.0;
        grain = (float) 0.1; // control the noise
        sharestest = 5;
        inctest = radians(360/sharestest);
        angletest = inctest;
    }

    @Override
    public void draw() {
        if (frameCount < 63) {
            //background(0, 0, 0);
            //ell();
            //angletest+=inctest;
            flower(w/2,h/2,21);
        } else {
            noLoop();
            save("tshirt022.png");
        }
    }

    private void ell() {
        noFill();
        for (int i=0;i<sharestest;i++){
            pushMatrix();
        translate(w / 2, h / 2);        
        rotate(angletest);
        stroke(0, 100, 100);
        ellipse(0, 0, 244, 444);
        stroke(90, 100, 100);
        ellipse(0, 100, 244, 444);
        stroke(180, 100, 100);
        ellipse(0, 200, 244, 444);
        stroke(0,0,100);
        line(0,0,0,400);
        angletest+=inctest;
        popMatrix();
        }
    }

    private void flower(float cx, float cy, int cake) {
        xoff = (float) 0.0;
        noFill();
        float a_inc, radius, angle, t,  py;
        // + alea.nextInt(42); // number of sections in the shape
        a_inc = radians(360/cake);// (2 * PI) / cake;
        angle =  a_inc;//alea.nextFloat()*PI;
        for (int i = 0; i < cake ; i++) {
            pushMatrix();
            translate(cx, cy);
            radius =  noise(xoff) * (float)(0.8 * w );
            rotate(angle); 
            t = noise(xoff)*(float)(0.5);
            py = (1 - t) * 0 + (t * radius);
            stroke(280+alea.nextInt(60),100,100,42);
            ellipse(0, py, 42+alea.nextFloat()*42, radius/3+alea.nextFloat()*radius/4);
            angle += a_inc;      
            popMatrix();      
            xoff += grain;
        }
    }

    private void oneCell() {
        float cx, cy, radius, angle;
        // noStroke();
        // fill(hu,100,100,21);
        // hu+=4;
        noFill();
        stroke(50, 0, 100, 42);
        int cake = 42 + alea.nextInt(42); // number of sections in the shape
        float a_inc = (2 * PI) / cake;
        translate(w / 2, h / 2);
        angle = alea.nextFloat() * PI;
        cx = 0;// w / 2;
        cy = 0;// h / 2;
        radius = noise(xoff) * w / 2;
        xoff += grain;
        float xinit = cx + radius * cos(angle);
        float yinit = cy + radius * sin(angle);
        float ix = xinit;
        float iy = yinit;
        float dx = 0;
        float dy = 0;
        line(cx, cy, ix, iy);
        beginShape();
        curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);
        float t, px, py;
        line(cx, cy, ix, iy);
        rotate(angle);
        t = (float) (0.5);
        px = (1 - t) * cx + (t * ix);
        py = (1 - t) * cy + (t * iy);
        // ellipse(px, py, 42, 42);
        ellipse(0, py, 42, 142);
        t = (float) (0.25);
        px = (1 - t) * cx + (t * ix);
        py = (1 - t) * cy + (t * iy);
        // ellipse(px, py, 42, 42);
        // ellipse(0,py, 42, 142);
        t = (float) (0.75);
        px = (1 - t) * cx + (t * ix);
        py = (1 - t) * cy + (t * iy);
        // ellipse(px, py, 42, 42);
        // ellipse(0,py, 42, 142);

        for (int i = 0; i < cake - 1; i++) {
            angle += a_inc;
            radius = noise(xoff) * w / 2;
            xoff += grain;
            dx = cx + radius * cos(angle);
            dy = cy + radius * sin(angle);
            curveVertex(dx, dy);
            line(cx, cy, dx, dy);
            rotate(angle);
            t = (float) (0.5);
            px = (1 - t) * cx + (t * ix);
            py = (1 - t) * cy + (t * iy);
            // ellipse(px, py, 42, 42);
            ellipse(0, py, 42, 142);
            t = (float) (0.25);
            px = (1 - t) * cx + (t * ix);
            py = (1 - t) * cy + (t * iy);
            // ellipse(px, py, 42, 42);
            // ellipse(0,py, 42, 142);
            t = (float) (0.75);
            px = (1 - t) * cx + (t * ix);
            py = (1 - t) * cy + (t * iy);
            // ellipse(px, py, 42, 42);
            // ellipse(0,py, 42, 142);
            // triangle(cx,cy, ix, iy, dx, dy);
            ix = dx;
            iy = dy;
        }
        curveVertex(xinit, yinit);
        curveVertex(xinit, yinit);
        endShape();
        // triangle(cx,cy, ix, iy, dx, dy);
    }


    private void oneCellEllipse() {
        float cx, cy, radius, angle;
        noFill();
        stroke(50, 0, 100, 84);
        int cake = 4 + alea.nextInt(4); // number of sections in the shape
        float a_inc = (2 * PI) / cake;
        angle = 0;
        cx = w / 2;
        cy = h / 2;
        radius = noise(xoff) * w / 2;
        xoff += grain;
        float xinit = cx + radius * cos(angle);
        float yinit = cy + radius * sin(angle);
        float ix = xinit;
        float iy = yinit;
        float dx = 0;
        float dy = 0;
        float t, px, py;
        t = (float) (0.5);
        line(cx, cy, ix, iy);
        px = (1 - t) * cx + (t * ix);
        py = (1 - t) * cy + (t * iy);
        ellipse(px, py, 42, 42);
        for (int i = 0; i < cake - 1; i++) {
            angle += a_inc;
            radius = noise(xoff) * w / 2;
            xoff += grain;
            dx = cx + radius * cos(angle);
            dy = cy + radius * sin(angle);
            line(cx, cy, dx, dy);
            t = (float) (0.5);// (float)(radius*0.5);
            px = (1 - t) * cx + (t * dx);
            py = (1 - t) * cy + (t * dy);
            // pushStyle();
            // translate(w/2, h/2);
            // rotate(angle);
            // popStyle();
            ellipse(px, py, 42, 42);
            ix = dx;
            iy = dy;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt022" };
        Tshirt022 mySketch = new Tshirt022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
