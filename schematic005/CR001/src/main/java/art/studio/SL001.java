package art.studio;

import processing.core.PApplet;

public class SL001  extends PApplet {
    int w = 1000;
    int h = 1000;
    float move = 1;
    float r = random(256);
    float g = random(256);
    float b = random(256);
    float x;
    float y;
    float cx;
    float cy;
    float cChange;
    float angle;
    float step;
    float radius;
    float spiral_iterations;
    int total_iterations;
    int count;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(12);
        total_iterations = 7;
        //initial state
        background(255,255,255);
        count=0;
        cx=w/2;
        cy=h/2;
        r = random(256);
        g = random(256);
        b = random(256);
    
        // knobs for one round of spirals
        cChange = 17; // color change rate
        angle = (float)(2 * Math.PI); // position for the first circle in a round of spirals
        step = (float) (2 * Math.PI / 10); // rate of drawing in one circle of the spiral
        spiral_iterations=4; // number of times the spiral iterates
        //noLoop();
    }

    @Override
    public void draw() {
//        move = move + (float) (2 * Math.PI / 250);
        x = cx + cos(angle) * (15 * angle);
        y = cy + sin(angle) * (15 * angle);
        r += random(-cChange, cChange);
        r = constrain(r, 0, 256);
        g += random(-cChange, cChange);
        g = constrain(g, 0, 256);
        b += random(-cChange, cChange);
        b = constrain(b, 0, 256);
        fill(r,g,b,random(90,130));
        strokeWeight(random(7));
        stroke(255,255,255);
        radius=random(10,30*(float)(angle*0.8)); //size of radius is random and also related to the angle
        ellipse(x, y, radius, radius);
        angle += step;
        if (angle>(float) (spiral_iterations * 2 * Math.PI)){
            cx = random(w/4,3*w/4);
            cy = random(h/4,3*h/4);
            angle = (float)(2 * Math.PI);
            count++;
            r = random(256);
            g = random(256);
            b = random(256);    
            System.out.println("iteration "+(count-1));
        }
        if (count==total_iterations){
            noLoop();
            save("SL001.png");
        }
    }

    // simple function that draws points along a spiral, 6 circles, clocwise, changing color randomly
    public void spiral3(float rotate) {
        float step = (float) (2 * Math.PI / 300);
        for (float angle = 0; angle < 2 * Math.PI * 6; angle += step) {
            float x = width / 2 + cos(angle+rotate) * (15 * angle);
            float y = height / 2 + sin(angle+rotate) * (15 * angle);
            r += random(-cChange, cChange);
            r = constrain(r, 0, 256);
    
            g += random(-cChange, cChange);
            g = constrain(g, 0, 256);
    
            b += random(-cChange, cChange);
            b = constrain(b, 0, 256);
            noStroke();
            fill(r,g,b);
              //  noStroke();
            //fill(123, 244, 89);
            ellipse(x, y, 1, 1);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 001" };
        SL001 mySketch = new SL001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
