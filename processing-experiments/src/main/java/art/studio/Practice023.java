package art.studio;

import processing.core.PApplet;


//practice shades
public class Practice023  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx=w/2;
    float cy=h/2;
    float rad = w/3;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,0,0);
        
    }

    @Override
    public void draw() {
        marks();


        noLoop();

    } 

    private void marks(){
        noStroke();
        fill(40,100,100);
        float px, py;
        px=cx+rad*cos(radians(0));
        py=cy+rad*sin(radians(0));
        ellipse(px,py,11,11);
        px=cx+rad*cos(radians(60));
        py=cy+rad*sin(radians(60));
        ellipse(px,py,11,11);
        px=cx+rad*cos(radians(120));
        py=cy+rad*sin(radians(120));
        ellipse(px,py,11,11);
        px=cx+rad*cos(radians(200));
        py=cy+rad*sin(radians(200));
        ellipse(px,py,11,11);
        px=cx+rad*cos(radians(300));
        py=cy+rad*sin(radians(300));
        ellipse(px,py,11,11);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice023" };
        Practice023 mySketch = new Practice023();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
