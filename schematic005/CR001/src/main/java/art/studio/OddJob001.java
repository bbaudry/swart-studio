package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class OddJob001  extends PApplet{
/* nice colors         fill(310,80,62);         fill(240,80,62); */


    int h = 1000;
    int w = 1000;
    float cx;
    float cy;
    int[] palette = {5,45,340,240,200}; //80,90
    boolean c;
    Random rd = new Random();
    int s;
    int hu;
    int max_iterations;
    int iteration;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(45,25,80);
        max_iterations=111;
        iteration=0;
    }

    @Override
    public void draw() {
        if (iteration==max_iterations){
            noLoop();
            save("OddJob001.png");
        }
        hu = (int) (random(palette.length));
        s = rd.nextInt() % 5;
        float radius;
        float angle1; 
        float rand_angle;
        float angle2;
        switch (s) {
            case 0:
                stroke(palette[hu], 80, 90);
                strokeCap(SQUARE);
                strokeWeight(random(11, 42));
                cx=random(0, w);
                cy=random(0, h);
//                line(cx, cy, cx+random(w/11,w/3), cy+random(h/11,h/3));
                noStroke();
                // }
                // else{
                break;
            case 1:
                noStroke();    
                fill(palette[hu], 80, 90);
                radius = random(h / 42, 3 * h / 42);
                ellipse(random(0, w), random(0, h), radius, radius);
                // }
                break;
            case 2:
                stroke(palette[hu], 80, 90);
                strokeWeight(random(11, 42));
                noFill();
                radius = random(h / 42, 3 * h / 42);
                ellipse(random(0, w), random(0, h), radius, radius);
                break;
            case 3:
                stroke(palette[hu], 80, 90);
                strokeCap(SQUARE);
                arc_stripes();
                break;
            case 4:
                stroke(palette[hu], 80, 90);
                strokeCap(SQUARE);
                line_stripes();
                break;
        }
        iteration++;
    }

    public void line_stripes(){
        cx=random(w);
        cy=random(h);
        float dx = random(w);
        float dy = random(h);
        float sep = random(33,77);
        float w = random(5,17);
        strokeWeight(w);
        int max_i = (int)(random(3,11)); 
        for(int i=0; i<max_i; i++){
            float step = sep*i;
            line(cx+step,cy+step,dx+step,dy+step);
        }
    }

    public void arc_stripes(){
        cx=random(w);
        cy=random(h);
        float angle1 = random(0, 2 * PI);
        float rand_angle = random(PI / 50, 40 * PI / 50);
        float angle2 = angle1 + rand_angle;
        float radius = random(h / 42, 3 * h / 42);
        float w = random(5,17);
        strokeWeight(w);
        noFill();
        int max_i = (int)(random(3,11)); 
        for(int i=0; i<max_i; i++){
            arc(cx, cy, radius * (i+1), radius * (i+1), angle1, angle2); 
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "OddJob001"};
        OddJob001 mySketch = new OddJob001();
        PApplet.runSketch(processingArgs, mySketch);
    }

    
}
